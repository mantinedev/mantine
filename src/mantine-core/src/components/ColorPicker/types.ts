export type ColorFormat = 'hex' | 'rgba' | 'rgb' | 'hsl' | 'hsla';

export interface HsvaColor {
  h: number;
  s: number;
  v: number;
  a: number;
}

export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}
