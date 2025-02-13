interface GetHeatColorInput {
  value: number;
  min: number;
  max: number;
  colors: string[];
}

export function getHeatColor({ value, min, max, colors }: GetHeatColorInput) {
  const percent = (value - min) / (max - min);
  const colorIndex = Math.round((colors.length - 1) * percent);
  return colors[colorIndex];
}
