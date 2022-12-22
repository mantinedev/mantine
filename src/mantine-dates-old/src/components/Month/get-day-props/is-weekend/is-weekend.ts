export function isWeekend(date: Date, weekendDays = [0, 6]) {
  return weekendDays.includes(date.getDay());
}
