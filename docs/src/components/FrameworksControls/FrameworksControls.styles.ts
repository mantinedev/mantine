import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  control: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    transition: 'box-shadow 100ms ease, transform 100ms ease',

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      boxShadow: theme.shadows.md,
      transform: theme.colorScheme === 'dark' ? 'none' : 'scale(1.01)',
    }),
  },
}));
