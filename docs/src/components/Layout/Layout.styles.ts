import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    layout: {
      backgroundColor: theme.colors.gray[0],
    },

    inner: {
      paddingLeft: 260,
    },

    main: {
      flex: 1,
      minHeight: '100vh',
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.md,
    },
  }),
  { theming }
);
