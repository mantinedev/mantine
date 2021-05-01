import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

const BREAKPOINT = 500;

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      display: 'flex',
      marginTop: theme.spacing.md,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        flexDirection: 'column',
      },
    },

    item: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
      borderRadius: theme.radius.sm,
      flex: 1,
      padding: theme.spacing.md,

      '& + &': {
        marginLeft: theme.spacing.xl,
      },

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        '& + &': {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    value: {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: 30,
    },

    title: {
      textAlign: 'center',
      marginTop: theme.spacing.xs,
    },

    unit: {
      marginLeft: 6,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[6],
    },
  }),
  { theming }
);
