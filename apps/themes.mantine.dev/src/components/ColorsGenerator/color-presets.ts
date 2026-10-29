import type { SchemeParams } from './params';

export interface ColorPreset {
  name: string;
  color: string;
  light?: Partial<SchemeParams>;
  dark?: Partial<SchemeParams>;
}

export const COLOR_PRESETS: ColorPreset[] = [
  { name: 'Blue', color: '#1971c2' },
  { name: 'Teal', color: '#099268' },
  { name: 'Grape', color: '#9c36b5', light: { hueShift: -15 } },
  { name: 'Sunflower', color: '#fcc419', light: { hueShift: -25, darkChroma: 80 } },
  { name: 'Lime', color: '#82c91e', light: { hueShift: 15, darkChroma: 70 } },
  { name: 'Tangerine', color: '#fd7e14', light: { hueShift: -12, darkest: 35 } },
  { name: 'Blush', color: '#f8c8dc', light: { shade: 2, darkChroma: 140, darkest: 35 } },
  { name: 'Navy', color: '#1b2a4a', light: { shade: 9, lightChroma: 25 } },
  { name: 'Mint', color: '#63e6be', light: { shade: 3, darkChroma: 100 } },
  { name: 'Clay', color: '#a0522d', light: { lightest: 96, darkest: 30, hueShift: 12 } },
  { name: 'Slate', color: '#64748b', light: { lightChroma: 60, darkChroma: 100 } },
  { name: 'Charcoal', color: '#3b3b3b' },
  { name: 'Red, virtual', color: '#e03131', dark: { shade: 7, darkChroma: 65 } },
];
