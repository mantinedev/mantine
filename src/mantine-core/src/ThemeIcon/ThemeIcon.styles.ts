import { createStyles, MantineNumberSize, MantineColor, MantineGradient } from '@mantine/styles';

export type ThemeIconVariant = 'filled' | 'light' | 'gradient' | 'outline' | 'default';

export interface ThemeIconStylesParams {
  color: MantineColor;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  variant: ThemeIconVariant;
  gradient: MantineGradient;
}

const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40,
};

export default createStyles(
  (theme, { color, size, radius, gradient, variant }: ThemeIconStylesParams) => {
    const colors = theme.fn.variant({
      variant,
      color: color || theme.primaryColor,
      gradient,
      primaryFallback: false,
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
        backgroundImage: variant === 'gradient' ? colors.background : undefined,
        border: `${variant === 'gradient' ? 0 : 1}px solid ${colors.border}`,
      },
    };
  }
);
