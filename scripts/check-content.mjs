// Content audit: word counts, prices, required fields, internal links.
import { readFileSync, readdirSync } from 'node:fs';
const dir = new URL('../src/content/posts/', import.meta.url);
const slugs = readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
let bad = 0;
for (const s of slugs) {
  const raw = readFileSync(new URL(`${s}.md`, dir), 'utf8');
  const body = raw.replace(/^---[\s\S]*?\n---\n/, '');
  const words = body.replace(/\]\([^)]*\)/g, ']').split(/\s+/).filter(Boolean).length;
  const issues = [];
  if (words < 1200 || words > 2000) issues.push(`word count ${words}`);
  const money = body.match(/(A?\$\s?\d|AUD\s?\d|\d+\s?dollars)/gi);
  if (money) issues.push(`possible price: ${money.join(', ')}`);
  if (/^#\s/m.test(body)) issues.push('has H1');
  for (const m of body.matchAll(/\]\((\/[^)]*)\)/g)) {
    const p = m[1];
    const st = p.match(/^\/stories\/([^/]+)\/$/);
    if (st && !slugs.includes(st[1])) issues.push(`broken internal link ${p}`);
  }
  console.log(`${issues.length ? '✗' : '✓'} ${s} (${words} words)${issues.length ? '\n   - ' + issues.join('\n   - ') : ''}`);
  if (issues.length) bad++;
}
process.exit(bad ? 1 : 0);
