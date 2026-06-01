import { oklchToLinearSrgb } from '../parse-oklch/oklch-to-linear-srgb';
import { parseOklch } from '../parse-oklch/parse-oklch';
import { toRgba } from '../to-rgba/to-rgba';

function gammaCorrect(c: number) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

export function luminance(color: string): number {
  if (color.startsWith('oklch(')) {
    const parsed = parseOklch(color);

    if (!parsed) {
      return 0;
    }

    const { r, g, b } = oklchToLinearSrgb(parsed);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
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
