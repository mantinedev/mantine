import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    display: 'flex',
  },

  body: {
    flex: 1,
    maxWidth: '60%',
  },

  meta: {
    flex: 1,
    maxWidth: '35%',
    paddingRight: theme.spacing.xl * 1.5,
  },

  title: {
    marginBottom: theme.spacing.xs,
  },

  description: {
    lineHeight: 1.6,
  },

  link: {
    marginTop: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
  },
}));
