import { getGradientColorStops } from './get-gradient-color-stops/get-gradient-color-stops';

export function linearGradient(deg: number, ...colors: string[]) {
  return `linear-gradient(${deg}deg, ${getGradientColorStops(colors)})`;
}

export function radialGradient(...colors: string[]) {
  return `radial-gradient(circle, ${getGradientColorStops(colors)})`;
}
