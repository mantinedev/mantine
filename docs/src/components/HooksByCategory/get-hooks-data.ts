interface HookDocument {
  description: string;
  slug: string;
  title: string;
}

export function getHooksData(query: any, type: 'state' | 'dom'): HookDocument[] {
  const filtered = query.allMdx.edges.filter(({ node }) => node.frontmatter.category === type);
  return filtered.map(({ node }) => node.frontmatter);
}
