import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineNumberSize,
  theming,
  getSizeValue,
  getFontStyles,
  getThemeColor,
} from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    actionIcon: ({ color, radius }: { color: string; radius: MantineNumberSize }) => ({
      ...getFontStyles(theme),
      border: '1px solid transparent',
      boxSizing: 'border-box',
      backgroundColor: 'transparent',
      height: 27,
      width: 27,
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      padding: 0,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'color 100ms ease, background-color 100ms ease',
      color: theme.colors.gray[6],
      outline: 0,

      '&:focus': {
        color: getThemeColor({ theme, color, shade: 6 }),
        borderColor: getThemeColor({ theme, color, shade: 6 }),
      },

      '&:focus:not(:focus-visible)': {
        color: theme.colors.gray[6],
        borderColor: 'transparent',

        '&:hover': {
          color: getThemeColor({ theme, color, shade: 6 }),
        },
      },

      '&:hover': {
        backgroundColor: getThemeColor({ theme, color, shade: 0 }),
        color: getThemeColor({ theme, color, shade: 6 }),
      },

      '&:active': {
        backgroundColor: getThemeColor({ theme, color, shade: 1 }),
      },
    }),
  }),
  { theming }
);
