import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    height: rem(34),
    paddingLeft: theme.spacing.sm,
    paddingRight: rem(5),
    borderRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors.dark[5], 0.85)
          : theme.fn.rgba(theme.colors.gray[0], 0.35),
    },
  },

  shortcut: {
    fontSize: rem(11),
    lineHeight: 1,
    padding: `${rem(4)} ${rem(7)}`,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
  },
}));
