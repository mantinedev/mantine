function getDecimalPrecision(num: number) {
  const decimalPrecision = `${num}`.split('.')[1]?.length || 0;
  return decimalPrecision;
}

function cutDecimalTo(value: number, num: number) {
  return Number(value.toFixed(num));
}

export function roundValueTo(value: number, to: number) {
  const rounded = Math.round(value / to) * to;
  return cutDecimalTo(rounded, getDecimalPrecision(to));
}
