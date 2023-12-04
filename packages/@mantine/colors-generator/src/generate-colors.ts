import chroma from 'chroma-js';

const LIGHTNESS_MAP = [0.96, 0.907, 0.805, 0.697, 0.605, 0.547, 0.518, 0.445, 0.395, 0.34];
const SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32];

function getClosestLightness(colorObject: chroma.Color) {
  const lightnessGoal = colorObject.get('hsl.l');
  return LIGHTNESS_MAP.reduce((prev, curr) =>
    Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal) ? curr : prev
  );
}

export function generateColorsMap(color: string) {
  const colorObject = chroma(color);
  const closestLightness = getClosestLightness(colorObject);
  const baseColorIndex = LIGHTNESS_MAP.findIndex((l) => l === closestLightness);

  const colors = LIGHTNESS_MAP.map((l) => colorObject.set('hsl.l', l))
    .map((c) => chroma(c))
    .map((c, i) => {
      const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex];
      return saturationDelta >= 0
        ? c.saturate(saturationDelta)
        : c.desaturate(saturationDelta * -1);
    });

  return { baseColorIndex, colors };
}

export type MantineColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  ...string[],
];

export function generateColors(color: string) {
  return generateColorsMap(color).colors.map((c) => c.hex()) as unknown as MantineColorsTuple;
}
