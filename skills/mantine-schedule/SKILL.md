---
name: mantine-schedule
description: >
  Build calendar and scheduling interfaces with @mantine/schedule. Use this skill when: (1) adding
  a day, week, month, year or agenda calendar (Schedule, DayView, WeekView, MonthView, YearView,
  AgendaView, MobileMonthView), (2) building a booking page, team rota, room planner or any view
  with people, rooms or machines as rows (ResourcesSchedule, ResourcesDayView, ResourcesWeekView,
  ResourcesMonthView), (3) creating events by clicking or drag-selecting slots, (4) moving or
  resizing events with drag and drop and rejecting invalid placements, (5) recurring events
  (rrule, exceptions, single-occurrence edits), (6) business hours, blocked time or other
  background events, (7) custom event rendering, or (8) any task involving ScheduleEventData,
  onEventDrop, onSlotDragEnd or onTimeSlotClick.
---

# Mantine Schedule Skill

Written for Mantine 10.x. Upgrading code written for 9.x: see [Coming from 9.x](#coming-from-9x).

## Overview

`@mantine/schedule` renders events you own. Every view takes an `events` array and reports user
actions (click a slot, drag-select a range, drop or resize an event) through callbacks with the
new dates; your code updates its state and passes the new array back. The views never change
events on their own.

```bash
npm install @mantine/schedule @mantine/dates dayjs
```

```tsx
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/schedule/styles.css';
```

Schedule styles are imported after core and dates styles. Without them the views render unstyled.
Load the `mantine-ui` skill together with this one for the forms, modals and buttons around the
calendar, and `mantine-form` for the event form.

## Pick the right component

| Need | Use |
|---|---|
| A calendar with a view switcher (day, week, month, year), the usual starting point | `Schedule` |
| One fixed view: a day agenda, a week planner, a month overview | `DayView`, `WeekView`, `MonthView`, `YearView` |
| Events as a list grouped by date for a given range | `AgendaView` (`rangeStart`, `rangeEnd`), or `withAgenda` on a view to add an Agenda button |
| Phone-sized month grid with the selected day's events below it | `MobileMonthView`, or `Schedule layout="responsive"` to switch automatically |
| People, rooms, machines as rows with a view switcher (day, week, month) | `ResourcesSchedule` |
| One fixed resources view | `ResourcesDayView` (time slots as columns), `ResourcesWeekView`, `ResourcesMonthView` (days as columns) |
| Your own header (filters, print, a create button) | `withHeader={false}` on the view plus `ScheduleHeader` compound components |

`YearView` shows dots only, `AgendaView` and `MobileMonthView` show lists: none of them supports
drag and drop, resize or slot selection. Year view has no `onEventClick`.

## Event data

```tsx
import type { ScheduleEventData } from '@mantine/schedule';

const events: ScheduleEventData[] = [
  {
    id: 'standup-1',
    title: 'Standup',
    start: '2026-11-02 09:00:00',
    end: '2026-11-02 09:30:00',
    color: 'blue',
  },
  {
    id: 'offsite',
    title: 'Team offsite',
    start: '2026-11-03 00:00:00',
    end: '2026-11-05 00:00:00',
    color: 'grape',
    payload: { location: 'Lisbon' },
  },
];
```

- `id`, `title`, `start`, `end`, `color` are required. `color` is a theme color key or any CSS color.
- `start` and `end` are `YYYY-MM-DD HH:mm:ss` strings (a `Date` is accepted too). Callbacks
  return the same string format, so values from callbacks can be stored as they are.
- There is no all-day flag. An event is all-day on a day when it starts at `00:00:00` and ends at
  `00:00:00` of the next day; a multi-day all-day event ends at `00:00:00` of the day after its
  last day (exclusive end). Timed events that cross midnight are shown with the all-day events in
  week view.
- Optional: `variant` (`'filled' | 'light'`, default `'light'`), `display: 'background'`,
  `resourceId` (resources views), `payload` (your own data, typed with
  `ScheduleEventData<MyPayload>`, the library never reads it).
- Recurring events add `recurrence: { rrule, exdate?, dtstart? }`; a changed occurrence is an
  override event with `recurringEventId` and `recurrenceId`. See the recurring pattern.

## Core patterns

### Controlled schedule that writes changes back

```tsx
import { useState } from 'react';
import { Schedule, ScheduleEventData, ScheduleViewLevel } from '@mantine/schedule';

function TeamCalendar({ initialEvents }: { initialEvents: ScheduleEventData[] }) {
  const [events, setEvents] = useState(initialEvents);
  const [date, setDate] = useState<string>('2026-11-02');
  const [view, setView] = useState<ScheduleViewLevel>('week');

  const updateDates = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) =>
    setEvents((current) =>
      current.map((event) => (event.id === eventId ? { ...event, start: newStart, end: newEnd } : event))
    );

  return (
    <Schedule
      events={events}
      date={date}
      onDateChange={setDate}
      view={view}
      onViewChange={setView}
      withEventsDragAndDrop
      withEventResize
      onEventDrop={updateDates}
      onEventResize={updateDates}
      weekViewProps={{ startScrollTime: '08:00:00', scrollAreaProps: { mah: 640 } }}
      dayViewProps={{ startScrollTime: '08:00:00', scrollAreaProps: { mah: 640 } }}
    />
  );
}
```

`Schedule` also works uncontrolled (`defaultDate`, `defaultView`). Single views (`DayView`,
`WeekView`, …) require `date`: keep it in state and update it in `onDateChange`, otherwise the
header's previous, next and today buttons do nothing.

### Create an event from a slot click or a drag-selected range

```tsx
const [draft, setDraft] = useState<{ start: string; end: string } | null>(null);

<WeekView
  date={date}
  onDateChange={setDate}
  events={events}
  withDragSlotSelect
  onSlotDragEnd={(rangeStart, rangeEnd) => setDraft({ start: rangeStart, end: rangeEnd })}
  onTimeSlotClick={({ slotStart, slotEnd }) => setDraft({ start: slotStart, end: slotEnd })}
  onAllDaySlotClick={(day) =>
    setDraft({
      start: dayjs(day).format('YYYY-MM-DD 00:00:00'),
      end: dayjs(day).add(1, 'day').format('YYYY-MM-DD 00:00:00'),
    })
  }
  onEventClick={(event) => openEditor(event)}
/>
```

Open a modal form from `draft` and append the event on submit; the complete version with edit and
delete is in [`references/patterns.md`](references/patterns.md#create-and-edit-events-with-a-modal-form).

### Resources: rows of rooms or people

```tsx
const resources: ScheduleResourceData[] = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

<ResourcesDayView
  date={date}
  onDateChange={setDate}
  resources={resources}
  events={events}
  startTime="08:00:00"
  endTime="20:00:00"
  intervalMinutes={30}
  withEventsDragAndDrop
  preventEventOverlap
  onEventDrop={({ eventId, newStart, newEnd, resourceId }) =>
    setEvents((current) =>
      current.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
      )
    )
  }
/>
```

Every event needs a `resourceId` equal to a resource `id` (same type: `1` and `'1'` do not
match); events without one are not shown.

### Business hours and blocked time

```tsx
<WeekView
  date={date}
  onDateChange={setDate}
  events={[...events, ...blockedTime]}
  highlightBusinessHours
  businessHours={{ 1: ['09:00', '18:00'], 2: ['09:00', '18:00'], 3: ['09:00', '18:00'], 4: ['09:00', '18:00'], 5: ['09:00', '14:00'] }}
  withEventsDragAndDrop
  canDropEvent={({ start, end }) => !blockedTime.some((block) => isEventsOverlap({ start, end } as ScheduleEventData, block))}
/>
```

`blockedTime` holds events with `display: 'background'`. They render behind regular events and are
never counted as conflicts, so dropping onto them is allowed until `canDropEvent` rejects it.
The per-day `businessHours` object is `WeekView` only; other views take one `[start, end]` tuple.

Opening hours, closed days and other time that repeats every day or week are business hours
(`highlightBusinessHours` + `businessHours`), and days that are always closed are hidden with
`withWeekendDays={false}`. Background events are for the blocks business hours cannot express:
a lunch break, a coffee break for every stage, a holiday, maintenance, a doctor's leave. Never
generate them for every closed hour of every resource: that paints a grid of patches instead of
a shaded area.

Time that marks an absence or a shared break (lunch, leave, vacation, a break across all stages)
is a background event, never a regular gray event that looks like a booking. Background events
take the view's `radius`, so they look like rounded cards; set their radius to 0 so they read as
shaded time. With `Schedule` / `ResourcesSchedule`, pass it through the view props:

```tsx
<Schedule
  weekViewProps={{ styles: { weekViewBackgroundEvent: { borderRadius: 0 } } }}
  monthViewProps={{ styles: { monthViewBackgroundEvent: { borderRadius: 0 } } }}
/>
```

The selectors are `weekViewBackgroundEvent`, `monthViewBackgroundEvent`,
`resourcesDayViewBackgroundEvent` and `resourcesWeekViewBackgroundEvent` (`DayView` already uses 0).

## Layout and look

- **The calendar takes the full width of its container.** Day, week and resources views show
  more slots and longer titles with every pixel: never wrap them in `Container`, `maw` or a
  narrow column, and do not add a page title or intro text unless the task asks for one.
- **The header row holds navigation and one or two compact controls.** A resource or doctor
  picker or a "New event" button goes next to the navigation, pushed to the end with
  `ms="auto"`: render the header yourself (`withHeader={false}` + `ScheduleHeader` compound
  components, see [Custom header](references/patterns.md#custom-header)). Do not stack them in a
  separate row above the header. A filter with several options (channels, tracks, teams) is too
  wide for the header: it wraps the row and competes with the navigation. Put it in a side panel
  next to the calendar (a `Checkbox` per category in the category color doubles as the legend),
  together with other panel content such as drafts. Check the header at about 1100px wide: it
  stays on one line and holds at most one filled button besides the active view.
- **The header stays attached to its grid.** A side panel (drafts, templates, details) sits
  beside the whole calendar, header included, never under a header that spans both.
- **Event looks come from `color` and `variant`.** The package paints the visible event box (an
  inner element) from `--event-bg` and `--event-color`, resolved for both color schemes. Do not
  restyle events with your own classes stacked on the package ones (`.event.event`): the outer
  root and the inner box differ, so the result looks different in light and dark mode. For a
  state such as draft or cancelled, change `color`/`variant` per event or set `--event-bg` and
  `--event-color` in the `renderEvent` root `style`, then check both color schemes.
- **Do not use orange for events.** No shade of orange sits well on the schedule grid. Filled
  yellow, lime and cyan at the default shade look washed out: use a darker shade (`'cyan.8'`)
  or a lighter one (`'yellow.4'`, dark text through auto contrast). Keep the number of event
  colors small: color one dimension (type, channel, track), not several.
- **Custom resource labels fill the label cell.** The cell centers its content, so a label with
  two lines of different length must be `width: 100%` with `text-align: start`; otherwise every
  row starts at a different x.
- **Horizontal views open where the data is.** `ResourcesWeekView` (`startScrollDateTime`) and
  `ResourcesMonthView` (`startScrollDate`) open at the start of the range. Point them at today,
  the current time or the first event of the visible range so the first screen is not empty.
- **Rules that reject a drop belong in `canDropEvent` / `canDropExternalEvent`.** The views call
  them while the item moves and paint the target red when they return `false`, so the user sees
  the rejection before letting go. A check that only runs in `onEventDrop` or
  `onExternalEventDrop` surprises the user after the drop; report the reason in
  `onEventPlacementRejected`.

## Rules

- **Dates are naive local wall-clock strings.** The package does no timezone conversion:
  `'2026-11-02 09:00:00'` is shown at 09:00 whatever the user's zone. Convert UTC or zoned values from the server to the
  display zone at the API boundary (dayjs `utc` and `timezone` plugins) and back on save. Store
  the strings callbacks return; do not mix them with `toISOString()` values.
- **Parse received dates with dayjs, never by string surgery.** Click callbacks
  (`onDayClick`, `onAllDaySlotClick`) pass `YYYY-MM-DD`, while header navigation
  (`onDateChange`) and `MobileMonthView` `onSelectedDateChange` pass `YYYY-MM-DD 00:00:00`.
  `` `${day} 09:00:00` `` breaks on the second form; write
  `dayjs(day).hour(9).format('YYYY-MM-DD HH:mm:ss')`.
- **Every placement goes through your state.** A drop, resize or slot selection that you do not
  write back snaps back on the next render. Optimistic updates are fine; on a server error, put
  the old dates back.
- **Ids are unique across the whole array**, including overrides of recurring events. A
  duplicated id, an invalid date or an `end` before `start` throws during render, so validate data
  from the server before passing it in.
- **Exclusive midnight ends.** Store all-day and multi-day events with an end at `00:00:00` of
  the following day. `onSlotDragEnd` in `MonthView` and `ResourcesMonthView` returns `23:59:59` of
  the last selected day: round it up with `dayjs(rangeEnd).add(1, 'second')` before saving if you store exclusive ends.
- **Slot click and slot drag are two callbacks.** `withDragSlotSelect` is off by default, and
  `onSlotDragEnd` fires only when the drag crosses two or more slots; a single click calls
  `onTimeSlotClick` (day and week views) or `onDayClick` (month views). Wire both.
- **Validation callbacks are pure and cheap.** `canDropEvent`, `canResizeEventTo`,
  `canDropExternalEvent` and `preventEventOverlap` run on every pointer move. Show messages and
  send requests in `onEventPlacementRejected`. A function passed to `preventEventOverlap` returns
  `true` to forbid the overlap. Overlap is checked only against events of the visible range:
  check again on the server.
- **Dropping a recurring occurrence reports the occurrence, not the series.** `eventId` is
  generated (`seriesId::YYYY-MM-DD HH:mm:ss`) and matches nothing in your array. Branch on
  `event.recurringInstance?.isRecurringInstance` and add an override event (or ask "this event or
  the series?").
- **`mode="static"` also disables `onEventClick`.** For a read-only calendar whose events still
  open details, leave `mode` alone and omit the drag, resize and slot props.
- **Give time grids a height.** Day and week grids are 24 × `slotHeight` (64px) tall. Pass
  `scrollAreaProps={{ mah }}` (or narrow `startTime`/`endTime`) so the grid scrolls inside the
  page and `startScrollTime` has something to scroll.
- **Defaults differ per view.** `intervalMinutes` is 15 in `DayView` and 60 in `WeekView`,
  `ResourcesDayView` and `ResourcesWeekView`. Set it explicitly when the slot length matters
  (bookings, rotas).
- **`Schedule` shared props cannot be overridden per view.** `events`, the callbacks and the
  drag/resize flags are typed out of `dayViewProps`/`weekViewProps`/…; one `onDayClick` serves
  both month and year view, so branch on the current `view`.
- **Background events render in day, week and month views and in `ResourcesDayView` /
  `ResourcesWeekView` only.** Year, agenda and mobile views skip them, and they are not clickable
  unless `withInteractiveBackgroundEvents` is set.
- **`renderEvent` gets the root props, including `children`, drag handlers and Mantine `mod`.**
  Spread them on a Mantine component (`UnstyledButton`, or `HoverCard.Target` around it), not on
  a plain `<button>`; dropping them breaks drag, keyboard focus and styles. For content changes
  only, use `renderEventBody`.
- **Keep `events` referentially stable** (state or `useMemo`). Recurring expansion is memoized on
  the array reference; a new literal every render redoes it each time.
- **The responsive mobile layout is read-mostly.** Below a 600px container width `Schedule
  layout="responsive"` shows `MobileMonthView`: no drag and drop, no slot clicks. Provide a create
  button through `mobileMonthViewProps.renderHeader` and keep editing reachable from
  `onEventClick`.

## Coming from 9.x

- `MobileMonthView` calls `onDateChange` when a day is selected: update a controlled `date` there.
- `WeekView` and `ResourcesWeekView` `weekLabelFormat` defaults to `MMM D` (was `MMM DD`).
- `WeekView` no longer sets `data-all-day-dragging`; style drags with `data-event-interaction`.
- `isAfterMinDate` and `isBeforeMaxDate` are no longer exported: compare with dayjs.

## References

- **[`references/patterns.md`](references/patterns.md)** — complete examples: controlled
  date and view, loading events for the visible range, create/edit/delete with a modal, drag and
  drop and resize with validation, external drag and drop, recurring events (series,
  single-occurrence edits, exceptions), resources with groups, business hours and blocked time,
  custom rendering (`renderEventBody`, `renderEvent`, `YearView` `renderDay`), current time
  indicator and timezones, localization and labels, custom header, mobile
- **[`references/api.md`](references/api.md)** — props of every view grouped by concern, callback
  payloads, event and resource types, exported utilities, Styles API names and CSS variables

## Looking things up

If the references do not cover what you need, do not guess:

- If the Mantine MCP server (`@mantine/mcp-server`) is connected, use `search_docs` and `get_item_doc`
- Otherwise fetch `https://mantine.dev/llms.txt` and open the schedule pages
  (`https://mantine.dev/schedule/getting-started/` and the page of each view)
