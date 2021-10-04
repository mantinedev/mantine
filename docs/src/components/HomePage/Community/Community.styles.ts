import { createStyles } from '@mantine/core';

export const BREAKPOINT = '@media (max-width: 960px)';

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 80,
    paddingBottom: 160,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  inner: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[7],
    padding: 30,
    borderRadius: theme.radius.md,
    position: 'relative',
    overflow: 'hidden',
  },

  title: {
    color: theme.white,
    fontSize: 44,
  },

  description: {
    color: theme.white,
    lineHeight: 1.6,
  },

  control: {
    '@media (max-width: 960px)': {
      flex: 1,
    },
  },
}));
