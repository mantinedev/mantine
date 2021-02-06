import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    month: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: theme.fontFamily,
      borderCollapse: 'collapse',

      '& td': { padding: 0 },

      '& th': {
        padding: 0,
        fontWeight: 'normal',
        paddingBottom: theme.spacing.xs / 2,
        textAlign: 'center',
        cursor: 'default',
        userSelect: 'none',
      },
    },
  }),
  { theming }
);
