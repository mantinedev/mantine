import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Text, Group } from '@mantine/core';
import { getHooksData } from './get-hooks-data';
import useStyles from './HooksByCategory.styles';

const query = graphql`
  {
    allMdx(filter: { frontmatter: { package: { eq: "@mantine/hooks" } } }) {
      edges {
        node {
          id
          frontmatter {
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

interface HooksByCategoryProps {
  type: 'state' | 'dom';
}

export function HooksByCategory({ type }: HooksByCategoryProps) {
  const classes = useStyles();
  const data = getHooksData(useStaticQuery(query), type);

  const hooks = data.map((item) => (
    <Link className={classes.hook} to={item.slug} key={item.slug}>
      <Text size="md" weight={500} style={{ marginBottom: 3 }}>
        {item.title}
      </Text>
      <Text size="sm" className={classes.description}>
        {item.description}
      </Text>
    </Link>
  ));

  return (
    <Group align="stretch" spacing="xs">
      {hooks}
    </Group>
  );
}
