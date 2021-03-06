export function getEndOfWeek(date: Date) {
  const value = new Date(date);
  const day = value.getDay();
  if (day !== 0) {
    value.setDate(value.getDate() + (7 - day));
  }

  return value;
}
