interface DocsQuery {
  allMdx: {
    edges: { node: { frontmatter: { category: string }; slug: string } }[];
  };
}

export interface DocItem {
  slug: string;
  to: string;
  category: string;
}

export default function getDocsData(query: DocsQuery) {
  return query.allMdx.edges.reduce((acc: Record<string, DocItem[]>, item) => {
    const { category } = item.node.frontmatter;

    if (!(category in acc)) {
      acc[category] = [];
    }

    acc[category].push({ slug: item.node.slug, to: `/core/${item.node.slug}/`, category });
    return acc;
  }, {});
}
