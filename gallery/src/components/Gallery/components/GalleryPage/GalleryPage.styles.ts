import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {},

  content: {
    minHeight: 'calc(100vh - 60px)',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.colorScheme === 'dark' ? 'none' : theme.shadows.sm,
    paddingBottom: 80,
  },
}));
