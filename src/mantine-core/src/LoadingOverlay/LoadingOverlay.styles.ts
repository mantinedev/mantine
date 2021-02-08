import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    background: {
      backgroundColor: theme.colors.white,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    loader: {
      zIndex: 1000,
    },
  }),
  { theming }
);
