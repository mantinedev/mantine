export function splitTimeString(timeString: string) {
  const [hours = null, minutes = null, seconds = null] = timeString.split(':').map(Number);
  return { hours, minutes, seconds };
}
