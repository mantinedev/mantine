import dayjs from 'dayjs';
import { Box, GetStylesApi } from '@mantine/core';
import { DateLabelFormat, DateStringValue, DayTimeInterval } from '@mantine/dates-utils';
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

  /** `dayjs` format for weekdays names. @default `'ddd'` */
  weekdayFormat?: DateLabelFormat;
}

export function WeekViewDay({
  day,
  slots,
  highlightToday,
  weekdayFormat,
  getStyles,
}: WeekViewDayProps) {
  const today = dayjs(day).isSame(dayjs(), 'day') && !!highlightToday;

  const items = slots.map((slot) => (
    <Box
      key={slot.startTime}
      {...getStyles('weekViewDaySlot')}
      mod={{ 'hour-start': slot.isHourStart }}
    >
      &nbsp;
    </Box>
  ));

  return (
    <Box {...getStyles('weekViewDay')} mod={{ today }}>
      <div {...getStyles('weekViewDayLabel')}>
        <div {...getStyles('weekViewDayWeekday')}>
          {typeof weekdayFormat === 'function'
            ? weekdayFormat(dayjs(day).format('YYYY-MM-DD'))
            : dayjs(day).format(weekdayFormat)}
        </div>
        <div {...getStyles('weekViewDayNumber')}>{dayjs(day).date()}</div>
      </div>

      <div {...getStyles('weekViewDaySlots')}>{items}</div>
    </Box>
  );
}
