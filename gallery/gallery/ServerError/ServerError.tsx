import React from 'react';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 120,
    backgroundColor: theme.colors[theme.primaryColor][6],
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][1],
  },
}));

export function ServerError() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our development team was
          already notified. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button variant="white" size="md">
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}
