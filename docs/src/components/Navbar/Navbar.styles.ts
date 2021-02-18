import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    navbar: {
      background: theme.colors.green[7],
    },
  }),
  { theming }
);
