import { CATEGORIZED, Category } from '../../settings';
import { Frontmatter } from '../../types';

export interface DocsQuery {
  allMdx: {
    edges: {
      node: { frontmatter: Frontmatter };
    }[];
  };
}

interface GroupPages {
  query: DocsQuery;
  categories: Record<string, Category>;
  order: readonly string[];
  group: string;
}

function sortPages(pages: Frontmatter[]) {
  const clone = [...pages];
  clone.sort((a, b) => {
    if ('order' in a && 'order' in b) {
      if (a.order === b.order) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      }

      return a.order - b.order;
    }

    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  });

  return clone;
}

export function groupPages({ query, categories, order, group }: GroupPages): {
  uncategorized: Frontmatter[];
  groups: { category: Category; pages: Frontmatter[] }[];
  group: string;
} {
  const pages = query.allMdx.edges
    .map(({ node }) => node.frontmatter)
    .filter((page) => page.group === group);

  const uncategorized = [];

  const categorized = pages.reduce((acc, page) => {
    if (!(page.category in categories)) {
      uncategorized.push({ ...page, order: page.order || 0 });
      return acc;
    }

    if (!(page.category in acc)) {
      acc[page.category] = [];
    }

    acc[page.category].push({ ...page, order: page.order || 0 });
    return acc;
  }, {} as { category: Category; pages: Frontmatter[] });

  const groups = order.map((category) => ({
    category: categories[category],
    pages: sortPages(categorized[category]),
  }));

  return { uncategorized: sortPages(uncategorized), groups, group };
}

export function getDocsData(query: DocsQuery) {
  return CATEGORIZED.map((data) => groupPages({ ...data, query }));
}
