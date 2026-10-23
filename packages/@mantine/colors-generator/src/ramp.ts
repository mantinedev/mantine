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
  0.83, 0.74, 0.65, 0.5, 0.34, 0.27, 0.24, 0.2, 0.18, 0.16,
] as const;

/** Back-compat: existing imports use LIGHTNESS_RAMP (the cool/standard ramp). */
export const LIGHTNESS_RAMP = STANDARD_LIGHTNESS_RAMP;

export const CHROMA_ENVELOPE = [0.1, 0.2, 0.38, 0.6, 0.84, 1.0, 0.99, 0.9, 0.74, 0.56] as const;

/**
 * Returns a weight in [0, 1] describing how "bright/warm" a hue is.
 * The weight is a cosine bump centered on yellow (~90°) with a half-width of
 * 75°, falling to zero outside that window. Blue (255°), teal (185°), etc.
 * receive weight 0; yellow (90°) receives weight 1.
 */
export function brightnessWeight(hue: number): number {
  const center = 90;
  const halfwidth = 75;
  const raw = Math.abs(((hue - center + 540) % 360) - 180);
  const d = Math.min(raw, 360 - raw);
  if (d >= halfwidth) {
    return 0;
  }
  return 0.5 * (1 + Math.cos((Math.PI * d) / halfwidth));
}

/**
 * Returns the 10-entry lightness ramp appropriate for the given hue, blending
 * linearly between `STANDARD_LIGHTNESS_RAMP` (cool hues) and
 * `BRIGHT_LIGHTNESS_RAMP` (warm/bright hues) according to
 * `brightnessWeight(hue)`.
 */
export function lightnessRampForHue(hue: number): number[] {
  const w = brightnessWeight(hue);
  return STANDARD_LIGHTNESS_RAMP.map((l, i) => l + w * (BRIGHT_LIGHTNESS_RAMP[i] - l));
}
