import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineColor, MantineSize } from '@mantine/theme';

const CHECKBOX_SIZES = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 32,
};

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

    checkbox: ({ color, size }: { color: MantineColor; size: MantineSize }) => ({
      appearance: 'none',
      backgroundColor: theme.colors.gray[0],
      border: `1px solid ${theme.colors.gray[4]}`,
      width: typeof size === 'number' ? size : CHECKBOX_SIZES[size] || CHECKBOX_SIZES.md,
      height: typeof size === 'number' ? size : CHECKBOX_SIZES[size] || CHECKBOX_SIZES.md,
      borderRadius: 4,
      padding: 0,
      outline: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

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

    icon: {
      width: '80%',
      height: '80%',
    },
  }),
  { theming }
);
