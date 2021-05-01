import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
  getThemeColor,
} from '@mantine/theme';

interface ActionIconStylesProps {
  color: string;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  theme: MantineTheme;
}

export const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44,
};

export default createUseStyles(
  {
    filled: ({ theme, color }: ActionIconStylesProps) => ({
      backgroundColor: getThemeColor({ theme, color, shade: 6 }),
      color: theme.white,

      '&:not(:disabled):hover': {
        backgroundColor: getThemeColor({ theme, color, shade: 7 }),
      },

      '&:disabled': {
        backgroundColor: getThemeColor({
          theme,
          color: 'gray',
          shade: theme.colorScheme === 'dark' ? 8 : 1,
        }),
      },
    }),

    light: ({ theme, color }: ActionIconStylesProps) => ({
      backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 0 }),
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : getThemeColor({ theme, color, shade: 9 }),

      '&:not(:disabled):hover': {
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 5 : 1,
        }),
      },

      '&:disabled': {
        backgroundColor: getThemeColor({
          theme,
          color: 'gray',
          shade: theme.colorScheme === 'dark' ? 8 : 1,
        }),
      },
    }),

    hover: ({ theme, color }: ActionIconStylesProps) => ({
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      backgroundColor: 'transparent',

      '&:not(:disabled):hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : getThemeColor({ theme, color, shade: 0 }),
      },
    }),

    transparent: ({ theme, color }: ActionIconStylesProps) => ({
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      backgroundColor: 'transparent',
    }),

    actionIcon: ({ radius, theme, size }: ActionIconStylesProps) => ({
      ...getFocusStyles(theme),
      ...getFontStyles(theme),
      WebkitTapHighlightColor: 'transparent',
      border: '1px solid transparent',
      boxSizing: 'border-box',
      height: getSizeValue({ size, sizes }),
      minHeight: getSizeValue({ size, sizes }),
      width: getSizeValue({ size, sizes }),
      minWidth: getSizeValue({ size, sizes }),
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      padding: 0,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'color 100ms ease, background-color 100ms ease',

      '&:not(:disabled):active': {
        transform: 'translateY(1px)',
      },

      '&:disabled': {
        color: theme.colors.gray[theme.colorScheme === 'dark' ? 6 : 4],
        cursor: 'not-allowed',
      },
    }),

    outline: ({ theme, color }: ActionIconStylesProps) => ({
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      backgroundColor: 'transparent',
      borderColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      }),

      '&:not(:disabled):hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : getThemeColor({ theme, color, shade: 0 }),
      },

      '&:disabled': {
        borderColor: theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 3],
      },
    }),
  },
  { link: true }
);
