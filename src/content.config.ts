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

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    year: z.string(),
    role: z.string(),
    techStack: z.array(z.string()),
    description: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'writing': writingCollection,
  'projects': projectsCollection,
};
