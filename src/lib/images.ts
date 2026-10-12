import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });

const byName: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  byName[path.split('/').pop()!] = mod.default;
}

/** Returns the image metadata for a file in src/assets/images (by file name). */
export function getImg(name?: string | null): ImageMetadata | undefined {
  if (!name) return undefined;
  const key = name.split('/').pop()!;
  const img = byName[key];
  if (!img) throw new Error(`Image not found in src/assets/images: ${name}`);
  return img;
}
