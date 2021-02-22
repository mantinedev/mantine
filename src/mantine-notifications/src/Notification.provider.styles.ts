import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    notifications: {
      position: 'fixed',
      bottom: theme.spacing.md,
      right: theme.spacing.md,
      width: 400,
    },

    notification: {
      '& + &': {
        marginTop: theme.spacing.sm,
      },
    },
  }),
  { theming }
);
