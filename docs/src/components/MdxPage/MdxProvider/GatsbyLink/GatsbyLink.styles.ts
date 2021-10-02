import { createStyles, getFocusStyles } from '@mantine/core';

export default createStyles((theme) => ({
  link: {
    ...getFocusStyles(theme),
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
