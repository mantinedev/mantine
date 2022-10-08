import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  CSSObject,
  MantineTheme,
  MantineGradient,
} from '@mantine/styles';

export const AVATAR_VARIANTS = ['filled', 'light', 'gradient', 'outline'] as const;

export type AvatarVariant = typeof AVATAR_VARIANTS[number];

export interface AvatarStylesParams {
  size: MantineNumberSize;
  radius: MantineNumberSize;
  color: MantineColor;
  withinGroup: boolean;
  spacing: MantineNumberSize;
  variant: AvatarVariant;
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
  (theme, { size, radius, color, withinGroup, spacing, variant, gradient }: AvatarStylesParams) => {
    const colors = theme.fn.variant({ variant, color, gradient });
    return {
      root: {
        ...theme.fn.focusStyles(),
        WebkitTapHighlightColor: 'transparent',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'block',
        userSelect: 'none',
        overflow: 'hidden',
        width: theme.fn.size({ size, sizes }),
        minWidth: theme.fn.size({ size, sizes }),
        height: theme.fn.size({ size, sizes }),
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
        fontSize: theme.fn.size({ size, sizes }) / 2.5,
        color: colors.color,
        fontWeight: 700,
        backgroundColor: colors.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        userSelect: 'none',
        backgroundImage: variant === 'gradient' ? colors.background : undefined,
        border: `${variant === 'gradient' ? 0 : 1}px solid ${colors.border}`,
        borderRadius: theme.fn.radius(radius),
      },

      placeholderIcon: {
        width: '70%',
        height: '70%',
        color: colors.color,
      },
    };
  }
);
