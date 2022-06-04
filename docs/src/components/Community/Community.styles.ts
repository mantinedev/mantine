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
    backgroundColor: '#5865f2',
    color: theme.white,
    ...theme.fn.hover({
      backgroundColor: theme.fn.lighten('#5865f2', 0.1),
    }),
  },

  twitter: {
    backgroundColor: '#1C8CD8',
    color: theme.white,
    ...theme.fn.hover({
      backgroundColor: theme.fn.lighten('#1C8CD8', 0.1),
    }),
  },

  github: {
    backgroundColor: '#000',
    color: theme.white,
    ...theme.fn.hover({
      backgroundColor: theme.fn.lighten('#000', 0.1),
    }),
  },
}));
