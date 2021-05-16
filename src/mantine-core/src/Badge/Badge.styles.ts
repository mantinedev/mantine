import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineSize,
  MantineNumberSize,
  getFontStyles,
  getThemeColor,
  getFocusStyles,
  getSizeValue,
  hexToRgba,
} from '@mantine/theme';

interface BadgeStylesProps {
  color: string;
  theme: MantineTheme;
  size: MantineSize;
  radius: MantineNumberSize;
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

export const heights = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = sizes[key].height;
  return acc;
}, {} as Record<MantineSize, number>);

export default createUseStyles({
  leftSection: ({ theme }: BadgeStylesProps) => ({
    marginRight: theme.spacing.xs / 2,
  }),

  rightSection: ({ theme }: BadgeStylesProps) => ({
    marginLeft: theme.spacing.xs / 2,
  }),

  inner: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  badge: ({ theme, size, fullWidth, radius }: BadgeStylesProps) => {
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

  light: ({ theme, color }: BadgeStylesProps) => ({
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
      theme.colorScheme === 'dark' ? 0.3 : 1
    ),
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
  }),

  filled: ({ theme, color }: BadgeStylesProps) => ({
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 7 }),
      theme.colorScheme === 'dark' ? 0.65 : 1
    ),
    color: theme.white,
    textShadow:
      theme.colorScheme === 'dark'
        ? 'none'
        : `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,
  }),

  outline: ({ theme, color }: BadgeStylesProps) => ({
    backgroundColor: 'transparent',
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 8 }),
    borderColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 8 }),
      0.55
    ),
  }),
});
