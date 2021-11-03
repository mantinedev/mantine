import { createStyles, getFocusStyles } from '@mantine/core';

export default createStyles((theme) => ({
  logo: {
    ...getFocusStyles(theme),
    textDecoration: 'none',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  image: {
    height: 30,
  },
}));
