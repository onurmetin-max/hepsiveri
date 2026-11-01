import xml.etree.ElementTree as ET
import re
import os
import json
import html
import sys

sys.stdout.reconfigure(encoding='utf-8')

XML_PATH = 'eski-site-icerikler/hepsiveri.WordPress.2026-10-27.xml'
OUTPUT_DIR = 'src/content/blog'

os.makedirs(OUTPUT_DIR, exist_ok=True)

print(f"Reading XML from {XML_PATH}...")
tree = ET.parse(XML_PATH)
root = tree.getroot()
channel = root.find('channel')
items = channel.findall('item')

# 1. Attachments map: post_id -> attachment_url
attachments = {}
for it in items:
    pt = it.find('{http://wordpress.org/export/1.2/}post_type')
    if pt is not None and pt.text == 'attachment':
        pid_elem = it.find('{http://wordpress.org/export/1.2/}post_id')
        url_elem = it.find('{http://wordpress.org/export/1.2/}attachment_url')
        if pid_elem is not None and url_elem is not None and url_elem.text:
            attachments[pid_elem.text] = url_elem.text

print(f"Loaded {len(attachments)} attachments.")

# 2. TablePress tables map: table_id -> HTML table
tablepress_tables = {}
for it in items:
    pt = it.find('{http://wordpress.org/export/1.2/}post_type')
    if pt is not None and pt.text == 'tablepress_table':
        content = it.find('{http://purl.org/rss/1.0/modules/content/}encoded').text or ''
        pm = {}
        for m in it.findall('{http://wordpress.org/export/1.2/}postmeta'):
            k = m.find('{http://wordpress.org/export/1.2/}meta_key').text
            v = m.find('{http://wordpress.org/export/1.2/}meta_value').text
            pm[k] = v
        table_id = pm.get('_tablepress_export_table_id')
        if table_id and content:
            try:
                data = json.loads(content)
                if isinstance(data, list) and len(data) > 0:
                    html_table = '<div class="table-responsive"><table class="data-table">\n'
                    # Header
                    html_table += '  <thead>\n    <tr>\n'
                    for col in data[0]:
                        html_table += f'      <th>{html.escape(str(col).strip())}</th>\n'
                    html_table += '    </tr>\n  </thead>\n'
                    # Body
                    html_table += '  <tbody>\n'
                    for row in data[1:]:
                        html_table += '    <tr>\n'
                        for cell in row:
                            html_table += f'      <td>{html.escape(str(cell).strip())}</td>\n'
                        html_table += '    </tr>\n'
                    html_table += '  </tbody>\n</table></div>\n'
                    tablepress_tables[str(table_id)] = html_table
            except Exception as e:
                print(f"Error parsing TablePress {table_id}: {e}")

print(f"Loaded {len(tablepress_tables)} TablePress tables.")

# 3. Process published posts
published_items = []
for it in items:
    pt = it.find('{http://wordpress.org/export/1.2/}post_type')
    if pt is not None and pt.text == 'post':
        status = it.find('{http://wordpress.org/export/1.2/}status')
        if status is not None and status.text == 'publish':
            published_items.append(it)

print(f"Found {len(published_items)} published posts to migrate.")

def slugify(text):
    text = text.lower().strip()
    tr_map = {'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c', 'İ': 'i'}
    for k, v in tr_map.items():
        text = text.replace(k, v)
    text = re.sub(r'[^a-z0-9\-]+', '-', text)
    return text.strip('-')

def clean_html_content(raw_content):
    c = raw_content
    
    # Replace TablePress shortcodes [table id=1 /] or [table id="1" /]
    def replace_table(m):
        tid = m.group(1).replace('"', '').replace("'", "").strip()
        return tablepress_tables.get(tid, m.group(0))
        
    c = re.sub(r'\[table\s+id=([\"0-9\']+)[\s/]*\]', replace_table, c)
    
    # Replace [caption ...]<img ... /> Caption[/caption]
    def replace_caption(m):
        body = m.group(1).strip()
        # Find img
        img_match = re.search(r'(<img[^>]+>)', body)
        if img_match:
            img_tag = img_match.group(1)
            caption_text = body.replace(img_tag, '').strip()
            # Clean up trailing brackets or artifact text
            caption_text = re.sub(r'\[.*$', '', caption_text).strip()
            if caption_text:
                return f'<figure class="article-figure">\n{img_tag}\n<figcaption>{caption_text}</figcaption>\n</figure>'
            return f'<figure class="article-figure">\n{img_tag}\n</figure>'
        return body
        
    c = re.sub(r'\[caption[^\]]*\](.*?)\[/caption\]', replace_caption, c, flags=re.DOTALL)
    
    # Strip Gutenberg comments
    c = re.sub(r'<!--\s*/?wp:[^>]*-->', '', c)
    
    # Strip redundant embed.js scripts since BlogPost loads it once
    c = re.sub(r'<script[^>]*src="https://public\.flourish\.studio/resources/embed\.js"[^>]*></script>', '', c)
    
    # Wrap standalone flourish divs in flourish-wrapper if not already wrapped
    # Pattern: <div class="flourish-embed..." ...></div>
    def wrap_flourish(m):
        div_html = m.group(0)
        return f'<div class="flourish-wrapper">\n{div_html}\n</div>'
        
    # Replace only if not already preceded by flourish-wrapper
    c = re.sub(r'(?<!<div class="flourish-wrapper">\n)(<div[^>]*class="[^"]*flourish-embed[^"]*"[^>]*>.*?</div>)', wrap_flourish, c, flags=re.DOTALL)
    
    # Strip tagDiv specific markup classes
    c = re.sub(r'class="td_text_highlight_marker"[^>]*', '', c)
    c = re.sub(r'\[td_block_[^\]]*\]', '', c)
    
    # Fix unclosed <br> or <hr>
    c = re.sub(r'<br\s*>', '<br />', c)
    c = re.sub(r'<hr\s*>', '<hr />', c)
    
    # Trim excess whitespace
    c = re.sub(r'\n{3,}', '\n\n', c)
    return c.strip()

count = 0
category_counts = {}

for it in published_items:
    title = it.find('title').text or 'Başlıksız'
    slug_elem = it.find('{http://wordpress.org/export/1.2/}post_name')
    slug = slug_elem.text if slug_elem is not None and slug_elem.text else slugify(title)
    
    raw_date = it.find('{http://wordpress.org/export/1.2/}post_date').text or '2024-01-01 00:00:00'
    pub_date = raw_date[:10]
    
    raw_content = it.find('{http://purl.org/rss/1.0/modules/content/}encoded').text or ''
    
    # Extract categories and tags
    cats = []
    tags = []
    for cat in it.findall('category'):
        domain = cat.attrib.get('domain')
        if domain == 'category' and cat.text:
            cats.append(cat.text)
        elif domain == 'post_tag' and cat.text:
            tags.append(cat.text)
            
    # Select primary category (prefer specific category over 'Genel')
    primary_cat = 'Genel'
    for c in cats:
        if c.lower() != 'genel':
            primary_cat = c
            break
    if not cats and not primary_cat:
        primary_cat = 'Veri Haberciliği'
    category_counts[primary_cat] = category_counts.get(primary_cat, 0) + 1
    
    # Author
    creator = it.find('{http://purl.org/dc/elements/1.1/}creator')
    author = creator.text if creator is not None and creator.text else 'Onur Metin'
    if author.lower() in ['admin', 'onur', 'onurmetin']:
        author = 'Onur Metin'
        
    # Thumbnail / Hero Image
    postmeta = {}
    for meta in it.findall('{http://wordpress.org/export/1.2/}postmeta'):
        k = meta.find('{http://wordpress.org/export/1.2/}meta_key').text
        v = meta.find('{http://wordpress.org/export/1.2/}meta_value').text
        postmeta[k] = v
        
    thumb_id = postmeta.get('_thumbnail_id')
    hero_image = attachments.get(thumb_id, '')
    
    # If no thumbnail in meta, try to find first image in content
    if not hero_image:
        img_match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', raw_content)
        if img_match:
            hero_image = img_match.group(1)
            
    # Excerpt / Description
    excerpt_elem = it.find('{http://wordpress.org/export/1.2/excerpt/}encoded')
    excerpt = excerpt_elem.text.strip() if excerpt_elem is not None and excerpt_elem.text else ''
    
    if not excerpt:
        # Strip html from content
        clean_text = re.sub(r'<[^>]+>', ' ', raw_content)
        clean_text = re.sub(r'\[[^\]]+\]', ' ', clean_text)
        clean_text = ' '.join(clean_text.split())
        desc = clean_text[:175] + '...' if len(clean_text) > 175 else clean_text
    else:
        clean_desc = re.sub(r'<[^>]+>', ' ', excerpt)
        desc = ' '.join(clean_desc.split())
        
    # Process content
    content = clean_html_content(raw_content)
    
    # Calculate reading time estimate (~200 words per min)
    word_count = len(re.sub(r'<[^>]+>', ' ', content).split())
    minutes = max(1, round(word_count / 180))
    read_time = f"{minutes} dk okuma"
    
    # Build Markdown string
    frontmatter = [
        "---",
        f"title: {json.dumps(title, ensure_ascii=False)}",
        f"description: {json.dumps(desc, ensure_ascii=False)}",
        f"pubDate: {pub_date}",
        f"category: {json.dumps(primary_cat, ensure_ascii=False)}",
        f"author: {json.dumps(author, ensure_ascii=False)}",
        f"readTime: {json.dumps(read_time, ensure_ascii=False)}",
    ]
    if hero_image:
        frontmatter.append(f"heroImage: {json.dumps(hero_image)}")
    if tags:
        # filter and format tags
        safe_tags = [t for t in tags if t]
        if safe_tags:
            frontmatter.append(f"tags: {json.dumps(safe_tags[:6], ensure_ascii=False)}")
            
    frontmatter.append("---")
    
    full_md = "\n".join(frontmatter) + "\n\n" + content + "\n"
    
    out_file = os.path.join(OUTPUT_DIR, f"{slug}.md")
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(full_md)
        
    count += 1

print("\n" + "="*50)
print(f"MIGRATION COMPLETE! Successfully converted {count} posts to {OUTPUT_DIR}/")
print("="*50)
print("\nCategory Distribution:")
for cat, cnt in sorted(category_counts.items(), key=lambda x: -x[1]):
    print(f"  - {cat}: {cnt}")
