import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    inner: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 4,
      display: 'flex',
      justifyContent: 'space-between',
    },

    logoSection: {
      maxWidth: 300,
    },

    description: {
      marginTop: theme.spacing.xs,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },

    title: {
      marginBottom: theme.spacing.sm,
      lineHeight: 1,
    },

    afterFooter: {
      borderTop: `1px solid ${theme.colors.gray[1]}`,
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },

    afterFooterNote: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],

      '& a': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      },
    },
  }),
  { theming }
);
