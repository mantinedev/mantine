import dayjs from 'dayjs';
import { Box, GetStylesApi } from '@mantine/core';
import { DateStringValue, DayOfWeek, DayTimeInterval, useDatesContext } from '@mantine/dates-utils';
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

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** Makes the current day twice larger @default false */
  emphasizeToday?: boolean;
}

export function WeekViewDay({
  day,
  slots,
  highlightToday,
  getStyles,
  weekendDays,
  emphasizeToday,
}: WeekViewDayProps) {
  const ctx = useDatesContext();
  const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(day).day() as DayOfWeek);
  const today = dayjs(day).isSame(dayjs(), 'day') && !!highlightToday;

  const items = slots.map((slot) => (
    <Box
      key={slot.startTime}
      {...getStyles('weekViewDaySlot')}
      mod={{ 'hour-start': slot.isHourStart }}
    />
  ));

  return (
    <Box {...getStyles('weekViewDay')} mod={{ today, weekend, emphasize: today && emphasizeToday }}>
      <Box mod={{ today: today && highlightToday === 'column' }} {...getStyles('weekViewDaySlots')}>
        {items}
      </Box>
    </Box>
  );
}
