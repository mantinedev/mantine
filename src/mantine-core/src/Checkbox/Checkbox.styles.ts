import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineNumberSize } from '@mantine/theme';

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
      fontFamily: theme.fontFamily,
      marginLeft: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },

    checkbox: ({ color, size }: { color: string; size: MantineNumberSize }) => ({
      appearance: 'none',
      backgroundColor: theme.colors.gray[0],
      border: `1px solid ${theme.colors.gray[4]}`,
      width: typeof size === 'number' ? size : CHECKBOX_SIZES[size] || CHECKBOX_SIZES.md,
      height: typeof size === 'number' ? size : CHECKBOX_SIZES[size] || CHECKBOX_SIZES.md,
      borderRadius: theme.radius.sm,
      padding: 0,
      outline: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.white}, 0 0 0 4px ${
          theme.colors[color || theme.primaryColor][5]
        }`,
      },

      '&:focus:not(:focus-visible)': {
        boxShadow: 'none',
      },

      '&:disabled': {
        backgroundColor: theme.colors.gray[2],
        cursor: 'not-allowed',
      },
    }),

    checked: ({ color }: { color: string }) => ({
      backgroundColor: theme.colors[color || theme.primaryColor][5],
      color: theme.white,
      borderColor: theme.colors[color || theme.primaryColor][5],
    }),

    icon: {
      width: '80%',
      height: '80%',
    },
  }),
  { theming }
);
