export function getDaysInMonth(month: number | null, year: number | null): number {
  if (month === null || year === null) {
    return 31;
  }
  return new Date(year, month, 0).getDate();
}
