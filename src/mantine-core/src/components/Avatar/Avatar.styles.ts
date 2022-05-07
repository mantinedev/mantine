import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

export interface AvatarStylesParams {
  size: MantineNumberSize;
  radius: MantineNumberSize;
  color: MantineColor;
}

export const sizes = {
  xs: 16,
  sm: 26,
  md: 38,
  lg: 56,
  xl: 84,
};

export default createStyles((theme, { size, radius, color }: AvatarStylesParams) => {
  const colors = theme.fn.variant({ variant: 'light', color });
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
    },

    placeholderIcon: {
      width: '70%',
      height: '70%',
      color: colors.color,
    },
  };
});
