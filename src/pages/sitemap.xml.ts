import { CATEGORIES, DESTINATIONS, SITE } from '../data/site';
import { getPosts, postHref } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const latest = posts.reduce((m, p) => (p.data.updatedDate > m ? p.data.updatedDate : m), new Date(SITE.launched));
  const day = (d: Date) => d.toISOString().slice(0, 10);
  const entries: [string, string][] = [
    ['/', day(latest)],
    ['/stories/', day(latest)],
    ['/destinations/', day(latest)],
    ...DESTINATIONS.map((d) => [`/destinations/${d.id}/`, day(latest)] as [string, string]),
    ...CATEGORIES.filter((c) => c.id !== 'destinations').map((c) => [c.href, day(latest)] as [string, string]),
    ...posts.map((p) => [postHref(p), day(p.data.updatedDate)] as [string, string]),
    ...['/about/', '/authors/', '/disclosure/', '/privacy/', '/cookies/', '/terms/', '/photo-credits/'].map((p) => [p, SITE.launched] as [string, string]),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(([p, d]) => `  <url><loc>${new URL(p, SITE.url).href}</loc><lastmod>${d}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
