import { createStyles, getFocusStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  logo: {
    ...getFocusStyles(theme),
    textDecoration: 'none',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  image: {
    height: 30,
  },

  version: {
    ...getFocusStyles(theme),
    fontWeight: 700,
    textDecoration: 'none',
    marginBottom: 6,
    marginLeft: theme.spacing.md,
  },
}));
