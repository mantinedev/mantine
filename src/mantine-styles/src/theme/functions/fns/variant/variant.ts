import type { MantineColor, MantineGradient, MantineThemeBase } from '../../../types';
import { rgba } from '../rgba/rgba';
import { themeColor } from '../theme-color/theme-color';

export interface VariantInput {
  variant: 'filled' | 'light' | 'outline' | 'default' | 'gradient' | 'white' | 'subtle';
  color?: MantineColor;
  gradient?: MantineGradient;
}

export interface VariantOutput {
  border: string;
  background: string;
  color: string;
  hover: string;
}

const DEFAULT_GRADIENT = {
  from: 'indigo',
  to: 'cyan',
  deg: 45,
};

export function variant(theme: MantineThemeBase) {
  const getThemeColor = themeColor(theme);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  return ({ variant, color, gradient }: VariantInput): VariantOutput => {
    if (variant === 'light') {
      return {
        border: 'transparent',
        background: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 0),
          theme.colorScheme === 'dark' ? 0.35 : 1
        ),
        color:
          color === 'dark'
            ? theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.dark[9]
            : getThemeColor(color, theme.colorScheme === 'dark' ? 2 : 6),
        hover: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 7 : 1),
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
        color: getThemeColor(color, 6),
        hover: null,
      };
    }

    if (variant === 'outline') {
      return {
        border: rgba(getThemeColor(color, theme.colorScheme === 'dark' ? 4 : 7), 0.75),
        background: 'transparent',
        color: getThemeColor(color, theme.colorScheme === 'dark' ? 4 : 7),
        hover:
          theme.colorScheme === 'dark'
            ? rgba(getThemeColor(color, 4), 0.05)
            : rgba(getThemeColor(color, 0), 0.35),
      };
    }

    if (variant === 'gradient') {
      const merged = {
        from: gradient?.from || DEFAULT_GRADIENT.from,
        to: gradient?.to || DEFAULT_GRADIENT.to,
        deg: gradient?.deg || DEFAULT_GRADIENT.deg,
      };

      return {
        background: `linear-gradient(${merged.deg}deg, ${getThemeColor(
          merged.from,
          6,
          false
        )} 0%, ${getThemeColor(merged.to, 6, false)} 100%)`,
        color: theme.white,
        border: 'transparent',
        hover: null,
      };
    }

    if (variant === 'subtle') {
      return {
        border: 'transparent',
        background: 'transparent',
        color:
          color === 'dark'
            ? theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.dark[9]
            : getThemeColor(color, theme.colorScheme === 'dark' ? 2 : 6),
        hover: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 0),
          theme.colorScheme === 'dark' ? 0.35 : 1
        ),
      };
    }

    return {
      border: 'transparent',
      background: getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 6),
      color: theme.white,
      hover: getThemeColor(color, 7),
    };
  };
}
