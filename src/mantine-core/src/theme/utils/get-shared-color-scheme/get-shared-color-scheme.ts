import { MantineTheme } from '../../types';
import { getThemeColor } from '../get-theme-color/get-theme-color';
import { hexToRgba } from '../hex-to-rgba/hex-to-rgba';

interface GetSharedColorScheme {
  color: string;
  variant: 'outline' | 'filled' | 'light';
  theme: MantineTheme;
}

/**
 * Provides shared theme styles for components that use theme.colors:
 * Button, ActionIcon, Badge, ThemeIcon, etc.
 */
export function getSharedColorScheme({ color, theme, variant }: GetSharedColorScheme) {
  if (variant === 'light') {
    return {
      border: 'transparent',
      background: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
        theme.colorScheme === 'dark' ? 0.3 : 1
      ),
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    };
  }

  if (variant === 'outline') {
    return {
      border: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 7 }),
      background: 'transparent',
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 7 }),
    };
  }

  // Filled variant as default
  return {
    border: 'transparent',
    background: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 6 }),
    color: theme.colorScheme === 'dark' ? getThemeColor({ theme, color, shade: 0 }) : theme.white,
  };
}
