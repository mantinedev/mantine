import {
  createMemoStyles,
  MantineTheme,
  getSizeValue,
  MantineNumberSize,
  getFontStyles,
  getSharedColorScheme,
  getFocusStyles,
} from '../../theme';

export const sizes = {
  xs: 16,
  sm: 26,
  md: 38,
  lg: 56,
  xl: 84,
};

interface AvatarStyles {
  size: MantineNumberSize;
  radius: MantineNumberSize;
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  root: ({ size, radius, theme }: AvatarStyles) => ({
    ...getFocusStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    position: 'relative',
    userSelect: 'none',
    overflow: 'hidden',
    width: getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
    borderRadius: radius ? getSizeValue({ size: radius, sizes: theme.radius }) : size,
  }),

  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  placeholder: ({ theme, size, color }: AvatarStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'light' });

    return {
      ...getFontStyles(theme),
      fontSize: getSizeValue({ size, sizes }) / 2.5,
      color: colors.color,
      fontWeight: 700,
      backgroundColor: colors.background,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      userSelect: 'none',
    };
  },

  placeholderIcon: ({ theme, color }: AvatarStyles) => ({
    width: '70%',
    height: '70%',
    color: getSharedColorScheme({ theme, color, variant: 'light' }).color,
  }),
});
