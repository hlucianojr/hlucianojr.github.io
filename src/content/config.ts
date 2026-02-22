import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Hector Luciano'),
    tags: z.array(z.string()),
    excerpt: z.string(),
    pillar: z.enum(['ai', 'cloud', 'future', 'leadership']).optional(),
  }),
});

export const collections = { insights };
