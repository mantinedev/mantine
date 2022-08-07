import { HsvaColor, RgbaColor, ColorFormat } from '../types';
import { round } from './parsers';

export function hsvaToRgbaObject({ h, s, v, a }: HsvaColor): RgbaColor {
  const _h = (h / 360) * 6;
  const _s = s / 100;
  const _v = v / 100;

  const hh = Math.floor(_h);
  const l = _v * (1 - _s);
  const c = _v * (1 - (_h - hh) * _s);
  const d = _v * (1 - (1 - _h + hh) * _s);
  const module = hh % 6;

  return {
    r: round([_v, c, l, l, d, _v][module] * 255),
    g: round([d, _v, _v, c, l, l][module] * 255),
    b: round([l, l, d, _v, _v, c][module] * 255),
    a: round(a, 2),
  };
}

export function hsvaToRgba(color: HsvaColor, includeAlpha: boolean) {
  const { r, g, b, a } = hsvaToRgbaObject(color);

  if (!includeAlpha) {
    return `rgb(${r}, ${g}, ${b})`;
  }

  return `rgba(${r}, ${g}, ${b}, ${round(a, 2)})`;
}

export function hsvaToHsl({ h, s, v, a }: HsvaColor, includeAlpha: boolean) {
  const hh = ((200 - s) * v) / 100;

  const result = {
    h: Math.round(h),
    s: Math.round(hh > 0 && hh < 200 ? ((s * v) / 100 / (hh <= 100 ? hh : 200 - hh)) * 100 : 0),
    l: Math.round(hh / 2),
  };

  if (!includeAlpha) {
    return `hsl(${result.h}, ${result.s}%, ${result.l}%)`;
  }

  return `hsla(${result.h}, ${result.s}%, ${result.l}%, ${round(a, 2)})`;
}

function formatHexPart(number: number) {
  const hex = number.toString(16);
  return hex.length < 2 ? `0${hex}` : hex;
}

export function hsvaToHex(color: HsvaColor) {
  const { r, g, b } = hsvaToRgbaObject(color);
  return `#${formatHexPart(r)}${formatHexPart(g)}${formatHexPart(b)}`;
}

const CONVERTERS: Record<ColorFormat, (color: HsvaColor) => string> = {
  hex: hsvaToHex,
  rgb: (color) => hsvaToRgba(color, false),
  rgba: (color) => hsvaToRgba(color, true),
  hsl: (color) => hsvaToHsl(color, false),
  hsla: (color) => hsvaToHsl(color, true),
};

export function convertHsvaTo(format: ColorFormat, color: HsvaColor) {
  if (!color) {
    return '#000000';
  }

  if (!(format in CONVERTERS)) {
    return CONVERTERS.hex(color);
  }

  return CONVERTERS[format](color);
}
