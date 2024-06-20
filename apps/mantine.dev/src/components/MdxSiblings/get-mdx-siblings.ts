import { NAVIGATION_MDX_PAGES } from '@/mdx';
import { Frontmatter } from '@/types';

export function getMdxSiblings(slug: string): {
  prev: Frontmatter | undefined;
  next: Frontmatter | undefined;
} {
  const index = NAVIGATION_MDX_PAGES.findIndex((page) => page.slug === slug);
  const prev = NAVIGATION_MDX_PAGES[index - 1];
  const next = NAVIGATION_MDX_PAGES[index + 1];

  return { prev, next };
}
