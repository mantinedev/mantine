import { MDX_NAV_DATA } from '../../../apps/mantine.dev/src/mdx/mdx-nav-data';
import { Frontmatter } from '../../../apps/mantine.dev/src/types';

/** Kind of document, derived from its nav group */
export type DocKind = 'component' | 'hook' | 'guide' | 'faq';

/** Top-level nav group from the docs site */
export type NavGroup = keyof typeof MDX_NAV_DATA;

/** A single documentation page eligible for indexing */
export interface PageEntry {
  id: string;
  name: string;
  kind: DocKind;
  group: NavGroup;
  category: string;
  package?: string;
  route: string;
  description: string;
  searchTags?: string;
  propsRefs: string[];
  source?: string;
  docs?: string;
}

const EXCLUDED_SLUGS = new Set([
  '/about',
  '/support',
  '/contribute',
  '/browser-support',
  '/guides/llms',
]);

/** Pages with no value for writing application code, plus all changelogs */
export function isExcludedSlug(slug: string): boolean {
  return slug.startsWith('/changelog') || EXCLUDED_SLUGS.has(slug);
}

/**
 * Derives the document kind from its nav group and title.
 * The `form` group is mixed: `use-form` and `use-field` are hooks, while
 * `Form validation`, `Nested fields` and the rest are guides.
 */
export function resolveKind(group: NavGroup, title: string): DocKind {
  if (group === 'hooks') {
    return 'hook';
  }

  if (group === 'components' || group === 'extensions') {
    return 'component';
  }

  if (group === 'form') {
    return /^use-[a-z0-9-]+$/.test(title) ? 'hook' : 'guide';
  }

  return 'guide';
}

/** Converts a route to the id used by the generated llms markdown files */
export function routeToId(route: string): string {
  const trimmed = route.replace(/^\/+/, '');
  return trimmed === '' ? 'index' : trimmed.replace(/\//g, '-');
}

/**
 * Maps each nav group to the single package every one of its pages declares,
 * derived from `MDX_NAV_DATA` itself. A group is omitted when its pages
 * declare more than one distinct package (for example `extensions`, which
 * spans a dozen separate `@mantine/*` packages) or declare none at all, so
 * this never guesses a package for a group that has no single owner.
 */
function computeGroupPackages(): Partial<Record<NavGroup, string>> {
  const result: Partial<Record<NavGroup, string>> = {};

  (
    Object.entries(MDX_NAV_DATA) as [NavGroup, { category: string; pages: Frontmatter[] }[]][]
  ).forEach(([group, categories]) => {
    const packages = new Set<string>();

    categories.forEach((category) => {
      category.pages.forEach((page) => {
        if (page.package) {
          packages.add(page.package);
        }
      });
    });

    if (packages.size === 1) {
      [result[group]] = packages;
    }
  });

  return result;
}

const GROUP_PACKAGES = computeGroupPackages();

/**
 * Resolves the npm package a page belongs to. A handful of landing pages
 * (`/form/package`, `/core/package`, `/hooks/package`, ...) declare no
 * `package` of their own even though every other page in their group does;
 * those fall back to their group's single package via `GROUP_PACKAGES`.
 */
function resolvePackage(group: NavGroup, page: Frontmatter): string | undefined {
  return page.package || GROUP_PACKAGES[group];
}

/** Reads every indexable page from the docs site nav taxonomy */
export function collectNavPages(): PageEntry[] {
  const result: PageEntry[] = [];

  (
    Object.entries(MDX_NAV_DATA) as [NavGroup, { category: string; pages: Frontmatter[] }[]][]
  ).forEach(([group, categories]) => {
    categories.forEach((category) => {
      category.pages.forEach((page) => {
        if (!page.slug || isExcludedSlug(page.slug)) {
          return;
        }

        result.push({
          id: routeToId(page.slug),
          name: page.title,
          kind: resolveKind(group, page.title),
          group,
          category: category.category,
          package: resolvePackage(group, page),
          route: page.slug,
          description: page.description || '',
          searchTags: page.searchTags,
          propsRefs: page.props || [],
          source: page.source,
          docs: page.docs,
        });
      });
    });
  });

  return result.sort((a, b) => a.id.localeCompare(b.id));
}
