# Schedule
Package: @mantine/schedule
Import: import { Schedule } from '@mantine/schedule';
Description: Schedule component with day, week, month and year views

## Usage

Schedule is a unified component that combines all schedule views (Day, Week, Month, Year) with automatic
view switching. Use the view selector in the header to switch between different views.

```tsx
// Demo.tsx
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
```


## Controlled state

Control the current view and date externally using the `view`, `onViewChange`, `date`, and `onDateChange` props.
This allows you to build custom navigation or integrate with other components.

```tsx
import { useState } from 'react';
import { Text } from '@mantine/core';
import { Schedule, ScheduleViewLevel } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [view, setView] = useState<ScheduleViewLevel>('week');
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Text size="sm" mb="md">
        Current view: <b>{view}</b>
      </Text>

      <Schedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={(newDate) => setDate(new Date(newDate))}
        events={events}
      />
    </div>
  );
}
```


## View-specific props

Customize each view by passing view-specific props via `dayViewProps`, `weekViewProps`, `monthViewProps`,
and `yearViewProps`. These props are forwarded to the corresponding view component.

For example, you can set different time ranges for Day and Week views, or customize the first day of week
for Month and Year views.

```tsx
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <Schedule
      events={events}
      dayViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        intervalMinutes: 30,
      }}
      weekViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        withWeekendDays: false,
      }}
      monthViewProps={{
        withWeekNumbers: true,
        firstDayOfWeek: 0,
      }}
      yearViewProps={{
        withWeekNumbers: true,
      }}
    />
  );
}
```


## Default view

Set `defaultView` to control which view is shown initially when using uncontrolled mode.

```tsx
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}
```


## Custom header

You can build a custom header using `ScheduleHeader` compound components combined with your own controls.
Disable the default header on all views by passing `withHeader={false}` through view-specific props.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  DateStringValue,
  getStartOfWeek,
  Schedule,
  ScheduleHeader,
  ScheduleViewLevel,
} from '@mantine/schedule';
import { events } from './data';

function getNavigationHandlers(
  date: DateStringValue,
  view: ScheduleViewLevel
) {
  const d = dayjs(date);
  switch (view) {
    case 'day':
      return {
        previous: d.subtract(1, 'day'),
        next: d.add(1, 'day'),
      };
    case 'week':
      return {
        previous: d.subtract(1, 'week'),
        next: d.add(1, 'week'),
      };
    case 'month':
      return {
        previous: d.subtract(1, 'month').startOf('month'),
        next: d.add(1, 'month').startOf('month'),
      };
    case 'year':
      return {
        previous: d.subtract(1, 'year').startOf('year'),
        next: d.add(1, 'year').startOf('year'),
      };
  }
}

function getHeaderLabel(date: DateStringValue, view: ScheduleViewLevel) {
  const d = dayjs(date);
  switch (view) {
    case 'day':
      return d.format('dddd, MMMM D, YYYY');
    case 'week': {
      const start = dayjs(
        getStartOfWeek({ date, firstDayOfWeek: 1 })
      );
      const end = start.add(6, 'day');
      if (start.month() === end.month()) {
        return `${start.format('MMM D')} – ${end.format('D, YYYY')}`;
      }
      return `${start.format('MMM D')} – ${end.format('MMM D, YYYY')}`;
    }
    case 'month':
      return d.format('MMMM YYYY');
    case 'year':
      return d.format('YYYY');
  }
}

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );
  const [view, setView] = useState<ScheduleViewLevel>('week');

  const nav = getNavigationHandlers(date, view);

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              nav.previous.format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {getHeaderLabel(date, view)}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              nav.next.format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Today
          onClick={() =>
            setDate(
              dayjs().format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control onClick={() => window.print()}>
          Print
        </ScheduleHeader.Control>
        <div style={{ marginInlineStart: 'auto' }}>
          <ScheduleHeader.ViewSelect
            value={view}
            onChange={setView}
          />
        </div>
      </ScheduleHeader>

      <Schedule
        date={date}
        onDateChange={setDate}
        view={view}
        onViewChange={setView}
        events={events}
        dayViewProps={{ withHeader: false }}
        weekViewProps={{ withHeader: false }}
        monthViewProps={{ withHeader: false }}
        yearViewProps={{ withHeader: false }}
      />
    </div>
  );
}
```


## Common props

The following props are shared across all views:

* `events` - Events to display
* `locale` - Date formatting locale
* `radius` - Border radius
* `labels` - Label overrides for i18n
* `renderEventBody` - Custom event renderer
* `withDragDrop` - Enable drag and drop
* `onEventDrop` - Drag and drop handler
* `canDragEvent` - Drag permission callback
* `withEventResize` - Enable event resizing
* `onEventResize` - Resize handler
* `canResizeEvent` - Resize permission callback
* `mode` - Interaction mode (`default` or `static`)

These props are automatically passed to all views. For view-specific customization, use the
`dayViewProps`, `weekViewProps`, `monthViewProps`, and `yearViewProps` props.

## Drag and drop

Enable event drag and drop by setting `withEventsDragAndDrop` prop. Events can be dragged
to different time slots and days across all views.

```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${today} 12:00:00`,
    end: `${today} 13:00:00`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: `${tomorrow} 14:00:00`,
    end: `${tomorrow} 15:00:00`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: `${tomorrow} 15:30:00`,
    end: `${tomorrow} 16:30:00`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'All Day Conference',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Schedule
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
```


## Create and update events

Set `withDragSlotSelect` prop to allow users to drag across time slots or day cells to select a range.
When the drag ends, the `onSlotDragEnd` callback is called with the range start and end dates.
Combined with `onTimeSlotClick`, `onAllDaySlotClick`, `onDayClick`, and `onEventClick` callbacks,
this enables a complete event creation and editing experience across all views.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { PlusIcon } from '@phosphor-icons/react';
import { ActionIcon, Box, Group } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events } from './events';

function Demo() {
  const [allEvents, setAllEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const mobileSelectedDate = useRef<string>(dayjs().format('YYYY-MM-DD'));

  const handleTimeSlotClick = ({ slotStart, slotEnd }: { slotStart: string; slotEnd: string }) => {
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleAllDaySlotClick = (slotDate: string) => {
    setSelectedEventData({
      title: '',
      start: dayjs(slotDate).startOf('day').toDate(),
      end: dayjs(slotDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDayClick = (date: string) => {
    setSelectedEventData({
      title: '',
      start: dayjs(date).startOf('day').toDate(),
      end: dayjs(date).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
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
      setAllEvents((prev) =>
        prev.map((event) =>
          event.id === values.id
            ? {
                ...event,
                title: values.title,
                start: dayjs(values.start).toISOString(),
                end: dayjs(values.end).toISOString(),
                color: values.color || 'blue',
              }
            : event
        )
      );
    } else {
      setAllEvents((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 11),
          title: values.title,
          start: dayjs(values.start).toISOString(),
          end: dayjs(values.end).toISOString(),
          color: values.color || 'blue',
        },
      ]);
    }
  };

  const handleSlotDragEnd = (rangeStart: string, rangeEnd: string) => {
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
      setAllEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  const handleCreateEvent = () => {
    const selectedDate = mobileSelectedDate.current;
    setSelectedEventData({
      title: '',
      start: dayjs(selectedDate).startOf('day').toDate(),
      end: dayjs(selectedDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 300, maxWidth: '100%' }}>
      <Schedule
        events={allEvents}
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        withDragSlotSelect
        layout="responsive"
        mobileMonthViewProps={{
          onSelectedDateChange: (date) => {
            if (date) {
              mobileSelectedDate.current = date;
            }
          },
          renderHeader: ({ defaultHeader }) => (
            <Group justify="space-between" w="100%">
              <Group justify="space-between" flex="1">
                {defaultHeader}
              </Group>
              <ActionIcon
                variant="default"
                mx="sm"
                size="lg"
                onClick={handleCreateEvent}
                aria-label="Create new event"
              >
                <PlusIcon size={18} />
              </ActionIcon>
            </Group>
          ),
        }}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </Box>
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

// events.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
```


## External drag and drop

Use `onExternalEventDrop` to allow dragging items from outside the component into
the schedule. External items must set data in `dataTransfer` during their `onDragStart`.
The callback receives the `DataTransfer` object and the drop target datetime.

```tsx
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

const sidebarItems = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
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
      },
    ]);
  };

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
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
        <Schedule
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
```


## Bidirectional drag and drop

Combine `onExternalEventDrop` with `withEventsDragAndDrop` to enable bidirectional
drag and drop. Items dragged from the sidebar are removed from the list and added
to the schedule. Events dragged from the schedule back to the sidebar are removed
from the schedule. The schedule sets `application/json` with `{ eventId }` in
`dataTransfer` when an event is dragged, which the sidebar drop zone reads to
identify the event.

```tsx
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

interface SidebarItem {
  title: string;
  duration: number;
  color: string;
}

const initialSidebarItems: SidebarItem[] = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const [sidebarHighlight, setSidebarHighlight] = useState(false);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
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
      },
    ]);
    setSidebarItems((prev) => prev.filter((item) => item.title !== data.title));
  };

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  const handleSidebarDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setSidebarHighlight(false);
    const raw = e.dataTransfer.getData('application/json');
    if (!raw) {
      return;
    }

    const { eventId } = JSON.parse(raw);
    const event = events.find((ev) => String(ev.id) === String(eventId));
    if (!event) {
      return;
    }

    const duration = dayjs(event.end).diff(dayjs(event.start), 'minutes');
    setSidebarItems((prev) => [
      ...prev,
      { title: event.title, duration, color: event.color || 'blue' },
    ]);
    setEvents((prev) => prev.filter((ev) => ev.id !== event.id));
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <Box
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            setSidebarHighlight(true);
          }}
          onDragLeave={() => setSidebarHighlight(false)}
          onDrop={handleSidebarDrop}
          style={{
            padding: 8,
            borderRadius: 8,
            border: sidebarHighlight
              ? '2px dashed var(--mantine-color-blue-5)'
              : '2px dashed transparent',
            transition: 'border-color 150ms',
          }}
        >
          <Text fw={500} mb="xs">Unscheduled</Text>
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
          {sidebarItems.length === 0 && (
            <Text size="xs" c="dimmed">Drag events here to unschedule</Text>
          )}
        </Box>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <Schedule
          events={events}
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

Enable event resizing by setting `withEventResize` prop. Users can drag the top or bottom
edge of an event to adjust its start or end time. Use `onEventResize` callback to handle
the resize. Event resize works in both Day and Week views and can be combined with drag and drop.

```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${today} 12:00:00`,
    end: `${today} 13:00:00`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: `${tomorrow} 14:00:00`,
    end: `${tomorrow} 15:00:00`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: `${tomorrow} 15:30:00`,
    end: `${tomorrow} 16:30:00`,
    color: 'cyan',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventUpdate = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Schedule
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventUpdate}
      withEventResize
      onEventResize={handleEventUpdate}
    />
  );
}
```


## Recurring events

Schedule automatically expands recurring events for the visible date range in each view.
See [Recurring events guide](https://mantine.dev/llms/schedule-recurring-events.md) for full documentation.

```tsx
import { useState } from 'react';
import { Schedule } from '@mantine/schedule';

const events = [
  {
    id: 'schedule-series',
    title: 'Weekly planning (series)',
    start: '2024-01-15 10:00:00',
    end: '2024-01-15 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16',
      exdate: ['2024-01-17 10:00:00'],
    },
  },
  {
    id: 'schedule-series-override',
    title: 'Weekly planning (moved one occurrence)',
    start: '2024-01-17 16:00:00',
    end: '2024-01-17 17:00:00',
    color: 'grape',
    recurringEventId: 'schedule-series',
    recurrenceId: '2024-01-17 10:00:00',
  },
  {
    id: 'schedule-one-off',
    title: 'One-off roadmap review',
    start: '2024-01-18 12:00:00',
    end: '2024-01-18 13:00:00',
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState('2024-01-15');
  return <Schedule view="week" date={date} onDateChange={setDate} events={events} />;
}
```


## Background events

Set `display="background"` on an event to render it as a full-width, non-interactive
block behind regular events. Background events work in Day, Week, and Month views.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'lunch-block',
    title: 'Lunch break',
    start: `${today} 12:00:00`,
    end: `${today} 13:00:00`,
    color: 'gray',
    display: 'background',
  },
  {
    id: 'focus-time',
    title: 'Focus time',
    start: `${today} 14:00:00`,
    end: `${today} 16:00:00`,
    color: 'blue',
    display: 'background',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: `${today} 10:00:00`,
    end: `${today} 11:00:00`,
    color: 'violet',
  },
  {
    id: 'code-review',
    title: 'Code review',
    start: `${today} 14:30:00`,
    end: `${today} 15:30:00`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <Schedule
      date={date}
      onDateChange={setDate}
      events={events}
    />
  );
}
```


## Responsive layout

Schedule supports `layout="responsive"` prop that automatically switches between views
based on the container width. Resize the container below to see the view change.

```tsx
import { Box } from '@mantine/core';
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 300, maxWidth: '100%' }}>
      <Schedule events={events} layout="responsive" />
    </Box>
  );
}
```


## View components

For more control over individual views, use the view components directly:

* [DayView](https://mantine.dev/llms/schedule-day-view.md) - Single day with time slots
* [WeekView](https://mantine.dev/llms/schedule-week-view.md) - Full week with time slots
* [MonthView](https://mantine.dev/llms/schedule-month-view.md) - Calendar month grid
* [YearView](https://mantine.dev/llms/schedule-year-view.md) - Full year overview


#### Props

**Schedule props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| canDragEvent | (event: ScheduleEventData) => boolean | - | Function to determine if event can be dragged |
| canResizeEvent | (event: ScheduleEventData) => boolean | - | Function to determine if event can be resized |
| date | string \| Date | - | Current date to display (controlled) |
| dayViewProps | Partial<Omit<DayViewProps, ScheduleCommonProps>> | - | Props specific to DayView (includes `startTime`, `endTime`, `intervalMinutes`, etc.) |
| defaultDate | string \| Date | - | Default date (uncontrolled) |
| defaultView | ScheduleViewLevel | - | Default view level (uncontrolled) |
| events | ScheduleEventData[] | - | Events to display across all views |
| labels | Partial<ScheduleLabels> | - | Labels override for i18n |
| layout | ScheduleLayout | - | Layout mode: - `'default'` uses same views on all screen sizes - `'responsive'` switches to YearView/MobileMonthView on small screens |
| locale | string | - | Locale for date formatting (overrides `DatesProvider`) |
| mobileMonthViewProps | Partial<Omit<MobileMonthViewProps, ScheduleCommonProps>> | - | Props specific to MobileMonthView (used in responsive layout) |
| mode | ScheduleMode | - | Interaction mode: - `'default'` allows all interactions - `'static'` disables event interactions |
| monthViewProps | Partial<Omit<MonthViewProps, ScheduleCommonProps>> | - | Props specific to MonthView (includes `firstDayOfWeek`, `weekendDays`, etc.) |
| onAllDaySlotClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when all-day slot is clicked in DayView/WeekView |
| onDateChange | (date: string) => void | - | Called when date changes via navigation |
| onDayClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when day is clicked in MonthView |
| onEventClick | (event: ScheduleEventData, e: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when event is clicked in any view |
| onEventDragEnd | () => void | - | Called when any event drag ends |
| onEventDragStart | (event: ScheduleEventData) => void | - | Called when any event drag starts |
| onEventDrop | (data: { eventId: string \| number; newStart: string; newEnd: string; event: ScheduleEventData; }) => void | - | Called when event is dropped |
| onEventResize | (data: { eventId: string \| number; newStart: string; newEnd: string; event: ScheduleEventData; }) => void | - | Called when event is resized |
| onExternalEventDrop | (dataTransfer: DataTransfer, dropDateTime: string) => void | - | Called when an external item is dropped onto the schedule. Receives the `DataTransfer` object and the drop target datetime. |
| onSlotDragEnd | (rangeStart: string, rangeEnd: string) => void | - | Called when a slot range is selected by dragging |
| onTimeSlotClick | (data: { slotStart: string; slotEnd: string; nativeEvent: MouseEvent<HTMLButtonElement, MouseEvent>; }) => void | - | Called when time slot is clicked in DayView/WeekView |
| onViewChange | (view: ScheduleViewLevel) => void | - | Called when view level changes |
| radius | MantineRadius \| number | - | Key of theme.radius or any valid CSS value to set border-radius |
| recurrenceExpansionLimit | number | - | Max number of generated recurring instances per recurring series |
| renderEventBody | RenderEventBody | - | Custom event body renderer |
| view | ScheduleViewLevel | - | Current view level (controlled) |
| weekViewProps | Partial<Omit<WeekViewProps, ScheduleCommonProps>> | - | Props specific to WeekView (includes `startTime`, `endTime`, `intervalMinutes`, etc.) |
| withDragSlotSelect | boolean | - | If set, enables drag-to-select slot ranges |
| withEventResize | boolean | - | If true, events can be resized by dragging their edges |
| withEventsDragAndDrop | boolean | - | Enable drag and drop for events |
| yearViewProps | Partial<Omit<YearViewProps, ScheduleCommonProps>> | - | Props specific to YearView (includes `firstDayOfWeek`, `weekendDays`, etc.) |


#### Styles API

Schedule component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Schedule selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Schedule-root | Root element |
| desktopView | .mantine-Schedule-desktopView | Desktop view container (visible on large screens when layout="responsive") |
| mobileView | .mantine-Schedule-mobileView | Mobile view container (visible on small screens when layout="responsive") |
| dayView | .mantine-Schedule-dayView | DayView root element |
| dayViewInner | .mantine-Schedule-dayViewInner | DayView inner container |
| dayViewScrollArea | .mantine-Schedule-dayViewScrollArea | DayView scroll area component |
| dayViewAllDay | .mantine-Schedule-dayViewAllDay | DayView all-day events container |
| dayViewAllDayEvents | .mantine-Schedule-dayViewAllDayEvents | DayView all-day events wrapper |
| dayViewSlot | .mantine-Schedule-dayViewSlot | DayView individual time slot |
| dayViewSlots | .mantine-Schedule-dayViewSlots | DayView slots container |
| dayViewTimeSlots | .mantine-Schedule-dayViewTimeSlots | DayView time slots container |
| dayViewSlotLabel | .mantine-Schedule-dayViewSlotLabel | DayView time slot label |
| dayViewSlotLabels | .mantine-Schedule-dayViewSlotLabels | DayView slot labels container |
| dayViewBackgroundEvent | .mantine-Schedule-dayViewBackgroundEvent | DayView background event element |
| weekView | .mantine-Schedule-weekView | WeekView root element |
| weekViewRoot | .mantine-Schedule-weekViewRoot | WeekView root container |
| weekViewHeader | .mantine-Schedule-weekViewHeader | WeekView header row |
| weekViewInner | .mantine-Schedule-weekViewInner | WeekView inner container |
| weekViewAllDaySlotsEvents | .mantine-Schedule-weekViewAllDaySlotsEvents | WeekView all-day events container |
| weekViewAllDaySlots | .mantine-Schedule-weekViewAllDaySlots | WeekView all-day slots container |
| weekViewAllDaySlotsList | .mantine-Schedule-weekViewAllDaySlotsList | WeekView all-day slots list |
| weekViewAllDaySlot | .mantine-Schedule-weekViewAllDaySlot | WeekView individual all-day slot |
| weekViewAllDaySlotsLabel | .mantine-Schedule-weekViewAllDaySlotsLabel | WeekView all-day slots label |
| weekViewScrollArea | .mantine-Schedule-weekViewScrollArea | WeekView scroll area |
| weekViewCorner | .mantine-Schedule-weekViewCorner | WeekView top-left corner |
| weekViewSlotLabels | .mantine-Schedule-weekViewSlotLabels | WeekView slot labels container |
| weekViewSlotLabel | .mantine-Schedule-weekViewSlotLabel | WeekView individual slot label |
| weekViewDayLabel | .mantine-Schedule-weekViewDayLabel | WeekView day label |
| weekViewDayWeekday | .mantine-Schedule-weekViewDayWeekday | WeekView weekday label |
| weekViewDay | .mantine-Schedule-weekViewDay | WeekView day column |
| weekViewDayNumber | .mantine-Schedule-weekViewDayNumber | WeekView day number |
| weekViewDaySlot | .mantine-Schedule-weekViewDaySlot | WeekView individual day slot |
| weekViewDaySlots | .mantine-Schedule-weekViewDaySlots | WeekView day slots container |
| weekViewWeekLabel | .mantine-Schedule-weekViewWeekLabel | WeekView week label |
| weekViewWeekNumber | .mantine-Schedule-weekViewWeekNumber | WeekView week number |
| weekViewBackgroundEvent | .mantine-Schedule-weekViewBackgroundEvent | WeekView background event element |
| monthView | .mantine-Schedule-monthView | MonthView root element |
| monthViewScrollArea | .mantine-Schedule-monthViewScrollArea | MonthView scroll area wrapper |
| monthViewInner | .mantine-Schedule-monthViewInner | MonthView inner container |
| monthViewWeek | .mantine-Schedule-monthViewWeek | MonthView week row |
| monthViewDay | .mantine-Schedule-monthViewDay | MonthView day cell |
| monthViewDayLabel | .mantine-Schedule-monthViewDayLabel | MonthView day number label |
| monthViewWeekNumber | .mantine-Schedule-monthViewWeekNumber | MonthView week number |
| monthViewWeekday | .mantine-Schedule-monthViewWeekday | MonthView weekday name |
| monthViewWeekdays | .mantine-Schedule-monthViewWeekdays | MonthView weekdays row |
| monthViewWeekdaysCorner | .mantine-Schedule-monthViewWeekdaysCorner | MonthView top-left corner |
| monthViewEvents | .mantine-Schedule-monthViewEvents | MonthView events container |
| monthViewBackgroundEvent | .mantine-Schedule-monthViewBackgroundEvent | MonthView background event element |
| yearView | .mantine-Schedule-yearView | YearView root element |
| yearViewMonths | .mantine-Schedule-yearViewMonths | YearView months container |
| yearViewMonth | .mantine-Schedule-yearViewMonth | YearView individual month |
| yearViewWeekday | .mantine-Schedule-yearViewWeekday | YearView weekday name |
| yearViewDay | .mantine-Schedule-yearViewDay | YearView day cell |
| yearViewWeek | .mantine-Schedule-yearViewWeek | YearView week row |
| yearViewWeekNumber | .mantine-Schedule-yearViewWeekNumber | YearView week number |
| yearViewWeekdays | .mantine-Schedule-yearViewWeekdays | YearView weekdays row |
| yearViewWeekdaysCorner | .mantine-Schedule-yearViewWeekdaysCorner | YearView top-left corner |
| yearViewMonthCaption | .mantine-Schedule-yearViewMonthCaption | YearView month caption |
| yearViewDayIndicators | .mantine-Schedule-yearViewDayIndicators | YearView day indicators container |
| yearViewDayIndicator | .mantine-Schedule-yearViewDayIndicator | YearView individual day indicator |
| mobileMonthView | .mantine-Schedule-mobileMonthView | MobileMonthView root element |
| mobileMonthViewCalendar | .mantine-Schedule-mobileMonthViewCalendar | MobileMonthView calendar grid |
| mobileMonthViewWeekdays | .mantine-Schedule-mobileMonthViewWeekdays | MobileMonthView weekdays row |
| mobileMonthViewWeekday | .mantine-Schedule-mobileMonthViewWeekday | MobileMonthView individual weekday |
| mobileMonthViewWeekdaysCorner | .mantine-Schedule-mobileMonthViewWeekdaysCorner | MobileMonthView weekdays corner (for week numbers) |
| mobileMonthViewWeek | .mantine-Schedule-mobileMonthViewWeek | MobileMonthView week row |
| mobileMonthViewWeekNumber | .mantine-Schedule-mobileMonthViewWeekNumber | MobileMonthView week number |
| mobileMonthViewDay | .mantine-Schedule-mobileMonthViewDay | MobileMonthView day cell |
| mobileMonthViewDayIndicators | .mantine-Schedule-mobileMonthViewDayIndicators | MobileMonthView day indicators container |
| mobileMonthViewDayIndicator | .mantine-Schedule-mobileMonthViewDayIndicator | MobileMonthView individual day indicator |
| mobileMonthViewEventsList | .mantine-Schedule-mobileMonthViewEventsList | MobileMonthView events list container |
| mobileMonthViewEventsHeader | .mantine-Schedule-mobileMonthViewEventsHeader | MobileMonthView events list header |
| mobileMonthViewHeader | .mantine-Schedule-mobileMonthViewHeader | MobileMonthView header with back button and label |
| mobileMonthViewHeaderBackButton | .mantine-Schedule-mobileMonthViewHeaderBackButton | MobileMonthView header back button |
| mobileMonthViewHeaderLabel | .mantine-Schedule-mobileMonthViewHeaderLabel | MobileMonthView header month/year label |
| mobileMonthViewEvent | .mantine-Schedule-mobileMonthViewEvent | MobileMonthView event item |
| mobileMonthViewEventBody | .mantine-Schedule-mobileMonthViewEventBody | MobileMonthView event body button |
| mobileMonthViewEventTitle | .mantine-Schedule-mobileMonthViewEventTitle | MobileMonthView event title |
| mobileMonthViewEventTime | .mantine-Schedule-mobileMonthViewEventTime | MobileMonthView event time label |
| mobileMonthViewEventColor | .mantine-Schedule-mobileMonthViewEventColor | MobileMonthView event color indicator |
| mobileMonthViewNoEvents | .mantine-Schedule-mobileMonthViewNoEvents | MobileMonthView no events message |
| header | .mantine-Schedule-header | ScheduleHeader container |
| headerControl | .mantine-Schedule-headerControl | ScheduleHeader control element |
| viewSelect | .mantine-Schedule-viewSelect | ViewSelect element |
| monthYearSelectTarget | .mantine-Schedule-monthYearSelectTarget | MonthYearSelect target button |
| monthYearSelectDropdown | .mantine-Schedule-monthYearSelectDropdown | MonthYearSelect dropdown |
| monthYearSelectControl | .mantine-Schedule-monthYearSelectControl | MonthYearSelect control |
| monthYearSelectList | .mantine-Schedule-monthYearSelectList | MonthYearSelect list |
| monthYearSelectLabel | .mantine-Schedule-monthYearSelectLabel | MonthYearSelect label |
| event | .mantine-Schedule-event | ScheduleEvent element |
| eventInner | .mantine-Schedule-eventInner | ScheduleEvent inner element |
| eventResizeHandle | .mantine-Schedule-eventResizeHandle | ScheduleEvent resize handle element |
| moreEventsButton | .mantine-Schedule-moreEventsButton | MoreEvents button |
| moreEventsList | .mantine-Schedule-moreEventsList | MoreEvents list |
| moreEventsDropdown | .mantine-Schedule-moreEventsDropdown | MoreEvents dropdown |
| currentTimeIndicator | .mantine-Schedule-currentTimeIndicator | CurrentTimeIndicator container |
| currentTimeIndicatorLine | .mantine-Schedule-currentTimeIndicatorLine | CurrentTimeIndicator line |
| currentTimeIndicatorThumb | .mantine-Schedule-currentTimeIndicatorThumb | CurrentTimeIndicator thumb |
| currentTimeIndicatorTimeBubble | .mantine-Schedule-currentTimeIndicatorTimeBubble | CurrentTimeIndicator time bubble |
