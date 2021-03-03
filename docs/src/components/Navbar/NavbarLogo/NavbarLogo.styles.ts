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
      color: theme.colors.gray[7],
      userSelect: 'none',
    },

    image: {
      width: LOGO_SIZE,
      height: LOGO_SIZE,
      marginRight: theme.spacing.sm,
    },
  }),
  { theming }
);
