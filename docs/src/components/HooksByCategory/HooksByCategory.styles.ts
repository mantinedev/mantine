import { createUseStyles } from 'react-jss';
import { theming, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    hook: {
      ...getFocusStyles(theme),
      height: 86,
      display: 'block',
      border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      padding: [theme.spacing.xs, theme.spacing.md],
      // wtf, why it is * 5, idk
      flex: `0 1 calc(50% - ${theme.spacing.xs * 5}px)`,

      '@media (max-width: 500px)': {
        flex: `0 1 calc(100% - ${theme.spacing.xs * 5}px)`,
      },

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      },
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },
  }),
  { theming }
);
