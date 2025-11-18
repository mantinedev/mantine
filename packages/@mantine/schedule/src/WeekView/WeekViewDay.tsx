import dayjs from 'dayjs';
import { Box, GetStylesApi, UnstyledButton } from '@mantine/core';
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
}

export function WeekViewDay({
  day,
  slots,
  highlightToday,
  getStyles,
  weekendDays,
}: WeekViewDayProps) {
  const ctx = useDatesContext();
  const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(day).day() as DayOfWeek);
  const today = dayjs(day).isSame(dayjs(), 'day') && highlightToday === 'column';

  const items = slots.map((slot) => (
    <UnstyledButton
      key={slot.startTime}
      {...getStyles('weekViewDaySlot')}
      mod={{ 'hour-start': slot.isHourStart }}
      aria-label={`${ctx.labels.timeSlot} ${dayjs(day).format('YYYY-MM-DD')} ${slot.startTime} - ${slot.endTime}`}
    />
  ));

  return (
    <Box {...getStyles('weekViewDay')} mod={{ today, weekend }}>
      <Box mod={{ today }} {...getStyles('weekViewDaySlots')}>
        {items}
      </Box>
    </Box>
  );
}
