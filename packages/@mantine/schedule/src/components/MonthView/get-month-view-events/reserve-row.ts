interface ReserveRowInput {
  /** For each day of the week (0-6), the first row that is not occupied by an already placed event, updated in place */
  nextRowByDay: number[];

  /** Index of the first day of the event within the week (0-6) */
  startDayIndex: number;

  /** Number of days the event spans within the week */
  daysSpanned: number;
}

/** Returns the first row that is free on every day spanned by the event and marks it as occupied on these days */
export function reserveRow({ nextRowByDay, startDayIndex, daysSpanned }: ReserveRowInput): number {
  const endDayIndex = startDayIndex + daysSpanned;
  const row = Math.max(...nextRowByDay.slice(startDayIndex, endDayIndex));
  nextRowByDay.fill(row + 1, startDayIndex, endDayIndex);
  return row;
}
