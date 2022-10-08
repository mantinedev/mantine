import {
  createStyles,
  MantineSize,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
  MantineGradient,
  CSSObject,
} from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

export const BUTTON_VARIANTS = [
  'filled',
  'outline',
  'light',
  'white',
  'default',
  'subtle',
  'gradient',
] as const;

export type ButtonVariant = typeof BUTTON_VARIANTS[number];

export interface ButtonStylesParams {
  color: MantineColor;
  size: MantineSize;
  radius: MantineNumberSize;
  fullWidth: boolean;
  compact: boolean;
  gradient: MantineGradient;
  variant: ButtonVariant;
  withRightIcon: boolean;
  withLeftIcon: boolean;
}

export const sizes = {
  xs: { height: INPUT_SIZES.xs, paddingLeft: 14, paddingRight: 14 },
  sm: { height: INPUT_SIZES.sm, paddingLeft: 18, paddingRight: 18 },
  md: { height: INPUT_SIZES.md, paddingLeft: 22, paddingRight: 22 },
  lg: { height: INPUT_SIZES.lg, paddingLeft: 26, paddingRight: 26 },
  xl: { height: INPUT_SIZES.xl, paddingLeft: 32, paddingRight: 32 },
  'compact-xs': { height: 22, paddingLeft: 7, paddingRight: 7 },
  'compact-sm': { height: 26, paddingLeft: 8, paddingRight: 8 },
  'compact-md': { height: 30, paddingLeft: 10, paddingRight: 10 },
  'compact-lg': { height: 34, paddingLeft: 12, paddingRight: 12 },
  'compact-xl': { height: 40, paddingLeft: 14, paddingRight: 14 },
};

interface GetSizeStyles {
  compact: boolean;
  size: MantineSize;
  withLeftIcon: boolean;
  withRightIcon: boolean;
}

function getSizeStyles({ compact, size, withLeftIcon, withRightIcon }: GetSizeStyles): CSSObject {
  if (compact) {
    return sizes[`compact-${size}`];
  }

  const _sizes = sizes[size];

  return {
    ..._sizes,
    paddingLeft: withLeftIcon ? _sizes.paddingLeft / 1.5 : _sizes.paddingLeft,
    paddingRight: withRightIcon ? _sizes.paddingRight / 1.5 : _sizes.paddingRight,
  };
}

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? 'block' : 'inline-block',
  width: fullWidth ? '100%' : 'auto',
});

interface GetVariantStyles {
  theme: MantineTheme;
  color: MantineColor;
  variant: ButtonVariant;
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
  (
    theme,
    {
      color,
      size,
      radius,
      fullWidth,
      compact,
      gradient,
      variant,
      withLeftIcon,
      withRightIcon,
    }: ButtonStylesParams
  ) => ({
    root: {
      ...getSizeStyles({ compact, size, withLeftIcon, withRightIcon }),
      ...theme.fn.fontStyles(),
      ...theme.fn.focusStyles(),
      ...getWidthStyles(fullWidth),
      borderRadius: theme.fn.radius(radius),
      fontWeight: 600,
      position: 'relative',
      lineHeight: 1,
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      userSelect: 'none',
      cursor: 'pointer',
      ...getVariantStyles({ variant, theme, color, gradient }),

      '&:active': theme.activeStyles,

      '&:disabled, &[data-disabled]': {
        borderColor: 'transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        cursor: 'not-allowed',
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

    icon: {
      display: 'flex',
      alignItems: 'center',
    },

    leftIcon: {
      marginRight: 10,
    },

    rightIcon: {
      marginLeft: 10,
    },

    inner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      overflow: 'visible',
    },

    label: {
      whiteSpace: 'nowrap',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    },
  })
);
