export function isWeekend(date: Date) {
  const weekday = date.getDay();
  return weekday === 6 || weekday === 0;
}
