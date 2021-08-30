import React from 'react';
import { createUseStyles } from 'react-jss';
import { theming, Title, Text, Button, Container, useMantineTheme } from '@mantine/core';
import { Dots } from './Dots';

const useStyles = createUseStyles(
  (theme) => ({
    wrapper: {
      position: 'relative',
      paddingTop: 120,
      paddingBottom: 80,
    },

    inner: {
      position: 'relative',
      zIndex: 1,
    },

    dots: {
      position: 'absolute',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

      '@media (max-width: 755px)': {
        display: 'none',
      },
    },

    dotsLeft: {
      left: 0,
      top: 0,
    },

    title: {
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: -1,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      marginBottom: theme.spacing.sm,

      '@media (max-width: 755px)': {
        fontSize: 28,
      },
    },

    controls: {
      marginTop: theme.spacing.lg,
      display: 'flex',
      justifyContent: 'center',

      '@media (max-width: 360px)': {
        flexDirection: 'column',
      },
    },

    control: {
      borderWidth: 2,

      '& + &': {
        marginLeft: theme.spacing.md,
      },

      '@media (max-width: 360px)': {
        '& + &': {
          marginTop: theme.spacing.md,
          marginLeft: 0,
        },
      },
    },
  }),
  { theming }
);

export function HeroText() {
  const classes = useStyles();
  const theme = useMantineTheme();
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title align="center" className={classes.title}>
          Automated AI code reviews for{' '}
          <Text component="span" color={theme.primaryColor} inherit>
            any stack
          </Text>
        </Title>

        <Container padding={0} size={600}>
          <Text align="center" size="lg" color="dimmed">
            Build more reliable software with AI companion. AI is also trained to detect lazy
            developers who do nothing and just complain on Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg">
            Get started for free
          </Button>
          <Button className={classes.control} size="lg" variant="outline" color="gray">
            Live demo
          </Button>
        </div>
      </div>
    </Container>
  );
}
