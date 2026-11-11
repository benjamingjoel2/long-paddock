import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const categoryIds = ['destinations', 'road-trips', 'wildlife', 'outback', 'itineraries', 'travel-tips'] as const;
const destinationIds = ['sydney', 'melbourne', 'red-centre', 'great-barrier-reef', 'top-end', 'tasmania', 'western-australia', 'south-australia'] as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    author: z.string(),
    categories: z.array(z.enum(categoryIds)).min(1),
    destinations: z.array(z.enum(destinationIds)).default([]),
    hero: z.string(),
    featured: z.boolean().default(false),
    startHere: z.boolean().default(false),
    // Paid placements must set this; they are labelled "Advertisement feature" everywhere they appear.
    advertisement: z
      .object({ sponsor: z.string(), sponsorUrl: z.string().url().optional() })
      .optional(),
    operator: z.object({
      name: z.string(),
      url: z.string().url(),
      summary: z.string(),
    }),
    sources: z
      .array(z.object({ title: z.string(), publisher: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

export const collections = { posts };
