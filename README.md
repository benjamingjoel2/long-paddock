# Long Paddock

Travel stories for planning a trip to Australia. Published by Tourground at https://longpaddock.tourground.com.

Astro (static), deployed on Vercel (project `long-paddock`).

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run check    # content audit: word counts, prices, internal links
```

## Content

- Posts: `src/content/posts/*.md` (schema in `src/content.config.ts`).
- Photos: `src/assets/photos/`, with credits and licences in `src/data/photos.ts` (shown on each page and on `/photo-credits/`).
- Categories, destinations and authors: `src/data/site.ts`.

### Editorial rules

- No invented reviews, quotes, prices or statistics.
- Visa, park and safety facts link the official source inline and in `sources`; bump `updatedDate` whenever facts are re-checked.
- Every post sets `operator` (the "Plan this trip" box) to a verified operator in the Tourground directory.
- Paid placements set `advertisement: { sponsor }`, which labels the post "Advertisement feature" everywhere and marks sponsor links `rel="sponsored"`.
