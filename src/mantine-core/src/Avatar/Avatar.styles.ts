import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  CSSObject,
  MantineTheme,
  MantineGradient,
} from '@mantine/styles';

export const AVATAR_VARIANTS = ['filled', 'light', 'gradient', 'outline'];

export interface AvatarStylesParams {
  radius: MantineNumberSize;
  color: MantineColor;
  withinGroup: boolean;
  spacing: MantineNumberSize;
  gradient: MantineGradient;
}

export const sizes = {
  xs: 16,
  sm: 26,
  md: 38,
  lg: 56,
  xl: 84,
};

interface GetGroupStylesInput {
  withinGroup: boolean;
  spacing: MantineNumberSize;
  theme: MantineTheme;
}

function getGroupStyles({ withinGroup, spacing, theme }: GetGroupStylesInput): CSSObject {
  if (!withinGroup) {
    return null;
  }

  return {
    marginLeft: -theme.fn.size({ size: spacing, sizes: theme.spacing }),
    backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  };
}

export default createStyles(
  (theme, { radius, withinGroup, spacing }: AvatarStylesParams) => ({
    root: {
      ...theme.fn.focusStyles(),
      WebkitTapHighlightColor: 'transparent',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'block',
      userSelect: 'none',
      overflow: 'hidden',
      borderRadius: theme.fn.radius(radius),
      textDecoration: 'none',
      border: 0,
      backgroundColor: 'transparent',
      padding: 0,
      ...getGroupStyles({ withinGroup, spacing, theme }),
    },

    image: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      display: 'block',
    },

    placeholder: {
      ...theme.fn.fontStyles(),
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      userSelect: 'none',
      borderRadius: theme.fn.radius(radius),
    },

    placeholderIcon: {
      width: '70%',
      height: '70%',
    },
  }),
  (theme, { color, gradient }: AvatarStylesParams) => ({
    variants: (variant) => {
      const colors = theme.fn.variant({ variant, color, gradient });

      if (AVATAR_VARIANTS.includes(variant)) {
        return {
          placeholder: {
            color: colors.color,
            backgroundColor: colors.background,
            backgroundImage: variant === 'gradient' ? colors.background : undefined,
            border: `${variant === 'gradient' ? 0 : 1}px solid ${colors.border}`,
          },

          placeholderIcon: {
            color: colors.color,
          },
        };
      }

      return null;
    },

    sizes: (size) => ({
      root: {
        width: theme.fn.size({ size, sizes }),
        minWidth: theme.fn.size({ size, sizes }),
        height: theme.fn.size({ size, sizes }),
      },
      placeholder: {
        fontSize: theme.fn.size({ size, sizes }) / 2.5,
      },
    }),
  })
);
