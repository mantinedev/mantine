import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

export type ThemeIconVariant = 'filled' | 'light' | 'gradient' | 'outline';

export interface ThemeIconStylesParams {
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
    { color, size, radius, gradientFrom, gradientTo, gradientDeg, variant }: ThemeIconStylesParams
  ) => {
    const colors = theme.fn.variant({
      variant,
      color,
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    const iconSize = theme.fn.size({ size, sizes });

    return {
      root: {
        ...theme.fn.fontStyles(),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        width: iconSize,
        height: iconSize,
        minWidth: iconSize,
        minHeight: iconSize,
        borderRadius: theme.fn.radius(radius),
        backgroundColor: colors.background,
        color: colors.color,
        backgroundImage: variant === 'gradient' ? colors.background : null,
        border: `1px solid ${colors.border}`,
      },
    };
  }
);
