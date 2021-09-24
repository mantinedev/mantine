import { getFocusStyles, createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.md,
    marginLeft: -theme.spacing.md / 2,
    marginRight: -theme.spacing.md / 2,
  },

  link: {
    ...getFocusStyles(theme),
    boxSizing: 'border-box',
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
    textDecoration: 'none',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    margin: theme.spacing.md / 2,
    maxWidth: `calc(33.33333% - ${theme.spacing.md}px)`,
    width: `calc(33.33333% - ${theme.spacing.md}px)`,

    '@media (max-width: 1100px)': {
      maxWidth: `calc(100% - ${theme.spacing.md}px)`,
      width: `calc(100% - ${theme.spacing.md}px)`,
    },

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
}));
