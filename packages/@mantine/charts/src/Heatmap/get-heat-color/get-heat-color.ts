interface GetHeatColorInput {
  value: number;
  min: number;
  max: number;
  colors: string[];
}

export function getHeatColor({ value, min, max, colors }: GetHeatColorInput) {
  const percent = max === min ? 1 : (value - min) / (max - min);
  const clampedPercent = Math.min(1, Math.max(0, percent));
  const colorIndex = Math.round((colors.length - 1) * clampedPercent);
  return colors[colorIndex];
}
