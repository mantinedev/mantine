export function roundValueTo(value: number, to: number) {
  const rounded = Math.round(value / to) * to;
  const precision = `${to}`.split('.')[1]?.length || 0;
  return Number(rounded.toFixed(precision));
}
