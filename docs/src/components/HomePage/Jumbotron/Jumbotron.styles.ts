import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 600px)';

export default createUseStyles(
  (theme) => ({
    jumbotron: {
      boxSizing: 'border-box',
      marginTop: 25,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      backgroundImage: `linear-gradient(0deg, ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
      } 10%, transparent 100%), url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${(theme.colorScheme ===
      'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0]
      ).replace(
        '#',
        ''
      )}' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },

    inner: {
      position: 'relative',
      paddingTop: 200,
      paddingBottom: 120,

      [BREAKPOINT]: {
        paddingBottom: 80,
        paddingTop: 80,
      },
    },

    title: {
      fontFamily: `Dosis, ${theme.fontFamily}`,
      fontSize: 68,
      lineHeight: 1.1,
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
      marginTop: theme.spacing.xl,
      fontSize: 24,
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
