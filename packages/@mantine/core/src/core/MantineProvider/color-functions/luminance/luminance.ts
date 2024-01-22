import { toRgba } from '../to-rgba/to-rgba';

function gammaCorrect(c: number) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function getLightnessFromOklch(oklchColor: string) {
  const match = oklchColor.match(/oklch\((.*?)%\s/);
  return match ? parseFloat(match[1]) : null;
}

export function luminance(color: string): number {
  if (color.startsWith('oklch(')) {
    return (getLightnessFromOklch(color) || 0) / 100;
  }

  const { r, g, b } = toRgba(color);

  const sR = r / 255;
  const sG = g / 255;
  const sB = b / 255;

  const rLinear = gammaCorrect(sR);
  const gLinear = gammaCorrect(sG);
  const bLinear = gammaCorrect(sB);

  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

export function isLightColor(color: string, luminanceThreshold = 0.179) {
  if (color.startsWith('var(')) {
    return false;
  }

  return luminance(color) > luminanceThreshold;
}
