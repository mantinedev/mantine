export default function getStartOfWeek(date: Date) {
  const value = new Date(date);
  const day = value.getDay() || 7;

  if (day !== 1) {
    value.setHours(-24 * (day - 1));
  }

  return value;
}
