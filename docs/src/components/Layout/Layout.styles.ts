import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    layout: {
      backgroundColor: theme.colors.gray[0],
    },

    inner: {
      display: 'flex',
    },

    navbar: {
      flex: '0 0 260px',
    },

    main: {
      flex: 1,
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.md,
    },
  }),
  { theming }
);
