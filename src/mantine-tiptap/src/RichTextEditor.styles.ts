import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    position: 'relative',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
    borderRadius: theme.fn.radius(),
  },
}));
