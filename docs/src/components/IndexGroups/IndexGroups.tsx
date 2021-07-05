import React from 'react';
import { Link } from 'gatsby';
import { ThemeIcon, Text, Group, useMantineTheme } from '@mantine/core';
import { groupPages } from '../Layout/get-docs-data';
import { Category } from '../../settings';
import useStyles from './IndexGroups.styles';

interface DocsQuery {
  allMdx: {
    edges: {
      node: { frontmatter: Frontmatter };
    }[];
  };
}

interface IndexGroupsProps {
  /* eslint-disable react/no-unused-prop-types */
  query: DocsQuery;
  categories: Record<string, Category>;
  order: readonly string[];
  group: string;
  /* eslint-enable react/no-unused-prop-types */
}

export function IndexGroups(props: IndexGroupsProps) {
  const classes = useStyles();
  const data = groupPages(props);
  const theme = useMantineTheme();

  const categories = data.groups.map((group) => {
    if (!Array.isArray(group.pages)) {
      // console.log(group);
      return null;
    }
    const items = group.pages.map((page) => (
      <Link className={classes.item} to={page.slug} key={page.slug}>
        <Text size="md" weight={500} style={{ marginBottom: 3 }}>
          {page.title}
        </Text>
        <Text size="sm" className={classes.description}>
          {page.description}
        </Text>
      </Link>
    ));

    return (
      <div className={classes.group} key={group.category.title}>
        <div className={classes.header}>
          <ThemeIcon
            color={group.category.color}
            variant={theme.colorScheme === 'dark' ? 'filled' : 'light'}
          >
            <group.category.icon />
          </ThemeIcon>

          <Text className={classes.title} size="lg" weight={500}>
            {group.category.title}
          </Text>
        </div>
        <Group align="stretch" spacing="xs">
          {items}
        </Group>
      </div>
    );
  });

  return <div>{categories}</div>;
}
