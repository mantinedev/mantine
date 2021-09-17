import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 600px)';

export default createUseStyles(
  (theme) => ({
    jumbotron: {
      position: 'relative',
      boxSizing: 'border-box',
      marginTop: 25,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    inner: {
      position: 'relative',
      paddingTop: 180,
      paddingBottom: 180,

      [BREAKPOINT]: {
        paddingBottom: 80,
        paddingTop: 80,
      },
    },

    title: {
      fontFamily: `Dosis, ${theme.fontFamily}`,
      fontWeight: 800,
      fontSize: 86,
      lineHeight: 1.05,
      margin: 0,
      padding: 0,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [BREAKPOINT]: {
        fontSize: 42,
        lineHeight: 1.2,
      },
    },

    highlight: {
      backgroundImage: `linear-gradient(45deg, ${
        theme.colors.blue[theme.colorScheme === 'dark' ? 4 : 7]
      } 3%, ${theme.colors.grape[5]} 97%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },

    description: {
      marginTop: theme.spacing.xl * 1.5,
      fontSize: 24,
      maxWidth: 800,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

      [BREAKPOINT]: {
        fontSize: 18,
      },
    },

    controls: {
      marginTop: theme.spacing.xl * 2,

      [BREAKPOINT]: {
        marginTop: theme.spacing.xl,
      },
    },

    control: {
      height: 54,
      paddingLeft: 38,
      paddingRight: 38,

      [BREAKPOINT]: {
        height: 54,
        paddingLeft: 18,
        paddingRight: 18,
        flex: 1,
      },
    },

    githubControl: {
      borderWidth: 2,
      borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'transparent',
    },
  }),
  { theming }
);
