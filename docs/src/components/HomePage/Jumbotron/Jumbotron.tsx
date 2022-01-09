import React from 'react';
import { Link } from 'gatsby';
import { Container, Group, Button, Text, useMantineTheme, SimpleGrid } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import { Hero } from './Hero';
import { FEATURES_DATA } from './features';
import useStyles from './Jumbotron.styles';

export function Jumbotron() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const features = FEATURES_DATA.map((feature) => (
    <div className={classes.feature} key={feature.title}>
      <div className={classes.featureIcon}>
        <feature.icon size={28} />
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
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <SimpleGrid
          cols={3}
          style={{ maxWidth: 800 }}
          spacing={30}
          mt={40}
          breakpoints={[{ maxWidth: 800, cols: 1 }]}
        >
          {features}
        </SimpleGrid>

        <Group className={classes.controls}>
          <Button
            component={Link}
            to="/getting-started/"
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
            leftIcon={<MarkGithubIcon size={20} />}
            styles={{ leftIcon: { marginRight: 12 } }}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
