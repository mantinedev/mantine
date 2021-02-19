import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    navbar: {
      paddingTop: theme.spacing.xl,
    },
  }),
  { theming }
);
