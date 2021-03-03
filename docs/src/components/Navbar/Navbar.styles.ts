import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    navbar: {
      boxSizing: 'border-box',
      height: '100vh',
      borderRight: `1px solid ${theme.colors.gray[1]}`,
      backgroundColor: theme.white,
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      width: 260,
    },

    body: {
      paddingRight: theme.spacing.md,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.md,
      paddingTop: theme.spacing.md,
    },

    docs: {
      marginTop: theme.spacing.xl,
    },
  }),
  { theming }
);
