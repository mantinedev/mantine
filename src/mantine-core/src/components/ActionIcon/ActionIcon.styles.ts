import {
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
  getThemeColor,
  createMemoStyles,
  hexToRgba,
} from '../../theme';

interface ActionIconStyles {
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

export default createMemoStyles({
  filled: ({ theme, color }: ActionIconStyles) => ({
    backgroundColor: getThemeColor({ theme, color, shade: 7 }),
    color: theme.white,
    textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,

    '&:disabled': {
      backgroundColor: getThemeColor({
        theme,
        color: 'gray',
        shade: theme.colorScheme === 'dark' ? 8 : 1,
      }),
    },
  }),

  light: ({ theme, color }: ActionIconStyles) => ({
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
      theme.colorScheme === 'dark' ? 0.3 : 1
    ),
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),

    '&:not(:disabled):hover': {
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 1 }),
        theme.colorScheme === 'dark' ? 0.65 : 1
      ),
    },

    '&:disabled': {
      backgroundColor: getThemeColor({
        theme,
        color: 'gray',
        shade: theme.colorScheme === 'dark' ? 8 : 1,
      }),
    },
  }),

  hover: ({ theme, color }: ActionIconStyles) => ({
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 7 }),
    backgroundColor: 'transparent',

    '&:not(:disabled):hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : getThemeColor({ theme, color, shade: 0 }),
    },
  }),

  transparent: ({ theme, color }: ActionIconStyles) => ({
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 5 : 7 }),
    backgroundColor: 'transparent',
  }),

  root: ({ radius, theme, size }: ActionIconStyles) => ({
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    appearance: 'none',
    WebkitAppearance: 'none',
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

  outline: ({ theme, color }: ActionIconStyles) => ({
    backgroundColor: 'transparent',
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 7 }),
    border: `1px solid ${getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === 'dark' ? 4 : 7,
    })}`,

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
});
