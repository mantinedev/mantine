import React from 'react';
import { Container, Text, SimpleGrid } from '@mantine/core';
import { Link } from 'gatsby';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { GUIDES_DATA } from '../../GettingStarted/Guides/data';
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
    <div className={classes.wrapper}>
      <Container size={1100}>
        <SectionTitle>Use anywhere</SectionTitle>
        <Text className={classes.description} size="xl">
          Mantine works in all modern environments – get started instantly with Next.js, Gatsby.js,
          create-react-app, Vite or Preact by following getting started guide:
        </Text>

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
      </Container>
    </div>
  );
}
