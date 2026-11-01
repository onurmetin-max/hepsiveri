import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
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
