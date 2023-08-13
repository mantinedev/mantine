import React from 'react';
import { Link } from 'gatsby';
import { Container, Group, Button, Text, useMantineTheme, SimpleGrid, rem } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { Hero } from './Hero';
import { FEATURES_DATA } from './features';
import useStyles from './Jumbotron.styles';

export function Jumbotron() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const features = FEATURES_DATA.map((feature) => (
    <div className={classes.feature} key={feature.title}>
      <div className={classes.featureIcon}>
        <feature.icon size={rem(28)} stroke={1.5} />
      </div>

      <div className={classes.featureBody}>
        <Text weight={500} className={classes.featureTitle}>
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt={4}>
          {feature.description}
        </Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.jumbotron}>
      <Container size={1100} className={classes.inner}>
        <Hero />

        <Text className={classes.description}>
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 100 customizable components and 50 hooks to cover you in any situation
        </Text>

        <SimpleGrid
          cols={3}
          sx={{ maxWidth: rem(800) }}
          spacing={30}
          mt={40}
          breakpoints={[{ maxWidth: 800, cols: 1 }]}
        >
          {features}
        </SimpleGrid>

        <Group className={classes.controls}>
          <Button
            component={Link}
            to="/pages/getting-started/"
            size="xl"
            radius="md"
            className={cx(classes.control, classes.controlPrimary)}
            variant="gradient"
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="outline"
            radius="md"
            className={cx(classes.control, classes.githubControl)}
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            leftIcon={<GithubIcon size={22} />}
            styles={{ leftIcon: { marginRight: rem(12) } }}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
