export function isSameMonth(date: Date, comparison: Date) {
  return (
    date.getFullYear() === comparison.getFullYear() && date.getMonth() === comparison.getMonth()
  );
}
