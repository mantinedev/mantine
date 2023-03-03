import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    transition: 'box-shadow 100ms ease, transform 100ms ease, background-color 100ms ease',
    ...theme.fn.hover({
      boxShadow: theme.shadows.md,
      transform: theme.colorScheme === 'dark' ? 'none' : 'scale(1.01)',
    }),
  },

  description: {
    paddingBottom: theme.spacing.lg,
  },

  discord: {
    backgroundColor: theme.fn.darken('#5865f2', theme.colorScheme === 'dark' ? 0.25 : 0),
    color: theme.white,
    ...theme.fn.hover({
      backgroundColor: theme.fn.lighten('#5865f2', theme.colorScheme === 'dark' ? -0.1 : 0.1),
    }),
  },

  twitter: {
    backgroundColor: theme.fn.darken('#1C8CD8', theme.colorScheme === 'dark' ? 0.15 : 0),
    color: theme.white,
    ...theme.fn.hover({
      backgroundColor: theme.fn.lighten('#1C8CD8', theme.colorScheme === 'dark' ? -0.1 : 0.1),
    }),
  },

  github: {
    backgroundColor: '#000',
    color: theme.white,
    ...theme.fn.hover({
      backgroundColor: theme.fn.lighten('#000', theme.colorScheme === 'dark' ? 0.05 : 0.1),
    }),
  },
}));
