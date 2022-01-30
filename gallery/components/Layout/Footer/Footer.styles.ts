import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));
