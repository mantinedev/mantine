import { createUseStyles } from 'react-jss';
import { MantineTheme, theming } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    inputWrapper: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: theme.fontFamily,
    },

    label: {
      display: 'block',
      marginBottom: 5,
      fontSize: 14,
      fontWeight: 500,
      color: theme.colors.gray[6],
    },

    error: {
      marginTop: 4,
    },

    required: {
      color: theme.colors.red[7],
    },
  }),
  { theming }
);
