import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    zIndex: 4,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.shadows.sm,
  },

  container: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan('sm')]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  },
}));
