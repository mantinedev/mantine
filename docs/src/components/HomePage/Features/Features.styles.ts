import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 600px)';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      backgroundColor: theme.colorScheme === 'dark' ? '#03498b' : theme.colors.blue[6],

      '& svg': {
        display: 'block',
      },
    },

    waves: {
      fill: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      width: '200%',
      height: 88,
      transform: 'scaleX(-1)',

      [BREAKPOINT]: {
        height: 34,
      },
    },

    wavesBottom: {
      height: 44,
      transform: 'rotate(180deg)',

      [BREAKPOINT]: {
        height: 24,
      },
    },

    inner: {
      paddingTop: 100,
      paddingBottom: 160,

      [BREAKPOINT]: {
        paddingTop: 40,
        paddingBottom: 60,
      },
    },

    item: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      margin: theme.spacing.lg / 2,
      flex: `0 0 calc(33.33333% - ${theme.spacing.lg}px)`,

      '@media (max-width: 1000px)': {
        flex: `0 0 calc(50% - ${theme.spacing.lg}px)`,
      },

      [BREAKPOINT]: {
        flex: `0 0 calc(100% - ${theme.spacing.lg}px)`,
      },
    },

    title: {
      marginLeft: theme.spacing.md,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      lineHeight: 1.5,
    },
  }),
  { theming }
);
