import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  link: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
  },

  icon: {
    marginRight: rem(12),
    display: 'flex',
    alignItems: 'center',
  },
}));
