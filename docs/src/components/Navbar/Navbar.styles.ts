import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    navbar: {
      minHeight: '100vh',
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      borderRight: `1px solid ${theme.colors.gray[1]}`,
      backgroundColor: theme.white,
    },

    body: {
      marginTop: theme.spacing.md,
    },

    docs: {
      marginTop: theme.spacing.xl,
    },
  }),
  { theming }
);
