import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export const LOGO_SIZE = 30;

export default createUseStyles(
  (theme: MantineTheme) => ({
    logo: {
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      userSelect: 'none',
    },

    image: {
      height: LOGO_SIZE,
    },
  }),
  { theming }
);
