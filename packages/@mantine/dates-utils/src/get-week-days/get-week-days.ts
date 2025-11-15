import dayjs from 'dayjs';
import { DateStringValue, DayOfWeek } from '../types';

export interface GetWeekDaysInput {
  /** Week to generate days for */
  week: Date | DateStringValue;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default `true` */
  withWeekendDays?: boolean;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday @default `1` */
  firstDayOfWeek?: DayOfWeek;
}

export function getWeekDays({
  week,
  weekendDays,
  withWeekendDays = true,
  firstDayOfWeek = 1,
}: GetWeekDaysInput): DateStringValue[] {
  const date = dayjs(week);

  let current = date;
  while (current.day() !== firstDayOfWeek) {
    current = current.subtract(1, 'day');
  }

  const days: DateStringValue[] = [];

  for (let i = 0; i < 7; i += 1) {
    const dayOfWeek = current.day();
    const isWeekend = weekendDays && weekendDays.includes(dayOfWeek as DayOfWeek);

    if (!isWeekend || withWeekendDays) {
      days.push(current.format('YYYY-MM-DD'));
    }

    current = current.add(1, 'day');
  }

  return days;
}
