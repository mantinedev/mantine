import dayjs from "dayjs";

export function isSameMonth(date: Date, comparison: Date) {
  const dayDate = dayjs(date)
  const dayComparison = dayjs(comparison)
  return (
    dayDate.year() === dayComparison.year() && dayDate.month() === dayComparison.month()
  );
}