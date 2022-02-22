import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  nothingFound: {},

  actions: {
    padding: theme.spacing.xs / 2,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));
