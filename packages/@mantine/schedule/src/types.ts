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

/** Interaction mode used by Schedule components */
export type ScheduleMode = 'static' | 'default';

/** Payload type for ScheduleEventData, defined in user application */
export type EventPayload = Record<PropertyKey, any>;

/** RFC 5545 recurrence data */
export interface ScheduleRecurrenceData {
  /** Recurrence rule string, for example: `FREQ=WEEKLY;BYDAY=MO,WE` */
  rrule: string;

  /** Exception datetimes in `YYYY-MM-DD HH:mm:ss` or valid date string format */
  exdate?: DateTimeStringValue[];

  /** Optional explicit series start datetime */
  dtstart?: DateTimeStringValue;
}

/** Metadata attached to generated recurring instances */
export interface RecurringInstanceMeta {
  /** If true, event is generated from recurrence rule */
  isRecurringInstance: boolean;

  /** Parent series event id */
  recurringEventId: string | number;

  /** Original occurrence datetime key */
  recurrenceId: DateTimeStringValue;

  /** Original occurrence dates before any drag/drop updates */
  originalStart: DateTimeStringValue;
  originalEnd: DateTimeStringValue;
}

interface ScheduleEventBase<Payload extends EventPayload = EventPayload> {
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

  /** Event variant, default is `'light'` */
  variant?: 'filled' | 'light';

  /** Event display mode. Background events render as full-width, non-interactive blocks behind regular events. @default 'default' */
  display?: 'default' | 'background';

  /** Additional event data, defined by the user, not used internally by the library */
  payload?: Payload;
}

/** One-off event without recurrence */
export interface ScheduleSingleEventData<
  Payload extends EventPayload = EventPayload,
> extends ScheduleEventBase<Payload> {
  recurrence?: never;
  recurringEventId?: never;
  recurrenceId?: never;
}

/** Recurring series source event */
export interface ScheduleRecurringSeriesEventData<
  Payload extends EventPayload = EventPayload,
> extends ScheduleEventBase<Payload> {
  /** Recurrence definition for the event series */
  recurrence: ScheduleRecurrenceData;
  recurringEventId?: never;
  recurrenceId?: never;
}

/** Override for one specific recurring occurrence */
export interface ScheduleRecurringOverrideEventData<
  Payload extends EventPayload = EventPayload,
> extends ScheduleEventBase<Payload> {
  recurrence?: never;
  /** Parent recurring series id */
  recurringEventId: string | number;
  /** Occurrence id (`YYYY-MM-DD HH:mm:ss`) */
  recurrenceId: DateTimeStringValue;
}

interface ScheduleEventRuntimeMeta {
  /** Metadata for generated recurring instances */
  recurringInstance?: RecurringInstanceMeta;
}

/** Event data object passed to all `@mantine/schedule` components */
export type ScheduleEventData<Payload extends EventPayload = EventPayload> =
  | (ScheduleSingleEventData<Payload> & ScheduleEventRuntimeMeta)
  | (ScheduleRecurringSeriesEventData<Payload> & ScheduleEventRuntimeMeta)
  | (ScheduleRecurringOverrideEventData<Payload> & ScheduleEventRuntimeMeta);

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
export type DayPositionedEventData<Payload extends EventPayload = EventPayload> =
  ScheduleEventData<Payload> & {
    position: DayEventPositionData;
  };

export interface WeekEventPositionData extends DayEventPositionData {
  /** Week offset in %, represents event start position from the first day of the week (for regular events only) */
  weekOffset?: number;

  /** Row index for all-day events, used for vertical stacking */
  row: number;

  /** Indicates if the event hangs from the start, end, both or none of the week */
  hanging: 'start' | 'end' | 'both' | 'none';
}

/** Event data with calculated position for week view */
export type WeekPositionedEventData<Payload extends EventPayload = EventPayload> =
  ScheduleEventData<Payload> & {
    position: WeekEventPositionData;
  };

export interface MonthEventPositionData {
  /** Start offset % from the start of the week (inset-inline-start) */
  startOffset: number;

  /** Event width in % */
  width: number;

  /** Week index in the month, 0-based */
  weekIndex: number;

  /** Event row index in the week, 0-based */
  row: number;

  /** Indicates if the event hangs from the start, end, both or none of the week */
  hanging: 'start' | 'end' | 'both' | 'none';
}

/** Event data with calculated position for month view */
export type MonthPositionedEventData<Payload extends EventPayload = EventPayload> =
  ScheduleEventData<Payload> & {
    position: MonthEventPositionData;
  };

export interface DropTarget {
  /** Target date in YYYY-MM-DD format */
  date: DateStringValue;

  /** Target time in HH:mm:ss format (for DayView/WeekView) */
  time?: string;

  /** Target slot index (for DayView/WeekView) */
  slotIndex?: number;
}
