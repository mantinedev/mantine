import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getThemeColor,
  hexToRgba,
} from '../../theme';

interface ThemeIconStyles {
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

export default createMemoStyles({
  light: ({ theme, color }: ThemeIconStyles) => ({
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 1 }),
      theme.colorScheme === 'dark' ? 0.3 : 1
    ),
  }),

  filled: ({ theme, color }: ThemeIconStyles) => ({
    color: theme.colorScheme === 'dark' ? getThemeColor({ theme, color, shade: 0 }) : theme.white,
    backgroundColor: hexToRgba(
      getThemeColor({ theme, color, shade: 7 }),
      theme.colorScheme === 'dark' ? 0.65 : 1
    ),
  }),

  root: ({ theme, size, radius }: ThemeIconStyles) => {
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
