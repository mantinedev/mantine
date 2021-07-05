import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MANTINE_HOOKS_CATEGORIES, MANTINE_HOOKS_ORDER } from '../../settings';
import { IndexGroups } from './IndexGroups';

const query = graphql`
  {
    allMdx(filter: { frontmatter: { package: { eq: "@mantine/hooks" } } }) {
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

export function HooksGroups() {
  return (
    <IndexGroups
      query={useStaticQuery(query)}
      group="mantine-hooks"
      categories={MANTINE_HOOKS_CATEGORIES}
      order={MANTINE_HOOKS_ORDER}
    />
  );
}
