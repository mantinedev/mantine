export function rotateWeekdaysNames(weekdayNames: string[], firstDayOfWeek: number) {
  const rotated = [...weekdayNames];
  for (let i = 0; i < firstDayOfWeek; i += 1) {
    rotated.push(rotated.shift() as string);
  }

  return rotated;
}
