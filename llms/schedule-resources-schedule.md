# ResourcesSchedule
Package: @mantine/schedule
Import: import { ResourcesSchedule } from '@mantine/schedule';
Description: Schedule wrapper component that combines resource day, week and month views

## Usage

`ResourcesSchedule` is a wrapper component that combines `ResourcesDayView`, `ResourcesWeekView`, and `ResourcesMonthView`
into a single component with view switching. It manages the current view and date state, passing
common props to all three views automatically.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: `${today} 08:00:00` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
```


## Controlled state

You can control the current date and view level with `date`/`onDateChange` and `view`/`onViewChange` props.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule, ResourcesScheduleViewLevel } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [view, setView] = useState<ResourcesScheduleViewLevel>('day');

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      view={view}
      onViewChange={setView}
      resources={resources}
      events={events}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: `${today} 08:00:00` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
```


## Drag and drop

Enable drag and drop across all views with `withEventsDragAndDrop` prop.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
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
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: `${today} 08:00:00` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
```


## Week view

Set `defaultView="week"` to open the schedule in week view by default.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      defaultView="week"
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: `${today} 08:00:00` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
```


## View-specific props

Use `dayViewProps`, `weekViewProps`, and `monthViewProps` to pass props specific to each view.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      dayViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        intervalMinutes: 30,
        startScrollTime: '08:00:00',
      }}
      weekViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        startScrollDateTime: `${today} 08:00:00`,
      }}
      monthViewProps={{
        maxEventsPerTimeSlot: 3,
        startScrollDate: today,
      }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
```


## Event form

Click time slots, day cells, or existing events to open an event form. The form works across
day, week, and month views with automatic view switching.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  const handleTimeSlotClick = ({
    slotStart,
    slotEnd,
    resourceId,
  }: {
    slotStart: string;
    slotEnd: string;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDayClick = ({
    date: clickedDate,
    resourceId,
  }: {
    date: string;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: dayjs(clickedDate).startOf('day').toDate(),
      end: dayjs(clickedDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedResourceId(event.resourceId ? String(event.resourceId) : null);
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSlotDragEnd = ({
    rangeStart,
    rangeEnd,
    resourceId,
  }: {
    rangeStart: string;
    rangeEnd: string;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: new Date(rangeStart),
      end: new Date(rangeEnd),
      color: 'blue',
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
                start: dayjs(values.start).toISOString(),
                end: dayjs(values.end).toISOString(),
                color: values.color || 'blue',
                resourceId: selectedResourceId || event.resourceId,
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 11),
          title: values.title,
          start: dayjs(values.start).toISOString(),
          end: dayjs(values.end).toISOString(),
          color: values.color || 'blue',
          resourceId: selectedResourceId || undefined,
        },
      ]);
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <ResourcesSchedule
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
        weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: `${today} 08:00:00` }}
        monthViewProps={{ startScrollDate: today }}
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
          label="Resource"
          placeholder="Select resource"
          radius="md"
          data={resources.map((r) => ({ value: String(r.id), label: r.label }))}
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
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
```


## External drag and drop

You can drag external items onto the schedule using `onExternalEventDrop` prop. The callback
receives the `resourceId` of the target resource.

```tsx
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const sidebarItems = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = ({
    dataTransfer,
    dropDateTime,
    resourceId,
  }: {
    dataTransfer: DataTransfer;
    dropDateTime: string;
    resourceId?: string | number;
  }) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.add(data.duration, 'minutes');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
        resourceId,
      },
    ]);
  };

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
    resourceId,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
      )
    );
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <Text fw={500} mb="xs">Drag to schedule</Text>
        {sidebarItems.map((item) => (
          <Box
            key={item.title}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', JSON.stringify(item));
              e.dataTransfer.effectAllowed = 'copy';
            }}
            style={{
              padding: '8px 12px',
              marginBottom: 8,
              borderRadius: 4,
              cursor: 'grab',
              backgroundColor: `var(--mantine-color-${item.color}-light)`,
              color: `var(--mantine-color-${item.color}-light-color)`,
            }}
          >
            <Text size="sm" fw={500}>{item.title}</Text>
            <Text size="xs">{item.duration} min</Text>
          </Box>
        ))}
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <ResourcesSchedule
          date={date}
          onDateChange={setDate}
          resources={resources}
          events={events}
          dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
          weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: `${today} 08:00:00` }}
          monthViewProps={{ startScrollDate: today }}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
```


## Event resize

Enable event resizing with `withEventResize` prop. Event resize is available in day and week views
where events can be resized by dragging their left or right edges. In week view, resizing is
constrained to the event's own day.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  const handleEventUpdate = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string; event: ScheduleEventData }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((prev) =>
          prev.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
      withEventResize
      onEventResize={handleEventUpdate}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: `${today} 08:00:00` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
```


## Static mode

Set `mode="static"` to disable all interactions across all three views.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      mode="static"
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: `${today} 08:00:00` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
```



#### Props

**ResourcesSchedule props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| canDragEvent | (event: ScheduleEventData) => boolean | - | Function to determine if event can be dragged |
| canResizeEvent | (event: ScheduleEventData) => boolean | - | Function to determine if event can be resized |
| date | string \| Date | - | Current date to display (controlled) |
| dayViewProps | Partial<Omit<ResourcesDayViewProps, ResourcesScheduleCommonProps>> | - | Props specific to ResourcesDayView |
| defaultDate | string \| Date | - | Default date (uncontrolled) |
| defaultView | ResourcesScheduleViewLevel | - | Default view level (uncontrolled) |
| events | ScheduleEventData[] | - | Events to display across all views |
| labels | Partial<ScheduleLabels> | - | Labels override for i18n |
| locale | string | - | Locale for date formatting |
| mode | ScheduleMode | - | Interaction mode |
| monthViewProps | Partial<Omit<ResourcesMonthViewProps, ResourcesScheduleCommonProps>> | - | Props specific to ResourcesMonthView |
| onDateChange | (date: string) => void | - | Called when date changes via navigation |
| onDayClick | ((data: { date: string; nativeEvent: MouseEvent<HTMLButtonElement, MouseEvent>; resourceId?: string \| number; }) => void) \| undefined | - | Called when day is clicked in month view |
| onEventClick | (event: ScheduleEventData, e: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when event is clicked |
| onEventDragEnd | () => void | - | Called when any event drag ends |
| onEventDragStart | (event: ScheduleEventData) => void | - | Called when any event drag starts |
| onEventDrop | ((data: { eventId: string \| number; newStart: string; newEnd: string; event: ScheduleEventData; resourceId?: string \| number; }) => void) \| undefined | - | Called when event is dropped |
| onEventResize | (data: { eventId: string \| number; newStart: string; newEnd: string; event: ScheduleEventData; }) => void | - | Called when event is resized |
| onExternalEventDrop | ((data: { dataTransfer: DataTransfer; dropDateTime: string; resourceId?: string \| number; }) => void) \| undefined | - | Called when an external item is dropped onto the schedule |
| onSlotDragEnd | ((data: { rangeStart: string; rangeEnd: string; resourceId?: string \| number; }) => void) \| undefined | - | Called when a slot range is selected by dragging |
| onTimeSlotClick | ((data: { slotStart: string; slotEnd: string; nativeEvent: MouseEvent<HTMLButtonElement, MouseEvent>; resourceId?: string \| number; }) => void) \| undefined | - | Called when time slot is clicked |
| onViewChange | (view: ResourcesScheduleViewLevel) => void | - | Called when view level changes |
| radius | MantineRadius \| number | - | Key of theme.radius or any valid CSS value to set border-radius |
| recurrenceExpansionLimit | number | - | Max number of generated recurring instances |
| renderEventBody | RenderEventBody | - | Custom event body renderer |
| renderResourceLabel | (resource: ScheduleResourceData) => ReactNode | - | Custom resource label renderer |
| resources | ScheduleResourceData[] | required | List of resources to display |
| view | ResourcesScheduleViewLevel | - | Current view level (controlled) |
| weekViewProps | Partial<Omit<ResourcesWeekViewProps, ResourcesScheduleCommonProps>> | - | Props specific to ResourcesWeekView |
| withDragSlotSelect | boolean | - | If set, enables drag-to-select slot ranges |
| withEventResize | boolean | - | If true, events can be resized |
| withEventsDragAndDrop | boolean | - | Enable drag and drop for events |


#### Styles API

ResourcesSchedule component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ResourcesSchedule selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ResourcesSchedule-root | Root element |
| resourcesDayView | .mantine-ResourcesSchedule-resourcesDayView | ResourcesDayView root element |
| resourcesDayViewRoot | .mantine-ResourcesSchedule-resourcesDayViewRoot | ResourcesDayView root container |
| resourcesDayViewInner | .mantine-ResourcesSchedule-resourcesDayViewInner | ResourcesDayView inner container |
| resourcesDayViewTimeLabelsRow | .mantine-ResourcesSchedule-resourcesDayViewTimeLabelsRow | ResourcesDayView time labels row |
| resourcesDayViewScrollArea | .mantine-ResourcesSchedule-resourcesDayViewScrollArea | ResourcesDayView scroll area |
| resourcesDayViewCorner | .mantine-ResourcesSchedule-resourcesDayViewCorner | ResourcesDayView top-left corner |
| resourcesDayViewTimeLabel | .mantine-ResourcesSchedule-resourcesDayViewTimeLabel | ResourcesDayView time label |
| resourcesDayViewResourceLabel | .mantine-ResourcesSchedule-resourcesDayViewResourceLabel | ResourcesDayView resource label |
| resourcesDayViewRow | .mantine-ResourcesSchedule-resourcesDayViewRow | ResourcesDayView resource row |
| resourcesDayViewRowSlot | .mantine-ResourcesSchedule-resourcesDayViewRowSlot | ResourcesDayView time slot |
| resourcesDayViewRowSlots | .mantine-ResourcesSchedule-resourcesDayViewRowSlots | ResourcesDayView slots container |
| resourcesDayViewBackgroundEvent | .mantine-ResourcesSchedule-resourcesDayViewBackgroundEvent | ResourcesDayView background event |
| resourcesDayViewAllDayEvent | .mantine-ResourcesSchedule-resourcesDayViewAllDayEvent | ResourcesDayView all-day event |
| resourcesDayViewCurrentTimeIndicator | .mantine-ResourcesSchedule-resourcesDayViewCurrentTimeIndicator | ResourcesDayView current time indicator container |
| resourcesDayViewCurrentTimeIndicatorLine | .mantine-ResourcesSchedule-resourcesDayViewCurrentTimeIndicatorLine | ResourcesDayView current time indicator line |
| resourcesDayViewCurrentTimeIndicatorThumb | .mantine-ResourcesSchedule-resourcesDayViewCurrentTimeIndicatorThumb | ResourcesDayView current time indicator thumb |
| resourcesDayViewEventWrapper | .mantine-ResourcesSchedule-resourcesDayViewEventWrapper | ResourcesDayView event wrapper |
| resourcesDayViewResizeHandle | .mantine-ResourcesSchedule-resourcesDayViewResizeHandle | ResourcesDayView event resize handle |
| resourcesDayViewGroupColumn | .mantine-ResourcesSchedule-resourcesDayViewGroupColumn | ResourcesDayView group label column |
| resourcesDayViewGroupColumnEmpty | .mantine-ResourcesSchedule-resourcesDayViewGroupColumnEmpty | ResourcesDayView empty group column cell |
| resourcesWeekView | .mantine-ResourcesSchedule-resourcesWeekView | ResourcesWeekView root element |
| resourcesWeekViewRoot | .mantine-ResourcesSchedule-resourcesWeekViewRoot | ResourcesWeekView root container |
| resourcesWeekViewInner | .mantine-ResourcesSchedule-resourcesWeekViewInner | ResourcesWeekView inner container |
| resourcesWeekViewHeaderRows | .mantine-ResourcesSchedule-resourcesWeekViewHeaderRows | ResourcesWeekView header rows container |
| resourcesWeekViewHeaderContent | .mantine-ResourcesSchedule-resourcesWeekViewHeaderContent | ResourcesWeekView header content container |
| resourcesWeekViewDayLabelsRow | .mantine-ResourcesSchedule-resourcesWeekViewDayLabelsRow | ResourcesWeekView day labels row |
| resourcesWeekViewDayLabel | .mantine-ResourcesSchedule-resourcesWeekViewDayLabel | ResourcesWeekView day label |
| resourcesWeekViewTimeLabelsRow | .mantine-ResourcesSchedule-resourcesWeekViewTimeLabelsRow | ResourcesWeekView time labels row |
| resourcesWeekViewScrollArea | .mantine-ResourcesSchedule-resourcesWeekViewScrollArea | ResourcesWeekView scroll area |
| resourcesWeekViewCorner | .mantine-ResourcesSchedule-resourcesWeekViewCorner | ResourcesWeekView top-left corner |
| resourcesWeekViewTimeLabel | .mantine-ResourcesSchedule-resourcesWeekViewTimeLabel | ResourcesWeekView time label |
| resourcesWeekViewResourceLabel | .mantine-ResourcesSchedule-resourcesWeekViewResourceLabel | ResourcesWeekView resource label |
| resourcesWeekViewRow | .mantine-ResourcesSchedule-resourcesWeekViewRow | ResourcesWeekView resource row |
| resourcesWeekViewRowSlot | .mantine-ResourcesSchedule-resourcesWeekViewRowSlot | ResourcesWeekView time slot |
| resourcesWeekViewRowSlots | .mantine-ResourcesSchedule-resourcesWeekViewRowSlots | ResourcesWeekView slots container |
| resourcesWeekViewBackgroundEvent | .mantine-ResourcesSchedule-resourcesWeekViewBackgroundEvent | ResourcesWeekView background event |
| resourcesWeekViewAllDayEvent | .mantine-ResourcesSchedule-resourcesWeekViewAllDayEvent | ResourcesWeekView all-day event |
| resourcesWeekViewCurrentTimeIndicator | .mantine-ResourcesSchedule-resourcesWeekViewCurrentTimeIndicator | ResourcesWeekView current time indicator container |
| resourcesWeekViewCurrentTimeIndicatorLine | .mantine-ResourcesSchedule-resourcesWeekViewCurrentTimeIndicatorLine | ResourcesWeekView current time indicator line |
| resourcesWeekViewCurrentTimeIndicatorThumb | .mantine-ResourcesSchedule-resourcesWeekViewCurrentTimeIndicatorThumb | ResourcesWeekView current time indicator thumb |
| resourcesWeekViewEventWrapper | .mantine-ResourcesSchedule-resourcesWeekViewEventWrapper | ResourcesWeekView event wrapper |
| resourcesWeekViewResizeHandle | .mantine-ResourcesSchedule-resourcesWeekViewResizeHandle | ResourcesWeekView event resize handle |
| resourcesWeekViewGroupColumn | .mantine-ResourcesSchedule-resourcesWeekViewGroupColumn | ResourcesWeekView group label column |
| resourcesWeekViewGroupColumnEmpty | .mantine-ResourcesSchedule-resourcesWeekViewGroupColumnEmpty | ResourcesWeekView empty group column cell |
| resourcesMonthView | .mantine-ResourcesSchedule-resourcesMonthView | ResourcesMonthView root element |
| resourcesMonthViewRoot | .mantine-ResourcesSchedule-resourcesMonthViewRoot | ResourcesMonthView root container |
| resourcesMonthViewScrollArea | .mantine-ResourcesSchedule-resourcesMonthViewScrollArea | ResourcesMonthView scroll area |
| resourcesMonthViewDayLabelsRow | .mantine-ResourcesSchedule-resourcesMonthViewDayLabelsRow | ResourcesMonthView day labels row |
| resourcesMonthViewCorner | .mantine-ResourcesSchedule-resourcesMonthViewCorner | ResourcesMonthView top-left corner |
| resourcesMonthViewDayLabel | .mantine-ResourcesSchedule-resourcesMonthViewDayLabel | ResourcesMonthView day label |
| resourcesMonthViewDayLabelWeekday | .mantine-ResourcesSchedule-resourcesMonthViewDayLabelWeekday | ResourcesMonthView weekday text inside day label |
| resourcesMonthViewDayLabelNumber | .mantine-ResourcesSchedule-resourcesMonthViewDayLabelNumber | ResourcesMonthView day number inside day label |
| resourcesMonthViewRow | .mantine-ResourcesSchedule-resourcesMonthViewRow | ResourcesMonthView resource row |
| resourcesMonthViewResourceLabel | .mantine-ResourcesSchedule-resourcesMonthViewResourceLabel | ResourcesMonthView resource label |
| resourcesMonthViewRowSlots | .mantine-ResourcesSchedule-resourcesMonthViewRowSlots | ResourcesMonthView day cells container |
| resourcesMonthViewCell | .mantine-ResourcesSchedule-resourcesMonthViewCell | ResourcesMonthView day cell |
| resourcesMonthViewInner | .mantine-ResourcesSchedule-resourcesMonthViewInner | ResourcesMonthView inner container |
| resourcesMonthViewGroupColumn | .mantine-ResourcesSchedule-resourcesMonthViewGroupColumn | ResourcesMonthView group label column |
| resourcesMonthViewGroupColumnEmpty | .mantine-ResourcesSchedule-resourcesMonthViewGroupColumnEmpty | ResourcesMonthView empty group column cell |
| moreEventsButton | .mantine-ResourcesSchedule-moreEventsButton | More events button, part of MoreEvents |
| moreEventsList | .mantine-ResourcesSchedule-moreEventsList | More events list, part of MoreEvents |
| moreEventsDropdown | .mantine-ResourcesSchedule-moreEventsDropdown | More events dropdown, part of MoreEvents |
| header | .mantine-ResourcesSchedule-header | ScheduleHeader container |
| headerControl | .mantine-ResourcesSchedule-headerControl | ScheduleHeader control element |
| viewSelect | .mantine-ResourcesSchedule-viewSelect | ViewSelect element |
| monthYearSelectTarget | .mantine-ResourcesSchedule-monthYearSelectTarget | MonthYearSelect target button |
| monthYearSelectDropdown | .mantine-ResourcesSchedule-monthYearSelectDropdown | MonthYearSelect dropdown |
| monthYearSelectControl | .mantine-ResourcesSchedule-monthYearSelectControl | MonthYearSelect control |
| monthYearSelectList | .mantine-ResourcesSchedule-monthYearSelectList | MonthYearSelect list |
| monthYearSelectLabel | .mantine-ResourcesSchedule-monthYearSelectLabel | MonthYearSelect label |
