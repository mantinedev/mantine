export function getPrecision(step: number) {
  if (!step) return 0;
  const split = step.toString().split('.');
  return split.length > 1 ? split[1].length : 0;
}
