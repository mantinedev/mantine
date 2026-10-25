import dayjs from 'dayjs';
import { MantineColor } from '@mantine/core';

/** Resource data object passed to resource view components */
export interface ScheduleResourceData {
  /** Unique resource identifier */
  id: string | number;

  /** Resource display label */
  label: React.ReactNode;

  /** Optional color for the resource */
  color?: MantineColor;

  /** Additional resource data, defined by the user, not used internally by the library */
  payload?: Record<PropertyKey, any>;
}

/** Group definition for resource views, groups are displayed as a rowspan-style column */
export interface ScheduleResourceGroup {
  /** Group display label */
  label: React.ReactNode;

  /** Resource IDs that belong to this group */
  resourceIds: (string | number)[];
}

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

  /** Event display mode. Background events render as full-width blocks behind regular events, non-interactive unless `withInteractiveBackgroundEvents` is set on the view. @default 'default' */
  display?: 'default' | 'background';

  /** Additional event data, defined by the user, not used internally by the library */
  payload?: Payload;

  /** Resource ID that this event belongs to, used by resource view components */
  resourceId?: string | number;
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

/** Controls how events that overlap in time are laid out along the horizontal axis */
export type ScheduleEventOverlapMode = 'columns' | 'cascade';

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

/** Controls whether a drop or resize that would overlap another event is rejected */
export type PreventEventOverlap =
  | boolean
  | ((stillEvent: ScheduleEventData, movingEvent: ScheduleEventData) => boolean);

/** Data passed to `canDropEvent` while an event is dragged over a target and again before the drop is committed */
export interface ScheduleCanDropEventData {
  /** Event that is being dragged */
  event: ScheduleEventData;

  /** Candidate start of the event */
  start: DateTimeStringValue;

  /** Candidate end of the event */
  end: DateTimeStringValue;

  /** Target resource, only in `Resources*` views */
  resourceId?: string | number;
}

/** Data passed to `canDropExternalEvent` while an external item is dragged over a target and again before the drop is committed */
export interface ScheduleCanDropExternalEventData {
  /** Data transfer of the drag event */
  dataTransfer: DataTransfer;

  /** Datetime the external item is dropped at */
  start: DateTimeStringValue;

  /** Target resource, only in `Resources*` views */
  resourceId?: string | number;
}

/** Data passed to `canResizeEventTo` on every pointer move while an event is resized and again before the resize is committed */
export interface ScheduleCanResizeEventToData {
  /** Event that is being resized */
  event: ScheduleEventData;

  /** Candidate start of the event */
  start: DateTimeStringValue;

  /** Candidate end of the event */
  end: DateTimeStringValue;

  /** Edge of the event that is being dragged */
  edge: 'start' | 'end';
}

interface ScheduleEventPlacementRejectedBase {
  /** Candidate start of the event, for `external-drop` the datetime the item was dropped at */
  start: DateTimeStringValue;

  /** Candidate end of the event, not present on `external-drop` */
  end: DateTimeStringValue;

  /** Events the placement collided with, empty when the rejection came from a callback */
  conflicts: ScheduleEventData[];

  /** `'overlap'` when `preventEventOverlap` found a conflict, `'rejected'` when a callback returned `false` */
  reason: 'overlap' | 'rejected';

  /** Only in `Resources*` views: the target resource for `drop` and `external-drop`, the resized event resource for `resize` */
  resourceId?: string | number;
}

/** Data passed to `onEventPlacementRejected` when a drop, resize or external drop is rejected. External drops have no `end`: the schedule does not know the duration of an external item. */
export type ScheduleEventPlacementRejectedData =
  | (ScheduleEventPlacementRejectedBase & {
      action: 'drop';
      /** Event that was being dragged */
      event: ScheduleEventData;
    })
  | (ScheduleEventPlacementRejectedBase & {
      action: 'resize';
      /** Event that was being resized */
      event: ScheduleEventData;
      /** Edge of the event that was being dragged */
      edge: 'start' | 'end';
    })
  | (Omit<ScheduleEventPlacementRejectedBase, 'end'> & {
      action: 'external-drop';
      /** Data transfer of the drag event */
      dataTransfer: DataTransfer;
      /** Always `'rejected'`, `preventEventOverlap` does not apply to external drops */
      reason: 'rejected';
      /** Always empty, external drops carry no duration and are not checked for overlap */
      conflicts: [];
    });
