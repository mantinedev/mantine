import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    padding: theme.spacing.xs,
  },

  dropzone: {
    flex: 1,
  },
}));
