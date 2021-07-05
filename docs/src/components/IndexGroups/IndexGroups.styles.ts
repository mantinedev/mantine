import { theming, getFocusStyles } from '@mantine/core';
import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    group: {
      marginTop: theme.spacing.xl,
      '& + &': {
        marginTop: theme.spacing.xl * 2,
      },
    },

    items: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    item: {
      ...getFocusStyles(theme),
      minHeight: 86,
      display: 'block',
      border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      padding: [theme.spacing.xs, theme.spacing.md],
      // wtf, why it is * 5, idk
      flex: `0 1 calc(50% - ${theme.spacing.xs * 5}px)`,

      '@media (max-width: 500px)': {
        flex: `0 1 calc(100% - ${theme.spacing.xs * 5}px)`,
      },

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
      },
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },

    title: {
      marginLeft: theme.spacing.xs,
    },

    description: {
      marginTop: 5,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },
  }),
  { theming }
);
