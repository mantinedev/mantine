import { converter, interpolate, parse } from 'culori';
import {
  darkColdColors,
  darkColors,
  darkWarmColors,
  DEFAULT_THEME,
  type MantineColorsTuple,
} from '@mantine/core';
import { generateNeutralPalette } from './colors';
import { isBaseColor } from './params';

export const NEUTRALS = ['gray', 'dark'] as const;
export type Neutral = (typeof NEUTRALS)[number];

export const NEUTRAL_PRESETS = ['default', 'warm', 'cold'] as const;
export type NeutralPreset = (typeof NEUTRAL_PRESETS)[number];

const toOklch = converter('oklch');

function round(value: number | undefined, digits: number) {
  return Number((value ?? 0).toFixed(digits));
}

function formatOklch(color: { l: number; c?: number; h?: number }) {
  return `oklch(${round(color.l, 4)} ${round(color.c, 4)} ${round(color.h, 2)})`;
}

function tintedGray(hue: number) {
  const chroma = [0.003, 0.004, 0.006, 0.008, 0.01, 0.012, 0.012, 0.012, 0.011, 0.01];
  return DEFAULT_THEME.colors.gray.map((shade, index) =>
    formatOklch({ l: toOklch(parse(shade))?.l ?? 0.5, c: chroma[index], h: hue })
  ) as unknown as MantineColorsTuple;
}

export const NEUTRAL_LIBRARY: Record<Neutral, Record<NeutralPreset, MantineColorsTuple>> = {
  gray: {
    default: DEFAULT_THEME.colors.gray,
    warm: tintedGray(65),
    cold: tintedGray(255),
  },
  dark: {
    default: darkColors,
    warm: darkWarmColors,
    cold: darkColdColors,
  },
};

export function mixNeutral(ramp: readonly string[], tint: string, percent: number) {
  const target = parse(tint);
  if (!target) {
    return [...ramp];
  }

  return ramp.map((shade) => {
    const source = parse(shade);
    if (!source) {
      return shade;
    }
    const mixed = toOklch(interpolate([source, target], 'oklab')(percent / 100));
    return formatOklch({ ...mixed, l: toOklch(source)?.l ?? mixed.l });
  });
}

export function shiftLightness(ramp: readonly string[], shift: number) {
  if (shift === 0) {
    return [...ramp];
  }

  return ramp.map((shade) => {
    const color = toOklch(parse(shade));
    return color
      ? formatOklch({ ...color, l: Math.min(1, Math.max(0, color.l + shift / 100)) })
      : shade;
  });
}

export const THEME_NEUTRAL = 'preset';

export function hasThemeNeutral(neutral: Neutral, themeRamp: readonly string[]) {
  return themeRamp.join() !== NEUTRAL_LIBRARY[neutral].default.join();
}

export function getCustomNeutralKey(index: number) {
  return `custom-${index + 1}`;
}

export function resolveNeutral(
  neutral: Neutral,
  selection: string | null,
  customRamps: { shades: string[] }[] | null
): string[] | null {
  if (!selection || selection === THEME_NEUTRAL) {
    return null;
  }

  if ((NEUTRAL_PRESETS as readonly string[]).includes(selection)) {
    return [...NEUTRAL_LIBRARY[neutral][selection as NeutralPreset]];
  }

  if (isBaseColor(selection)) {
    return generateNeutralPalette(selection, NEUTRAL_LIBRARY[neutral].default);
  }

  const match = /^custom-(\d+)$/.exec(selection);
  const ramp = match ? customRamps?.[Number(match[1]) - 1] : undefined;
  return ramp ? [...ramp.shades] : null;
}
