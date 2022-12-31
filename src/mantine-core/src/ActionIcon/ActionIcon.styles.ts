import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
  MantineGradient,
  CSSObject,
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
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44,
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
      border: `1px solid ${colors.border}`,
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
      height: theme.fn.size({ size, sizes }),
      minHeight: theme.fn.size({ size, sizes }),
      width: theme.fn.size({ size, sizes }),
      minWidth: theme.fn.size({ size, sizes }),
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
          position: 'absolute',
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
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
