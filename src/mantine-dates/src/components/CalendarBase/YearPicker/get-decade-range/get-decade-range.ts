export function getDecadeRange(year: number) {
  const rounded = year - (year % 10) - 1;
  const range: number[] = [];
  for (let i = 0; i < 12; i += 1) {
    const rangeYear = rounded + i;
    range.push(rangeYear);
  }

  return range;
}
