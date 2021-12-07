export function getDecadeRange(year: number, options?: { min?: number; max?: number }) {
  const min = options?.min || -Infinity;
  const max = options?.max || Infinity;

  const rounded = year - (year % 10) - 1;
  const range: number[] = [];
  for (let i = 0; i < 12; i += 1) {
    const rangeYear = rounded + i;
    if (rangeYear <= max && rangeYear >= min) {
      range.push(rangeYear);
    }
  }

  return range;
}
