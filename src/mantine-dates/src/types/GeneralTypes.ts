export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CalendarLevel = 'month' | 'year' | 'decade';

export interface ControlKeydownPayload {
  cellIndex: number;
  rowIndex: number;
  date: Date;
}
