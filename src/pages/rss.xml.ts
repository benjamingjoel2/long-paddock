import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, catName } from '../data/site';
import { getPosts, postHref } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    trailingSlash: true,
    customData: `<language>${SITE.lang}</language>`,
    items: posts.map((p) => ({
      title: (p.data.advertisement ? 'Advertisement feature: ' : '') + p.data.title,
      description: p.data.description,
      link: postHref(p),
      pubDate: p.data.pubDate,
      categories: p.data.categories.map(catName),
    })),
  });
}
