import {
  createStyles,
  MantineSize,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
  MantineGradient,
} from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

export type ButtonVariant =
  | 'filled'
  | 'outline'
  | 'light'
  | 'gradient'
  | 'white'
  | 'default'
  | 'subtle';

export interface ButtonStylesParams {
  color: MantineColor;
  size: MantineSize;
  radius: MantineNumberSize;
  fullWidth: boolean;
  compact: boolean;
  gradient: MantineGradient;
  variant: ButtonVariant;
}

export const sizes = {
  xs: { height: INPUT_SIZES.xs, padding: '0 14px' },
  sm: { height: INPUT_SIZES.sm, padding: '0 18px' },
  md: { height: INPUT_SIZES.md, padding: '0 22px' },
  lg: { height: INPUT_SIZES.lg, padding: '0 26px' },
  xl: { height: INPUT_SIZES.xl, padding: '0 32px' },
  'compact-xs': { height: 22, padding: '0 7px' },
  'compact-sm': { height: 26, padding: '0 8px' },
  'compact-md': { height: 30, padding: '0 10px' },
  'compact-lg': { height: 34, padding: '0 12px' },
  'compact-xl': { height: 40, padding: '0 14px' },
};

const getSizeStyles = ({ compact, size }: { compact: boolean; size: MantineSize }) => {
  if (!compact) {
    return sizes[size];
  }

  return sizes[`compact-${size}`];
};

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
    backgroundImage: colors.background,
    color: colors.color,
    ...theme.fn.hover({
      backgroundColor: colors.hover,
    }),
  };
}

export default createStyles(
  (theme, { color, size, radius, fullWidth, compact, gradient, variant }: ButtonStylesParams) => ({
    root: {
      ...getSizeStyles({ compact, size }),
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

      '&:active': {
        transform: 'translateY(1px)',
      },

      '&[data-disabled]': {
        borderColor: 'transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        cursor: 'not-allowed',

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
