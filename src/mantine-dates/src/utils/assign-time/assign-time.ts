export function assignTime(originalDate: Date, resultDate: Date) {
  if (!originalDate || !resultDate) {
    return resultDate;
  }

  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  const ms = originalDate.getMilliseconds();

  const result = new Date(resultDate);
  result.setHours(hours);
  result.setMinutes(minutes);
  result.setSeconds(seconds);
  result.setMilliseconds(ms);

  return result;
}
