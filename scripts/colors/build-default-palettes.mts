import {
  clampChroma,
  formatHex,
  modeOklch,
  modeRgb,
  modeLrgb,
  type Oklch,
  useMode,
  wcagLuminance,
} from 'culori/fn';
import {
  CHROMA_ENVELOPE,
  DARK_LIGHTNESS_RAMP,
} from '../../packages/@mantine/colors-generator/src/ramp';

useMode(modeOklch);
useMode(modeRgb);
useMode(modeLrgb);

export interface PerColorOverrides {
  cScale?: Partial<Record<number, number>>;
}

export interface ColorSpec {
  name: string;
  hue: number;
  peakC: number;
  brightL6?: number;
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
  { name: 'red', hue: 25, peakC: 0.276 },
  { name: 'pink', hue: 350, peakC: 0.264 },
  { name: 'grape', hue: 315, peakC: 0.252 },
  { name: 'violet', hue: 292, peakC: 0.276 },
  { name: 'indigo', hue: 270, peakC: 0.264 },
  { name: 'blue', hue: 255, peakC: 0.264, overrides: { cScale: { 5: 0.85 } } },
  { name: 'cyan', hue: 227, peakC: 0.16 },
  { name: 'teal', hue: 168, peakC: 0.192 },
  { name: 'green', hue: 150, peakC: 0.216 },
  { name: 'lime', hue: 130, peakC: 0.2, brightL6: 0.8 },
  { name: 'yellow', hue: 80, peakC: 0.2, brightL6: 0.82 },
  {
    name: 'orange',
    hue: 43,
    peakC: 0.22,
    brightL6: 0.7,
    overrides: { cScale: { 5: 0.85, 6: 1.15 } },
  },
  { name: 'gray', hue: 260, peakC: 0.008 },
];

const L_LIGHT_WEIGHTS = [1.0, 0.85, 0.67, 0.47, 0.29, 0.14, 0.0] as const;
const L_DARK_WEIGHTS = [0.0, 0.333, 0.667, 1.0] as const;
// Bright hues (lime/yellow/orange) drop steeply to muddy olive/brown at the
// dark end. Hold index 7 (the dark-scheme `filled` shade) close to the bright
// index-6 anchor and keep index 9 at the floor so the light-scheme light-variant
// text (shade 9) contrast is unchanged.
const L_DARK_WEIGHTS_BRIGHT = [0.0, 0.18, 0.55, 1.0] as const;
const L_TOP = 0.97;
const L_DARK_FLOOR = 0.4;
const L6_LUMINANCE_CEILING = 0.178;
const L6_SEARCH_LO = 0.3;
const L6_SEARCH_HI = 0.85;

function findL6(hue: number, peakC: number): number {
  let lo = L6_SEARCH_LO;
  let hi = L6_SEARCH_HI;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const raw: Oklch = { mode: 'oklch', l: mid, c: peakC, h: hue };
    const clamped = clampChroma(raw, 'oklch', 'rgb');
    const hex = formatHex(clamped);
    const lum = wcagLuminance(hex) ?? 1;
    if (lum <= L6_LUMINANCE_CEILING) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function buildLightnessRamp(l6: number, darkWeights: readonly number[] = L_DARK_WEIGHTS): number[] {
  const ramp: number[] = new Array(10);
  for (let i = 0; i <= 6; i++) {
    ramp[i] = l6 + (L_TOP - l6) * L_LIGHT_WEIGHTS[i];
  }
  for (let i = 6; i <= 9; i++) {
    ramp[i] = l6 + (L_DARK_FLOOR - l6) * darkWeights[i - 6]!;
  }
  return ramp;
}

export interface BuildChromaticPaletteOptions {
  hue: number;
  peakC: number;
  cScale?: Partial<Record<number, number>>;
}

export function buildChromaticPalette(opts: BuildChromaticPaletteOptions): ShadeResult[] {
  return buildChromatic({
    name: '',
    hue: opts.hue,
    peakC: opts.peakC,
    overrides: opts.cScale ? { cScale: opts.cScale } : undefined,
  });
}

function buildChromatic(spec: ColorSpec): ShadeResult[] {
  const { hue, peakC, brightL6, overrides } = spec;
  const isNeutral = peakC <= 0.01;

  let lightnessRamp: number[];
  if (isNeutral) {
    const GRAY_RAMP = [0.98, 0.96, 0.93, 0.89, 0.84, 0.74, 0.61, 0.47, 0.38, 0.3];
    lightnessRamp = GRAY_RAMP;
  } else {
    const l6 = brightL6 !== undefined ? brightL6 : findL6(hue, peakC);
    lightnessRamp = buildLightnessRamp(
      l6,
      brightL6 !== undefined ? L_DARK_WEIGHTS_BRIGHT : L_DARK_WEIGHTS
    );
  }

  const envelopePeak = CHROMA_ENVELOPE[6];

  return Array.from({ length: 10 }, (_, i) => {
    const cScaleFactor = overrides?.cScale?.[i] ?? 1;
    const l = lightnessRamp[i]!;
    const c = peakC * (CHROMA_ENVELOPE[i] / envelopePeak) * cScaleFactor;

    const raw: Oklch = { mode: 'oklch', l, c, h: hue };
    const clamped = clampChroma(raw, 'oklch', 'rgb');

    const rL = Math.round((clamped.l ?? l) * 1000) / 1000;
    const rC = Math.round((clamped.c ?? c) * 10000) / 10000;
    const rH = Math.round((clamped.h ?? hue) * 10) / 10;

    const fL = rL.toFixed(3);
    const fC = rC.toFixed(4);
    const fH = rH.toFixed(1);

    return {
      index: i,
      l: rL,
      c: rC,
      h: rH,
      oklch: `oklch(${fL} ${fC} ${fH})`,
      hex: formatHex(clamped),
    };
  });
}

function buildDark(): ShadeResult[] {
  return DARK_LIGHTNESS_RAMP.map((l, i) => {
    const raw: Oklch = { mode: 'oklch', l, c: 0, h: 0 };
    const clamped = clampChroma(raw, 'oklch', 'rgb');
    const rL = Math.round((clamped.l ?? l) * 1000) / 1000;
    return {
      index: i,
      l: rL,
      c: 0,
      h: 0,
      oklch: `oklch(${rL.toFixed(3)} 0 0)`,
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
