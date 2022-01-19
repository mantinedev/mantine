import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      display: 'block',
    },
  },

  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    display: 'block',
  },

  image: {
    height: 30,
  },

  version: {
    ...theme.fn.focusStyles(),
    fontWeight: 700,
    textDecoration: 'none',
    marginLeft: theme.spacing.md,
  },
}));
