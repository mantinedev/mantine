import {
  createStyles,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
  getThemeColor,
  getSharedColorScheme,
  hexToRgba,
  MantineColor,
  MantineTheme,
} from '@mantine/styles';

export type ActionIconVariant =
  | 'hover'
  | 'filled'
  | 'outline'
  | 'light'
  | 'default'
  | 'transparent';

interface ActionIconStyles {
  color: MantineColor;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  variant: ActionIconVariant;
}

export const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44,
};

interface GetVariantStyles {
  variant: ActionIconVariant;
  theme: MantineTheme;
  color: MantineColor;
}

function getVariantStyles({ variant, theme, color }: GetVariantStyles) {
  if (variant === 'hover' || variant === 'transparent') {
    return {
      border: '1px solid transparent',
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 7 }),
      backgroundColor: 'transparent',

      '&:hover':
        variant === 'transparent'
          ? {}
          : {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : getThemeColor({ theme, color, shade: 0 }),
            },
    };
  }

  const colors = getSharedColorScheme({ theme, color, variant });

  return {
    backgroundColor: colors.background,
    color: colors.color,
    border: `1px solid ${colors.border}`,
  };
}

export default createStyles((theme, { color, size, radius, variant }: ActionIconStyles) => ({
  root: {
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    ...getVariantStyles({ variant, theme, color }),
    position: 'relative',
    appearance: 'none',
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
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

    '&:disabled': {
      color: theme.colors.gray[theme.colorScheme === 'dark' ? 6 : 4],
      cursor: 'not-allowed',

      backgroundColor: getThemeColor({
        theme,
        color: 'gray',
        shade: theme.colorScheme === 'dark' ? 8 : 1,
      }),
    },

    '&:not(:disabled):active': {
      transform: 'translateY(1px)',
    },
  },

  loading: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -1,
      left: -1,
      right: -1,
      bottom: -1,
      backgroundColor:
        theme.colorScheme === 'dark'
          ? hexToRgba(theme.colors.dark[7], 0.5)
          : 'rgba(255, 255, 255, .5)',
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }) - 1,
      cursor: 'not-allowed',
    },
  },
}));
