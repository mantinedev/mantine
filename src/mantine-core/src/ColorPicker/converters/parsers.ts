import { HsvaColor, RgbaColor, ColorFormat } from '../types';

export function round(number: number, digits = 0, base = 10 ** digits) {
  return Math.round(base * number) / base;
}

function hslaToHsva({ h, s, l, a }): HsvaColor {
  const ss = s * ((l < 50 ? l : 100 - l) / 100);

  return {
    h,
    s: ss > 0 ? ((2 * ss) / (l + ss)) * 100 : 0,
    v: l + ss,
    a,
  };
}

const angleUnits: Record<string, number> = {
  grad: 360 / 400,
  turn: 360,
  rad: 360 / (Math.PI * 2),
};

export function parseHue(value: string, unit = 'deg') {
  return Number(value) * (angleUnits[unit] || 1);
}

const HSL_REGEXP =
  /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;

export function parseHsla(color: string): HsvaColor {
  const match = HSL_REGEXP.exec(color);

  if (!match) {
    return { h: 0, s: 0, v: 0, a: 1 };
  }

  return hslaToHsva({
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    l: Number(match[4]),
    a: match[5] === undefined ? 1 : Number(match[5]) / (match[6] ? 100 : 1),
  });
}

function rgbaToHsva({ r, g, b, a }: RgbaColor): HsvaColor {
  const max = Math.max(r, g, b);
  const delta = max - Math.min(r, g, b);

  const hh = delta
    ? max === r
      ? (g - b) / delta
      : max === g
      ? 2 + (b - r) / delta
      : 4 + (r - g) / delta
    : 0;

  return {
    h: round(60 * (hh < 0 ? hh + 6 : hh)),
    s: round(max ? (delta / max) * 100 : 0),
    v: round((max / 255) * 100),
    a,
  };
}

export function parseHex(color: string): HsvaColor {
  const hex = color[0] === '#' ? color.slice(1) : color;

  if (hex.length === 3) {
    return rgbaToHsva({
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
      a: 1,
    });
  }

  return rgbaToHsva({
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
    a: 1,
  });
}

const RGB_REGEXP =
  /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;

export function parseRgba(color: string): HsvaColor {
  const match = RGB_REGEXP.exec(color);

  if (!match) {
    return { h: 0, s: 0, v: 0, a: 1 };
  }

  return rgbaToHsva({
    r: Number(match[1]) / (match[2] ? 100 / 255 : 1),
    g: Number(match[3]) / (match[4] ? 100 / 255 : 1),
    b: Number(match[5]) / (match[6] ? 100 / 255 : 1),
    a: match[7] === undefined ? 1 : Number(match[7]) / (match[8] ? 100 : 1),
  });
}

const VALIDATION_REGEXP: Record<ColorFormat, RegExp> = {
  hex: /^#?([0-9A-F]{3}){1,2}$/i,
  rgb: /^rgb\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
  rgba: /^rgba\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
  hsl: /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i,
  hsla: /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/i,
};

const CONVERTERS: Record<ColorFormat, (color: string) => HsvaColor> = {
  hex: parseHex,
  rgb: parseRgba,
  rgba: parseRgba,
  hsl: parseHsla,
  hsla: parseHsla,
};

export function isColorValid(color: string) {
  // eslint-disable-next-line no-restricted-syntax
  for (const [, regexp] of Object.entries(VALIDATION_REGEXP)) {
    if (regexp.test(color)) {
      return true;
    }
  }

  return false;
}

export function parseColor(color: string): HsvaColor {
  if (typeof color !== 'string') {
    return { h: 0, s: 0, v: 0, a: 1 };
  }

  if (color === 'transparent') {
    return { h: 0, s: 0, v: 0, a: 0 };
  }

  const trimmed = color.trim();

  // eslint-disable-next-line no-restricted-syntax
  for (const [rule, regexp] of Object.entries(VALIDATION_REGEXP)) {
    if (regexp.test(trimmed)) {
      return CONVERTERS[rule](trimmed);
    }
  }

  return { h: 0, s: 0, v: 0, a: 1 };
}
