import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
  MantineGradient,
  CSSObject,
  rem,
  getSize,
} from '@mantine/styles';

export const ACTION_ICON_VARIANTS = [
  'subtle',
  'filled',
  'outline',
  'light',
  'default',
  'transparent',
  'gradient',
];

export interface ActionIconStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  gradient: MantineGradient;
}

export const sizes = {
  xs: rem(18),
  sm: rem(22),
  md: rem(28),
  lg: rem(34),
  xl: rem(44),
};

interface GetVariantStyles {
  variant: string;
  theme: MantineTheme;
  color: MantineColor;
  gradient: MantineGradient;
}

function getVariantStyles({ variant, theme, color, gradient }: GetVariantStyles): CSSObject {
  const colors = theme.fn.variant({ color, variant, gradient });

  if (variant === 'gradient') {
    return {
      border: 0,
      backgroundImage: colors.background,
      color: colors.color,

      '&:hover': theme.fn.hover({
        backgroundSize: '200%',
      }),
    };
  }

  if (ACTION_ICON_VARIANTS.includes(variant)) {
    return {
      border: `${rem(1)} solid ${colors.border}`,
      backgroundColor: colors.background,
      color: colors.color,
      ...theme.fn.hover({
        backgroundColor: colors.hover,
      }),
    };
  }

  return null;
}

export default createStyles(
  (theme, { radius, color, gradient }: ActionIconStylesParams, { variant, size }) => ({
    root: {
      position: 'relative',
      borderRadius: theme.fn.radius(radius),
      padding: 0,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: getSize({ size, sizes }),
      minHeight: getSize({ size, sizes }),
      width: getSize({ size, sizes }),
      minWidth: getSize({ size, sizes }),
      ...getVariantStyles({ variant, theme, color, gradient }),

      '&:active': theme.activeStyles,

      '& [data-action-icon-loader]': {
        maxWidth: '70%',
      },

      '&:disabled, &[data-disabled]': {
        color: theme.colors.gray[theme.colorScheme === 'dark' ? 6 : 4],
        cursor: 'not-allowed',
        backgroundColor:
          variant === 'transparent'
            ? undefined
            : theme.fn.themeColor('gray', theme.colorScheme === 'dark' ? 8 : 1),
        borderColor:
          variant === 'transparent'
            ? undefined
            : theme.fn.themeColor('gray', theme.colorScheme === 'dark' ? 8 : 1),
        backgroundImage: 'none',
        pointerEvents: 'none',

        '&:active': {
          transform: 'none',
        },
      },

      '&[data-loading]': {
        pointerEvents: 'none',

        '&::before': {
          content: '""',
          ...theme.fn.cover(rem(-1)),
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors.dark[7], 0.5)
              : 'rgba(255, 255, 255, .5)',
          borderRadius: theme.fn.radius(radius),
          cursor: 'not-allowed',
        },
      },
    },
  })
);
