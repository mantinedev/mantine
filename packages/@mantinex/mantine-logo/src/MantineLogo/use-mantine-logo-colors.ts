import { getContrastColor, MantineColor, parseThemeColor, useMantineTheme } from '@mantine/core';

export type MantineLogoVariant = 'mantine.dev' | 'ui.mantine.dev';

export interface LogoProps extends React.ComponentProps<'svg'> {
  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;

  variant?: MantineLogoVariant;
  size?: number | string;
  inverted?: boolean;

  /** Determines whether the mark color should be black for light backgrounds, `theme.autoContrast` by default */
  autoContrast?: boolean;
}

export function useMantineLogoColors({ color, inverted, autoContrast }: LogoProps) {
  const theme = useMantineTheme();
  const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
  const mainColor = parsedColor.isThemeColor ? theme.colors[parsedColor.color][5] : color;
  const contrastColor = getContrastColor({
    color: parsedColor.isThemeColor ? parsedColor.color : color,
    theme,
    autoContrast,
  });

  return {
    background: inverted ? theme.white : mainColor,
    color: inverted ? mainColor : contrastColor,
  };
}
