import { createUseStyles } from 'react-jss';
import {
  theming,
  MantineTheme,
  MantineNumberSize,
  getFontStyles,
  getSizeValue,
  getThemeColor,
} from '@mantine/theme';

const sizes = {
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
      ...getFontStyles(theme),
      marginLeft: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },

    checkbox: ({ size }: { size: MantineNumberSize }) => ({
      appearance: 'none',
      backgroundColor: theme.colors.gray[0],
      border: `1px solid ${theme.colors.gray[4]}`,
      width: getSizeValue({ size, sizes }),
      height: getSizeValue({ size, sizes }),
      borderRadius: theme.radius.sm,
      padding: 0,
      outline: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.white}, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
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
      backgroundColor: getThemeColor({ theme, color, shade: 5 }),
      borderColor: getThemeColor({ theme, color, shade: 5 }),
      color: theme.white,
    }),

    icon: {
      width: '80%',
      height: '80%',
    },
  }),
  { theming }
);
