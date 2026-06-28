# ResourcesWeekView
Package: @mantine/schedule
Import: import { ResourcesWeekView } from '@mantine/schedule';
Description: Week view with resource rows for scheduling across resources

## Usage

ResourcesWeekView displays resources as rows and a full week of time slots as columns
with a two-level header showing day names and time labels. Each row represents a resource
(e.g., conference room, person, equipment) and shows events assigned to that resource
via the `resourceId` property on event data.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## All-day events

Events that span a whole day (start at `00:00:00` and end at the next day `00:00:00`) are
rendered as full-width bars within their day column. Foreground all-day events are pinned to
the top of the column and stack when there are several; all-day events with
`display: 'background'` tint the whole day column.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const monday = dayjs().startOf('week').add(1, 'day');
const day = (offset: number) => monday.add(offset, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

// All-day events span a single whole day (start at 00:00, end at the next day 00:00).
// A foreground all-day event renders as a full-width bar pinned to the top of its day
// column and stacks when there are several; all-day events with display: 'background'
// tint the whole day column.
const events: ScheduleEventData[] = [
  { id: 1, title: 'Offsite', start: `${day(1)} 00:00:00`, end: `${day(2)} 00:00:00`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Review', start: `${day(1)} 00:00:00`, end: `${day(2)} 00:00:00`, color: 'grape', resourceId: 'tokyo' },
  { id: 3, title: 'Sprint Planning', start: `${day(0)} 10:00:00`, end: `${day(0)} 11:30:00`, color: 'green', resourceId: 'tokyo' },
  { id: 4, title: 'Maintenance', start: `${day(2)} 00:00:00`, end: `${day(3)} 00:00:00`, color: 'gray', display: 'background', resourceId: 'paris' },
  { id: 5, title: 'Client Call', start: `${day(1)} 09:30:00`, end: `${day(1)} 10:30:00`, color: 'violet', resourceId: 'paris' },
  { id: 6, title: 'Holiday', start: `${day(4)} 00:00:00`, end: `${day(5)} 00:00:00`, color: 'orange', resourceId: 'new-york' },
];
```


## Drag and drop

Enable cross-resource drag and drop with `withEventsDragAndDrop` prop. The `onEventDrop` callback
receives the target `resourceId` as the fifth argument, allowing you to update the event's resource
assignment. Events can be dragged across both resources and days.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Event form

Use `onTimeSlotClick`, `onSlotDragEnd`, and `onEventClick` callbacks to open a form
for creating or editing events. Combine with `withDragSlotSelect` to allow selecting
a time range by dragging across slots.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(
    String(resources[0].id)
  );

  const handleTimeSlotClick = (
    slotStart: string,
    slotEnd: string,
    _e: React.MouseEvent,
    resourceId?: string | number
  ) => {
    setSelectedResourceId(resourceId ? String(resourceId) : String(resources[0].id));
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedResourceId(event.resourceId ? String(event.resourceId) : String(resources[0].id));
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSubmit = (values: EventData) => {
    if (values.id) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === values.id
            ? {
                ...event,
                title: values.title,
                start: dayjs(values.start).format('YYYY-MM-DD HH:mm:ss'),
                end: dayjs(values.end).format('YYYY-MM-DD HH:mm:ss'),
                color: values.color || 'blue',
                resourceId: selectedResourceId || resources[0].id,
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: values.title,
          start: dayjs(values.start).format('YYYY-MM-DD HH:mm:ss'),
          end: dayjs(values.end).format('YYYY-MM-DD HH:mm:ss'),
          color: values.color || 'blue',
          resourceId: selectedResourceId || resources[0].id,
        },
      ]);
    }
  };

  const handleSlotDragEnd = (
    rangeStart: string,
    rangeEnd: string,
    resourceId?: string | number
  ) => {
    setSelectedResourceId(resourceId ? String(resourceId) : String(resources[0].id));
    setSelectedEventData({
      title: '',
      start: new Date(rangeStart),
      end: new Date(rangeEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setEvents((prev) => prev.filter((event) => event.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        startScrollDateTime={`${today} 08:00:00`}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      >
        <Select
          label="Conference Room"
          placeholder="Select a room"
          radius="md"
          data={resources.map((r) => ({ value: String(r.id), label: String(r.label) }))}
          value={selectedResourceId}
          onChange={setSelectedResourceId}
        />
      </EventForm>
    </>
  );
}

// EventForm.tsx
import { useEffect } from 'react';
import { Modal, TextInput, Button, Stack, Group, Checkbox } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';

interface EventData {
  id?: string | number;
  title: string;
  start: Date;
  end: Date;
  color?: string;
  isAllDay?: boolean;
}

interface EventFormProps {
  opened: boolean;
  onClose: () => void;
  initialData: EventData | null;
  onSave: (data: EventData) => void;
  onDelete?: () => void;
}

export function EventForm({
  opened,
  onClose,
  values,
  onSubmit,
  onDelete,
  ...others
}: EventFormProps) {
  const form = useForm({
    initialValues: {
      id: values?.id,
      title: values?.title || '',
      start: values?.start || new Date(),
      end: values?.end || new Date(),
      color: values?.color || 'blue',
    },
    validate: {
      title: isNotEmpty('Event title is required'),
      start: isNotEmpty('Start time is required'),
      end: (value, { start }) => {
        if (!value) {
          return 'End time is required';
        }

        if (dayjs(value).isBefore(dayjs(start))) {
          return 'End time must be after start time';
        }

        return null;
      },
    },
  });

  useEffect(() => {
    form.setValues({
      id: values?.id,
      title: values?.title || '',
      start: values?.start || new Date(),
      end: values?.end || new Date(),
      color: values?.color || 'blue',
    });
  }, [values]);

  const handleSubmit = (values: EventData) => {
    onSubmit({
      id: values.id,
      title: values.title,
      start: values.start,
      end: values.end,
      color: values.color,
    });
    onClose();
  };

  const handleDelete = () => {
    onDelete?.();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={form.values.id ? 'Edit Event' : 'Create Event'}
      {...others}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Event Title"
            placeholder="Enter event title"
            data-autofocus
            {...form.getInputProps('title')}
          />

          <DateTimePicker
            label="Start Time"
            clearable
            {...form.getInputProps('start')}
          />
          <DateTimePicker label="End Time" {...form.getInputProps('end')} clearable />

          <Group justify="flex-end" gap="sm">
            {form.values.id && onDelete && (
              <Button color="red" onClick={handleDelete} mie="auto">
                Delete
              </Button>
            )}

            <Button variant="default" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {form.values.id ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Time range and intervals

Use `startTime`, `endTime` and `intervalMinutes` props to control the visible time range
and slot granularity.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
      intervalMinutes={30}
      startScrollDateTime={`${today} 09:00:00`}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Current time indicator

Use `withCurrentTimeIndicator` to display a line at the current time. Set `withCurrentTimeBubble={false}`
to hide the time bubble label.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="00:00:00"
      endTime="23:59:59"
      withCurrentTimeIndicator
      withCurrentTimeBubble={false}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## First day of week

Use `firstDayOfWeek` to set the first day of the week. Set `weekdayFormat` to customize
the day label format.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      firstDayOfWeek={0}
      withWeekendDays
      weekdayFormat="dddd D"
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Custom week label

Use `renderWeekLabel` to fully customize the week label in the header. When provided,
it takes full control of the label. Use `weekLabelFormat` instead if you only need to change the date format.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderWeekLabel={({ weekStart, weekEnd }) =>
        `Week of ${dayjs(weekStart).format('MMM D')} – ${dayjs(weekEnd).format('MMM D, YYYY')}`
      }
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Business hours

Use `highlightBusinessHours` prop to visually distinguish business hours from non-business hours
across all time slot columns.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="07:00:00"
      endTime="20:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Without weekend days

Set `withWeekendDays={false}` to hide weekend days from the view.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      withWeekendDays={false}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Custom resource label

Use `renderResourceLabel` prop to customize how resource labels are rendered.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      renderResourceLabel={(resource) => (
        <Stack gap={2} align="flex-start">
          <Text size="sm" fw={600}>{resource.label}</Text>
          <Text size="xs" c="dimmed">Floor 2</Text>
        </Stack>
      )}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Resource groups

Use `groups` prop to group resources under labeled headers. The group labels are displayed
as a column to the left of resource labels, spanning vertically across their resources.
Use `renderGroupLabel` to customize group label rendering and `groupLabelWidth` to control
the group column width.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleResourceGroup } from '@mantine/schedule';
import { events } from './data';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
  { id: 'overflow', label: 'Overflow room' },
];

const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
  { label: 'Floor 2', resourceIds: ['new-york', 'london'] },
];

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
    />
  );
}
```


## Custom event rendering

Use `renderEvent` prop to customize how events are rendered. The example below
shows event details in a hover card.

```tsx
// Demo.tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="bottom" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    />
  );
}

// EventDetails.tsx
import dayjs from 'dayjs';
import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
  resources?: ScheduleResourceData[];
}

export function EventDetails({ event, resources }: EventDetailsProps) {
  const resource = resources?.find((r) => r.id === event.resourceId);

  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      <Text size="xs" c="dimmed">
        {dayjs(event.start).format('MMM D, YYYY HH:mm')} – {dayjs(event.end).format('HH:mm')}
      </Text>

      {resource && (
        <Text size="xs" c="dimmed">
          {resource.label}
        </Text>
      )}

      {event.payload?.description && (
        <Text size="xs" c="dimmed">
          {event.payload.description}
        </Text>
      )}

      {event.payload?.location && (
        <Group gap={4}>
          <Badge size="sm" variant="light">
            {event.payload.location}
          </Badge>
        </Group>
      )}

      {event.payload?.attendees && (
        <div>
          <Text size="xs" fw={500} mb={4}>
            Attendees:
          </Text>
          <Text size="xs" c="dimmed">
            {event.payload.attendees.join(', ')}
          </Text>
        </div>
      )}
    </Stack>
  );
}
```


## Recurring events

ResourcesWeekView automatically expands recurring events for the visible week.
See [Recurring events guide](https://mantine.dev/llms/schedule-recurring-events.md) for full documentation.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: `${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00`,
    end: `${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 11:00:00`,
    color: 'blue',
    resourceId: 'tokyo',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [`${today} 09:00:00`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: `${today} 14:00:00`,
    end: `${today} 16:00:00`,
    color: 'grape',
    resourceId: 'tokyo',
    recurringEventId: 'daily-sync-series',
    recurrenceId: `${today} 09:00:00`,
  },
  {
    id: 'one-off',
    title: 'One-off planning',
    start: `${today} 11:00:00`,
    end: `${today} 13:00:00`,
    color: 'green',
    resourceId: 'paris',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
    />
  );
}
```


## Max events per time slot

Use `maxEventsPerTimeSlot` prop to limit the number of visible overlapping events per time slot.
When events exceed the limit, a "+N more" indicator is displayed. Clicking the indicator opens
a popover with all events in the group. Use `moreEventsProps` to customize the popover behavior.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  // ... many overlapping events per resource
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      maxEventsPerTimeSlot={2}
    />
  );
}
```


## Localization

Use `locale` prop to set the locale for date formatting and `labels` prop to override
default labels.

```tsx
// Demo.tsx
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      locale="es"
      labels={{
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        allDay: 'Todo el día',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        resources: 'Recursos',
      }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Radius

Use `radius` prop to change the border radius of events.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      radius="md"
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Start scroll date time

Use `startScrollDateTime` prop to scroll to a specific time on mount.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDateTime={`${today} 10:00:00`}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Scroll area props

Use `scrollAreaProps` to pass props to the underlying ScrollArea component.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
      }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


## Event resize

Enable event resizing with `withEventResize` prop. Events can be resized by dragging their left or
right edges, and the `onEventResize` callback is called with the updated event start and end times.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      withEventResize
      onEventResize={({ eventId, newStart, newEnd }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd }
              : event
          )
        );
      }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```


Resizing is constrained to the day the event belongs to: an event cannot be resized to span multiple
days. To make an event cover several days, update its `start` and `end` dates directly in your data.

Use `canResizeEvent` to control which events can be resized.

## Static mode

Set `mode="static"` to disable all interactions. Events and time slots become non-interactive,
useful for display-only views.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      mode="static"
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
```



#### Props

**ResourcesWeekView props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| businessHours | [string, string] | - | - |
| canDragEvent | (event: ScheduleEventData) => boolean | - | - |
| canResizeEvent | (event: ScheduleEventData) => boolean | - | Function to determine if event can be resized |
| date | string \| Date | required | - |
| endTime | string | - | - |
| events | ScheduleEventData[] | - | - |
| firstDayOfWeek | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 | - | - |
| groupLabelWidth | React.CSSProperties["width"] | - | Width of the group label column |
| groups | ScheduleResourceGroup[] | - | List of resource groups to display as a column to the left of resource labels |
| highlightBusinessHours | boolean | - | - |
| highlightToday | boolean | - | - |
| intervalMinutes | number | - | - |
| labels | Partial<ScheduleLabels> | - | - |
| locale | string | - | - |
| maxEventsPerTimeSlot | number | - | Maximum number of events visible per time slot before "+more" indicator shows, minimum value is 1 |
| mode | ScheduleMode | - | - |
| moreEventsProps | Partial<MoreEventsProps> | - | Props passed down to `MoreEvents` component |
| nextControlProps | React.ComponentProps<'button'> | - | - |
| onDateChange | (value: string) => void | - | - |
| onEventClick | (event: ScheduleEventData, e: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | - |
| onEventDragEnd | () => void | - | - |
| onEventDragStart | (event: ScheduleEventData) => void | - | - |
| onEventDrop | ((data: { eventId: string \| number; newStart: string; newEnd: string; event: ScheduleEventData; resourceId?: string \| number; }) => void) \| undefined | - | - |
| onEventResize | (data: { eventId: string \| number; newStart: string; newEnd: string; event: ScheduleEventData; }) => void | - | Called when event is resized |
| onExternalEventDrop | ((data: { dataTransfer: DataTransfer; dropDateTime: string; resourceId?: string \| number; }) => void) \| undefined | - | - |
| onSlotDragEnd | ((data: { rangeStart: string; rangeEnd: string; resourceId?: string \| number; }) => void) \| undefined | - | - |
| onTimeSlotClick | ((data: { slotStart: string; slotEnd: string; nativeEvent: MouseEvent<HTMLButtonElement, MouseEvent>; resourceId?: string \| number; }) => void) \| undefined | - | - |
| onViewChange | (view: ScheduleViewLevel) => void | - | - |
| previousControlProps | React.ComponentProps<'button'> | - | - |
| radius | MantineRadius \| number | - | - |
| recurrenceExpansionLimit | number | - | - |
| renderEvent | RenderEvent | - | - |
| renderEventBody | RenderEventBody | - | - |
| renderGroupLabel | (group: ScheduleResourceGroup) => ReactNode | - | Function to customize group label rendering |
| renderResourceLabel | (resource: ScheduleResourceData) => ReactNode | - | - |
| renderWeekLabel | (params: { weekStart: string; weekEnd: string; }) => ReactNode | - | - |
| resources | ScheduleResourceData[] | required | - |
| rowHeight | Height<string \| number> | - | - |
| scrollAreaProps | Partial<ScrollAreaProps> & DataAttributes | - | - |
| slotLabelFormat | string \| ((date: string) => string) | - | - |
| slotWidth | React.CSSProperties["width"] | - | - |
| startScrollDateTime | string | - | Date and time to scroll to on initial render, in `YYYY-MM-DD HH:mm:ss` format |
| startTime | string | - | - |
| todayControlProps | React.ComponentProps<'button'> | - | - |
| viewSelectProps | Partial<ViewSelectProps> & DataAttributes | - | - |
| weekLabelFormat | string \| ((date: string) => string) | - | - |
| weekdayFormat | string \| ((date: string) => string) | - | - |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | - |
| withCurrentTimeBubble | boolean | - | - |
| withCurrentTimeIndicator | boolean | - | - |
| withDragSlotSelect | boolean | - | - |
| withEventResize | boolean | - | If true, events can be resized by dragging their left/right edges |
| withEventsDragAndDrop | boolean | - | - |
| withHeader | boolean | - | - |
| withWeekendDays | boolean | - | - |


#### Styles API

ResourcesWeekView component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ResourcesWeekView selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| resourcesWeekView | .mantine-ResourcesWeekView-resourcesWeekView | Root element |
| resourcesWeekViewRoot | .mantine-ResourcesWeekView-resourcesWeekViewRoot | Root container wrapping scroll area |
| resourcesWeekViewInner | .mantine-ResourcesWeekView-resourcesWeekViewInner | Inner container wrapping header rows and resource rows |
| resourcesWeekViewHeaderRows | .mantine-ResourcesWeekView-resourcesWeekViewHeaderRows | Container for header rows (corner, day labels, time labels) |
| resourcesWeekViewHeaderContent | .mantine-ResourcesWeekView-resourcesWeekViewHeaderContent | Container for day labels and time labels rows |
| resourcesWeekViewDayLabelsRow | .mantine-ResourcesWeekView-resourcesWeekViewDayLabelsRow | Row containing day labels |
| resourcesWeekViewDayLabel | .mantine-ResourcesWeekView-resourcesWeekViewDayLabel | Individual day label element |
| resourcesWeekViewTimeLabelsRow | .mantine-ResourcesWeekView-resourcesWeekViewTimeLabelsRow | Row containing time labels |
| resourcesWeekViewScrollArea | .mantine-ResourcesWeekView-resourcesWeekViewScrollArea | Scroll area component |
| resourcesWeekViewCorner | .mantine-ResourcesWeekView-resourcesWeekViewCorner | Top-left corner element |
| resourcesWeekViewTimeLabel | .mantine-ResourcesWeekView-resourcesWeekViewTimeLabel | Individual time label element |
| resourcesWeekViewResourceLabel | .mantine-ResourcesWeekView-resourcesWeekViewResourceLabel | Resource label element |
| resourcesWeekViewRow | .mantine-ResourcesWeekView-resourcesWeekViewRow | Resource row element |
| resourcesWeekViewRowSlot | .mantine-ResourcesWeekView-resourcesWeekViewRowSlot | Individual time slot element |
| resourcesWeekViewRowSlots | .mantine-ResourcesWeekView-resourcesWeekViewRowSlots | Container for all slots in a row |
| resourcesWeekViewBackgroundEvent | .mantine-ResourcesWeekView-resourcesWeekViewBackgroundEvent | Background event element |
| resourcesWeekViewAllDayEvent | .mantine-ResourcesWeekView-resourcesWeekViewAllDayEvent | All-day event element |
| resourcesWeekViewCurrentTimeIndicator | .mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicator | Current time indicator container |
| resourcesWeekViewCurrentTimeIndicatorLine | .mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorLine | Current time indicator line |
| resourcesWeekViewCurrentTimeIndicatorThumb | .mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorThumb | Current time indicator thumb |
| resourcesWeekViewCurrentTimeIndicatorTimeBubble | .mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorTimeBubble | Current time indicator time bubble |
| resourcesWeekViewEventWrapper | .mantine-ResourcesWeekView-resourcesWeekViewEventWrapper | Event wrapper element |
| resourcesWeekViewResizeHandle | .mantine-ResourcesWeekView-resourcesWeekViewResizeHandle | Event resize handle element |
| resourcesWeekViewGroupColumn | .mantine-ResourcesWeekView-resourcesWeekViewGroupColumn | Group label column element |
| resourcesWeekViewGroupColumnEmpty | .mantine-ResourcesWeekView-resourcesWeekViewGroupColumnEmpty | Empty group column cell for ungrouped resources |
| moreEventsButton | .mantine-ResourcesWeekView-moreEventsButton | More events button, part of MoreEvents |
| moreEventsList | .mantine-ResourcesWeekView-moreEventsList | More events list, part of MoreEvents |
| moreEventsDropdown | .mantine-ResourcesWeekView-moreEventsDropdown | More events dropdown, part of MoreEvents |
| header | .mantine-ResourcesWeekView-header | Header container, part of ScheduleHeader |
| headerControl | .mantine-ResourcesWeekView-headerControl | Header control element, part of ScheduleHeader |
| viewSelect | .mantine-ResourcesWeekView-viewSelect | View select element, part of ScheduleHeader |
| monthYearSelectTarget | .mantine-ResourcesWeekView-monthYearSelectTarget | MonthYearSelect target button, part of ScheduleHeader |
| monthYearSelectDropdown | .mantine-ResourcesWeekView-monthYearSelectDropdown | MonthYearSelect dropdown, part of ScheduleHeader |
| monthYearSelectControl | .mantine-ResourcesWeekView-monthYearSelectControl | MonthYearSelect control, part of ScheduleHeader |
| monthYearSelectList | .mantine-ResourcesWeekView-monthYearSelectList | MonthYearSelect list, part of ScheduleHeader |
| monthYearSelectLabel | .mantine-ResourcesWeekView-monthYearSelectLabel | MonthYearSelect label, part of ScheduleHeader |

**ResourcesWeekView CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| resourcesWeekView | --resources-week-view-radius | Controls `border-radius` of the view |
| resourcesWeekView | --resources-week-view-slot-width | Controls `width` of each time slot column |
| resourcesWeekView | --resources-week-view-row-height | Controls `height` of each resource row |
| resourcesWeekView | --resources-week-view-group-label-width | Controls `width` of the group label column |

**ResourcesWeekView data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| resourcesWeekViewRowSlot | data-hour-start | Slot is at the start of an hour | - |
| resourcesWeekViewRowSlot | data-business-hours | `highlightBusinessHours` is true and slot is within business hours | - |
| resourcesWeekViewRowSlot | data-non-business-hours | `highlightBusinessHours` is true and slot is outside business hours | - |
| resourcesWeekViewRowSlot | data-drop-target | Slot is the current drag drop target | - |
| resourcesWeekViewRowSlot | data-drag-selected | Slot is selected during drag-to-select | - |
| resourcesWeekView | data-static | `mode="static"` is set | - |
| resourcesWeekViewTimeLabelsRow | data-scrolled | Scroll area is scrolled vertically | - |
| resourcesWeekViewResourceLabel | data-scrolled-x | Scroll area is scrolled horizontally | - |
| resourcesWeekViewDayLabel | data-today | Day label represents today and `highlightToday` is true | - |
| resourcesWeekViewDayLabel | data-weekend | Day label represents a weekend day | - |
