import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export const HEADER_HEIGHT = 60;

export default createUseStyles(
  (theme: MantineTheme) => ({
    header: {
      top: 0,
      left: 0,
      right: 0,
      height: HEADER_HEIGHT,
      zIndex: 1,
      position: 'fixed',
      backgroundColor: theme.white,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },

    logo: {
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      height: HEADER_HEIGHT,
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      userSelect: 'none',
    },

    image: {
      height: 30,
    },
  }),
  { theming }
);
