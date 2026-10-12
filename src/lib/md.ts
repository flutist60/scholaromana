import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: true });

/** Markdown (block) -> HTML. Single newlines become <br>. */
export function md(src?: string | null): string {
  if (!src) return '';
  return marked.parse(String(src), { async: false }) as string;
}

/** Markdown (inline) -> HTML, no wrapping <p>. */
export function mdInline(src?: string | null): string {
  if (!src) return '';
  return marked.parseInline(String(src), { async: false }) as string;
}

/** Plain multi-line text -> HTML with <br> */
export function lines(src?: string | null): string {
  if (!src) return '';
  return String(src)
    .split('\n')
    .map((l) => l.replace(/&/g, '&amp;').replace(/</g, '&lt;'))
    .join('<br>');
}
