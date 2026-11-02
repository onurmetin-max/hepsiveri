#!/usr/bin/env node

/**
 * HepsiVeri Twitter (X) Hızlı Paylaşım Asistanı
 * 
 * src/content/blog/ altındaki haberleri otomatik analiz eder.
 * Başlık, spot, can alıcı veriler ve etiketlerden X (Twitter) formatında
 * yüksek etkileşimli tweet ve flood taslakları üretir.
 * 
 * Kullanım Örnekleri:
 *   npm run tweet                  (İnteraktif menü - en son haber)
 *   npm run tweet kadin            (İçinde 'kadin' geçen haberi açar)
 *   npm run tweet arge             (İçinde 'arge' geçen haberi açar)
 *   npm run tweet -- --copy        (En son haberi anında panoya kopyalar)
 *   npm run tweet -- --open        (En son haberle anında Twitter'ı tarayıcıda açar)
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawn, exec } from 'node:child_process';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const BLOG_DIR = path.resolve('src/content/blog');
const BASE_URL = 'https://hepsiveri.com';

// Renkli konsol çıktıları
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	dim: '\x1b[2m',
	cyan: '\x1b[36m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	red: '\x1b[31m',
	gray: '\x1b[90m',
};

// Twitter karakter sayısı hesaplayıcı (URL'ler sabit 23 karakter sayılır)
function calcTwitterLength(text) {
	if (!text) return 0;
	const withoutUrls = text.replace(/https?:\/\/\S+/g, 'x'.repeat(23));
	let len = 0;
	for (const ch of withoutUrls) {
		const code = ch.codePointAt(0);
		len += code > 0xFFFF ? 2 : 1;
	}
	return len;
}

// Basit ve hatasız frontmatter ayrıştırıcı
function parseMarkdownPost(filePath) {
	const content = fs.readFileSync(filePath, 'utf-8');
	const stat = fs.statSync(filePath);
	const filename = path.basename(filePath);
	const slug = filename.replace(/\.(md|mdx)$/, '');

	const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!fmMatch) return null;

	const rawFrontmatter = fmMatch[1];
	const body = fmMatch[2];

	const frontmatter = {};
	const lines = rawFrontmatter.split(/\r?\n/);
	let currentKey = null;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;

		// Dizi elemanı (örn: - Kadın İstihdamı)
		if (trimmed.startsWith('- ') && currentKey) {
			const item = trimmed.replace(/^- /, '').replace(/^["']|["']$/g, '').trim();
			if (!Array.isArray(frontmatter[currentKey])) {
				frontmatter[currentKey] = [];
			}
			frontmatter[currentKey].push(item);
			continue;
		}

		const keyMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
		if (keyMatch) {
			currentKey = keyMatch[1];
			let val = keyMatch[2].trim();

			if (val === '') {
				frontmatter[currentKey] = [];
			} else {
				// Çok satırlı tırnaklı metin başlangıcı kontrolü
				if ((val.startsWith('"') && !val.endsWith('"')) || (val.startsWith("'") && !val.endsWith("'"))) {
					const quoteChar = val[0];
					let accumulated = val.slice(1);
					while (i + 1 < lines.length) {
						i++;
						const nextLine = lines[i].trim();
						accumulated += ' ' + nextLine;
						if (nextLine.endsWith(quoteChar)) {
							accumulated = accumulated.slice(0, -1);
							break;
						}
					}
					frontmatter[currentKey] = accumulated.trim();
				} else {
					frontmatter[currentKey] = val.replace(/^["']|["']$/g, '');
				}
			}
		}
	}

	return {
		filePath,
		filename,
		slug,
		mtime: stat.mtime,
		title: frontmatter.title || slug,
		description: frontmatter.description || '',
		tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
		pubDate: frontmatter.pubDate || '',
		status: frontmatter.status || 'Yayında',
		category: frontmatter.category || 'Veri Haberciliği',
		author: frontmatter.author || 'Onur Metin',
		heroImage: frontmatter.heroImage || '',
		body: body.trim()
	};
}

// Bütün yazıları yükle ve sırala
function getAllPosts() {
	if (!fs.existsSync(BLOG_DIR)) return [];
	const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
	const posts = [];

	for (const file of files) {
		const fullPath = path.join(BLOG_DIR, file);
		const parsed = parseMarkdownPost(fullPath);
		if (parsed) posts.push(parsed);
	}

	// pubDate'e göre veya dosya düzenlenme tarihine göre azalan sırala
	posts.sort((a, b) => {
		const dateA = a.pubDate ? new Date(a.pubDate).getTime() : a.mtime.getTime();
		const dateB = b.pubDate ? new Date(b.pubDate).getTime() : b.mtime.getTime();
		return dateB - dateA;
	});

	return posts;
}

// Markdown metninden can alıcı veri maddelerini ayıkla
function extractKeyStats(body, maxCount = 3) {
	const bulletRegex = /^[*-]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/gm;
	const stats = [];
	let match;

	while ((match = bulletRegex.exec(body)) !== null) {
		let label = match[1].trim().replace(/:+$/, '').trim();
		let val = match[2].replace(/\[(.*?)\]\(.*?\)/g, '$1').replace(/\*\*/g, '').trim();
		val = val.replace(/^:+/, '').trim();
		
		if (val && (val.includes('%') || val.includes('TL') || /\d+/.test(val))) {
			stats.push(`${label}: ${val}`);
		} else if (label.length > 5) {
			stats.push(val ? `${label} - ${val}` : label);
		}
		if (stats.length >= maxCount) break;
	}

	// Eğer madde imli veri bulunamadıysa, içinde yüzde veya rakam olan ilk 2 cümleyi al
	if (stats.length === 0) {
		const sentences = body
			.replace(/#{1,6}\s+.*$/gm, '')
			.replace(/\|.*?\|/g, '')
			.split(/(?<=[.!?])\s+/)
			.map(s => s.replace(/\*\*/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1').trim())
			.filter(s => s.length > 25 && s.length < 140 && (s.includes('%') || /\d+/.test(s)));

		for (const s of sentences.slice(0, maxCount)) {
			stats.push(s);
		}
	}

	return stats;
}

// Etiketleri hashtag'e dönüştür
function formatHashtags(tags, max = 2) {
	if (!tags || tags.length === 0) return '#HepsiVeri';

	const list = tags.slice(0, max).map(t => {
		const clean = t
			.replace(/[^\p{L}\p{N}]+/gu, '')
			.replace(/\s+/g, '');
		return `#${clean}`;
	});

	if (!list.includes('#HepsiVeri')) {
		list.push('#HepsiVeri');
	}
	return list.slice(0, 3).join(' ');
}

// Metin kırpıcı
function truncateText(text, maxLen) {
	if (!text) return '';
	if (text.length <= maxLen) return text;
	return text.slice(0, maxLen - 3).trim() + '...';
}

// Panoya metin kopyala (Windows için Türkçe karakter uyumlu clip.exe)
function copyToClipboard(text) {
	return new Promise((resolve, reject) => {
		const p = spawn('clip');
		p.stdin.write(text);
		p.stdin.end();
		p.on('close', (code) => {
			if (code === 0) resolve();
			else reject(new Error(`Clip error code: ${code}`));
		});
		p.on('error', reject);
	});
}

// Varsayılan tarayıcıda URL aç (Windows cmd /c start)
function openBrowser(url) {
	const sanitized = url.replace(/"/g, '\"');
	exec(`start "" "${sanitized}"`, { shell: 'cmd.exe' });
}

// 3 Farklı Tweet Formatı Üret
function generateTweetFormats(post) {
	const articleUrl = `${BASE_URL}/haber/${post.slug}/`;
	const hashtags = formatHashtags(post.tags);
	const keyStats = extractKeyStats(post.body, 3);

	// FORMAT 1: Vurucu Haber Tweeti (Klasik Gazeteci Formatı)
	// Twitter sınırı olan 280 karaktere kesinlikle sığdırılır
	const f1Base = `📊 ${post.title}\n\n`;
	const f1End = `\n\n🔍 Haberin tamamı ve açık veri tablosu:\n${articleUrl}\n\n${hashtags}`;
	
	let f1Body = post.description || '';
	let format1 = `${f1Base}${f1Body}${f1End}`;
	
	// 280 Twitter karakterine sığana kadar spotu dinamik kısalt
	while (calcTwitterLength(format1) > 280 && f1Body.length > 15) {
		f1Body = f1Body.slice(0, -10).trim();
		format1 = `${f1Base}${f1Body}...${f1End}`;
	}
	if (calcTwitterLength(format1) > 280) {
		format1 = `${f1Base.trim()}${f1End}`;
	}

	// FORMAT 2: Rakamlarla Veri Tweeti (Madde İmli - En Yüksek Etkileşim)
	let statsText = '';
	if (keyStats.length > 0) {
		statsText = '\n\nÖne çıkan veriler:\n' + keyStats.map(s => `▪️ ${s}`).join('\n');
	}

	const format2 = `🔴 ${post.title}${statsText}\n\nDetaylı analiz ve metodoloji:\n🔗 ${articleUrl}\n\n${hashtags}`;

	// FORMAT 3: 3 Tweetlik Bilgi Seli (Thread / Flood)
	const thread1 = `🧵 1/3 | ${post.title}\n\n${truncateText(post.description, 160)}\n\nDetaylar flood'da 👇\n#HepsiVeri`;
	
	const threadStats = keyStats.length > 0 
		? keyStats.map(s => `▪️ ${s}`).join('\n\n')
		: 'Resmi raporlar ve açık veri setleri doğrultusunda hazırlanan incelemede çarpıcı göstergeler öne çıkıyor.';
	const thread2 = `2/3 | Rakamlar ne anlatıyor?\n\n${threadStats}`;

	const thread3 = `3/3 | Dosyanın tamamını, interaktif grafiklerini ve ham veri kaynaklarını incelemek için:\n\n🔗 ${articleUrl}\n\n${hashtags}`;

	const format3 = `${thread1}\n\n--- [2. TWEET] ---\n\n${thread2}\n\n--- [3. TWEET] ---\n\n${thread3}`;

	return {
		format1,
		format2,
		format3,
		threadParts: [thread1, thread2, thread3],
		articleUrl,
		hashtags
	};
}

// Ana Uygulama
async function main() {
	const rawArgs = process.argv.slice(2);
	
	// Hızlı bayraklar (flags)
	const shouldCopy = rawArgs.includes('--copy') || rawArgs.includes('-c');
	const shouldOpen = rawArgs.includes('--open') || rawArgs.includes('-o');
	const useFormat1 = rawArgs.includes('-1');

	// Filtre arama argümanı
	const query = rawArgs
		.filter(a => !a.startsWith('-'))
		.join(' ')
		.toLowerCase()
		.trim();

	const allPosts = getAllPosts();
	if (allPosts.length === 0) {
		console.log(`${colors.red}Hata: src/content/blog/ altında haber bulunamadı!${colors.reset}`);
		process.exit(1);
	}

	let selectedPost = null;

	if (query) {
		const matches = allPosts.filter(p => 
			p.slug.toLowerCase().includes(query) ||
			p.title.toLowerCase().includes(query) ||
			p.tags.some(t => t.toLowerCase().includes(query))
		);

		if (matches.length === 1) {
			selectedPost = matches[0];
		} else if (matches.length > 1) {
			if (shouldCopy || shouldOpen) {
				selectedPost = matches[0];
			} else {
				console.log(`\n${colors.cyan}🔍 "${query}" aramasına uygun ${matches.length} haber bulundu:${colors.reset}\n`);
				matches.slice(0, 5).forEach((p, idx) => {
					console.log(`  [${idx + 1}] ${colors.bright}${p.title}${colors.reset} ${colors.gray}(${p.pubDate || 'Tarihsiz'})${colors.reset}`);
				});
				const rl = readline.createInterface({ input, output });
				const answer = await rl.question(`\nSeçiminiz [1-${Math.min(matches.length, 5)}] (Varsayılan 1): `);
				rl.close();
				const pickedIndex = parseInt(answer.trim(), 10) - 1;
				selectedPost = matches[pickedIndex >= 0 && pickedIndex < matches.length ? pickedIndex : 0];
			}
		} else {
			console.log(`${colors.yellow}Uyarı: "${query}" ile eşleşen haber bulunamadı. En son haber gösteriliyor.${colors.reset}`);
			selectedPost = allPosts[0];
		}
	} else {
		selectedPost = allPosts[0];
	}

	const formats = generateTweetFormats(selectedPost);
	const targetText = useFormat1 ? formats.format1 : formats.format2;

	// Hızlı komut satırı modu: --copy
	if (shouldCopy) {
		await copyToClipboard(targetText);
		console.log(`\n${colors.green}✔ ${selectedPost.title}${colors.reset}`);
		console.log(`${colors.cyan}✔ Tweet panoya kopyalandı! (X'e Ctrl+V ile yapıştırabilirsiniz)${colors.reset}\n`);
		console.log(`${colors.gray}${targetText}${colors.reset}\n`);
		process.exit(0);
	}

	// Hızlı komut satırı modu: --open
	if (shouldOpen) {
		const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(targetText)}`;
		openBrowser(intentUrl);
		console.log(`\n${colors.green}✔ ${selectedPost.title}${colors.reset}`);
		console.log(`${colors.cyan}✔ Tarayıcıda X paylaşım penceresi açıldı!${colors.reset}\n`);
		process.exit(0);
	}

	// İnteraktif Terminal Arayüzü
	const rl = readline.createInterface({ input, output });

	while (true) {
		console.clear();
		console.log(`${colors.cyan}${colors.bright}======================================================${colors.reset}`);
		console.log(`${colors.cyan}${colors.bright}       HEPSİVERİ TWITTER (X) HIZLI PAYLAŞIM ASİSTANI   ${colors.reset}`);
		console.log(`${colors.cyan}${colors.bright}======================================================${colors.reset}`);
		
		console.log(`\n📌 ${colors.bright}Seçili Haber:${colors.reset} ${colors.yellow}${selectedPost.title}${colors.reset}`);
		console.log(`🔗 ${colors.dim}URL:${colors.reset} ${BASE_URL}/haber/${selectedPost.slug}/`);
		console.log(`📅 ${colors.dim}Tarih & Durum:${colors.reset} ${selectedPost.pubDate || 'Tarihsiz'} | ${selectedPost.status}`);
		if (selectedPost.heroImage) {
			const absImgPath = path.resolve('public', selectedPost.heroImage.replace(/^\//, ''));
			const imgExists = fs.existsSync(absImgPath);
			console.log(`🖼️  ${colors.dim}Kapak Görseli:${colors.reset} ${selectedPost.heroImage} ${imgExists ? colors.green + '(Mevcut)' : colors.red + '(Bulunamadı)'}${colors.reset}`);
		}

		const currentFormats = generateTweetFormats(selectedPost);
		const f1Len = calcTwitterLength(currentFormats.format1);
		const f2Len = calcTwitterLength(currentFormats.format2);

		console.log(`\n${colors.magenta}${colors.bright}--- FORMAT 1: VURUCU HABER TWEETİ ---${colors.reset}`);
		console.log(`${colors.gray}(Twitter Sayımı: ${f1Len}/280 karakter ${f1Len <= 280 ? colors.green + '✔ Standart limite uygun' : colors.red + '✖ Aşıyor'}${colors.gray})${colors.reset}`);
		console.log(`${colors.bright}${currentFormats.format1}${colors.reset}`);

		console.log(`\n${colors.magenta}${colors.bright}--- FORMAT 2: RAKAMLARLA VERİ TWEETİ (Önerilen) ---${colors.reset}`);
		console.log(`${colors.gray}(Twitter Sayımı: ${f2Len} karakter)${colors.reset}`);
		console.log(`${colors.bright}${currentFormats.format2}${colors.reset}`);

		console.log(`\n${colors.magenta}${colors.bright}--- FORMAT 3: 3 TWEETLİK BİLGİ SELİ (FLOOD) ---${colors.reset}`);
		console.log(`${colors.gray}(3 parça halinde zincir)${colors.reset}`);
		console.log(`${colors.dim}${currentFormats.threadParts[0]}\n...\n${currentFormats.threadParts[2]}${colors.reset}`);

		console.log(`\n${colors.cyan}${colors.bright}================== HIZLI İŞLEMLER ===================${colors.reset}`);
		console.log(`  ${colors.green}[1]${colors.reset} Format 1'i (Vurucu Tweet) Panoya Kopyala`);
		console.log(`  ${colors.green}[2]${colors.reset} Format 2'yi (Rakamlarla Tweet) Panoya Kopyala ${colors.yellow}(Önerilen)${colors.reset}`);
		console.log(`  ${colors.green}[3]${colors.reset} Format 3'ü (Flood / Tüm Zinciri) Panoya Kopyala`);
		console.log(`  ${colors.green}[4]${colors.reset} Tarayıcıda Doğrudan Tweetle (Format 1 ile X Penceresi Aç)`);
		console.log(`  ${colors.green}[5]${colors.reset} Tarayıcıda Doğrudan Tweetle (Format 2 ile X Penceresi Aç)`);
		console.log(`  ${colors.green}[6]${colors.reset} Kapak Görselinin Dosya Yolunu Kopyala (X'e sürükle-bırak)`);
		console.log(`  ${colors.green}[7]${colors.reset} Son Haberler Listesinden Başka Bir Haber Seç`);
		console.log(`  ${colors.red}[0]${colors.reset} Çıkış`);

		const choice = (await rl.question(`\nİşlem Seçiniz [1-7 / 0]: `)).trim();

		if (choice === '1') {
			await copyToClipboard(currentFormats.format1);
			console.log(`\n${colors.green}✔ Format 1 panoya kopyalandı! (Ctrl + V ile X'e yapıştırabilirsiniz)${colors.reset}`);
			await rl.question(`\nDevam etmek için Enter'a basınız...`);
		} else if (choice === '2') {
			await copyToClipboard(currentFormats.format2);
			console.log(`\n${colors.green}✔ Format 2 panoya kopyalandı! (Ctrl + V ile X'e yapıştırabilirsiniz)${colors.reset}`);
			await rl.question(`\nDevam etmek için Enter'a basınız...`);
		} else if (choice === '3') {
			await copyToClipboard(currentFormats.format3);
			console.log(`\n${colors.green}✔ Flood metninin tamamı panoya kopyalandı!${colors.reset}`);
			await rl.question(`\nDevam etmek için Enter'a basınız...`);
		} else if (choice === '4') {
			const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentFormats.format1)}`;
			openBrowser(intentUrl);
			console.log(`\n${colors.green}✔ X (Twitter) paylaşım penceresi varsayılan tarayıcınızda açıldı!${colors.reset}`);
			await rl.question(`\nDevam etmek için Enter'a basınız...`);
		} else if (choice === '5') {
			const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentFormats.format2)}`;
			openBrowser(intentUrl);
			console.log(`\n${colors.green}✔ X (Twitter) paylaşım penceresi varsayılan tarayıcınızda açıldı!${colors.reset}`);
			await rl.question(`\nDevam etmek için Enter'a basınız...`);
		} else if (choice === '6') {
			if (selectedPost.heroImage) {
				const absImgPath = path.resolve('public', selectedPost.heroImage.replace(/^\//, ''));
				await copyToClipboard(absImgPath);
				console.log(`\n${colors.green}✔ Görselin tam dosya yolu panoya kopyalandı:${colors.reset}\n${absImgPath}`);
				console.log(`${colors.gray}(Twitter'da 'Fotoğraf Ekle' dediğinizde dosya adı kutusuna Ctrl+V yapıp Enter'a basabilirsiniz)${colors.reset}`);
			} else {
				console.log(`\n${colors.red}Bu haberde kapak görseli tanımlı değil!${colors.reset}`);
			}
			await rl.question(`\nDevam etmek için Enter'a basınız...`);
		} else if (choice === '7') {
			console.log(`\n${colors.cyan}Son 10 Haber Listesi:${colors.reset}\n`);
			allPosts.slice(0, 10).forEach((p, idx) => {
				console.log(`  [${idx + 1}] ${colors.bright}${p.title}${colors.reset} ${colors.gray}(${p.pubDate || 'Tarihsiz'})${colors.reset}`);
			});
			const pick = await rl.question(`\nSeçiminiz [1-10]: `);
			const idx = parseInt(pick.trim(), 10) - 1;
			if (idx >= 0 && idx < allPosts.length) {
				selectedPost = allPosts[idx];
			}
		} else if (choice === '0') {
			console.log(`\n${colors.cyan}Görüşmek üzere! Bol etkileşimli paylaşımlar.${colors.reset}\n`);
			rl.close();
			process.exit(0);
		}
	}
}

main().catch(err => {
	console.error(`\n${colors.red}Hata oluştu:${colors.reset}`, err);
	process.exit(1);
});
