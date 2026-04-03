import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    readTime: z.string(),
    publishedDate: z.coerce.date(),
  }),
});

export const collections = { blog };
