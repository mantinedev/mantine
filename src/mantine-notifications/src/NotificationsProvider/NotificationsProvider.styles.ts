import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    notifications: {
      width: `calc(100% - ${theme.spacing.md * 2}px)`,
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: 1000,
    },

    notification: {
      '& + &': {
        marginTop: theme.spacing.sm,
      },
    },
  }),
  { theming }
);
