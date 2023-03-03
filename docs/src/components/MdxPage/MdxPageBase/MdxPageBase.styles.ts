import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  content: {
    minHeight: `calc(100vh - ${rem(350)})`,
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.colorScheme === 'dark' ? 'none' : theme.shadows.sm,
    paddingBottom: rem(80),
  },
}));
