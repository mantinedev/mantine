import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { ThemeIcon, Text, Paper, useMantineTheme } from '@mantine/core';
import { getComponentsData } from './get-components-data';
import useStyles from './ComponentsByCategory.styles';

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
            description
          }
        }
      }
    }
  }
`;

export function ComponentsByCategory() {
  const classes = useStyles();
  const theme = useMantineTheme();

  const items = getComponentsData(useStaticQuery(query)).map((item) => {
    const links = item.items.map((link) => (
      <Link className={classes.link} key={link.to} to={link.to}>
        <div className={classes.linkTitle}>{link.name}</div>
        <Text size="xs" className={classes.linkDescription}>
          {link.description}
        </Text>
      </Link>
    ));

    return (
      <Paper className={classes.item} key={item.title}>
        <div className={classes.header}>
          <ThemeIcon color={item.color} variant={theme.colorScheme === 'dark' ? 'filled' : 'light'}>
            <item.icon />
          </ThemeIcon>

          <Text className={classes.title} size="lg" weight={500}>
            {item.title}
          </Text>
        </div>

        <div className={classes.links}>{links}</div>
      </Paper>
    );
  });

  return <div className={classes.wrapper}>{items}</div>;
}
