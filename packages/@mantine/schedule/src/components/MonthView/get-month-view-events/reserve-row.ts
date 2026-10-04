interface ReserveRowInput {
  nextRowByDay: number[];
  startDayIndex: number;
  daysSpanned: number;
}

export function reserveRow({ nextRowByDay, startDayIndex, daysSpanned }: ReserveRowInput): number {
  const endDayIndex = startDayIndex + daysSpanned;
  const row = Math.max(...nextRowByDay.slice(startDayIndex, endDayIndex));
  nextRowByDay.fill(row + 1, startDayIndex, endDayIndex);
  return row;
}
