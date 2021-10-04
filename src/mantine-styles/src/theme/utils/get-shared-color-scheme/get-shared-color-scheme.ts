import { MantineTheme } from '../../types';
import { getThemeColor } from '../get-theme-color/get-theme-color';
import { hexToRgba } from '../hex-to-rgba/hex-to-rgba';

interface GetSharedColorScheme {
  color?: string;
  variant: 'outline' | 'filled' | 'light' | 'gradient' | 'white' | 'default';
  gradient?: { from: string; to: string; deg: number };
  theme: MantineTheme;
}

export interface MantineGradient {
  from: string;
  to: string;
  deg?: number;
}

const DEFAULT_GRADIENT = {
  from: 'indigo',
  to: 'cyan',
  deg: 45,
};

/**
 * Provides shared theme styles for components that use theme.colors:
 * Button, ActionIcon, Badge, ThemeIcon, etc.
 */
export function getSharedColorScheme({ color, theme, variant, gradient }: GetSharedColorScheme) {
  if (variant === 'light') {
    return {
      border: 'transparent',
      background: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
        theme.colorScheme === 'dark' ? 0.35 : 1
      ),
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 2 : 9 }),
    };
  }

  if (variant === 'default') {
    return {
      border: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
      background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    };
  }

  if (variant === 'white') {
    return {
      border: 'transparent',
      background: theme.white,
      color: getThemeColor({ theme, color, shade: 7 }),
    };
  }

  if (variant === 'outline') {
    return {
      border: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 7 }),
        0.65
      ),
      background: 'transparent',
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 7 }),
    };
  }

  if (variant === 'gradient') {
    const merged = {
      from: gradient?.from || DEFAULT_GRADIENT.from,
      to: gradient?.to || DEFAULT_GRADIENT.to,
      deg: gradient?.deg || DEFAULT_GRADIENT.deg,
    };

    return {
      background: `linear-gradient(${merged.deg}deg, ${getThemeColor({
        theme,
        color: merged.from,
        shade: 6,
      })} 0%, ${getThemeColor({ theme, color: merged.to, shade: 6 })} 100%)`,
      color: theme.white,
      border: 'transparent',
    };
  }

  // Filled variant as default
  return {
    border: 'transparent',
    background: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 6 }),
    color: theme.white,
  };
}
