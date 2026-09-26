export function getDaysInMonth(month: number | null, year: number | null): number {
  if (month === null || year === null) {
    return 31;
  }
  return new Date(year < 1000 ? 2000 : year, month, 0).getDate();
}
