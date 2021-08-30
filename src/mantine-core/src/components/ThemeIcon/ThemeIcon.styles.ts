import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getThemeColor,
  getFontStyles,
  getSharedColorScheme,
} from '../../theme';

interface ThemeIconStyles {
  theme: MantineTheme;
  color: string;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  gradientFrom: string;
  gradientTo: string;
  gradientDeg: number;
}

export const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40,
};

export default createMemoStyles({
  light: ({ theme, color }: ThemeIconStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'light' });

    return {
      backgroundColor: colors.background,
      color: colors.color,
    };
  },

  filled: ({ theme, color }: ThemeIconStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'filled' });

    return {
      backgroundColor: colors.background,
      color: colors.color,
      textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,
    };
  },

  gradient: ({ theme, gradientDeg, gradientTo, gradientFrom }: ThemeIconStyles) => {
    const colors = getSharedColorScheme({
      theme,
      variant: 'gradient',
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    return {
      backgroundImage: colors.background,
      color: colors.color,
      border: 0,
    };
  },

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
      minWidth: iconSize,
      minHeight: iconSize,
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    };
  },
});
