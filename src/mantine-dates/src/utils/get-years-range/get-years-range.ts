export interface YearsRange {
  from: number;
  to: number;
}

export function getYearsRange(range: YearsRange) {
  const years: number[] = [];

  for (let year = range.from; year <= range.to; year += 1) {
    years.push(year);
  }

  return years;
}
