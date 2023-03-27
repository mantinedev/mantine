import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    ...theme.fn.cover(0),
    position: 'fixed',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    padding: theme.spacing.xs,
    transition: 'opacity 100ms ease',
  },

  dropzone: {
    flex: 1,
  },
}));
