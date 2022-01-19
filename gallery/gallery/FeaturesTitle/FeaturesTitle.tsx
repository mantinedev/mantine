import React from 'react';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import { IssueDraftIcon, FileCodeIcon, LawIcon, FlameIcon } from '@primer/octicons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: LawIcon,
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: FileCodeIcon,
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: IssueDraftIcon,
    title: 'No annoying focus ring',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: FlameIcon,
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            A fully featured React components library for your next project
          </Title>
          <Text color="dimmed">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
