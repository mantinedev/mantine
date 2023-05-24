import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  MantineGradient,
  MantineTheme,
  rem,
  getSize,
} from '@mantine/styles';

export interface ThemeIconStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  variant: string;
  gradient: MantineGradient;
}

const sizes = {
  xs: rem(16),
  sm: rem(20),
  md: rem(26),
  lg: rem(32),
  xl: rem(40),
};

const THEME_ICON_VARIANTS = ['filled', 'light', 'gradient', 'outline', 'default'];

interface GetVariantStylesInput {
  theme: MantineTheme;
  variant: string;
  color: MantineColor;
  gradient: MantineGradient;
}

function getVariantStyles({ theme, variant, color, gradient }: GetVariantStylesInput) {
  if (!THEME_ICON_VARIANTS.includes(variant)) {
    return null;
  }

  const colors = theme.fn.variant({
    variant,
    color: color || theme.primaryColor,
    gradient,
    primaryFallback: false,
  });

  return {
    backgroundColor: colors.background,
    color: colors.color,
    backgroundImage: variant === 'gradient' ? colors.background : undefined,
    border: `${rem(variant === 'gradient' ? 0 : 1)} solid ${colors.border}`,
  };
}

export default createStyles(
  (theme, { color, radius, gradient }: ThemeIconStylesParams, { variant, size }) => {
    const iconSize = getSize({ size, sizes });

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
        ...getVariantStyles({ theme, variant, gradient, color }),
      },
    };
  }
);
