import React from 'react';
import { Link } from 'gatsby';
import { Container, Group, Button, Text, useMantineTheme } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import useStyles from './Jumbotron.styles';

export function Jumbotron() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.jumbotron}>
      <Container size={1100} className={classes.inner}>
        <h1 className={classes.title}>
          A <span className={classes.highlight}>fully featured</span> React components library
        </h1>

        <Text className={classes.description}>
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
            component={Link}
            to="/getting-started/"
            size="xl"
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
            className={cx(classes.control, classes.githubControl)}
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            leftIcon={<MarkGithubIcon size={20} />}
            styles={{ leftIcon: { marginRight: 12 } }}
          >
            Github
          </Button>
        </Group>
      </Container>
    </div>
  );
}
