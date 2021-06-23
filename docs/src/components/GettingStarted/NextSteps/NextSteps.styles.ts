import { createUseStyles } from 'react-jss';
import { getFocusStyles, theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    links: {
      display: 'flex',
      marginTop: theme.spacing.md,
    },

    link: {
      ...getFocusStyles(theme),
      padding: theme.spacing.md,
      borderRadius: theme.radius.sm,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,
      textDecoration: 'none',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
      },
    },

    description: {
      marginTop: theme.spacing.xs,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },

    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 4,
    },
  }),
  { theming }
);
