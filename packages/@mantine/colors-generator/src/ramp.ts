export const STANDARD_LIGHTNESS_RAMP = [
  0.97, 0.94, 0.89, 0.81, 0.72, 0.63, 0.52, 0.43, 0.34, 0.24,
] as const;
export const BRIGHT_LIGHTNESS_RAMP = [
  0.985, 0.96, 0.925, 0.885, 0.845, 0.8, 0.725, 0.625, 0.505, 0.39,
] as const;

/**
 * Dark color-scheme neutral ramp (index 0 = lightest text, 9 = darkest page bg).
 * Darker than the standard ramp to provide elevation headroom in v10.
 * Used exclusively by the `dark` palette; `gray` uses `STANDARD_LIGHTNESS_RAMP`.
 */
export const DARK_LIGHTNESS_RAMP = [
  0.83, 0.74, 0.65, 0.5, 0.4, 0.32, 0.28, 0.24, 0.2, 0.16,
] as const;

/** Back-compat: existing imports use LIGHTNESS_RAMP (the cool/standard ramp). */
export const LIGHTNESS_RAMP = STANDARD_LIGHTNESS_RAMP;

export const CHROMA_ENVELOPE = [0.1, 0.2, 0.38, 0.6, 0.84, 1.0, 0.99, 0.9, 0.74, 0.56] as const;

/**
 * Lightness of the default Mantine palettes by hue, used to pick the base shade
 * of a color when `baseShade` is `'auto'`. Bright hues (orange, yellow, lime)
 * sit on lighter shades than cool hues.
 */
export const REFERENCE_LIGHTNESS_RAMPS: readonly { hue: number; ramp: readonly number[] }[] = [
  { hue: 25, ramp: [0.97, 0.913, 0.845, 0.769, 0.701, 0.644, 0.591, 0.528, 0.464, 0.4] },
  { hue: 43, ramp: [0.97, 0.93, 0.881, 0.827, 0.778, 0.738, 0.7, 0.646, 0.535, 0.4] },
  { hue: 80, ramp: [0.97, 0.948, 0.921, 0.891, 0.863, 0.841, 0.82, 0.744, 0.589, 0.4] },
  { hue: 130, ramp: [0.97, 0.945, 0.914, 0.88, 0.849, 0.824, 0.8, 0.728, 0.58, 0.4] },
  { hue: 150, ramp: [0.97, 0.906, 0.83, 0.745, 0.669, 0.606, 0.546, 0.498, 0.449, 0.4] },
  { hue: 168, ramp: [0.97, 0.907, 0.831, 0.747, 0.671, 0.608, 0.549, 0.5, 0.45, 0.4] },
  { hue: 227, ramp: [0.97, 0.908, 0.833, 0.75, 0.675, 0.613, 0.555, 0.503, 0.452, 0.4] },
  { hue: 255, ramp: [0.97, 0.909, 0.837, 0.756, 0.683, 0.622, 0.566, 0.511, 0.455, 0.4] },
  { hue: 270, ramp: [0.97, 0.911, 0.841, 0.763, 0.693, 0.634, 0.579, 0.52, 0.46, 0.4] },
  { hue: 292, ramp: [0.97, 0.913, 0.844, 0.768, 0.7, 0.643, 0.59, 0.527, 0.463, 0.4] },
  { hue: 315, ramp: [0.97, 0.914, 0.847, 0.772, 0.705, 0.648, 0.596, 0.531, 0.465, 0.4] },
  { hue: 350, ramp: [0.97, 0.914, 0.847, 0.772, 0.705, 0.649, 0.597, 0.531, 0.465, 0.4] },
];

/**
 * Returns the 10-entry lightness ramp for the given hue, interpolated between
 * the lightness ramps of the two closest default Mantine palettes.
 */
export function lightnessRampForHue(hue: number): number[] {
  const h = ((hue % 360) + 360) % 360;
  const ramps = REFERENCE_LIGHTNESS_RAMPS;
  let next = ramps.findIndex((item) => item.hue > h);
  if (next === -1) {
    next = 0;
  }
  const previous = (next - 1 + ramps.length) % ramps.length;
  const from = ramps[previous];
  const to = ramps[next];
  const span = (((to.hue - from.hue) % 360) + 360) % 360 || 360;
  const distance = (((h - from.hue) % 360) + 360) % 360;
  const t = distance / span;
  return from.ramp.map((l, i) => l + t * (to.ramp[i] - l));
}
