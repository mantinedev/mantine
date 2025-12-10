import { MantineColor } from '@mantine/core';

/** Date value used by all Mantine components, format: `YYYY-MM-DD` */
export type DateStringValue = string;

/** DateTime value used by all Mantine components, format: `YYYY-MM-DD HH:mm:ss` */
export type DateTimeStringValue = string;

/** Day of the week, 0 – Sunday, 1 – Monday, etc. */
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/** string – dayjs format, callback function – custom formatter */
export type DateLabelFormat = string | ((date: DateStringValue) => string);

/** View level used by Schedule component */
export type ScheduleViewLevel = 'day' | 'week' | 'month' | 'year';

/** Event data object used in all `@mantine/schedule` components */
export interface ScheduleEventData<
  Payload extends Record<PropertyKey, any> = Record<PropertyKey, any>,
> {
  /** Unique event id, used for key and identification */
  id: string | number;

  /** Event title, displayed in month, week and day views */
  title: string;

  /** Event start date/time */
  start: Date | DateTimeStringValue;

  /** Event end date/time */
  end: Date | DateTimeStringValue;

  /** Event background color. Key of `theme.colors` or any valid CSS color. */
  color: MantineColor;

  /** Additional event data, defined by the user, not used internally by the library */
  payload: Payload;
}
