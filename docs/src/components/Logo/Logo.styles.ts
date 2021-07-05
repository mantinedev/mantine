import { createUseStyles } from 'react-jss';
import { theming, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    logo: {
      ...getFocusStyles(theme),
      textDecoration: 'none',
      userSelect: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    image: {
      height: 30,
    },
  }),
  { theming }
);
