import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
  MantineGradient,
} from '@mantine/styles';

export const ACTION_ICON_VARIANTS = [
  'subtle',
  'filled',
  'outline',
  'light',
  'default',
  'transparent',
  'gradient',
] as const;

export type ActionIconVariant = typeof ACTION_ICON_VARIANTS[number];

export interface ActionIconStylesParams {
  color: MantineColor;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  variant: ActionIconVariant;
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
  variant: ActionIconVariant;
  theme: MantineTheme;
  color: MantineColor;
  gradient: MantineGradient;
}

function getVariantStyles({ variant, theme, color, gradient }: GetVariantStyles) {
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

  return {
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    color: colors.color,
    ...theme.fn.hover({
      backgroundColor: colors.hover,
    }),
  };
}

export default createStyles(
  (theme, { color, size, radius, variant, gradient }: ActionIconStylesParams) => ({
    root: {
      ...getVariantStyles({ variant, theme, color, gradient }),
      position: 'relative',
      height: theme.fn.size({ size, sizes }),
      minHeight: theme.fn.size({ size, sizes }),
      width: theme.fn.size({ size, sizes }),
      minWidth: theme.fn.size({ size, sizes }),
      borderRadius: theme.fn.radius(radius),
      padding: 0,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:active': theme.activeStyles,

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
