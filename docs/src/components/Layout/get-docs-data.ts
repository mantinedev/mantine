interface DocsQuery {
  allMdx: {
    edges: {
      node: { frontmatter: { package: string; title?: string; order?: number; slug: string } };
    }[];
  };
}

export interface DocItem {
  to: string;
  package: string;
  order?: number;
  title: string;
}

export type DocsData = Record<string, DocItem[]>;

const order = ['guides', 'mantine-hooks', 'mantine-core', 'Other packages'];

export default function getDocsData(query: DocsQuery): DocsData {
  const results = query.allMdx.edges.reduce((acc: DocsData, item) => {
    if (!(item.node.frontmatter.package in acc)) {
      acc[item.node.frontmatter.package] = [];
    }

    acc[item.node.frontmatter.package].push({
      title: item.node.frontmatter.title,
      order: item.node.frontmatter.order || 0,
      to: item.node.frontmatter.slug,
      package: item.node.frontmatter.package,
    });
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
