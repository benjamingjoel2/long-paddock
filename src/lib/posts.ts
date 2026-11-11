import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.data.title.localeCompare(b.data.title),
  );
}

export function wordCount(post: Post): number {
  const text = (post.body ?? '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`-]/g, ' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: Post): number {
  return Math.max(1, Math.round(wordCount(post) / 220));
}

export const postHref = (post: Post) => `/stories/${post.id}/`;

export function related(post: Post, all: Post[], n = 3): Post[] {
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => ({
      p,
      score:
        p.data.destinations.filter((d) => post.data.destinations.includes(d)).length * 2 +
        p.data.categories.filter((c) => post.data.categories.includes(c)).length,
    }))
    .sort((a, b) => b.score - a.score || a.p.data.title.localeCompare(b.p.data.title))
    .slice(0, n)
    .map((x) => x.p);
}
