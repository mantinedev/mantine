import {
  clampChroma,
  formatHex,
  inGamut,
  formatHsl,
  formatRgb,
  modeHsl,
  modeOklch,
  modeRgb,
  type Oklch,
  useMode,
} from 'culori/fn';
import { lightnessRampForHue, STANDARD_LIGHTNESS_RAMP } from './ramp';

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

export interface GenerateColorsOptions {
  /**
   * Index of the shade that is set to the input color, `0`–`9`.
   * With `'auto'`, the shade is picked by the lightness of the input color,
   * bright hues (yellow, lime, orange) land on lighter shades.
   * @default 'auto'
   */
  baseShade?: number | 'auto';

  /**
   * OKLCH lightness of shade `0`, `0`–`1`
   * @default 0.97
   */
  lightest?: number;

  /**
   * OKLCH lightness of shade `9`, `0`–`1`
   * @default 0.4
   */
  darkest?: number;

  /**
   * Chroma of shade `0` relative to the chroma of the input color,
   * `0` is gray, `1` is as saturated as the input color
   * @default 0.1
   */
  lightestChroma?: number;

  /**
   * Chroma of shade `9` relative to the chroma of the input color,
   * `0` is gray, `1` is as saturated as the input color
   * @default 0.55
   */
  darkestChroma?: number;

  /**
   * Hue rotation in degrees across the whole scale, from shade `0` to shade `9`.
   * The base shade keeps the hue of the input color, lighter and darker shades
   * are rotated proportionally to their distance from it.
   * @default 0
   */
  hueShift?: number;
}

export const DEFAULT_GENERATE_COLORS_OPTIONS: Required<GenerateColorsOptions> = {
  baseShade: 'auto',
  lightest: 0.97,
  darkest: 0.4,
  lightestChroma: 0.1,
  darkestChroma: 0.55,
  hueShift: 0,
};

const NEUTRAL_CHROMA_THRESHOLD = 0.015;
const MIN_LIGHTNESS_STEP = 0.01;
const MAX_LIGHTNESS = 0.995;
const MIN_LIGHTNESS = 0.02;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function round(value: number, digits: number) {
  return Number(value.toFixed(digits));
}

function nearestIndex(l: number, ramp: readonly number[]) {
  let best = 0;
  for (let i = 1; i < ramp.length; i += 1) {
    if (Math.abs(ramp[i] - l) < Math.abs(ramp[best] - l)) {
      best = i;
    }
  }
  return best;
}

function interpolate(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

const inSrgb = inGamut('rgb');

function toSrgbOklch(color: Oklch): Oklch {
  const clamped = clampChroma(color, 'oklch', 'rgb');
  const rounded: Oklch = {
    mode: 'oklch',
    l: round(clamped.l, 4),
    c: round(clamped.c, 4),
    h: round((((clamped.h ?? 0) % 360) + 360) % 360, 2),
  };

  while (rounded.c > 0 && !inSrgb(rounded)) {
    rounded.c = round(rounded.c - 0.0001, 4);
  }

  return rounded;
}

function formatOklch(color: Oklch) {
  return `oklch(${color.l} ${color.c} ${color.h})`;
}

function resolveBaseShade(seed: Oklch, baseShade: number | 'auto', neutral: boolean) {
  if (baseShade !== 'auto' && Number.isFinite(baseShade)) {
    return clamp(Math.round(baseShade), 0, 9);
  }

  return nearestIndex(seed.l, neutral ? STANDARD_LIGHTNESS_RAMP : lightnessRampForHue(seed.h ?? 0));
}

/**
 * Generates 10 oklch shades from the given color value. The input color is
 * preserved at the base shade, other shades are interpolated in OKLCH from it to
 * the lightest and darkest ends and gamut-mapped to sRGB.
 */
export function generateColorsMap(input: string, options?: GenerateColorsOptions) {
  const seed = oklch(input);

  if (!seed) {
    throw new Error(`Invalid color: ${input}`);
  }

  const { baseShade, lightest, darkest, lightestChroma, darkestChroma, hueShift } = {
    ...DEFAULT_GENERATE_COLORS_OPTIONS,
    ...options,
  };

  const seedChroma = seed.c ?? 0;
  const seedHue = seed.h ?? 0;
  const neutral = seedChroma < NEUTRAL_CHROMA_THRESHOLD;
  const baseColorIndex = resolveBaseShade(seed, baseShade, neutral);

  const top = clamp(
    Math.max(lightest, seed.l + baseColorIndex * MIN_LIGHTNESS_STEP),
    seed.l,
    MAX_LIGHTNESS
  );
  const bottom = clamp(
    Math.min(darkest, seed.l - (9 - baseColorIndex) * MIN_LIGHTNESS_STEP),
    MIN_LIGHTNESS,
    seed.l
  );

  const colors = Array.from({ length: 10 }, (_, index) => {
    if (index === baseColorIndex) {
      return formatOklch(toSrgbOklch(seed));
    }

    const lighter = index < baseColorIndex;
    const t = lighter
      ? (baseColorIndex - index) / baseColorIndex
      : (index - baseColorIndex) / (9 - baseColorIndex);

    const l = interpolate(seed.l, lighter ? top : bottom, t);
    const chroma = neutral
      ? seedChroma
      : interpolate(seedChroma, seedChroma * (lighter ? lightestChroma : darkestChroma), t);
    const h = seedHue + (hueShift * (index - baseColorIndex)) / 9;

    return formatOklch(toSrgbOklch({ mode: 'oklch', l, c: chroma, h }));
  });

  return { baseColorIndex, colors };
}

/**
 * Generates 10 oklch shades from the given color value and returns them as a
 * `MantineColorsTuple` of `oklch(...)` strings that can be used directly in
 * `theme.colors`. See `GenerateColorsOptions` for the available adjustments.
 */
export function generateColors(color: string, options?: GenerateColorsOptions) {
  return generateColorsMap(color, options).colors as unknown as MantineColorsTuple;
}

/**
 * Generates 10 shades from the given color value and returns them in multiple
 * color formats (`oklch`, `hex`, `rgb`, `hsl`) along with the index of the
 * shade that matches the input color (`baseColorIndex`).
 */
export function generateColorFormats(color: string, options?: GenerateColorsOptions) {
  const { baseColorIndex, colors } = generateColorsMap(color, options);
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
