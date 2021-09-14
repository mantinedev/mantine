import {
  createMemoStyles,
  MantineTheme,
  MantineSize,
  MantineNumberSize,
  getFontStyles,
  getThemeColor,
  getFocusStyles,
  getSizeValue,
  getSharedColorScheme,
  MantineColor,
} from '../../theme';

interface BadgeStyles {
  color: MantineColor;
  theme: MantineTheme;
  size: MantineSize;
  radius: MantineNumberSize;
  gradientFrom: string;
  gradientTo: string;
  gradientDeg: number;
  fullWidth: boolean;
}

const sizes = {
  xs: {
    fontSize: 9,
    height: 16,
  },
  sm: {
    fontSize: 10,
    height: 18,
  },
  md: {
    fontSize: 11,
    height: 20,
  },
  lg: {
    fontSize: 13,
    height: 26,
  },
  xl: {
    fontSize: 16,
    height: 32,
  },
} as const;

const dotSizes = {
  xs: 4,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
};

export const heights = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = sizes[key].height;
  return acc;
}, {} as Record<MantineSize, number>);

export default createMemoStyles({
  leftSection: ({ theme }: BadgeStyles) => ({
    marginRight: theme.spacing.xs / 2,
  }),

  rightSection: ({ theme }: BadgeStyles) => ({
    marginLeft: theme.spacing.xs / 2,
  }),

  inner: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  root: ({ theme, size, fullWidth, radius }: BadgeStyles) => {
    const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;
    return {
      ...getFocusStyles(theme),
      ...getFontStyles(theme),
      fontSize,
      height,
      WebkitTapHighlightColor: 'transparent',
      lineHeight: `${height - 2}px`,
      border: '1px solid transparent',
      textDecoration: 'none',
      padding: [0, getSizeValue({ size, sizes: theme.spacing }) / 1.5],
      boxSizing: 'border-box',
      display: fullWidth ? 'flex' : 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : 'auto',
      textTransform: 'uppercase',
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      fontWeight: 700,
      letterSpacing: 0.25,
      cursor: 'default',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    };
  },

  light: ({ theme, color }: BadgeStyles) => {
    const colors = getSharedColorScheme({ color, theme, variant: 'light' });

    return {
      backgroundColor: colors.background,
      color: colors.color,
    };
  },

  filled: ({ theme, color }: BadgeStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'filled' });

    return {
      backgroundColor: colors.background,
      color: colors.color,
    };
  },

  outline: ({ theme, color }: BadgeStyles) => {
    const colors = getSharedColorScheme({ theme, color, variant: 'outline' });

    return {
      backgroundColor: colors.background,
      color: colors.color,
      border: `1px solid ${colors.border}`,
    };
  },

  gradient: ({ theme, gradientDeg, gradientTo, gradientFrom }: BadgeStyles) => {
    const colors = getSharedColorScheme({
      theme,
      variant: 'gradient',
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });
    return {
      backgroundImage: colors.background,
      color: colors.color,
      border: 0,
    };
  },

  dot: ({ theme, color, size }: BadgeStyles) => {
    const dotSize = getSizeValue({ size, sizes: dotSizes });

    return {
      backgroundColor: 'transparent',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3],
      paddingLeft: getSizeValue({ size, sizes: theme.spacing }) / 1.5 - dotSize / 2,

      '&::before': {
        content: '""',
        display: 'block',
        width: dotSize,
        height: dotSize,
        borderRadius: dotSize,
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 4 : 6,
        }),
        marginRight: dotSize,
      },
    };
  },
});
