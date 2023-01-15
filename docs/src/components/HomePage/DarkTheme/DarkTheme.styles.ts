import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  image: {
    boxShadow: theme.shadows.md,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
  },
}));
