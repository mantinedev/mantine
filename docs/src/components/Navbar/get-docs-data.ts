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
  order: number;
  title: string;
}

const order = ['mantine-hooks', 'mantine-core', 'mantine-notifications'];

export default function getDocsData(query: DocsQuery) {
  const results = query.allMdx.edges.reduce((acc: Record<string, DocItem[]>, item) => {
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
    results[category].sort((a, b) => a.order - b.order);
  });

  return order.reduce((acc, item) => {
    acc[item] = results[item];
    return acc;
  }, {});
}
