import {
  clampChroma,
  formatCss,
  formatHex,
  modeOklch,
  modeRgb,
  type Oklch,
  useMode,
} from 'culori/fn';
import {
  CHROMA_ENVELOPE,
  DARK_LIGHTNESS_RAMP,
  lightnessRampForHue,
} from '../../packages/@mantine/colors-generator/src/ramp';

useMode(modeOklch);
useMode(modeRgb);

export interface PerColorOverrides {
  lDelta?: Partial<Record<number, number>>;
  cScale?: Partial<Record<number, number>>;
}

export interface ColorSpec {
  name: string;
  hue: number;
  peakC: number;
  lightnessRamp?: number[];
  overrides?: PerColorOverrides;
}

export interface ShadeResult {
  index: number;
  l: number;
  c: number;
  h: number;
  oklch: string;
  hex: string;
}

export const COLOR_SPECS: ColorSpec[] = [
  { name: 'red', hue: 25, peakC: 0.23 },
  { name: 'pink', hue: 350, peakC: 0.22 },
  { name: 'grape', hue: 315, peakC: 0.21 },
  { name: 'violet', hue: 292, peakC: 0.23 },
  {
    name: 'indigo',
    hue: 270,
    peakC: 0.22,
    overrides: { lDelta: { 5: -0.01, 6: -0.01 } },
  },
  {
    name: 'blue',
    hue: 255,
    peakC: 0.22,
    overrides: { lDelta: { 6: +0.01 }, cScale: { 5: 0.85 } },
  },
  { name: 'cyan', hue: 215, peakC: 0.16 },
  { name: 'teal', hue: 168, peakC: 0.16 },
  {
    name: 'green',
    hue: 150,
    peakC: 0.18,
    overrides: { lDelta: { 6: -0.02 } },
  },
  { name: 'lime', hue: 130, peakC: 0.18 },
  {
    name: 'yellow',
    hue: 80,
    peakC: 0.185,
    lightnessRamp: [0.9875, 0.965, 0.93375, 0.89875, 0.86375, 0.8225, 0.75, 0.6425, 0.515, 0.39375],
  },
  {
    name: 'orange',
    hue: 55,
    peakC: 0.22,
    overrides: { lDelta: { 6: -0.02 }, cScale: { 5: 0.85, 6: 1.15 } },
  },
  { name: 'gray', hue: 260, peakC: 0.008 },
];

function buildChromatic(spec: ColorSpec): ShadeResult[] {
  const { hue, peakC, overrides } = spec;
  const baseL = spec.lightnessRamp ?? lightnessRampForHue(hue);
  const envelopePeak = CHROMA_ENVELOPE[6];

  return Array.from({ length: 10 }, (_, i) => {
    const lDelta = overrides?.lDelta?.[i] ?? 0;
    const cScaleFactor = overrides?.cScale?.[i] ?? 1;
    const l = baseL[i] + lDelta;
    const c = peakC * (CHROMA_ENVELOPE[i] / envelopePeak) * cScaleFactor;

    const raw: Oklch = { mode: 'oklch', l, c, h: hue };
    const clamped = clampChroma(raw, 'oklch', 'rgb');

    return {
      index: i,
      l: clamped.l ?? l,
      c: clamped.c ?? c,
      h: clamped.h ?? hue,
      oklch: formatCss(clamped),
      hex: formatHex(clamped),
    };
  });
}

function buildDark(): ShadeResult[] {
  return DARK_LIGHTNESS_RAMP.map((l, i) => {
    const raw: Oklch = { mode: 'oklch', l, c: 0, h: 0 };
    const clamped = clampChroma(raw, 'oklch', 'rgb');
    return {
      index: i,
      l: clamped.l ?? l,
      c: 0,
      h: 0,
      oklch: formatCss(clamped),
      hex: formatHex(clamped),
    };
  });
}

export interface PaletteEntry {
  spec: ColorSpec | { name: 'dark'; hue: number; peakC: number };
  shades: ShadeResult[];
}

export function buildDefaultPalettes(): PaletteEntry[] {
  const entries: PaletteEntry[] = COLOR_SPECS.map((spec) => ({
    spec,
    shades: buildChromatic(spec),
  }));

  entries.push({
    spec: { name: 'dark', hue: 260, peakC: 0 },
    shades: buildDark(),
  });

  return entries;
}
