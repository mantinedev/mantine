import { rem } from '../../../utils';
import { MantineColor, MantineGradient, MantineTheme } from '../../theme.types';
import { useMantineColorScheme } from '../../use-mantine-color-scheme';
import { darken } from '../darken/darken';
import { getGradient } from '../get-gradient/get-gradient';
import { parseThemeColor } from '../parse-theme-color/parse-theme-color';
import { rgba } from '../rgba/rgba';

export interface VariantColorsResolverInput {
  color: MantineColor | undefined;
  theme: MantineTheme;
  variant: string | { dark?: string; light?: string };
  gradient?: MantineGradient;
  autoContrast?: boolean;
}

export interface VariantColorResolverResult {
  background: string;
  hover: string;
  color: string;
  border: string;
  hoverColor?: string;
}

export type VariantColorsResolver = (
  input: VariantColorsResolverInput
) => VariantColorResolverResult;

export const defaultVariantColorsResolver: VariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient,
  autoContrast,
}) => {
  const parsed = parseThemeColor({ color, theme });
  const { colorScheme } = useMantineColorScheme();

  const _autoContrast = typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast;
  const realVariant =
    typeof variant === 'string'
      ? variant
      : colorScheme === 'light'
        ? variant?.light
        : colorScheme === 'dark'
          ? variant?.dark
          : variant;

  if (realVariant === 'filled') {
    const textColor = _autoContrast
      ? parsed.isLight
        ? 'var(--mantine-color-black)'
        : 'var(--mantine-color-white)'
      : 'var(--mantine-color-white)';
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: textColor,
          border: `${rem(1)} solid transparent`,
        };
      }

      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: textColor,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: color!,
      hover: darken(color!, 0.1),
      color: textColor,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (realVariant === 'light') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: rgba(color!, 0.1),
      hover: rgba(color!, 0.12),
      color: color!,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (realVariant === 'outline') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: 'transparent',
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${rem(1)} solid var(--mantine-color-${color}-outline)`,
        };
      }

      return {
        background: 'transparent',
        hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`,
      };
    }

    return {
      background: 'transparent',
      hover: rgba(color!, 0.05),
      color: color!,
      border: `${rem(1)} solid ${color}`,
    };
  }

  if (realVariant === 'subtle') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: 'transparent',
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        background: 'transparent',
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: 'transparent',
      hover: rgba(color!, 0.12),
      color: color!,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (realVariant === 'transparent') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: 'transparent',
          hover: 'transparent',
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`,
        };
      }

      return {
        background: 'transparent',
        hover: 'transparent',
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: 'transparent',
      hover: 'transparent',
      color: color!,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (realVariant === 'white') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          background: 'var(--mantine-color-white)',
          hover: darken(theme.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`,
        };
      }

      return {
        background: 'var(--mantine-color-white)',
        hover: darken(theme.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`,
      };
    }

    return {
      background: 'var(--mantine-color-white)',
      hover: darken(theme.white, 0.01),
      color: color!,
      border: `${rem(1)} solid transparent`,
    };
  }

  if (realVariant === 'gradient') {
    return {
      background: getGradient(gradient, theme),
      hover: getGradient(gradient, theme),
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  if (realVariant === 'default') {
    return {
      background: 'var(--mantine-color-default)',
      hover: 'var(--mantine-color-default-hover)',
      color: 'var(--mantine-color-default-color)',
      border: `${rem(1)} solid var(--mantine-color-default-border)`,
    };
  }

  return {} as VariantColorResolverResult;
};
