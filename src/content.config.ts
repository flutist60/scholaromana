import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Program / bio / media / reviews pages: frontmatter "blocks" + markdown body */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().optional(),
    layout: z.enum(['program', 'bio', 'media', 'reviews']),
    blocks: z.array(z.record(z.any())),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/home' }),
  schema: z.any(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string().default('Stefano Sabene'),
      readingTime: z.number().optional(),
      translationKey: z.string().optional(),
      excerpt: z.string().optional(),
      category: z.enum(['early-music', 'contemporary-music']).optional(),
      cover: image().optional(),
      coverYoutube: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { pages, home, blog };
