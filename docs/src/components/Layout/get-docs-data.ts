import {
  MANTINE_CORE_COMPONENTS_ORDER,
  MANTINE_CORE_COMPONENTS_CATEGORIES,
} from '../ComponentsByCategory/get-components-data';

interface DocsQuery {
  allMdx: {
    edges: {
      node: { frontmatter: Frontmatter };
    }[];
  };
}

export interface DocItem {
  to: string;
  package: string;
  order?: number;
  title: string;
  category?: string;
}

export type DocsData = Record<string, DocItem[]>;

const order = ['guides', 'mantine-hooks', 'mantine-core', 'Other packages'];

export default function getDocsData(query: DocsQuery): DocsData {
  const results = query.allMdx.edges.reduce((acc: DocsData, item) => {
    if (!(item.node.frontmatter.group in acc)) {
      acc[item.node.frontmatter.group] = [];
    }

    if (MANTINE_CORE_COMPONENTS_ORDER.includes(item.node.frontmatter.category as any)) {
      acc[item.node.frontmatter.group].push({
        title: item.node.frontmatter.title,
        order: item.node.frontmatter.order || 0,
        to: item.node.frontmatter.slug,
        package: item.node.frontmatter.group,
        category: MANTINE_CORE_COMPONENTS_CATEGORIES[item.node.frontmatter.category].title,
      });
    } else {
      acc[item.node.frontmatter.group].push({
        title: item.node.frontmatter.title,
        order: item.node.frontmatter.order || 0,
        to: item.node.frontmatter.slug,
        package: item.node.frontmatter.group,
      });
    }

    return acc;
  }, {});

  Object.keys(results).forEach((category) => {
    results[category].sort((a, b) => {
      if ('order' in a && 'order' in b) {
        if (a.order === b.order) {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }

        return a.order - b.order;
      }

      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
  });

  return order.reduce((acc, item) => {
    acc[item] = results[item];
    return acc;
  }, {});
}
