import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  image: {
    boxShadow: theme.shadows.md,
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
  },
}));
