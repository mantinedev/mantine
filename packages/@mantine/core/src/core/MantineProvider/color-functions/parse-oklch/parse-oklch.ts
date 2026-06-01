export interface ParsedOklch {
  l: number;
  c: number;
  h: number;
  alpha: number;
}

function parseAlpha(value: string | undefined): number {
  if (value === undefined) {
    return 1;
  }

  if (value.endsWith('%')) {
    return parseFloat(value) / 100;
  }

  return parseFloat(value);
}

function parseLightness(value: string): number {
  if (value.endsWith('%')) {
    return parseFloat(value) / 100;
  }

  return parseFloat(value);
}

function parseHue(value: string): number {
  if (value === 'none') {
    return 0;
  }

  return parseFloat(value);
}

/**
 * Parses an `oklch(L C H)` or `oklch(L C H / A)` color string into its components.
 * `L` may be a decimal (`0..1`) or a percent (`0..100%`) – it is always normalized to `0..1`.
 * `C` is a decimal value. `H` is a number in degrees or the keyword `none` (treated as `0`).
 * `A` is optional (decimal `0..1` or percent) and defaults to `1`.
 * Tolerates extra internal whitespace and the optional comma syntax.
 * Returns `null` when the value cannot be parsed.
 */
export function parseOklch(color: string): ParsedOklch | null {
  if (typeof color !== 'string') {
    return null;
  }

  const match = color
    .trim()
    .match(
      /^oklch\(\s*([^\s,]+)\s*[,\s]\s*([^\s,]+)\s*[,\s]\s*([^\s,/]+)\s*(?:[,/]\s*([^\s)]+)\s*)?\)$/i
    );

  if (!match) {
    return null;
  }

  const l = parseLightness(match[1]);
  const c = parseFloat(match[2]);
  const h = parseHue(match[3]);
  const alpha = parseAlpha(match[4]);

  if (Number.isNaN(l) || Number.isNaN(c) || Number.isNaN(h) || Number.isNaN(alpha)) {
    return null;
  }

  return { l, c, h, alpha };
}
