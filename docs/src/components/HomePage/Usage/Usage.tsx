import React from 'react';
import { Text, SimpleGrid } from '@mantine/core';
import { Link } from 'gatsby';
import { GUIDES_DATA } from '../../GettingStarted/Guides/data';
import { PageSection } from '../PageSection/PageSection';
import useStyles from './Usage.styles';

export function Usage() {
  const { classes } = useStyles();
  const guides = GUIDES_DATA.map((guide) => {
    const Icon = guide.icon;
    return (
      <Link className={classes.guide} key={guide.id} to={`/getting-started?g=${guide.id}`}>
        <Icon />
        <Text className={classes.guideTitle}>{guide.title}</Text>
      </Link>
    );
  });

  return (
    <PageSection
      title="Use anywhere"
      description="Mantine works in all modern environments – get started instantly with Next.js, Gatsby.js, create-react-app, Vite or Remix by following getting started guide:"
    >
      <SimpleGrid
        cols={5}
        mt={30}
        breakpoints={[
          { maxWidth: 1100, cols: 3 },
          { maxWidth: 755, cols: 1 },
        ]}
      >
        {guides}
      </SimpleGrid>
    </PageSection>
  );
}
