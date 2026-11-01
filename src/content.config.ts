import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Türkiye saati (UTC+3) ile sade "YYYY-MM-DD HH:mm" veya "YYYY-MM-DD" tarihlerini ayrıştırır.
// Editörde ve dosyalarda "+03" ve saniye kalabalığı olmadan sade tarih/saat tutulmasını sağlar.
const turkishDate = z.preprocess((val) => {
	if (typeof val === 'string') {
		const trimmed = val.trim();
		if (/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(?::\d{2})?$/.test(trimmed)) {
			return new Date(`${trimmed.replace(' ', 'T')}+03:00`);
		}
		if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
			return new Date(`${trimmed}T10:00:00+03:00`);
		}
	}
	return val;
}, z.coerce.date());

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: turkishDate,
			updatedDate: turkishDate.optional(),
			heroImage: z.string().optional(),
			heroImageCaption: z.string().optional(),
			category: z.string().default('Veri Haberciliği'),
			author: z.string().default('Onur Metin'),
			readTime: z.string().optional(),
			datasetUrl: z.string().optional(),
			tags: z.array(z.string()).optional().default([]),
			status: z.enum(['Yayında', 'Taslak']).default('Yayında'),
			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
		}),
});

export const collections = { blog };
