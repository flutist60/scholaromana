import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../data/site';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', (p) => p.id.startsWith(`${lang}/`) && !p.data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const slugOf = (p: Post) => p.id.split('/').slice(1).join('/');

export const postUrl = (p: Post, lang: Lang) => `${lang === 'it' ? '/it' : ''}/post/${slugOf(p)}`;

export const categories = {
  'early-music': { en: 'Early music', it: 'Musica antica' },
  'contemporary-music': { en: 'Contemporary music', it: 'Musica contemporanea' },
} as const;

export function fmtDate(d: Date, lang: Lang) {
  return d.toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

/** finds the translation of a post in the other language */
export async function translationOf(p: Post, lang: Lang): Promise<Post | undefined> {
  if (!p.data.translationKey) return undefined;
  const other = await getPosts(lang);
  return other.find((o) => o.data.translationKey === p.data.translationKey);
}
