import { MantineTheme } from '../../types';

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
      background: theme.fn.rgba(
        theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 8 : 0),
        theme.colorScheme === 'dark' ? 0.35 : 1
      ),
      color:
        color === 'dark'
          ? theme.colorScheme === 'dark'
            ? theme.colors.dark[0]
            : theme.colors.dark[9]
          : theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 2 : 6),
      hover: theme.fn.rgba(
        theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 7 : 1),
        theme.colorScheme === 'dark' ? 0.45 : 0.65
      ),
    };
  }

  if (variant === 'default') {
    return {
      border: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
      background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      hover: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
    };
  }

  if (variant === 'white') {
    return {
      border: 'transparent',
      background: theme.white,
      color: theme.fn.themeColor(color, 7),
      hover: null,
    };
  }

  if (variant === 'outline') {
    return {
      border: theme.fn.rgba(theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 4 : 7), 0.75),
      background: 'transparent',
      color: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 4 : 7),
      hover:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.fn.themeColor(color, 4), 0.05)
          : theme.fn.rgba(theme.fn.themeColor(color, 0), 0.35),
    };
  }

  if (variant === 'gradient') {
    const merged = {
      from: gradient?.from || DEFAULT_GRADIENT.from,
      to: gradient?.to || DEFAULT_GRADIENT.to,
      deg: gradient?.deg || DEFAULT_GRADIENT.deg,
    };

    return {
      background: `linear-gradient(${merged.deg}deg, ${theme.fn.themeColor(
        merged.from,
        6
      )} 0%, ${theme.fn.themeColor(merged.to, 6)} 100%)`,
      color: theme.white,
      border: 'transparent',
      hover: null,
    };
  }

  // Filled variant as default
  return {
    border: 'transparent',
    background: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 8 : 6),
    color: theme.white,
    hover: theme.fn.themeColor(color, 7),
  };
}
