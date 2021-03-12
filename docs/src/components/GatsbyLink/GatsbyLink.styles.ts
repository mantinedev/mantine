import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    link: {
      ...getFocusStyles(theme),
      color: theme.colors[theme.primaryColor][6],
      textDecoration: 'underline',
    },
  }),
  { theming }
);
