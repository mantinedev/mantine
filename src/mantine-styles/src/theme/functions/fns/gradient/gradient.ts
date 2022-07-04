import type { MantineThemeBase, MantineGradient } from '../../../types';
import { themeColor } from '../theme-color/theme-color';
import { primaryShade } from '../primary-shade/primary-shade';
import { getGradientColorStops } from './get-gradient-color-stops/get-gradient-color-stops';

export function linearGradient(deg: number, ...colors: string[]) {
  return `linear-gradient(${deg}deg, ${getGradientColorStops(colors)})`;
}

export function radialGradient(...colors: string[]) {
  return `radial-gradient(circle, ${getGradientColorStops(colors)})`;
}

export function gradient(theme: MantineThemeBase) {
  const getThemeColor = themeColor(theme);
  const getPrimaryShade = primaryShade(theme);

  return (payload?: MantineGradient) => {
    const merged = {
      from: payload?.from || theme.defaultGradient.from,
      to: payload?.to || theme.defaultGradient.to,
      deg: payload?.deg || theme.defaultGradient.deg,
    };

    return `linear-gradient(${merged.deg}deg, ${getThemeColor(
      merged.from,
      getPrimaryShade(),
      false
    )} 0%, ${getThemeColor(merged.to, getPrimaryShade(), false)} 100%)`;
  };
}
