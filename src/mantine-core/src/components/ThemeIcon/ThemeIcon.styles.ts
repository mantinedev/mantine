import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getThemeColor,
  hexToRgba,
  getFontStyles,
} from '../../theme';

interface ThemeIconStyles {
  theme: MantineTheme;
  color: string;
  size: MantineNumberSize;
  radius: MantineNumberSize;
}

export const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40,
};

export default createMemoStyles({
  light: ({ theme, color }: ThemeIconStyles) => ({
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
      theme.colorScheme === 'dark' ? 0.3 : 1
    ),
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
  }),

  filled: ({ theme, color }: ThemeIconStyles) => ({
    backgroundColor: getThemeColor({ theme, color, shade: 7 }),
    color: theme.white,
    textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,
  }),

  root: ({ theme, size, radius }: ThemeIconStyles) => {
    const iconSize = getSizeValue({ size, sizes });

    return {
      ...getFontStyles(theme),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      width: iconSize,
      height: iconSize,
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    };
  },
});
