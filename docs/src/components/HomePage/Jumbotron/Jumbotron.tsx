import React from 'react';
import { Link } from 'gatsby';
import { Container, Group, Button, Text, useMantineTheme } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import useStyles from './Jumbotron.styles';

export function Jumbotron() {
  const classes = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.jumbotron}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A <span className={classes.highlight}>fully featured</span> React components and hooks
          library
        </h1>

        <Text className={classes.description}>
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
            component={Link}
            to="/getting-started"
            size="xl"
            className={classes.control}
            color={theme.colorScheme === 'dark' ? 'blue' : 'dark'}
            styles={{ inner: { height: '100%' } }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="outline"
            className={classes.control}
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            leftIcon={<MarkGithubIcon size={20} />}
            styles={{ leftIcon: { marginRight: 15 } }}
          >
            Github
          </Button>
        </Group>
      </Container>
    </div>
  );
}
