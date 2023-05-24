import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  MantineGradient,
  MantineTheme,
  rem,
  getSize,
} from '@mantine/styles';

const BADGE_VARIANTS = ['light', 'filled', 'outline', 'dot', 'gradient'];

export interface BadgeStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  gradient: MantineGradient;
  fullWidth: boolean;
}

const sizes = {
  xs: { fontSize: rem(9), height: rem(16) },
  sm: { fontSize: rem(10), height: rem(18) },
  md: { fontSize: rem(11), height: rem(20) },
  lg: { fontSize: rem(13), height: rem(26) },
  xl: { fontSize: rem(16), height: rem(32) },
};

const dotSizes = {
  xs: rem(4),
  sm: rem(4),
  md: rem(6),
  lg: rem(8),
  xl: rem(10),
};

interface GetVariantStylesInput {
  theme: MantineTheme;
  variant: string;
  color: MantineColor;
  size: string | number;
  gradient: MantineGradient;
}

function getVariantStyles({ theme, variant, color, size, gradient }: GetVariantStylesInput) {
  if (!BADGE_VARIANTS.includes(variant)) {
    return null;
  }

  if (variant === 'dot') {
    const dotSize = getSize({ size, sizes: dotSizes });
    return {
      backgroundColor: 'transparent',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
      paddingLeft: `calc(${getSize({ size, sizes: theme.spacing })} / 1.5 - ${dotSize} / 2)`,

      '&::before': {
        content: '""',
        display: 'block',
        width: dotSize,
        height: dotSize,
        borderRadius: dotSize,
        backgroundColor: theme.fn.themeColor(
          color,
          theme.colorScheme === 'dark' ? 4 : theme.fn.primaryShade('light'),
          true
        ),
        marginRight: dotSize,
      },
    };
  }

  const colors = theme.fn.variant({ color, variant, gradient });

  return {
    background: colors.background,
    color: colors.color,
    border: `${rem(variant === 'gradient' ? 0 : 1)} solid ${colors.border}`,
  };
}

export default createStyles(
  (theme, { color, radius, gradient, fullWidth }: BadgeStylesParams, { variant, size }) => {
    const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;

    return {
      leftSection: {
        marginRight: `calc(${theme.spacing.xs} / 2)`,
      },

      rightSection: {
        marginLeft: `calc(${theme.spacing.xs} / 2)`,
      },

      inner: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },

      root: {
        ...theme.fn.focusStyles(),
        ...theme.fn.fontStyles(),
        fontSize,
        height,
        WebkitTapHighlightColor: 'transparent',
        lineHeight: `calc(${height} - ${rem(2)})`,
        textDecoration: 'none',
        padding: `0 calc(${getSize({ size, sizes: theme.spacing })} / 1.5)`,
        boxSizing: 'border-box',
        display: fullWidth ? 'flex' : 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        textTransform: 'uppercase',
        borderRadius: theme.fn.radius(radius),
        fontWeight: 700,
        letterSpacing: rem(0.25),
        cursor: 'inherit',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        ...getVariantStyles({ theme, variant, color, size, gradient }),
      },
    };
  }
);
