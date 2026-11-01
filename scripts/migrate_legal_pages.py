import xml.etree.ElementTree as ET
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

tree = ET.parse('eski-site-icerikler/hepsiveri.WordPress.2026-10-27.xml')

legal_slugs = [
    'kullanim-kosullari-ve-yasal-uyari',
    'gizlilik-politikasi',
    'cerez-politikasi',
    'kisisel-verilerin-korunmasi-hakkinda-aydinlatma-metni-kvkk'
]

for it in tree.getroot().find('channel').findall('item'):
    pt = it.find('{http://wordpress.org/export/1.2/}post_type')
    if pt is not None and pt.text == 'page':
        slug = it.find('{http://wordpress.org/export/1.2/}post_name').text
        if slug in legal_slugs:
            title = it.find('title').text
            content = it.find('{http://purl.org/rss/1.0/modules/content/}encoded').text or ''
            
            # Clean content
            clean_content = re.sub(r'<!--\s*/?wp:[^>]*-->', '', content)
            clean_content = re.sub(r'\[td_block_[^\]]*\]', '', clean_content)
            
            page_content = f"""---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<!doctype html>
<html lang="tr">
	<head>
		<BaseHead title="{title} | HepsiVeri" description="{title} bilgilendirme ve yasal metin sayfası." />
		<style>
			.legal-container {{
				max-width: 860px;
				margin: 0 auto;
				padding: 3rem 1.5rem 5rem;
				font-size: 1.05rem;
				line-height: 1.75;
				color: #334155;
			}}
			h1 {{
				font-family: var(--font-serif);
				font-size: 2.3rem;
				font-weight: 800;
				color: #0f172a;
				margin-bottom: 2rem;
				border-bottom: 2px solid var(--brand-green);
				padding-bottom: 0.75rem;
			}}
			h2, h3 {{
				font-family: var(--font-serif);
				color: #0f172a;
				margin-top: 2rem;
			}}
			p {{
				margin-bottom: 1.25rem;
			}}
		</style>
	</head>
	<body>
		<Header />
		<main class="legal-container">
			<h1>{title}</h1>
			<div class="legal-body">
{clean_content}
			</div>
		</main>
		<Footer />
	</body>
</html>
"""
            out_path = f"src/pages/{slug}.astro"
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(page_content)
            print(f"Created {out_path}")
