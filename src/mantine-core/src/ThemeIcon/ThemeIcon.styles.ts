import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue, getThemeColor } from '@mantine/theme';

interface ThemeIconStylesProps {
  theme: MantineTheme;
  color: string;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  variant: 'filled' | 'light';
}

export const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40,
};

export default createUseStyles({
  themeIcon: ({ theme, color, size, radius, variant }: ThemeIconStylesProps) => {
    const iconSize = getSizeValue({ size, sizes });

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      backgroundColor: getThemeColor({ theme, color, shade: variant === 'filled' ? 5 : 1 }),
      color: variant === 'filled' ? theme.white : getThemeColor({ theme, color, shade: 7 }),
      width: iconSize,
      height: iconSize,
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    };
  },
});
