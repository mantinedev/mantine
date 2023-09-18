export function clamp(value: number, min: number | undefined, max: number | undefined) {
  if (min === undefined && max === undefined) {
    return value;
  }

  if (min !== undefined && max === undefined) {
    return Math.max(value, min);
  }

  if (min === undefined && max !== undefined) {
    return Math.min(value, max);
  }

  return Math.min(Math.max(value, min!), max!);
}
