import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineSize,
  getFontStyles,
  getThemeColor,
  getFocusStyles,
  getSizeValue,
} from '@mantine/theme';

export type BadgeVariant = 'light' | 'filled' | 'outline';

interface BadgeStylesProps {
  variant: BadgeVariant;
  color: string;
  theme: MantineTheme;
  size: MantineSize;
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
  badge: ({ theme, size, variant, fullWidth, color }: BadgeStylesProps) => {
    const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;
    return {
      ...getFocusStyles(theme),
      ...getFontStyles(theme),
      fontSize,
      height,
      lineHeight: `${height - 2}px`,
      backgroundColor:
        variant === 'outline'
          ? 'transparent'
          : getThemeColor({ theme, color, shade: variant === 'light' ? 0 : 6 }),
      textShadow:
        variant === 'filled' ? `1px 1px 0 ${getThemeColor({ theme, color, shade: 8 })}` : 'none',
      color:
        variant === 'filled'
          ? theme.white
          : getThemeColor({ theme, color, shade: variant === 'outline' ? 6 : 9 }),
      border: `1px solid ${
        variant === 'outline' ? getThemeColor({ theme, color, shade: 6 }) : 'transparent'
      }`,
      textDecoration: 'none',
      textAlign: 'center',
      padding: [0, getSizeValue({ size, sizes: theme.spacing }) / 1.5],
      boxSizing: 'border-box',
      display: fullWidth ? 'block' : 'inline-block',
      width: fullWidth ? '100%' : 'auto',
      textTransform: 'uppercase',
      borderRadius: 100,
      fontWeight: 700,
      letterSpacing: 0.25,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'default',
    };
  },
});
