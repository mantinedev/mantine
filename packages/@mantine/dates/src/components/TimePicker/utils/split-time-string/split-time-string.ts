export function splitTimeString(timeString: string) {
  const [hours = null, minutes = null, seconds = null] = timeString
    .split(':')
    .map((part) => (Number.isNaN(Number(part)) ? null : Number(part)));
  return { hours, minutes, seconds };
}
