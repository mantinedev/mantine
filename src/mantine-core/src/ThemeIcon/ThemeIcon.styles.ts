import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getThemeColor,
  hexToRgba,
} from '@mantine/theme';

interface ThemeIconStylesProps {
  theme: MantineTheme;
  color: string;
  size: MantineNumberSize;
  radius: MantineNumberSize;
}

export const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40,
};

export default createUseStyles({
  light: ({ theme, color }: ThemeIconStylesProps) => ({
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 1 }),
      theme.colorScheme === 'dark' ? 0.3 : 1
    ),
  }),

  filled: ({ theme, color }: ThemeIconStylesProps) => ({
    color: theme.colorScheme === 'dark' ? getThemeColor({ theme, color, shade: 0 }) : theme.white,
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: 7 }),
      theme.colorScheme === 'dark' ? 0.45 : 1
    ),
  }),

  themeIcon: ({ theme, size, radius }: ThemeIconStylesProps) => {
    const iconSize = getSizeValue({ size, sizes });

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      width: iconSize,
      height: iconSize,
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    };
  },
});
