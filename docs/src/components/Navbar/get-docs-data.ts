interface DocsQuery {
  allMdx: {
    edges: {
      node: { frontmatter: { category: string; title?: string; order?: number }; slug: string };
    }[];
  };
}

export interface DocItem {
  slug: string;
  to: string;
  category: string;
  order: number;
}

export default function getDocsData(query: DocsQuery) {
  const results = query.allMdx.edges.reduce((acc: Record<string, DocItem[]>, item) => {
    const { category } = item.node.frontmatter;

    if (!(category in acc)) {
      acc[category] = [];
    }

    acc[category].push({
      order: item.node.frontmatter.order || 0,
      slug: item.node.frontmatter.title || item.node.slug.split('/')[1],
      to: `/${item.node.slug}/`,
      category,
    });
    return acc;
  }, {});

  Object.keys(results).forEach((category) => {
    results[category].sort((a, b) => a.order - b.order);
  });

  return results;
}
