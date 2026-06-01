import { formatHex, formatHsl, formatRgb, modeHsl, modeOklch, modeRgb, useMode } from 'culori/fn';
import { generateColorsMapV2 } from './generate-colors-v2';

const oklch = useMode(modeOklch);
useMode(modeRgb);
useMode(modeHsl);

export type MantineColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  ...string[],
];

export { generateColorsMapV2 as generateColorsMap };

/**
 * Generates 10 oklch shades from the given color value on a shared lightness
 * ramp with a chroma envelope, gamut-mapped to sRGB. The returned value is a
 * `MantineColorsTuple` of `oklch(...)` strings that can be used directly in
 * `theme.colors`.
 */
export function generateColors(color: string) {
  return generateColorsMapV2(color).colors as unknown as MantineColorsTuple;
}

/**
 * Generates 10 shades from the given color value and returns them in multiple
 * color formats (`oklch`, `hex`, `rgb`, `hsl`) along with the index of the
 * shade that matches the input color (`baseColorIndex`).
 */
export function generateColorFormats(color: string) {
  const { baseColorIndex, colors } = generateColorsMapV2(color);
  const parsed = colors.map((value) => oklch(value)!);

  return {
    baseColorIndex,
    colors,
    formats: {
      oklch: colors,
      hex: parsed.map((value) => formatHex(value)),
      rgb: parsed.map((value) => formatRgb(value)),
      hsl: parsed.map((value) => formatHsl(value)),
    },
  };
}
