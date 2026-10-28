import { converter, differenceEuclidean, formatHex, parse } from 'culori';
import { generateColorFormats } from '@mantine/colors-generator';
import type { MantineColorShade } from '@mantine/core';

const toOklch = converter('oklch');

function round(value: number | undefined, digits: number) {
  return Number((value ?? 0).toFixed(digits));
}

function formatOklch(color: { l: number; c?: number; h?: number }) {
  return `oklch(${round(color.l, 4)} ${round(color.c, 4)} ${round(color.h, 2)})`;
}

function normalizeColor(value: string) {
  const color = toOklch(parse(value));
  return color ? formatOklch(color) : value;
}
const distance = differenceEuclidean('oklab');

export interface GeneratedPalette {
  shades: string[];
  baseColorIndex: MantineColorShade;
}

export function generatePalette(value: string | null): GeneratedPalette | null {
  if (!value) {
    return null;
  }

  try {
    const { colors, baseColorIndex } = generateColorFormats(value);
    return {
      shades: colors.map(normalizeColor),
      baseColorIndex: baseColorIndex as MantineColorShade,
    };
  } catch {
    return null;
  }
}

export function generateNeutralPalette(value: string | null, ramp: readonly string[]) {
  const base = value ? toOklch(parse(value)) : undefined;
  if (!base) {
    return null;
  }

  const lightness = ramp.map((shade) => toOklch(parse(shade))?.l ?? 0.5);
  const baseIndex = lightness.reduce(
    (closest, current, index) =>
      Math.abs(current - base.l) < Math.abs(lightness[closest] - base.l) ? index : closest,
    0
  );

  return lightness.map((l, index) =>
    index === baseIndex
      ? formatOklch(base)
      : formatOklch({
          l,
          c: (base.c ?? 0) * Math.min(1, 4 * l * (1 - l)),
          h: base.h ?? 0,
        })
  );
}

export function toHexColor(value: string | null | undefined) {
  if (!value) {
    return '';
  }

  try {
    const parsed = parse(value);
    return parsed ? formatHex(parsed) : '';
  } catch {
    return '';
  }
}

export interface ColorNameSuggestion {
  name: string;
  label: string;
}

let colorNames: Promise<{ label: string; name: string; value: string }[]> | null = null;

export function loadColorNames() {
  colorNames ??= import('./color-names.json').then((module) =>
    (module.default.colors as [string, string][]).map(([label, value]) => ({
      label,
      value,
      name: label.toLowerCase().replace(/\s+/g, '-'),
    }))
  );
  return colorNames;
}

export async function suggestColorName(
  value: string,
  taken: Set<string>
): Promise<ColorNameSuggestion | null> {
  const color = parse(value);
  if (!color) {
    return null;
  }

  const names = await loadColorNames();
  const candidates = names
    .filter((item) => !taken.has(item.name))
    .map((item) => ({ item, delta: distance(color, item.value) }))
    .sort((a, b) => a.delta - b.delta);

  const best = candidates[0]?.item;
  return best ? { name: best.name, label: best.label } : null;
}
