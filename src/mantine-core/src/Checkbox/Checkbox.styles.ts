import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineColor } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
    },

    label: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: 'Roboto, sans-serif',
      marginLeft: 10,
      fontSize: 14,
    },

    checkbox: ({ color }: { color: MantineColor }) => ({
      appearance: 'none',
      backgroundColor: theme.colors.gray[0],
      border: `1px solid ${theme.colors.gray[4]}`,
      width: 18,
      height: 18,
      borderRadius: 4,
      padding: 0,
      outline: 0,
      cursor: 'pointer',

      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.colors[color || theme.primaryColor][2]}`,
      },

      '&:disabled': {
        backgroundColor: theme.colors.gray[2],
        cursor: 'not-allowed',
      },
    }),

    checked: ({ color }: { color: MantineColor }) => ({
      backgroundColor: theme.colors[color || theme.primaryColor][5],
      color: theme.colors.white,
      borderColor: theme.colors[color || theme.primaryColor][5],
    }),
  }),
  { theming }
);
