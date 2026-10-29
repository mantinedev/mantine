# Schedule Patterns

Complete examples. Imports are shown once per example; `dayjs` is a required dependency of
`@mantine/schedule`. All dates are `YYYY-MM-DD HH:mm:ss` strings in the display timezone.

## Table of Contents
- [Controlled date and view](#controlled-date-and-view)
- [Loading events for the visible range](#loading-events-for-the-visible-range)
- [Create and edit events with a modal form](#create-and-edit-events-with-a-modal-form)
- [Drag and drop and resize with validation](#drag-and-drop-and-resize-with-validation)
- [Dragging items in from outside](#dragging-items-in-from-outside)
- [Recurring events](#recurring-events)
- [Resources: rooms, people, machines](#resources-rooms-people-machines)
- [Business hours and blocked time](#business-hours-and-blocked-time)
- [Custom event rendering](#custom-event-rendering)
- [Current time indicator and timezones](#current-time-indicator-and-timezones)
- [Localization and labels](#localization-and-labels)
- [Custom header](#custom-header)
- [Mobile](#mobile)

---

## Controlled date and view

Control `date` and `view` when anything outside the calendar depends on them (a URL, a data
fetch, a side panel). Header navigation calls `onDateChange` with `YYYY-MM-DD 00:00:00`;
normalize it if you compare dates as strings or put them in a URL.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Schedule, ScheduleEventData, ScheduleViewLevel } from '@mantine/schedule';

function Calendar({ events }: { events: ScheduleEventData[] }) {
  const [view, setView] = useState<ScheduleViewLevel>('week');
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <Schedule
      view={view}
      onViewChange={setView}
      date={date}
      onDateChange={(next) => setDate(dayjs(next).format('YYYY-MM-DD'))}
      events={events}
      onDayClick={(day) => {
        if (view === 'year') {
          setDate(day);
          setView('day');
        }
      }}
      weekViewProps={{ startTime: '07:00:00', endTime: '21:00:00', intervalMinutes: 30 }}
      dayViewProps={{ startTime: '07:00:00', endTime: '21:00:00', intervalMinutes: 30 }}
      monthViewProps={{ maxEventsPerDay: 3 }}
    />
  );
}
```

`onDayClick` is shared by month and year view in `Schedule`, so the handler branches on `view`.
Limit the view select with `viewSelectProps={{ views: ['day', 'week', 'month'] }}` in every
per-view props object that renders a header.

## Loading events for the visible range

Fetch only what the current view shows and refetch when the range changes. The range depends on
the view and on the first day of the week the views use (`DatesProvider` `firstDayOfWeek`,
`1` by default): pass the same value to the helpers.

```tsx
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Box, LoadingOverlay, Text } from '@mantine/core';
import {
  DayOfWeek,
  getEndOfWeek,
  getMonthRange,
  getStartOfWeek,
  Schedule,
  ScheduleEventData,
  ScheduleViewLevel,
} from '@mantine/schedule';

const FIRST_DAY_OF_WEEK: DayOfWeek = 1;
const FORMAT = 'YYYY-MM-DD HH:mm:ss';

function getVisibleRange(view: ScheduleViewLevel, date: string) {
  if (view === 'day') {
    return { from: dayjs(date).startOf('day'), to: dayjs(date).endOf('day') };
  }

  if (view === 'week') {
    return {
      from: dayjs(getStartOfWeek({ date, firstDayOfWeek: FIRST_DAY_OF_WEEK })).startOf('day'),
      to: dayjs(getEndOfWeek(date, FIRST_DAY_OF_WEEK)).endOf('day'),
    };
  }

  if (view === 'month') {
    const range = getMonthRange({
      month: date,
      withOutsideDays: true,
      consistentWeeks: true,
      firstDayOfWeek: FIRST_DAY_OF_WEEK,
    });
    return { from: dayjs(range.start).startOf('day'), to: dayjs(range.end).endOf('day') };
  }

  return { from: dayjs(date).startOf('year'), to: dayjs(date).endOf('year') };
}

function BookingsCalendar() {
  const [view, setView] = useState<ScheduleViewLevel>('week');
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const range = getVisibleRange(view, date);
  const from = range.from.format(FORMAT);
  const to = range.to.format(FORMAT);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchEvents({ from, to, signal: controller.signal })
      .then(setEvents)
      .catch(() => {
        if (!controller.signal.aborted) {
          setError('Events could not be loaded');
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [from, to]);

  return (
    <Box pos="relative">
      <LoadingOverlay visible={loading} />
      {error && (
        <Text size="sm" c="red" mb="xs">
          {error}
        </Text>
      )}
      <Schedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={setDate}
        events={events}
      />
    </Box>
  );
}
```

`fetchEvents` is your API call. With TanStack Query, key the query on `['events', from, to]` and keep the previous data while the next
range loads (`placeholderData: keepPreviousData`), so the grid does not flash empty on every click.

What the server returns for `[from, to]`:

- One-off events that overlap the range (`start < to` and `end > from`), not only events that
  start in it: a multi-day event that started last week still shows this week.
- Recurring series whose rule can produce an occurrence in the range (series start before `to`,
  rule not finished before `from`), with their overrides. The views expand series themselves.
- Dates converted to the display timezone, formatted `YYYY-MM-DD HH:mm:ss`.

With `layout="responsive"`, small screens show a month grid whatever `view` is; fetch the month
range there as well (for example, take the union of the month range and the view range).

## Create and edit events with a modal form

One form serves create and edit. Slot clicks and drag selections open it with a prefilled range,
event clicks open it with the event. The form state lives inside the modal content, which is
mounted fresh for every draft.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Group, Modal, Stack, TextInput } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

interface EventDraft {
  id?: string | number;
  title: string;
  start: string;
  end: string;
  color: string;
}

interface EventFormProps {
  draft: EventDraft;
  onSubmit: (draft: EventDraft) => void;
  onDelete?: () => void;
  onCancel: () => void;
}

function EventForm({ draft, onSubmit, onDelete, onCancel }: EventFormProps) {
  const [title, setTitle] = useState(draft.title);
  const [start, setStart] = useState<string | null>(draft.start);
  const [end, setEnd] = useState<string | null>(draft.end);
  const [submitted, setSubmitted] = useState(false);

  const titleError = submitted && !title.trim() ? 'Enter a title' : null;
  const endError =
    submitted && start && end && !dayjs(end).isAfter(start) ? 'End must be after start' : null;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        if (title.trim() && start && end && dayjs(end).isAfter(start)) {
          onSubmit({ ...draft, title: title.trim(), start, end });
        }
      }}
    >
      <Stack>
        <TextInput
          label="Title"
          withAsterisk
          data-autofocus
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
          error={titleError}
        />
        <DateTimePicker label="Start" value={start} onChange={setStart} />
        <DateTimePicker label="End" value={end} onChange={setEnd} error={endError} />
        <Group justify="flex-end">
          {onDelete && (
            <Button variant="default" c="red" mie="auto" onClick={onDelete}>
              Delete
            </Button>
          )}
          <Button variant="default" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{draft.id === undefined ? 'Create' : 'Save'}</Button>
        </Group>
      </Stack>
    </form>
  );
}

const toDraft = (start: string, end: string): EventDraft => ({ title: '', start, end, color: 'blue' });

function EditableCalendar({ initialEvents }: { initialEvents: ScheduleEventData[] }) {
  const [events, setEvents] = useState(initialEvents);
  const [draft, setDraft] = useState<EventDraft | null>(null);
  const [opened, setOpened] = useState(false);

  const open = (next: EventDraft) => {
    setDraft(next);
    setOpened(true);
  };

  const wholeDays = (firstDay: string, lastDay: string) =>
    toDraft(
      dayjs(firstDay).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
      dayjs(lastDay).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss')
    );

  const save = (values: EventDraft) => {
    if (values.id === undefined) {
      setEvents((current) => [...current, { ...values, id: crypto.randomUUID() }]);
    } else {
      setEvents((current) =>
        current.map((event) => (event.id === values.id ? { ...event, ...values } : event))
      );
    }
    setOpened(false);
  };

  const remove = () => {
    setEvents((current) => current.filter((event) => event.id !== draft?.id));
    setOpened(false);
  };

  return (
    <>
      <Schedule
        events={events}
        withDragSlotSelect
        onTimeSlotClick={({ slotStart, slotEnd }) => open(toDraft(slotStart, slotEnd))}
        onAllDaySlotClick={(day) => open(wholeDays(day, day))}
        onDayClick={(day) => open(wholeDays(day, day))}
        onSlotDragEnd={(rangeStart, rangeEnd) =>
          dayjs(rangeEnd).format('HH:mm:ss') === '23:59:59'
            ? open(wholeDays(rangeStart, rangeEnd))
            : open(toDraft(rangeStart, rangeEnd))
        }
        onEventClick={(event) =>
          open({
            id: event.id,
            title: event.title,
            start: dayjs(event.start).format('YYYY-MM-DD HH:mm:ss'),
            end: dayjs(event.end).format('YYYY-MM-DD HH:mm:ss'),
            color: event.color,
          })
        }
      />

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        onExitTransitionEnd={() => setDraft(null)}
        title={draft?.id === undefined ? 'New event' : 'Edit event'}
      >
        {draft && (
          <EventForm
            key={draft.id ?? `${draft.start}-${draft.end}`}
            draft={draft}
            onSubmit={save}
            onDelete={draft.id === undefined ? undefined : remove}
            onCancel={() => setOpened(false)}
          />
        )}
      </Modal>
    </>
  );
}
```

- Month views report a drag selection as `00:00:00` of the first day to `23:59:59` of the last
  day; the handler turns that into an all-day draft with an exclusive end.
- `DateTimePicker` values are `YYYY-MM-DD HH:mm:ss` strings, the same format the schedule uses.
- The draft is cleared in `onExitTransitionEnd`, so the modal keeps its content while closing.
- With a real API, `save` sends the request first (or updates optimistically and reverts on
  error) and takes the id from the response.
- Clicking a generated occurrence of a recurring series gives an occurrence, not the series; see
  [recurring events](#recurring-events) before wiring edit and delete for them.

## Drag and drop and resize with validation

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import {
  ScheduleEventData,
  ScheduleEventPlacementRejectedData,
  WeekView,
} from '@mantine/schedule';

function DispatchBoard({ initialEvents }: { initialEvents: ScheduleEventData[] }) {
  const [date, setDate] = useState('2026-11-02');
  const [events, setEvents] = useState(initialEvents);
  const [message, setMessage] = useState<string | null>(null);

  const move = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setMessage(null);
    setEvents((current) =>
      current.map((event) => (event.id === eventId ? { ...event, start: newStart, end: newEnd } : event))
    );
  };

  const explain = (data: ScheduleEventPlacementRejectedData) => {
    if (data.action === 'external-drop') {
      return;
    }

    setMessage(
      data.reason === 'overlap'
        ? `${data.event.title} overlaps ${data.conflicts.map((event) => event.title).join(', ')}`
        : `${data.event.title} cannot be placed there`
    );
  };

  return (
    <Stack>
      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="07:00:00"
        endTime="20:00:00"
        intervalMinutes={30}
        eventDragInterval={15}
        eventResizeInterval={15}
        scrollAreaProps={{ mah: 640 }}
        withEventsDragAndDrop
        withEventResize
        canDragEvent={(event) => !event.payload?.locked}
        canResizeEvent={(event) => !event.payload?.locked}
        preventEventOverlap
        canResizeEventTo={({ start, end }) => dayjs(end).diff(start, 'minute') <= 240}
        onEventDrop={move}
        onEventResize={move}
        onEventPlacementRejected={explain}
      />
      {message && (
        <Text size="sm" c="red">
          {message}
        </Text>
      )}
    </Stack>
  );
}
```

- `preventEventOverlap` as a function decides per pair; return `true` to forbid:
  `preventEventOverlap={(still, moving) => still.payload?.room === moving.payload?.room}`.
- Rejections are reported, not shown: the event simply returns to its place. Tell the user why
  in `onEventPlacementRejected` (a notification or a line of text).
- The checks see only the events of the visible range. Validate again in the API call that saves
  the move and revert the event if the server refuses.
- Style the invalid state with `[data-invalid]` on the drag ghost (`dayViewDragPreview`,
  `weekViewDragPreview`) and on the resized event.
- Month views move events by whole days and keep the time of day; `MonthView` has no resize.
- Moving uses the native HTML drag and drop API. Keep every change reachable through the edit form
  as well (keyboard users, touch screens).

## Dragging items in from outside

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Group, Paper, Stack, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const TASK_TYPE = 'application/x-task';

interface Task {
  id: string;
  title: string;
  minutes: number;
}

function TaskPlanner({ tasks }: { tasks: Task[] }) {
  const [date, setDate] = useState('2026-11-02');
  const [events, setEvents] = useState<ScheduleEventData[]>([]);

  return (
    <Group align="flex-start" wrap="nowrap">
      <Stack w={220}>
        {tasks.map((task) => (
          <Paper
            key={task.id}
            withBorder
            p="xs"
            draggable
            onDragStart={(event) => event.dataTransfer.setData(TASK_TYPE, JSON.stringify(task))}
          >
            <Text size="sm">{task.title}</Text>
            <Text size="xs">{task.minutes} min</Text>
          </Paper>
        ))}
      </Stack>

      <DayView
        flex={1}
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        canDropExternalEvent={({ dataTransfer }) => dataTransfer.types.includes(TASK_TYPE)}
        onExternalEventDrop={(dataTransfer, dropDateTime) => {
          const task: Task = JSON.parse(dataTransfer.getData(TASK_TYPE));
          setEvents((current) => [
            ...current,
            {
              id: task.id,
              title: task.title,
              start: dropDateTime,
              end: dayjs(dropDateTime).add(task.minutes, 'minute').format('YYYY-MM-DD HH:mm:ss'),
              color: 'teal',
            },
          ]);
        }}
      />
    </Group>
  );
}
```

During a drag the browser exposes only `dataTransfer.types`, so mark the payload with your own
type and check the type in `canDropExternalEvent`. External drops have no duration and are never
checked by `preventEventOverlap`. To drag events out of the schedule, read `application/json`
(`{ eventId }`) in your own drop zone.

## Recurring events

```tsx
const events: ScheduleEventData[] = [
  {
    id: 'planning',
    title: 'Sprint planning',
    start: '2026-11-02 10:00:00',
    end: '2026-11-02 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO;COUNT=12',
      exdate: ['2026-11-16 10:00:00'],
    },
  },
  {
    id: 'planning-moved',
    title: 'Sprint planning (moved)',
    start: '2026-11-10 14:00:00',
    end: '2026-11-10 15:00:00',
    color: 'blue',
    recurringEventId: 'planning',
    recurrenceId: '2026-11-09 10:00:00',
  },
];
```

- The series event's `start`/`end` define the first occurrence and the duration. `rrule` holds
  only the rule part (`FREQ=…`), never `DTSTART`.
- `exdate` and `recurrenceId` are the original start of an occurrence, `YYYY-MM-DD HH:mm:ss`,
  exactly as the rule generates it.
- Rules without `COUNT` or `UNTIL` are cut at `recurrenceExpansionLimit` (2000) occurrences per
  series and view.
- Changing the time of the series changes every occurrence start, so existing `exdate` values and
  override `recurrenceId`s stop matching. Rewrite them with the same offset, or drop them.

Every occurrence the views generate carries both ids, and `recurringInstance` tells a generated
occurrence from an override you stored. Handle "this occurrence" with an override or an exception
in the series:

```tsx
import { ScheduleEventData } from '@mantine/schedule';

function moveEvent(events: ScheduleEventData[], moved: ScheduleEventData, start: string, end: string) {
  if (!moved.recurringInstance?.isRecurringInstance) {
    return events.map((event) => (event.id === moved.id ? { ...event, start, end } : event));
  }

  const override: ScheduleEventData = {
    id: moved.id,
    title: moved.title,
    color: moved.color,
    variant: moved.variant,
    display: moved.display,
    payload: moved.payload,
    resourceId: moved.resourceId,
    start,
    end,
    recurringEventId: moved.recurringInstance.recurringEventId,
    recurrenceId: moved.recurringInstance.recurrenceId,
  };

  return [...events, override];
}

function deleteOccurrence(events: ScheduleEventData[], occurrence: ScheduleEventData) {
  const seriesId = occurrence.recurringEventId;
  const recurrenceId = occurrence.recurrenceId;

  if (seriesId === undefined || recurrenceId === undefined) {
    return events.filter((event) => event.id !== occurrence.id);
  }

  return events
    .filter((event) => event.id !== occurrence.id)
    .map((event) =>
      event.id === seriesId && event.recurrence
        ? {
            ...event,
            recurrence: {
              ...event.recurrence,
              exdate: [...(event.recurrence.exdate ?? []), recurrenceId],
            },
          }
        : event
    );
}

function deleteSeries(events: ScheduleEventData[], seriesId: string | number) {
  return events.filter((event) => event.id !== seriesId && event.recurringEventId !== seriesId);
}
```

```tsx
<WeekView
  date={date}
  onDateChange={setDate}
  events={events}
  withEventsDragAndDrop
  onEventDrop={({ event, newStart, newEnd }) =>
    setEvents((current) => moveEvent(current, event, newStart, newEnd))
  }
/>
```

- The generated id `` `${seriesId}::${recurrenceId}` `` is unique, so it can be reused as the
  override id: once an override exists, the views stop generating that occurrence.
- When the user edits or deletes an occurrence, ask whether the change applies to this event or
  to the whole series. For the series, update the event with
  `id === occurrence.recurringEventId`.
- `expandRecurringEvents({ events, rangeStart, rangeEnd })` returns the same occurrences the
  views render, for validation, exports or a custom list.

## Resources: rooms, people, machines

Rows are resources, events carry `resourceId`. Callbacks in resources views receive one object
with the row's `resourceId`.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Group, Text } from '@mantine/core';
import {
  ResourcesWeekView,
  ScheduleEventData,
  ScheduleResourceData,
  ScheduleResourceGroup,
} from '@mantine/schedule';

const resources: ScheduleResourceData[] = [
  { id: 'r-101', label: 'Room 101', payload: { seats: 4 } },
  { id: 'r-102', label: 'Room 102', payload: { seats: 8 } },
  { id: 'r-201', label: 'Room 201', payload: { seats: 12 } },
];

const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['r-101', 'r-102'] },
  { label: 'Floor 2', resourceIds: ['r-201'] },
];

function RoomPlanner({ initialEvents }: { initialEvents: ScheduleEventData[] }) {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const book = (resourceId: string | number | undefined, start: string, end: string) => {
    if (resourceId === undefined) {
      return;
    }

    setEvents((current) => [
      ...current,
      { id: crypto.randomUUID(), title: 'Booked', start, end, color: 'blue', resourceId },
    ]);
  };

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      groups={groups}
      events={events}
      startTime="08:00:00"
      endTime="20:00:00"
      intervalMinutes={30}
      withWeekendDays={false}
      highlightBusinessHours
      renderResourceLabel={(resource) => (
        <Group gap={4} wrap="nowrap">
          <Text size="sm">{resource.label}</Text>
          <Text size="xs">{resource.payload?.seats} seats</Text>
        </Group>
      )}
      withDragSlotSelect
      onSlotDragEnd={({ rangeStart, rangeEnd, resourceId }) => book(resourceId, rangeStart, rangeEnd)}
      onTimeSlotClick={({ slotStart, slotEnd, resourceId }) => book(resourceId, slotStart, slotEnd)}
      withEventsDragAndDrop
      withEventResize
      preventEventOverlap
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) =>
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
          )
        )
      }
      onEventResize={({ eventId, newStart, newEnd }) =>
        setEvents((current) =>
          current.map((event) => (event.id === eventId ? { ...event, start: newStart, end: newEnd } : event))
        )
      }
    />
  );
}
```

- Write `resourceId` from `onEventDrop` back to the event, or the event jumps back to its old row.
- `preventEventOverlap` checks the target row only, which is what double-booking prevention needs.
  Use `canDropEvent` with `resourceId` for rules per row (seat count, skills of a person).
- `groups` reorders rows: grouped resources come first in group order, the rest after.
- For a team rota by day, `ResourcesMonthView` shows people as rows and days as columns
  (`dayWidth`, `startScrollDate`, `onDayClick({ date, resourceId })`). `ResourcesSchedule` switches
  between the three views; pass `groups`, `startTime` and similar through `dayViewProps`,
  `weekViewProps` and `monthViewProps`.
- `maxEventsPerTimeSlot` (default 2) limits stacked events per slot; the rest go behind "+N more".

## Business hours and blocked time

Business hours paint the grid only; they do not block anything.

```tsx
<WeekView
  date={date}
  onDateChange={setDate}
  events={events}
  highlightBusinessHours
  businessHours={{
    1: ['08:30', '18:00'],
    2: ['08:30', '18:00'],
    3: ['08:30', '18:00'],
    4: ['08:30', '18:00'],
    5: ['08:30', '13:00'],
    6: null,
  }}
  vars={() => ({
    weekView: {
      '--week-view-non-business-hours-bg': 'var(--mantine-color-gray-1)',
    },
  })}
/>
```

Blocked time (breaks, maintenance, a doctor's day off) is a background event. Recurring
background events work like any series. To block drops onto them, check the expanded occurrences
of the visible range in `canDropEvent`; expand once per range, not on every pointer move.

```tsx
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import {
  expandRecurringEvents,
  getEndOfWeek,
  getStartOfWeek,
  isEventsOverlap,
  ScheduleEventData,
  WeekView,
} from '@mantine/schedule';

const closedTime: ScheduleEventData[] = [
  {
    id: 'lunch',
    title: 'Lunch',
    start: '2026-11-02 12:00:00',
    end: '2026-11-02 13:00:00',
    color: 'gray',
    display: 'background',
    recurrence: { rrule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR' },
  },
];

function ClinicWeek({ appointments }: { appointments: ScheduleEventData[] }) {
  const [date, setDate] = useState('2026-11-02');
  const [events, setEvents] = useState(appointments);

  const blocked = useMemo(
    () =>
      expandRecurringEvents({
        events: closedTime,
        rangeStart: dayjs(getStartOfWeek({ date, firstDayOfWeek: 1 })).startOf('day').toDate(),
        rangeEnd: dayjs(getEndOfWeek(date, 1)).endOf('day').toDate(),
      }),
    [date]
  );

  const allEvents = useMemo(() => [...events, ...closedTime], [events]);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={allEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      canDropEvent={({ start, end }) =>
        !blocked.some((block) => isEventsOverlap({ start, end } as ScheduleEventData, block))
      }
      onEventDrop={({ eventId, newStart, newEnd }) =>
        setEvents((current) =>
          current.map((event) => (event.id === eventId ? { ...event, start: newStart, end: newEnd } : event))
        )
      }
    />
  );
}
```

- Background events are drawn in day, week and month views and in `ResourcesDayView` /
  `ResourcesWeekView` (give them a `resourceId` to block one row). Year, agenda and mobile views
  leave them out.
- A background event from midnight to midnight tints the whole day (or the whole resource row).
- `withInteractiveBackgroundEvents` makes them clickable through `onEventClick`; branch on
  `event.display === 'background'`. Clicks inside their range go to the background event instead
  of the slots under it. Together with `withEventResize`, timed background events become
  resizable; `canResizeEvent={(event) => event.display !== 'background'}` keeps them fixed.
- Restyle them with `classNames={{ weekViewBackgroundEvent: classes.blocked }}` (striped
  background for "closed", for example).
- `getTimeSlotProps({ start, end })` adds attributes or handlers to single slots, for example
  `data-closed` to style unavailable slots without background events.

## Custom event rendering

`renderEventBody` replaces the content and keeps the event element; use it for icons, times,
payload fields.

```tsx
import dayjs from 'dayjs';
import { Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

interface Appointment {
  patient: string;
  room: string;
}

const appointments: ScheduleEventData<Appointment>[] = [
  {
    id: 'a-1',
    title: 'Check-up',
    start: '2026-11-02 09:00:00',
    end: '2026-11-02 09:30:00',
    color: 'teal',
    payload: { patient: 'J. Doe', room: '3' },
  },
];

<DayView
  date="2026-11-02"
  events={appointments}
  renderEventBody={(event) => (
    <>
      <Text size="xs" fw={600} truncate>
        {dayjs(event.start).format('HH:mm')} {event.payload?.patient}
      </Text>
      <Text size="xs" truncate>
        {event.title} · Room {event.payload?.room}
      </Text>
    </>
  )}
/>;
```

`renderEvent` replaces the element. Spread `props` (they include `children`, class names, styles,
drag handlers and Mantine `mod`) on a Mantine component:

```tsx
import { HoverCard, Text, UnstyledButton } from '@mantine/core';

<WeekView
  date={date}
  onDateChange={setDate}
  events={events}
  renderEvent={(event, props) => (
    <HoverCard position="right" openDelay={300} closeDelay={0}>
      <HoverCard.Target>
        <UnstyledButton {...props} />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Text size="sm" fw={600}>
          {event.title}
        </Text>
        <Text size="sm">{event.payload?.description}</Text>
      </HoverCard.Dropdown>
    </HoverCard>
  )}
/>;
```

- In month views, `renderEvent` can show timed events as a dot plus start time and keep all-day
  events as bars; `var(--event-bg)` inside the element is the event color.
- `YearView` `renderDay(date, dayEvents)` replaces the whole day cell (number and dots):

  ```tsx
  <YearView
    date={date}
    onDateChange={setDate}
    events={events}
    renderDay={(day, dayEvents) => (
      <>
        {dayjs(day).date()}
        {dayEvents.length > 0 && <Text size="xs">{dayEvents.length}</Text>}
      </>
    )}
  />
  ```
- `AgendaView`, `MobileMonthView` and `MoreEvents` (`moreEventsProps`) also take `renderEvent`.
- Many overlapping events in day and week views: `eventOverlapMode="cascade"` stacks them with an
  indent instead of splitting the width.

## Current time indicator and timezones

`DayView` shows the current-time line on today, `WeekView` in today's column; `ResourcesDayView`
and `ResourcesWeekView` as a vertical line. The line is rendered after hydration, so server
rendered HTML never contains it.

Events are not converted between timezones. To show a calendar in a zone other than the user's
(a clinic's local time, a team's office), convert event dates to that zone before passing them in,
and return the current time in that zone from `getCurrentTime`. The today button and the today
highlight follow `getCurrentTime` too.

```tsx
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { DayView, ScheduleEventData } from '@mantine/schedule';

dayjs.extend(utc);
dayjs.extend(timezone);

const ZONE = 'Europe/Berlin';

interface ApiEvent {
  id: string;
  title: string;
  startUtc: string;
  endUtc: string;
}

function toZoned(utcEvents: ApiEvent[]): ScheduleEventData[] {
  return utcEvents.map((event) => ({
    id: event.id,
    title: event.title,
    color: 'blue',
    start: dayjs.utc(event.startUtc).tz(ZONE).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs.utc(event.endUtc).tz(ZONE).format('YYYY-MM-DD HH:mm:ss'),
  }));
}

<DayView
  date={date}
  onDateChange={setDate}
  events={zonedEvents}
  getCurrentTime={() => dayjs().tz(ZONE).format('YYYY-MM-DD HH:mm:ss')}
  startScrollTime={dayjs().tz(ZONE).subtract(1, 'hour').format('HH:mm:ss')}
  scrollAreaProps={{ mah: 600 }}
/>;
```

Convert back with `dayjs.tz(newStart, ZONE).utc().toISOString()` when saving a moved event.
Other props: `withCurrentTimeIndicator` (show on any date in `DayView`, hide in `WeekView`),
`withCurrentTimeBubble={false}` (line without the time label), `forceCurrentTimeIndicator`
(`WeekView`, same weekday in every week).

## Localization and labels

```tsx
import 'dayjs/locale/de';
import { DatesProvider } from '@mantine/dates';
import { Schedule } from '@mantine/schedule';

<DatesProvider settings={{ locale: 'de', firstDayOfWeek: 1, weekendDays: [0, 6] }}>
  <Schedule
    events={events}
    labels={{
      day: 'Tag',
      week: 'Woche',
      month: 'Monat',
      year: 'Jahr',
      today: 'Heute',
      previous: 'Zurück',
      next: 'Weiter',
      allDay: 'Ganztägig',
      agenda: 'Agenda',
      noEvents: 'Keine Termine',
      more: 'Mehr',
      moreLabel: (count) => `+${count} weitere`,
      weekNumber: (week) => `KW ${week}`,
      weekday: 'Wochentag',
      timeSlot: 'Zeitfenster',
      selectMonth: 'Monat wählen',
      selectYear: 'Jahr wählen',
      switchToDayView: 'Zur Tagesansicht',
      switchToWeekView: 'Zur Wochenansicht',
      switchToMonthView: 'Zur Monatsansicht',
      switchToYearView: 'Zur Jahresansicht',
      viewSelectLabel: 'Kalenderansicht',
    }}
    weekViewProps={{ slotLabelFormat: 'HH:mm', weekdayFormat: 'dd D.' }}
  />
</DatesProvider>;
```

- Import the dayjs locale file before using it; `locale` on a component overrides `DatesProvider`.
- Translate every label key, including the ones used only as accessible names (`timeSlot`,
  `weekday`, `switchTo*View`, `viewSelectLabel`); resources views add `resource`, `resources`,
  `resourceSlot`.
- Format props accept a dayjs format or a function: `headerFormat`, `weekLabelFormat`,
  `slotLabelFormat` (`'h A'` for 12-hour labels), `weekdayFormat`, `dateHeaderFormat`.

## Custom header

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Button } from '@mantine/core';
import { getStartOfWeek, ScheduleEventData, ScheduleHeader, WeekView } from '@mantine/schedule';

function WeekWithToolbar({ events, onCreate }: { events: ScheduleEventData[]; onCreate: () => void }) {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const weekStart = dayjs(getStartOfWeek({ date, firstDayOfWeek: 1 }));

  return (
    <>
      <ScheduleHeader>
        <ScheduleHeader.Previous onClick={() => setDate(weekStart.subtract(1, 'week').format('YYYY-MM-DD'))} />
        <ScheduleHeader.Control interactive={false} miw={180}>
          {weekStart.format('MMM D')} – {weekStart.add(6, 'day').format('MMM D, YYYY')}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next onClick={() => setDate(weekStart.add(1, 'week').format('YYYY-MM-DD'))} />
        <ScheduleHeader.Today onClick={() => setDate(dayjs().format('YYYY-MM-DD'))} />
        <Button ms="auto" onClick={onCreate}>
          New event
        </Button>
      </ScheduleHeader>

      <WeekView date={date} onDateChange={setDate} events={events} withHeader={false} />
    </>
  );
}
```

`ScheduleHeader.ViewSelect` (`value`, `onChange`, `views`) and `ScheduleHeader.MonthYearSelect`
complete the built-in set. Inside `Schedule`, hide the built-in header with
`withHeader: false` in each per-view props object.

## Mobile

`Schedule layout="responsive"` switches to `MobileMonthView` when the schedule container is
600px wide or less (a container query, not the viewport). The mobile view has no drag and drop
and no slot clicks, so add a create button to its header and keep editing on `onEventClick`.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { PlusIcon } from '@phosphor-icons/react';
import { ActionIcon, Group } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

function ResponsiveCalendar({ events, onCreate, onEdit }: {
  events: ScheduleEventData[];
  onCreate: (day: string) => void;
  onEdit: (event: ScheduleEventData) => void;
}) {
  const [selectedDay, setSelectedDay] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <Schedule
      layout="responsive"
      events={events}
      onEventClick={onEdit}
      mobileMonthViewProps={{
        onSelectedDateChange: (day) => day && setSelectedDay(dayjs(day).format('YYYY-MM-DD')),
        renderHeader: ({ defaultHeader }) => (
          <Group justify="space-between" w="100%" wrap="nowrap">
            {defaultHeader}
            <ActionIcon variant="default" size="lg" aria-label="New event" onClick={() => onCreate(selectedDay)}>
              <PlusIcon size={18} />
            </ActionIcon>
          </Group>
        ),
      }}
    />
  );
}
```

- `MobileMonthView` can be used alone: `date`/`onDateChange` for the month,
  `selectedDate`/`onSelectedDateChange` for the day whose events are listed (selecting a day also
  calls `onDateChange` in 10.x).
- Year view stays available on small screens; the mobile header's year button switches to it.
- On narrow containers the day, week and month views hide labels and reduce paddings by
  themselves; no media queries are needed.
