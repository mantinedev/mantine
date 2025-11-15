import { GetStylesApi } from '@mantine/core';
import { DateStringValue, DayTimeInterval } from '@mantine/dates-utils';
import type { WeekViewFactory, WeekViewHighlightToday } from './WeekView';

export interface WeekViewDayProps {
  /** Date to display */
  day: Date | DateStringValue;

  /** Slots intervals */
  slots: DayTimeInterval[];

  /** `useStyles` return value of `WeekView` */
  getStyles: GetStylesApi<WeekViewFactory>;

  /** `weekday` – highlights today in the weekday row, `column` – highlights today in the entire column */
  highlightToday?: WeekViewHighlightToday;
}

export function WeekViewDay({ day, slots, highlightToday, getStyles }: WeekViewDayProps) {
  return <div {...getStyles('weekViewDay')}>Day</div>;
}
