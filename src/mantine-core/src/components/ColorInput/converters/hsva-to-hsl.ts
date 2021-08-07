import { HsvaColor } from '../types';

export function hsvaToHsl({ h, s, v }: HsvaColor) {
  const hh = ((200 - s) * v) / 100;

  const result = {
    h: Math.round(h),
    s: Math.round(hh > 0 && hh < 200 ? ((s * v) / 100 / (hh <= 100 ? hh : 200 - hh)) * 100 : 0),
    l: Math.round(hh / 2),
  };

  return `hsl(${result.h}, ${result.s}%, ${result.l}%)`;
}
