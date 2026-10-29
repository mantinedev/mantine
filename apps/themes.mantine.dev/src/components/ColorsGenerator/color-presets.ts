import type { SchemeParams } from './params';

export interface ColorPreset {
  name: string;
  color: string;
  darkColor?: string;
  light?: Partial<SchemeParams>;
  dark?: Partial<SchemeParams>;
}

export const COLOR_PRESETS: ColorPreset[] = [
  { name: 'Blue', color: '#1971c2' },
  { name: 'Sky', color: '#339af0' },
  { name: 'Steel', color: '#4682b4', light: { lightChroma: 60 } },
  { name: 'Navy', color: '#1b2a4a', light: { shade: 9, lightChroma: 25 } },
  { name: 'Ink', color: '#212b5e', light: { shade: 8, lightChroma: 40 } },
  { name: 'Indigo', color: '#4c6ef5' },
  { name: 'Electric', color: '#3d5afe', light: { darkChroma: 80 } },
  { name: 'Violet', color: '#7048e8' },
  { name: 'Lavender', color: '#b197fc', light: { shade: 3, darkChroma: 110 } },
  { name: 'Grape', color: '#9c36b5', light: { hueShift: -15 } },
  { name: 'Plum', color: '#862e9c', light: { darkest: 30 } },
  { name: 'Fuchsia', color: '#be4bdb', light: { hueShift: -10 } },
  { name: 'Rose', color: '#e64980' },
  { name: 'Crimson', color: '#c2255c', light: { darkest: 32 } },
  { name: 'Blush', color: '#f8c8dc', light: { shade: 2, darkChroma: 140, darkest: 35 } },
  { name: 'Coral', color: '#ff6b6b', light: { hueShift: 8 } },
  { name: 'Salmon', color: '#fa8072', light: { shade: 4, darkChroma: 90 } },
  { name: 'Peach', color: '#ffc9a8', light: { shade: 2, darkChroma: 130, hueShift: -10 } },
  { name: 'Tangerine', color: '#fd7e14', light: { hueShift: -12, darkest: 35 } },
  { name: 'Rust', color: '#b7410e', light: { hueShift: 10, darkest: 30 } },
  { name: 'Clay', color: '#a0522d', light: { lightest: 96, darkest: 30, hueShift: 12 } },
  { name: 'Brown', color: '#795548', light: { lightChroma: 60, darkest: 28 } },
  { name: 'Sand', color: '#d4b483', light: { shade: 3, darkChroma: 110 } },
  { name: 'Amber', color: '#f59f00', light: { hueShift: -15, darkChroma: 80 } },
  { name: 'Gold', color: '#c9a227', light: { hueShift: -10, darkChroma: 75 } },
  { name: 'Sunflower', color: '#fcc419', light: { hueShift: -25, darkChroma: 80 } },
  { name: 'Lemon', color: '#ffe066', light: { shade: 2, hueShift: -20, darkChroma: 80 } },
  { name: 'Olive', color: '#808000', light: { hueShift: 10, lightChroma: 70 } },
  { name: 'Lime', color: '#82c91e', light: { hueShift: 15, darkChroma: 70 } },
  { name: 'Neon', color: '#2ee66b', light: { shade: 4, darkChroma: 70 } },
  { name: 'Emerald', color: '#2f9e44' },
  { name: 'Forest', color: '#2b5f3a', light: { shade: 8, darkest: 25 } },
  { name: 'Sage', color: '#8fa98f', light: { lightChroma: 60, darkChroma: 90 } },
  { name: 'Teal', color: '#099268' },
  { name: 'Mint', color: '#63e6be', light: { shade: 3, darkChroma: 100 } },
  { name: 'Aqua', color: '#3bc9db', light: { shade: 4, darkChroma: 90 } },
  { name: 'Cyan', color: '#1098ad' },
  { name: 'Ocean', color: '#0b7285', light: { darkest: 30, hueShift: 8 } },
  { name: 'Slate', color: '#64748b', light: { lightChroma: 60, darkChroma: 100 } },
  { name: 'Stone', color: '#78716c', light: { lightChroma: 60, darkChroma: 100 } },
  { name: 'Gunmetal', color: '#2a3439', light: { shade: 8, lightChroma: 50 } },
  { name: 'Charcoal', color: '#3b3b3b' },
  { name: 'Red, virtual', color: '#e03131', darkColor: '#b02525', dark: {} },
  { name: 'Blue, virtual', color: '#228be6', darkColor: '#1864ab', dark: {} },
  { name: 'Green, virtual', color: '#40c057', darkColor: '#2b8a3e', dark: {} },
  { name: 'Violet, virtual', color: '#7950f2', darkColor: '#5f3dc4', dark: {} },
  { name: 'Yellow, virtual', color: '#f08c00', darkColor: '#fcc419', dark: { hueShift: -20 } },
];
