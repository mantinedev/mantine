import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: [theme.spacing.xl * 2, theme.spacing.md],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },

    modal: {
      position: 'relative',
      zIndex: 1,
      padding: theme.spacing.lg,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    body: {
      marginTop: theme.spacing.md,
    },
  }),
  { theming }
);
