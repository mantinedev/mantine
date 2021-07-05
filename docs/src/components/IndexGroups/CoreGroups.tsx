import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MANTINE_CORE_CATEGORIES, MANTINE_CORE_ORDER } from '../../settings';
import { IndexGroups } from './IndexGroups';

const query = graphql`
  {
    allMdx(filter: { frontmatter: { package: { eq: "@mantine/core" } } }) {
      edges {
        node {
          id
          frontmatter {
            group
            package
            title
            order
            slug
            category
            description
          }
        }
      }
    }
  }
`;

export function CoreGroups() {
  return (
    <IndexGroups
      query={useStaticQuery(query)}
      group="mantine-core"
      categories={MANTINE_CORE_CATEGORIES}
      order={MANTINE_CORE_ORDER}
    />
  );
}
