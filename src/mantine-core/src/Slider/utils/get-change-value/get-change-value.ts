interface GetChangeValue {
  value: number;
  containerWidth?: number;
  min: number;
  max: number;
  step: number;
  precision?: number;
}

export function getChangeValue({
  value,
  containerWidth,
  min,
  max,
  step,
  precision,
}: GetChangeValue) {
  const left = !containerWidth
    ? value
    : Math.min(Math.max(value, 0), containerWidth) / containerWidth;
  const dx = left * (max - min);
  const minIsNegative = min <= 0;
  const nextValue =
    dx !== 0 ? Math.round(dx / step) * step + (minIsNegative ? min : 0) : Math.min(min, 0);
  const nextValueWithPrecision = precision ? Number(nextValue.toFixed(precision)) : nextValue;
  const finalValue = Math.min(nextValueWithPrecision, max);

  return finalValue <= min ? min : finalValue;
}
