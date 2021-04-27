import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            package
            title
            order
            slug
            category
          }
        }
      }
    }
  }
`;

export function ComponentsByCategory() {
  const data = useStaticQuery(query).allMdx.edges.reduce((acc, item) => {
    if (!item.node.frontmatter.category) {
      return acc;
    }
    if (!Array.isArray(acc[item.node.frontmatter.category])) {
      acc[item.node.frontmatter.category] = [];
    }

    acc[item.node.frontmatter.category].push({
      name: item.node.frontmatter.title,
      to: item.node.frontmatter.slug,
    });
    return acc;
  }, {});

  console.log(data);

  return <div>ComponentsByCategory</div>;
}
