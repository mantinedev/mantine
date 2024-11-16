import { MDX_NAV_DATA_PAGES } from '@/mdx';
import { Frontmatter } from '@/types';

export function getMdxSiblings(slug: string): {
  prev: Frontmatter | undefined;
  next: Frontmatter | undefined;
} {
  const index = MDX_NAV_DATA_PAGES.findIndex((page) => page.slug === slug);
  const prev = MDX_NAV_DATA_PAGES[index - 1];
  const next = MDX_NAV_DATA_PAGES[index + 1];

  return { prev, next };
}
