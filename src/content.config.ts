import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const writingCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    category: z.string(),
    readTime: z.string(),
  }),
});

export const collections = {
  'writing': writingCollection,
};
