import { clampChroma, formatCss, modeOklch, modeRgb, Oklch, useMode } from 'culori/fn';
import { CHROMA_ENVELOPE, STANDARD_LIGHTNESS_RAMP, lightnessRampForHue } from './ramp';

const oklch = useMode(modeOklch);
useMode(modeRgb);

const NEUTRAL_CHROMA_THRESHOLD = 0.015;

function nearestIndex(l: number, ramp: readonly number[]): number {
  let best = 0;
  for (let i = 1; i < ramp.length; i += 1) {
    if (Math.abs(ramp[i] - l) < Math.abs(ramp[best] - l)) {
      best = i;
    }
  }
  return best;
}

export function generateColorsMapV2(input: string) {
  const seed = oklch(input);

  if (!seed) {
    throw new Error(`Invalid color: ${input}`);
  }

  const seedChroma = seed.c ?? 0;
  const isNeutral = seedChroma < NEUTRAL_CHROMA_THRESHOLD;

  const ramp = isNeutral ? STANDARD_LIGHTNESS_RAMP : lightnessRampForHue(seed.h ?? 0);

  const baseColorIndex = nearestIndex(seed.l, ramp);

  const colors = ramp.map((l, index) => {
    const c = isNeutral
      ? seedChroma
      : seedChroma * (CHROMA_ENVELOPE[index] / CHROMA_ENVELOPE[baseColorIndex]);

    const shade: Oklch = { mode: 'oklch', l, c, h: seed.h };
    return clampChroma(shade, 'oklch', 'rgb');
  });

  colors[baseColorIndex] = clampChroma(seed, 'oklch', 'rgb');

  return { baseColorIndex, colors: colors.map((color) => formatCss(color)) };
}
