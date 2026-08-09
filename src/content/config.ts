import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './Level_1_Profit_Snapper' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const lessons2 = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './Level_2_Market_Snapper' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { lessons, lessons2 };
