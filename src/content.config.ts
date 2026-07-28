import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    readTime: z.string(),
    publishedDate: z.coerce.date(),
    // Optional pin for the index. Any post with `featured` jumps above the
    // date-sorted list, lowest number first (featured: 1 is the top slot).
    // Omit it entirely and the post sorts by date as usual.
    featured: z.number().optional(),
  }),
});

export const collections = { blog };
