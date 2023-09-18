import { Frontmatter } from '@/types';
import { ALL_MDX_PAGES } from '@/mdx';

export function getMdxSiblings(slug: string): {
  prev: Frontmatter | undefined;
  next: Frontmatter | undefined;
} {
  const index = ALL_MDX_PAGES.findIndex((page) => page.slug === slug);
  const prev = ALL_MDX_PAGES[index - 1];
  const next = ALL_MDX_PAGES[index + 1];

  return { prev, next };
}
