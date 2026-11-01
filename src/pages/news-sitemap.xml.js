import { getCollection } from 'astro:content';

export async function GET(context) {
	const now = new Date();
	const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

	const allSorted = (await getCollection('blog', ({ data }) => data.status !== 'Taslak'))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	// Google News kuralı: Yalnızca son 48 saat içinde yayımlanan ve en fazla 1000 haber yer almalıdır.
	// Son 48 saatte haber bulunmuyorsa, Google Search Console'un boş sitemap uyarısı vermemesi için
	// en güncel 10 haber sunulur; aksi halde tam 48 saatlik liste (maksimum 1000) servis edilir.
	let posts = allSorted.filter((post) => post.data.pubDate >= twoDaysAgo);
	if (posts.length === 0) {
		posts = allSorted.slice(0, 10);
	} else if (posts.length > 1000) {
		posts = posts.slice(0, 1000);
	}

	const rawSite = context.site?.href || 'https://hepsiveri.com';
	const siteUrl = rawSite.replace(/\/+$/, '');

	const items = posts.map((post) => {
		const pubDateISO = post.data.pubDate.toISOString();
		const lastmod = post.data.updatedDate
			? post.data.updatedDate.toISOString()
			: pubDateISO;

		const isEnglish = (post.data.category || '').toLowerCase() === 'datanews';
		const lang = isEnglish ? 'en' : 'tr';
		const articleLoc = `${siteUrl}/haber/${post.id}/`;

		// Görsel URL'si (Google News ve Keşfet için kritik)
		let imageBlock = '';
		if (post.data.heroImage) {
			const heroSrc = typeof post.data.heroImage === 'string'
				? post.data.heroImage
				: post.data.heroImage.src;
			if (heroSrc) {
				const fullImgUrl = heroSrc.startsWith('http')
					? heroSrc
					: `${siteUrl}${heroSrc.startsWith('/') ? '' : '/'}${heroSrc}`;
				imageBlock = `
    <image:image>
      <image:loc>${escapeXml(fullImgUrl)}</image:loc>
      <image:title>${escapeXml(post.data.title)}</image:title>
    </image:image>`;
			}
		}

		return `  <url>
    <loc>${articleLoc}</loc>
    <lastmod>${lastmod}</lastmod>
    <news:news>
      <news:publication>
        <news:name>HepsiVeri</news:name>
        <news:language>${lang}</news:language>
      </news:publication>
      <news:publication_date>${pubDateISO}</news:publication_date>
      <news:title>${escapeXml(post.data.title)}</news:title>
    </news:news>${imageBlock}
  </url>`;
	});

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${items.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	});
}

function escapeXml(str) {
	if (!str) return '';
	return String(str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}


