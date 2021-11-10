import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  image: {
    height: 30,
  },

  version: {
    ...theme.fn.focusStyles(),
    fontWeight: 700,
    textDecoration: 'none',
    marginBottom: 6,
    marginLeft: theme.spacing.md,
  },
}));
