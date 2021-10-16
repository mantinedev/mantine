import { createStyles } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 960px)';

export default createStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing.xl * 5,
    display: 'flex',

    '&:first-of-type': {
      marginTop: theme.spacing.xl * 2,
    },

    [BREAKPOINT]: {
      flexDirection: 'column',
      marginTop: theme.spacing.xl * 3,
    },
  },

  body: {
    flex: 1,
    maxWidth: '60%',

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
      maxWidth: '100%',
    },
  },

  meta: {
    flex: 1,
    maxWidth: '35%',
    paddingRight: theme.spacing.xl * 1.5,

    [BREAKPOINT]: {
      paddingRight: 0,
      maxWidth: '100%',
    },
  },

  title: {
    marginBottom: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  description: {
    lineHeight: 1.6,

    '&:not(:first-of-type)': {
      marginTop: theme.spacing.sm,
    },
  },

  link: {
    marginTop: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
  },
}));
