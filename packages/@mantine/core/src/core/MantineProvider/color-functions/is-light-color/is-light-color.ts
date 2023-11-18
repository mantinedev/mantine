import { toRgba, RGBA } from '../to-rgba/to-rgba';

function getPartLuminance(value: number) {
  const x = value / 255;
  return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}

export function getLuminance(input: RGBA) {
  const r = getPartLuminance(input.r);
  const g = getPartLuminance(input.g);
  const b = getPartLuminance(input.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function isLightColor(color: string, luminanceThreshold = 0.179) {
  return getLuminance(toRgba(color)) > luminanceThreshold;
}
