# Schedule API Reference

All exports come from `@mantine/schedule`. Dates are strings: `DateStringValue` is `YYYY-MM-DD`,
`DateTimeStringValue` is `YYYY-MM-DD HH:mm:ss` (both are plain `string` aliases). Props typed
`Date | string` accept either.

## Table of Contents
- [Event and resource types](#event-and-resource-types)
- [Props shared by the event views](#props-shared-by-the-event-views)
- [Callback payloads](#callback-payloads)
- [Placement validation](#placement-validation)
- [Schedule](#schedule)
- [DayView and WeekView](#dayview-and-weekview)
- [MonthView](#monthview)
- [YearView](#yearview)
- [AgendaView](#agendaview)
- [MobileMonthView](#mobilemonthview)
- [Resources views](#resources-views)
- [ScheduleHeader](#scheduleheader)
- [Labels](#labels)
- [Utilities](#utilities)
- [Styles API and CSS variables](#styles-api-and-css-variables)

---

## Event and resource types

```ts
interface ScheduleEventBase<Payload extends EventPayload = EventPayload> {
  id: string | number;                 // unique across the whole events array
  title: string;
  start: Date | DateTimeStringValue;
  end: Date | DateTimeStringValue;     // must not be before start
  color: MantineColor;                 // theme color key or any CSS color
  variant?: 'filled' | 'light';        // default 'light'
  display?: 'default' | 'background';  // default 'default'
  payload?: Payload;                   // your data, never read by the library
  resourceId?: string | number;        // resources views
}

type ScheduleEventData<Payload> =
  | ScheduleSingleEventData<Payload>             // no recurrence fields
  | ScheduleRecurringSeriesEventData<Payload>    // recurrence: ScheduleRecurrenceData
  | ScheduleRecurringOverrideEventData<Payload>; // recurringEventId + recurrenceId
// every member may also carry `recurringInstance?: RecurringInstanceMeta` (set by the views)

interface ScheduleRecurrenceData {
  rrule: string;                       // RFC 5545 rule without DTSTART, e.g. 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=10'
  exdate?: DateTimeStringValue[];      // occurrence starts to skip
  dtstart?: DateTimeStringValue;       // series start when it differs from `start`
}

interface RecurringInstanceMeta {
  isRecurringInstance: boolean;
  recurringEventId: string | number;   // series id
  recurrenceId: DateTimeStringValue;   // original occurrence start
  originalStart: DateTimeStringValue;
  originalEnd: DateTimeStringValue;
}

interface ScheduleResourceData {
  id: string | number;
  label: React.ReactNode;
  color?: MantineColor;
  payload?: Record<PropertyKey, any>;
}

interface ScheduleResourceGroup {
  label: React.ReactNode;
  resourceIds: (string | number)[];
}
```

Other exported types: `EventPayload`, `DateStringValue`, `DateTimeStringValue`, `DayOfWeek`
(`0` Sunday … `6` Saturday), `DateLabelFormat` (dayjs format string or
`(date: DateStringValue) => string`), `ScheduleViewLevel` (`'day' | 'week' | 'month' | 'year'`),
`ResourcesScheduleViewLevel` (`'day' | 'week' | 'month'`), `ScheduleMode` (`'default' | 'static'`),
`ScheduleEventOverlapMode` (`'columns' | 'cascade'`), `RenderEventBody`, `YearViewRenderDay`,
`ScheduleLayout`, `PreventEventOverlap`, `ScheduleCanDropEventData`,
`ScheduleCanDropExternalEventData`, `ScheduleCanResizeEventToData`,
`ScheduleEventPlacementRejectedData`, and `<Component>Props` for every component.

Generated recurring occurrences have `id` `` `${seriesId}::${recurrenceId}` ``, carry
`recurringEventId`/`recurrenceId` and `recurringInstance.isRecurringInstance === true`. An
override event from your array has no `recurringInstance`.

`renderEvent` type (not exported by name, read it from props when you need it:
`DayViewProps['renderEvent']`):

```ts
(event: ScheduleEventData, props: React.ComponentPropsWithoutRef<'button'> & { children: React.ReactNode }) => React.ReactElement
```

## Props shared by the event views

Available on `DayView`, `WeekView`, `MonthView` and the resources views unless noted.

| Prop | Notes |
|---|---|
| `date` | Required on single views. `Date` or date string |
| `onDateChange(date)` | Header navigation; receives `YYYY-MM-DD 00:00:00` from previous/next/today |
| `onViewChange(view)` | View select in the header |
| `events` | Keep the reference stable |
| `locale` | dayjs locale, import it first (`import 'dayjs/locale/de'`). Overrides `DatesProvider` |
| `labels` | `ScheduleLabelsOverride`, see [Labels](#labels) |
| `radius` | Events and view radius |
| `mode` | `'static'` disables drag, resize, slot clicks and event clicks; header navigation still works |
| `withHeader` | `false` hides the built-in header |
| `previousControlProps`, `nextControlProps`, `todayControlProps`, `viewSelectProps` | Header controls. `viewSelectProps={{ views: ['day', 'week'] }}` limits the view select |
| `renderEventBody(event)` | Replaces the content inside the event |
| `renderEvent(event, props)` | Replaces the event element (not on `Schedule` / `ResourcesSchedule` top level) |
| `onEventClick(event, e)` | |
| `withEventsDragAndDrop`, `onEventDrop`, `canDragEvent(event)`, `onEventDragStart(event)`, `onEventDragEnd()` | Move events. `onEventDragEnd` fires for drops and cancelled drags |
| `withEventResize`, `onEventResize`, `canResizeEvent(event)` | Not on `MonthView` |
| `eventDragInterval`, `eventResizeInterval` | Snap step in minutes, default `intervalMinutes`. Day, week, resources day/week |
| `withDragSlotSelect`, `onSlotDragEnd` | Default `false` |
| `onExternalEventDrop` | Items dragged in from outside |
| `withInteractiveBackgroundEvents` | Background events become clickable; with `withEventResize`, timed ones resizable. Not on `ResourcesMonthView` |
| `recurrenceExpansionLimit` | Max generated occurrences per series, default `2000` |
| `scrollAreaProps` | Props of the inner `ScrollArea`; set `mah` to bound time grids |
| `withAgenda` | Agenda button in the header (`DayView`, `WeekView`, `MonthView`, `Schedule`) |

## Callback payloads

Day, week, month views and `Schedule`:

```ts
onEventDrop?: (data: { eventId: string | number; newStart: DateTimeStringValue; newEnd: DateTimeStringValue; event: ScheduleEventData }) => void;
onEventResize?: (data: { eventId; newStart; newEnd; event }) => void;
onTimeSlotClick?: (data: { slotStart: DateTimeStringValue; slotEnd: DateTimeStringValue; nativeEvent: React.MouseEvent<HTMLButtonElement> }) => void; // day, week
onAllDaySlotClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;                     // day, week
onDayClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;                            // month, year, mobile
onSlotDragEnd?: (rangeStart: DateTimeStringValue, rangeEnd: DateTimeStringValue) => void;
onExternalEventDrop?: (dataTransfer: DataTransfer, dropDateTime: DateTimeStringValue) => void;
```

Resources views and `ResourcesSchedule` pass objects with the target row:

```ts
onEventDrop?: (data: { eventId; newStart; newEnd; event; resourceId?: string | number }) => void;
onEventResize?: (data: { eventId; newStart; newEnd; event }) => void;
onTimeSlotClick?: (data: { slotStart; slotEnd; nativeEvent; resourceId? }) => void;        // day, week
onDayClick?: (data: { date: DateStringValue; nativeEvent; resourceId? }) => void;           // month
onSlotDragEnd?: (data: { rangeStart; rangeEnd; resourceId? }) => void;
onExternalEventDrop?: (data: { dataTransfer; dropDateTime; resourceId? }) => void;
```

Range ends: day/week `onSlotDragEnd` and `onTimeSlotClick` end at the slot end (`10:30:00`);
month views end at `23:59:59` of the last selected day. `onSlotDragEnd` fires only when the drag
covers two or more slots. In `WeekView` a drag selection stays inside one day.

A dragged event sets `application/json` data `{ eventId }` on `dataTransfer`, so a drop zone
outside the schedule can identify it.

## Placement validation

All on day, week, month (no resize props) and resources views, forwarded by `Schedule` and
`ResourcesSchedule`. Callbacks run during the drag and once more before commit.

| Prop | Signature |
|---|---|
| `preventEventOverlap` | `boolean \| ((stillEvent, movingEvent) => boolean)`; the function returns `true` to forbid. `movingEvent` has the candidate `start`/`end` (and `resourceId`) |
| `canDropEvent` | `({ event, start, end, resourceId? }) => boolean` |
| `canResizeEventTo` | `({ event, start, end, edge: 'start' \| 'end' }) => boolean` |
| `canDropExternalEvent` | `({ dataTransfer, start, resourceId? }) => boolean`; only `dataTransfer.types` is readable during a drag |
| `onEventPlacementRejected` | `(data) => void`; `data.action` is `'drop' \| 'resize' \| 'external-drop'`, plus `start`, `end` (not on external drops), `conflicts`, `reason: 'overlap' \| 'rejected'`, `event`, `edge` (resize), `dataTransfer` (external), `resourceId` |

Not conflicts for `preventEventOverlap`: the moving event, background events, and all-day vs
timed pairs. Touching ranges (one ends 10:00, the next starts 10:00) do not conflict. Resources
views compare against the target resource only. While a target is invalid, the drag ghost and the
resized event get `data-invalid`; month views have no ghost.

## Schedule

Combines `DayView`, `WeekView`, `MonthView`, `YearView` (and `MobileMonthView` in responsive
layout).

| Prop | Notes |
|---|---|
| `date`, `defaultDate`, `onDateChange` | Controlled or uncontrolled date |
| `view`, `defaultView` (`'week'`), `onViewChange` | Controlled or uncontrolled view |
| `layout` | `'default'` or `'responsive'`: below 600px container width, day/week/month render `MobileMonthView` |
| `dayViewProps`, `weekViewProps`, `monthViewProps`, `yearViewProps`, `mobileMonthViewProps` | Per-view props, minus the shared ones listed below |
| `withAgenda` | Agenda button in day, week and month headers |

Shared props set once at the top level and omitted from the per-view objects: `date`,
`onDateChange`, `view`, `onViewChange`, `events`, `locale`, `radius`, `labels`, `mode`,
`renderEventBody`, `withEventsDragAndDrop`, `onEventDrop`, `canDragEvent`, `onEventDragStart`,
`onEventDragEnd`, `onTimeSlotClick`, `onAllDaySlotClick`, `onEventClick`, `onDayClick`,
`withDragSlotSelect`, `onSlotDragEnd`, `withAgenda`, `onExternalEventDrop`,
`withEventResize`, `onEventResize`, `canResizeEvent`, `canDropEvent`, `canDropExternalEvent`,
`canResizeEventTo`, `preventEventOverlap`, `onEventPlacementRejected`,
`recurrenceExpansionLimit`, `withInteractiveBackgroundEvents`. `renderEvent` and everything else
go in the per-view objects. Clicking a month name in year view switches to month view; `Schedule`
handles `onMonthClick` itself and does not expose it.

`MobileMonthView` inside `Schedule` receives `onEventClick` but not `onDayClick`; it takes
`weekendDays` and `withWeekendDays` from `monthViewProps` unless `mobileMonthViewProps` sets them.

## DayView and WeekView

| Prop | DayView | WeekView | Notes |
|---|---|---|---|
| `startTime`, `endTime` | ✓ | ✓ | `HH:mm:ss`, default `00:00:00` – `23:59:59` |
| `intervalMinutes` | 15 | 60 | Divides an hour (`15`, `30`) or whole hours (`120`) |
| `slotLabelInterval` | ✓ | ✓ | Label every N minutes, multiple of `intervalMinutes`, default 60 |
| `withSubHourGridLines` | ✓ | ✓ | Default `true` |
| `slotHeight`, `allDaySlotHeight` | ✓ | ✓ | Height of one hour (64px) and of the all-day row |
| `startScrollTime` | ✓ | ✓ | `HH:mm:ss`, initial scroll; needs a bounded height |
| `slotLabelFormat` | ✓ | ✓ | Default `HH:mm` |
| `headerFormat` | ✓ | – | Default `MMMM D, YYYY` |
| `weekLabelFormat`, `renderWeekLabel` | – | ✓ | Default `MMM D` |
| `withAllDaySlot` / `withAllDaySlots` | `withAllDaySlot` | `withAllDaySlots` | Default `true` |
| `firstDayOfWeek`, `weekendDays`, `withWeekendDays`, `weekdayFormat`, `highlightToday`, `withWeekNumber` | – | ✓ | `withWeekNumber` default `true` |
| `withCurrentTimeIndicator` | today only by default | default `true` (today's column) | |
| `forceCurrentTimeIndicator` | – | ✓ | Same weekday in every week |
| `withCurrentTimeBubble`, `getCurrentTime` | ✓ | ✓ | `getCurrentTime: () => Date \| string \| Dayjs`, re-read every minute |
| `highlightBusinessHours` | ✓ | ✓ | Default `false` |
| `businessHours` | `[start, end]` | `[start, end]` or `{ [day: 0-6]: [start, end] \| null }` | `HH:mm` or `HH:mm:ss`, default `['09:00:00', '17:00:00']` |
| `eventOverlapMode` | ✓ | ✓ | `'columns'` (default) or `'cascade'`; `eventOverlapRaiseDelay` (600ms) |
| `getTimeSlotProps({ start, end })` | ✓ | ✓ | Extra props per slot; returned handlers run in addition to built-in ones |
| `moreEventsProps` | ✓ | – | "+N more" in the all-day row |

## MonthView

`firstDayOfWeek`, `weekendDays`, `withWeekendDays`, `weekdayFormat`, `withWeekDays`,
`withWeekNumbers`, `onWeekNumberClick`, `getWeekNumberProps`, `withOutsideDays` (default `true`),
`consistentWeeks` (default `true`, always 6 weeks), `highlightToday`, `maxEventsPerDay` (1–10,
default 2), `moreEventsProps`, `getDayProps(date)`, `onDayClick`, `monthYearSelectProps`. Drag and
drop moves events by whole days and keeps their time. No resize.

## YearView

`date`, `onDateChange`, `events` (shown as up to 3 dots per day), `renderDay(date, events)`
(replaces the whole cell content, receives all events of the day), `onDayClick`, `onMonthClick`,
`onWeekNumberClick`, `getDayProps`, `getWeekNumberProps`, `monthLabelFormat` (`MMMM`),
`withWeekNumbers`, `withWeekDays`, `withWeekendDays`, `weekendDays`, `withOutsideDays`,
`firstDayOfWeek`, `weekdayFormat`, `highlightToday`, `locale`, `labels`, `mode`. No event clicks,
no drag and drop.

## AgendaView

`rangeStart`, `rangeEnd` (required), `events`, `onEventClick`, `renderEvent`, `headerFormat`
(`MMMM D, YYYY`), `dateHeaderFormat` (`dddd, MMMM D`), `locale`, `labels`, `mode`, `radius`,
`recurrenceExpansionLimit`. Multi-day events appear under every date they span.

## MobileMonthView

`date`, `onDateChange` (also called on day selection), `selectedDate`, `defaultSelectedDate`,
`onSelectedDateChange(date | null)`, `events`, `onEventClick`, `onDayClick`, `onYearClick`,
`renderEvent`, `renderHeader({ mode, date, defaultHeader })`, `eventsHeaderFormat`
(`dddd, MMMM D`), `firstDayOfWeek`, `weekendDays`, `withWeekendDays`, `weekdayFormat`,
`withWeekDays`, `withWeekNumbers`, `onWeekNumberClick`, `withOutsideDays`, `consistentWeeks`,
`highlightToday`, `getDayProps`, `getWeekNumberProps`, `locale`, `labels`, `mode`, `radius`.
No drag and drop.

## Resources views

Common: `resources` (required), `groups`, `renderGroupLabel(group)`, `groupLabelWidth` (80px),
`renderResourceLabel(resource)`, `rowHeight` (64px), `maxEventsPerTimeSlot` (default 2),
`moreEventsProps` (`{ dropdownType: 'modal', modalTitle }` opens a modal instead of a popover),
`scrollAreaProps`. Resources listed in `groups` are shown first in group order, the rest after.

| | ResourcesDayView | ResourcesWeekView | ResourcesMonthView |
|---|---|---|---|
| Columns | time slots of a day | time slots of each day of the week | days of the month |
| `startTime`, `endTime`, `intervalMinutes` (60), `slotLabelFormat`, `slotWidth` (80px), `minEventSize` | ✓ | ✓ | – |
| Initial scroll | `startScrollTime` | `startScrollDateTime` | `startScrollDate` |
| `headerFormat` / `weekLabelFormat`, `renderWeekLabel` | `headerFormat` | `weekLabelFormat`, `renderWeekLabel` | – |
| `firstDayOfWeek`, `weekdayFormat`, `weekendDays`, `withWeekendDays`, `highlightToday` | – | ✓ | `weekdayFormat`, `weekendDays`, `withWeekendDays`, `highlightToday` |
| `dayWidth` | – | – | ✓ |
| `highlightBusinessHours`, `businessHours` (`[start, end]` only) | ✓ | ✓ | – |
| `withCurrentTimeIndicator`, `withCurrentTimeBubble`, `getCurrentTime` | ✓ | ✓ | – |
| `onTimeSlotClick` / `onDayClick` | `onTimeSlotClick` | `onTimeSlotClick` | `onDayClick` |
| Background events, `withInteractiveBackgroundEvents` | ✓ | ✓ | – |
| Resize | along the time axis | within one day | whole days, keeps time of day |

All-day events (midnight to midnight) are pinned to the top of the row (day) or day column
(week); all-day background events tint the whole row or column.

`ResourcesSchedule`: `view` / `defaultView` (`'day'`) / `onViewChange`, `date` / `defaultDate` /
`onDateChange`, `resources`, `events`, `renderResourceLabel`, `dayViewProps`, `weekViewProps`,
`monthViewProps` (for `groups`, `startTime`, `renderEvent` …), plus the shared interaction and
validation props. No `layout`, no `withAgenda`.

## ScheduleHeader

Build a custom header with `withHeader={false}` on the view:

- `ScheduleHeader` — the row container
- `ScheduleHeader.Previous`, `ScheduleHeader.Next`, `ScheduleHeader.Today` — buttons, pass `onClick`
- `ScheduleHeader.Control` — generic header button; `interactive={false}` for a plain label
- `ScheduleHeader.ViewSelect` — `value`, `onChange`, `views` (default all four), `labels`
- `ScheduleHeader.MonthYearSelect` — `yearValue`, `monthValue`, `onYearChange`, `onMonthChange`,
  `startYear`, `endYear`, `locale`

## Labels

`labels` accepts `Partial<ScheduleLabels>`. Defaults are exported as `DEFAULT_SCHEDULE_LABELS`;
`getLabel(key, override)` reads one. Keys: `day`, `week`, `month`, `year`, `allDay`, `weekday`,
`timeSlot`, `today`, `next`, `previous`, `more`, `selectMonth`, `selectYear`, `switchToDayView`,
`switchToWeekView`, `switchToMonthView`, `switchToYearView`, `viewSelectLabel`, `noEvents`,
`moreLabel(count)`, `weekNumber(number)`, `resource`, `resources`, `resourceSlot`, `agenda`.
Several are used only as `aria-label` text: translate all of them, not just the visible ones.

`DatesProvider` from `@mantine/dates` sets `locale`, `firstDayOfWeek` and `weekendDays` for all
views at once; component props override it.

## Utilities

Useful in application code:

- `expandRecurringEvents({ events, rangeStart, rangeEnd, expansionLimit? })` — expanded
  occurrences plus one-off events in a range (bounds inclusive). Use it to validate against
  recurring events or to export occurrences.
- `isEventsOverlap(a, b)` — `true` when the ranges overlap (touching ends do not)
- `isAllDayEvent({ event, date })` — all-day on `date`
- `isMultidayEvent(event)`, `sortEvents(events)` (by start)
- `getStartOfWeek({ date, firstDayOfWeek })` → `YYYY-MM-DD`;
  `getEndOfWeek(date, firstDayOfWeek)` → `YYYY-MM-DD` (positional arguments, unlike `getStartOfWeek`)
- `getMonthRange({ month, withOutsideDays, consistentWeeks, firstDayOfWeek })` — first and last
  date shown by `MonthView`, as `YYYY-MM-DD 00:00:00`
- `getMonthDays({ month, firstDayOfWeek, consistentWeeks })` — weeks of the month grid
- `toDateString(date)` → `YYYY-MM-DD 00:00:00`; `formatDate({ locale, date, format })`
- `getWeekNumber`, `nextWeek`, `previousWeek`, `parseTimeString`, `toTimeString`,
  `addMinutesToTime`, `getDayTimeIntervals`, `getWeekdaysNames`

Supporting components are exported too (`ScheduleEvent`, `ScheduleBackgroundEvent`,
`CurrentTimeIndicator`, `MoreEvents`); the views render them, application code rarely needs them.

## Styles API and CSS variables

Selectors are prefixed with the view name: `dayViewSlot`, `dayViewBackgroundEvent`,
`weekViewDaySlot`, `weekViewBackgroundEvent`, `weekViewAllDaySlot`, `monthViewDay`,
`monthViewBackgroundEvent`, `resourcesDayViewRow`, `resourcesDayViewRowSlot`,
`resourcesDayViewBackgroundEvent`, `resourcesDayViewResourceLabel` and the header selectors. Pass
them through `classNames`.

CSS variables (set with `vars` or in CSS): `--day-view-slot-height`,
`--day-view-business-hours-bg`, `--day-view-non-business-hours-bg`, `--week-view-slot-height`,
`--week-view-business-hours-bg`, `--week-view-non-business-hours-bg`,
`--resources-day-view-business-hours-bg`, `--resources-day-view-non-business-hours-bg`,
`--month-view-max-events`. Inside an event, `--event-bg` and `--event-color` hold its resolved colors.

State attributes for styling: `data-invalid` (rejected drag target), `data-event-interaction` on
the view root while an event is dragged or resized, `data-drop-target` and `data-drag-selected` on
slots and day cells.
