import { createStyles } from '@mantine/tss';
import {
  MantineSize,
  MantineNumberSize,
  getFontStyles,
  getSizeValue,
  getFocusStyles,
  getThemeColor,
  MantineSizes,
  getSharedColorScheme,
  hexToRgba,
  MantineColor,
} from '@mantine/theme';
import { INPUT_SIZES } from '../Input/Input';

export type ButtonVariant =
  | 'link'
  | 'filled'
  | 'outline'
  | 'light'
  | 'gradient'
  | 'white'
  | 'default';

interface ButtonStylesProps {
  color: MantineColor;
  size: MantineSize;
  radius: MantineNumberSize;
  fullWidth: boolean;
  compact: boolean;
  gradientFrom: string;
  gradientTo: string;
  gradientDeg: number;
  variant: ButtonVariant;
}

const sizes = {
  xs: {
    height: INPUT_SIZES.xs,
    padding: '0 14px',
  },

  sm: {
    height: INPUT_SIZES.sm,
    padding: '0 18px',
  },

  md: {
    height: INPUT_SIZES.md,
    padding: '0 22px',
  },

  lg: {
    height: INPUT_SIZES.lg,
    padding: '0 26px',
  },

  xl: {
    height: INPUT_SIZES.xl,
    padding: '0 32px',
  },

  'compact-xs': {
    height: 22,
    padding: '0 7px',
  },

  'compact-sm': {
    height: 26,
    padding: '0 8px',
  },

  'compact-md': {
    height: 30,
    padding: '0 10px',
  },

  'compact-lg': {
    height: 34,
    padding: '0 12px',
  },

  'compact-xl': {
    height: 40,
    padding: '0 14px',
  },
};

export const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {} as MantineSizes);

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

export default createStyles(
  (
    theme,
    {
      color,
      size,
      radius,
      fullWidth,
      compact,
      gradientFrom,
      variant,
      gradientTo,
      gradientDeg,
    }: ButtonStylesProps,
    getRef
  ) => {
    const loading = {
      ref: getRef(),
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        backgroundColor:
          theme.colorScheme === 'dark'
            ? hexToRgba(theme.colors.dark[7], 0.5)
            : 'rgba(255, 255, 255, .5)',
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }) - 1,
        cursor: 'not-allowed',
      },
    } as const;

    const colors = getSharedColorScheme({
      theme,
      color,
      variant: variant as any,
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    return {
      loading,

      root: {
        ...getSizeStyles({ compact, size }),
        ...getFontStyles(theme),
        ...getFocusStyles(theme),
        ...getWidthStyles(fullWidth),
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        fontWeight: 600,
        position: 'relative',
        lineHeight: 1,
        fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.background,
        backgroundImage: variant === 'gradient' ? colors.background : null,
        color: colors.color,
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        boxSizing: 'border-box',
        textDecoration: 'none',
        cursor: 'pointer',
        appearance: 'none',
        WebkitAppearance: 'none',

        '&:not(:disabled):active': {
          transform: 'translateY(1px)',
        },

        [`&:not(.${loading.ref}):disabled`]: {
          borderColor: 'transparent',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
          cursor: 'not-allowed',
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
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        height: '100%',
        overflow: 'hidden',
      },

      link: {
        padding: 0,
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        backgroundColor: 'transparent',
        border: 0,
        display: 'inline-block',
        color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 7 }),
        cursor: 'pointer',
        height: 'auto',
        lineHeight: theme.lineHeight,
        fontWeight: 400,

        '&:hover': {
          textDecoration: 'underline',
        },

        '&:disabled': {
          color: theme.colors.gray[5],
          cursor: 'not-allowed',

          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    };
  }
);
