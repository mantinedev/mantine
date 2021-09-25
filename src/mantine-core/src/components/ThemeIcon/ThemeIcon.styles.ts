import {
  createStyles,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getSharedColorScheme,
  MantineColor,
} from '@mantine/styles';

export type ThemeIconVariant = 'filled' | 'light' | 'gradient';

interface ThemeIconStyles {
  color: MantineColor;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  variant: ThemeIconVariant;
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

export default createStyles(
  (
    theme,
    { color, size, radius, gradientFrom, gradientTo, gradientDeg, variant }: ThemeIconStyles
  ) => {
    const colors = getSharedColorScheme({
      theme,
      color,
      variant,
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    const iconSize = getSizeValue({ size, sizes });

    return {
      root: {
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
        backgroundColor: colors.background,
        color: colors.color,
        backgroundImage: variant === 'gradient' ? colors.background : null,
      },
    };
  }
);
