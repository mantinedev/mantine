interface GetChangeValue {
  value: number;
  containerWidth?: number;
  min: number;
  max: number;
  step: number;
}

export function getChangeValue({ value, containerWidth, min, max, step }: GetChangeValue) {
  const left = !containerWidth
    ? value
    : Math.min(Math.max(value, 0), containerWidth) / containerWidth;
  const dx = left * (max - min);
  return (dx !== 0 ? Math.round(dx / step) * step : 0) + min;
}
