import {
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
  getThemeColor,
  createMemoStyles,
  getSharedColorScheme,
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
  filled: ({ theme, color }: ActionIconStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'filled' });

    return {
      backgroundColor: colors.background,
      color: colors.color,
      textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,

      '&:disabled': {
        backgroundColor: getThemeColor({
          theme,
          color: 'gray',
          shade: theme.colorScheme === 'dark' ? 8 : 1,
        }),
      },
    };
  },

  light: ({ theme, color }: ActionIconStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'light' });

    return {
      backgroundColor: colors.background,
      color: colors.color,

      '&:disabled': {
        backgroundColor: getThemeColor({
          theme,
          color: 'gray',
          shade: theme.colorScheme === 'dark' ? 8 : 1,
        }),
      },
    };
  },

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

  outline: ({ theme, color }: ActionIconStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'outline' });

    return {
      backgroundColor: colors.background,
      color: colors.color,
      border: `1px solid ${colors.border}`,

      '&:disabled': {
        borderColor: theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 3],
      },
    };
  },
});
