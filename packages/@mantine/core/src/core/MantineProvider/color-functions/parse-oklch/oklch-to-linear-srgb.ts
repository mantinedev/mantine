export interface LinearSrgb {
  r: number;
  g: number;
  b: number;
}

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value));
}

/**
 * Converts an OKLCH color to linear-light sRGB channels (`0..1`).
 * Channels are returned in the linear-light domain (NOT gamma-encoded) and are clamped to `[0, 1]`
 * so that out-of-gamut inputs stay within range.
 */
export function oklchToLinearSrgb({ l, c, h }: { l: number; c: number; h: number }): LinearSrgb {
  const hueRadians = (h * Math.PI) / 180;
  const a = c * Math.cos(hueRadians);
  const bb = c * Math.sin(hueRadians);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * bb;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * bb;
  const s_ = l - 0.0894841775 * a - 1.291485548 * bb;

  const L = l_ ** 3;
  const M = m_ ** 3;
  const S = s_ ** 3;

  const r = 4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S;
  const g = -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S;
  const b = -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S;

  return { r: clamp(r), g: clamp(g), b: clamp(b) };
}
