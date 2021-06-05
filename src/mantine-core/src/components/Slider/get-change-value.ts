interface GetChangeValue {
  value: number;
  containerWidth: number;
  min: number;
  max: number;
  step: number;
}

export function getChangeValue({ value, containerWidth, min, max, step }: GetChangeValue) {
  const left = Math.min(Math.max(value, 0), containerWidth);
  const dx = (left / containerWidth) * (max - min);
  return (dx !== 0 ? Math.floor(dx / step) * step : 0) + min;
}
