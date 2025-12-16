import dayjs from 'dayjs';
import { MantineColor } from '@mantine/core';

/** Date value type used by internal package utils */
export type AnyDateValue = DateStringValue | Date | dayjs.Dayjs;

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

/** Payload type for ScheduleEventData, defined in user application */
export type EventPayload = Record<PropertyKey, any>;

/** Event data object passed to all `@mantine/schedule` components */
export interface ScheduleEventData<Payload extends EventPayload = EventPayload> {
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

export interface DayEventPositionData {
  /** All day events */
  allDay: boolean;

  /** Event top position in %, represents start time */
  top: number;

  /** Event height in %, represents duration (end time - start time) */
  height: number;

  /** Event width in %, represents event size in overlap group */
  width: number;

  /** Event left offset in %, represents event position in overlap group */
  offset: number;

  /** Number of events in the overlap group */
  overlaps: number;

  /** Column index in the overlap group, 1-based */
  column: number;
}

/** Event data with calculated position for day view */
export interface DayPositionedEventData<
  Payload extends EventPayload = EventPayload,
> extends ScheduleEventData<Payload> {
  position: DayEventPositionData;
}

export interface WeekEventPositionData extends DayEventPositionData {
  /** Week offset in %, represents event start position from the first day of the week (for regular events only) */
  weekOffset?: number;

  /** Row index for all-day events, used for vertical stacking */
  row: number;

  /** Indicates that the event starts before the current week and continues into it */
  hangingStart: boolean;

  /** Indicates that the event continues after the current week */
  hangingEnd: boolean;
}

/** Event data with calculated position for week view */
export interface WeekPositionedEventData<
  Payload extends EventPayload = EventPayload,
> extends ScheduleEventData<Payload> {
  position: WeekEventPositionData;
}

export interface MonthEventPositionData {
  /** Start offset % from the start of the week (inset-inline-start) */
  startOffset: number;

  /** Event width in % */
  width: number;

  /** Week index in the month, 0-based */
  weekIndex: number;

  /** Event row index in the week, 0-based */
  row: number;

  /** Indicates that the event starts before the current week and continues into it */
  hangingStart: boolean;

  /** Indicates that the event continues after the current week */
  hangingEnd: boolean;
}

/** Event data with calculated position for month view */
export interface MonthPositionedEventData<
  Payload extends EventPayload = EventPayload,
> extends ScheduleEventData<Payload> {
  position: MonthEventPositionData;
}
