import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  getSizeValue,
  getFontStyles,
  getSharedColorScheme,
  getFocusStyles,
} from '@mantine/styles';

interface AvatarStyles {
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

export default createStyles((theme, { size, radius, color }: AvatarStyles) => ({
  root: {
    ...getFocusStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    position: 'relative',
    userSelect: 'none',
    overflow: 'hidden',
    width: getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
    borderRadius: radius ? getSizeValue({ size: radius, sizes: theme.radius }) : size,
  },

  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    display: 'block',
  },

  placeholder: {
    ...getFontStyles(theme),
    fontSize: getSizeValue({ size, sizes }) / 2.5,
    color: getSharedColorScheme({ theme, color, variant: 'light' }).color,
    fontWeight: 700,
    backgroundColor: getSharedColorScheme({ theme, color, variant: 'light' }).background,
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
    color: getSharedColorScheme({ theme, color, variant: 'light' }).color,
  },
}));
