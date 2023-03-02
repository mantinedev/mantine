import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    textDecoration: 'none',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    transition: 'box-shadow 100ms ease, transform 100ms ease',

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      boxShadow: theme.shadows.md,
      transform: theme.colorScheme === 'dark' ? 'none' : 'scale(1.01)',
    }),
  },

  linkUI: {
    color: theme.white,
    borderWidth: 0,
    backgroundImage:
      theme.colorScheme === 'dark'
        ? theme.fn.linearGradient(50, theme.colors.blue[8], theme.colors.cyan[6])
        : theme.fn.linearGradient(50, theme.colors.blue[7], theme.colors.cyan[5]),
  },

  uiDescription: {
    color: theme.white,
  },
}));
