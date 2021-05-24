import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = 900;

export default createUseStyles(
  (theme) => ({
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing.md / -2,
      marginBottom: theme.spacing.xl,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        flexDirection: 'column',
      },
    },

    item: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      margin: theme.spacing.md / 2,
      flex: `0 0 calc(50% - ${theme.spacing.md}px)`,
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
