import dayjs from 'dayjs';
import { Box, GetStylesApi, UnstyledButton } from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import { DateStringValue, DayOfWeek } from '../../types';
import { DayTimeInterval } from '../../utils';
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

  /** Events list */
  children?: React.ReactNode;

  /** Labels override */
  labels?: ScheduleLabelsOverride;

  /** If set to true, highlights business hours with white background */
  highlightBusinessHours?: boolean;

  /** Business hours range in `HH:mm:ss` format */
  businessHours?: [string, string];
}

export function WeekViewDay({
  day,
  slots,
  highlightToday,
  getStyles,
  weekendDays,
  children,
  labels,
  highlightBusinessHours,
  businessHours,
}: WeekViewDayProps) {
  const ctx = useDatesContext();
  const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(day).day() as DayOfWeek);
  const today = dayjs(day).isSame(dayjs(), 'day') && highlightToday === 'column';

  const isSlotInBusinessHours = (slotTime: string) => {
    if (!highlightBusinessHours || !businessHours) {
      return null;
    }
    const [start, end] = businessHours;
    return slotTime >= start && slotTime < end;
  };

  const items = slots.map((slot) => {
    const inBusinessHours = isSlotInBusinessHours(slot.startTime);

    return (
      <UnstyledButton
        key={slot.startTime}
        {...getStyles('weekViewDaySlot')}
        mod={{
          'hour-start': slot.isHourStart,
          'business-hours': inBusinessHours === true,
          'non-business-hours': inBusinessHours === false,
        }}
        aria-label={`${getLabel('timeSlot', labels)} ${dayjs(day).format('YYYY-MM-DD')} ${slot.startTime} - ${slot.endTime}`}
      />
    );
  });

  return (
    <Box {...getStyles('weekViewDay')} mod={{ today, weekend }}>
      <Box mod={{ today }} {...getStyles('weekViewDaySlots')}>
        {children}
        {items}
      </Box>
    </Box>
  );
}
