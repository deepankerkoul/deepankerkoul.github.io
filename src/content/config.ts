import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'book-notes': postCollection,
  'blog': postCollection,
  'resume': defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
    }),
  }),
};
