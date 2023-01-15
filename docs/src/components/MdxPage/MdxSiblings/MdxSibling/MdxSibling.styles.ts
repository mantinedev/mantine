import { createStyles, getStylesRef, rem } from '@mantine/core';

export default createStyles((theme) => ({
  control: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    justifyContent: 'space-between',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    transition: 'box-shadow 100ms ease, transform 100ms ease',

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      boxShadow: theme.shadows.md,
      transform: theme.colorScheme === 'dark' ? 'none' : 'scale(1.01)',
    }),
  },

  body: {
    ref: getStylesRef('body'),
  },

  next: {
    [`& .${getStylesRef('body')}`]: {
      marginRight: theme.spacing.md,
    },
  },
}));
