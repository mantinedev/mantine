import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    ...theme.fn.cover(),
    position: 'fixed',
  },

  spotlight: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    borderRadius: theme.radius.sm,
  },

  overlay: {
    // ...theme.fn.cover(),
    // position: 'fixed',
  },

  inner: {},
}));
