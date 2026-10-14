export function clampDimension(value: number, min?: number, max?: number): number {
  let v = value;
  if (min != null) {
    v = Math.max(v, min);
  }
  if (max != null) {
    v = Math.min(v, max);
  }
  return v;
}
