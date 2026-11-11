import { CATEGORIES, DESTINATIONS, SITE } from '../data/site';
import { getPosts, postHref } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const u = (p: string) => new URL(p, SITE.url).href;
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'Long Paddock is a travel blog about Australia, published by Tourground (https://tourground.com). Every story links official sources for visa, park and safety facts, shows when it was last updated, and ends with a "Plan this trip" box pointing to a verified local operator in the Tourground directory. No invented reviews, quotes, prices or statistics. Paid placements, if any, are labelled "Advertisement feature".',
    '',
    '## Stories',
    '',
    ...posts.map((p) => `- [${p.data.title}](${u(postHref(p))}): ${p.data.description} (updated ${p.data.updatedDate.toISOString().slice(0, 10)})`),
    '',
    '## Destinations',
    '',
    ...DESTINATIONS.map((d) => `- [${d.name}](${u(`/destinations/${d.id}/`)}): ${d.blurb}`),
    '',
    '## Themes',
    '',
    ...CATEGORIES.map((c) => `- [${c.name}](${u(c.href)}): ${c.blurb}`),
    '',
    '## About',
    '',
    `- [About Long Paddock](${u('/about/')})`,
    `- [Authors](${u('/authors/')})`,
    `- [Disclosure](${u('/disclosure/')})`,
    `- [Photo credits](${u('/photo-credits/')})`,
    `- [RSS feed](${u('/rss.xml')})`,
    `- Contact: ${SITE.email}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
