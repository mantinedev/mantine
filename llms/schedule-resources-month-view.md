# ResourcesMonthView
Package: @mantine/schedule
Import: import { ResourcesMonthView } from '@mantine/schedule';
Description: Month view with resource lanes for scheduling across resources

## Usage

ResourcesMonthView displays a month grid where each day cell contains resource lanes.
Events are shown within their resource's lane, making it easy to see resource utilization
across the month.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Static mode

Set `mode="static"` to disable all interactions.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      mode="static"
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Drag and drop

Enable drag and drop with `withEventsDragAndDrop` prop. The `onEventDrop` callback receives
the `resourceId` of the target resource, allowing you to update the event's resource assignment.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesMonthView
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
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Event form

Click a day cell to create a new event, or click an existing event to edit it. Use `withDragSlotSelect`
and `onSlotDragEnd` to allow drag-to-create across day cells. The `onSlotDragEnd` callback includes
the `resourceId` of the resource where the drag started.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

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
      <ResourcesMonthView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withDragSlotSelect
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Custom event rendering

Use `renderEvent` prop to customize how events are rendered. The example below uses `HoverCard`
to display event details on hover.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesMonthView
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
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} resources={resources} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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


## Custom resource label

Use `renderResourceLabel` prop to customize how resource labels are rendered in the row headers.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesMonthView, ScheduleResourceData } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      renderResourceLabel={(resource: ScheduleResourceData) => (
        <Stack gap={0} align="flex-start">
          <Text fw={600} size="sm">
            {resource.label}
          </Text>
          <Text size="xs" c="dimmed">
            Office
          </Text>
        </Stack>
      )}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
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
import { ResourcesMonthView, ScheduleResourceGroup } from '@mantine/schedule';
import { events } from './data';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'overflow', label: 'Overflow room' },
];

const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
  { label: 'Floor 2', resourceIds: ['new-york'] },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
```


## Localization

Set `locale` prop to change the language. Use `labels` prop to override built-in labels.

```tsx
// Demo.tsx
import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      locale="es"
      labels={{
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        more: 'Más',
        resources: 'Recursos',
        moreLabel: (hiddenEventsCount) => `+${hiddenEventsCount} más`,
      }}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Recurring events

ResourcesMonthView automatically expands recurring events for the visible month.
See [Recurring events guide](https://mantine.dev/llms/schedule-recurring-events.md) for full documentation.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';

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
    end: `${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:30:00`,
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
    end: `${today} 14:30:00`,
    color: 'grape',
    resourceId: 'tokyo',
    recurringEventId: 'daily-sync-series',
    recurrenceId: `${today} 09:00:00`,
  },
  {
    id: 'one-off',
    title: 'One-off planning',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    resourceId: 'paris',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={today}
    />
  );
}
```


## Max events per cell

Use `maxEventsPerTimeSlot` prop to limit the number of events visible in each cell.
When there are more events than the limit, a "+more" indicator is shown.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Meeting', start: `${today} 09:00:00`, end: `${today} 10:00:00`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Code Review', start: `${today} 11:00:00`, end: `${today} 12:00:00`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: `${today} 13:00:00`, end: `${today} 14:00:00`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Sprint Planning', start: `${today} 15:00:00`, end: `${today} 16:00:00`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: `${today} 16:30:00`, end: `${today} 17:30:00`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: `${today} 09:00:00`, end: `${today} 10:00:00`, color: 'pink', resourceId: 'paris' },
  { id: 7, title: 'Workshop', start: `${today} 11:00:00`, end: `${today} 12:00:00`, color: 'grape', resourceId: 'paris' },
  { id: 8, title: 'Standup', start: `${today} 14:00:00`, end: `${today} 15:00:00`, color: 'red', resourceId: 'paris' },
  { id: 9, title: 'Demo', start: `${today} 16:00:00`, end: `${today} 17:00:00`, color: 'teal', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={3}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
```


## Day width and row height

Use `dayWidth` and `rowHeight` props to customize the dimensions of day columns and resource rows.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      dayWidth={60}
      rowHeight={64}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Start scroll date

Use `startScrollDate` prop to scroll to a specific date on initial render. This is useful
when the month has many days and you want the view to start at a specific date, for example today.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Without weekend days

Set `withWeekendDays={false}` to hide weekend day columns from the month grid.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withWeekendDays={false}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## More events indicator

When a day cell has more events than `maxEventsPerTimeSlot`, a "+X more" indicator is shown.
Click the indicator to see all events for that day.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Standup', start: `${today} 08:00:00`, end: `${today} 08:30:00`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: `${today} 09:00:00`, end: `${today} 10:00:00`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: `${today} 10:30:00`, end: `${today} 11:30:00`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Code Review', start: `${today} 13:00:00`, end: `${today} 14:00:00`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: `${today} 14:30:00`, end: `${today} 15:30:00`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: `${today} 16:00:00`, end: `${today} 17:00:00`, color: 'pink', resourceId: 'tokyo' },
  { id: 7, title: 'Workshop', start: `${today} 10:00:00`, end: `${today} 11:00:00`, color: 'grape', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={2}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
```


## More events props

Use `moreEventsProps` to customize the more events dropdown, for example to use a modal
instead of a popover.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Standup', start: `${today} 08:00:00`, end: `${today} 08:30:00`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: `${today} 09:00:00`, end: `${today} 10:00:00`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: `${today} 10:30:00`, end: `${today} 11:30:00`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Code Review', start: `${today} 13:00:00`, end: `${today} 14:00:00`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: `${today} 14:30:00`, end: `${today} 15:30:00`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: `${today} 16:00:00`, end: `${today} 17:00:00`, color: 'pink', resourceId: 'tokyo' },
  { id: 7, title: 'Workshop', start: `${today} 10:00:00`, end: `${today} 11:00:00`, color: 'grape', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={2}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
      moreEventsProps={{ dropdownType: 'modal', modalTitle: 'All Events' }}
    />
  );
}
```


## Custom header

Set `withHeader={false}` to hide the default header and use `ScheduleHeader` to build
a custom header with navigation controls.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ResourcesMonthView, ScheduleHeader } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              dayjs(date)
                .subtract(1, 'month')
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
          onMonthChange={(month) =>
            setDate(
              dayjs(date)
                .month(month)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'month')
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
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
      </ScheduleHeader>

      <ResourcesMonthView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withHeader={false}
      />
    </div>
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Radius

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      radius="md"
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```


## Scroll area props

Use `scrollAreaProps` to customize the scroll area behavior.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
        type: 'always',
        scrollbars: 'x',
      }}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
```



#### Props

**ResourcesMonthView props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| canDragEvent | (event: ScheduleEventData) => boolean | - | Function to determine if event can be dragged |
| date | string \| Date | required | Date to display, Date object or date string in `YYYY-MM-DD` format |
| dayWidth | React.CSSProperties["width"] | - | Width of each day column |
| events | ScheduleEventData[] | - | Events to display |
| groupLabelWidth | React.CSSProperties["width"] | - | Width of the group label column |
| groups | ScheduleResourceGroup[] | - | List of resource groups to display as a column to the left of resource labels |
| highlightToday | boolean | - | If set, highlights the current day |
| labels | Partial<ScheduleLabels> | - | Labels override for i18n |
| locale | string | - | Locale passed down to dayjs |
| maxEventsPerTimeSlot | number | - | Maximum number of events visible per cell before "+more" indicator |
| mode | ScheduleMode | - | Interaction mode |
| monthYearSelectProps | Partial<MonthYearSelectProps> | - | Props passed down to `MonthYearSelect` component |
| moreEventsProps | Partial<MoreEventsProps> | - | Props passed down to `MoreEvents` component |
| nextControlProps | React.ComponentProps<'button'> | - | Props passed to next control |
| onDateChange | (value: string) => void | - | Called with the new date value when a date is selected |
| onDayClick | ((data: { date: string; nativeEvent: MouseEvent<HTMLButtonElement, MouseEvent>; resourceId?: string \| number; }) => void) \| undefined | - | Called when a cell is clicked, includes resourceId |
| onEventClick | (event: ScheduleEventData, e: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when event is clicked |
| onEventDragEnd | () => void | - | Called when any event drag ends |
| onEventDragStart | (event: ScheduleEventData) => void | - | Called when any event drag starts |
| onEventDrop | ((data: { eventId: string \| number; newStart: string; newEnd: string; event: ScheduleEventData; resourceId?: string \| number; }) => void) \| undefined | - | Called when event is dropped, includes target resourceId |
| onExternalEventDrop | ((data: { dataTransfer: DataTransfer; dropDateTime: string; resourceId?: string \| number; }) => void) \| undefined | - | Called when an external item is dropped |
| onSlotDragEnd | ((data: { rangeStart: string; rangeEnd: string; resourceId?: string \| number; }) => void) \| undefined | - | Called when a day range is selected by dragging, includes resourceId |
| onViewChange | (view: ScheduleViewLevel) => void | - | Called when view level select button is clicked |
| previousControlProps | React.ComponentProps<'button'> | - | Props passed to previous control |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| recurrenceExpansionLimit | number | - | Max number of generated recurring instances |
| renderEvent | RenderEvent | - | Function to fully customize event rendering |
| renderEventBody | RenderEventBody | - | Function to customize event body |
| renderGroupLabel | (group: ScheduleResourceGroup) => ReactNode | - | Function to customize group label rendering |
| renderResourceLabel | (resource: ScheduleResourceData) => ReactNode | - | Function to customize resource label rendering |
| resources | ScheduleResourceData[] | required | List of resources to display as rows |
| rowHeight | Height<string \| number> | - | Height of each resource row |
| scrollAreaProps | Partial<ScrollAreaProps> & DataAttributes | - | Props passed down to `ScrollArea` component |
| startScrollDate | string | - | Date to scroll to on initial render, in `YYYY-MM-DD` format |
| todayControlProps | React.ComponentProps<'button'> | - | Props passed to today control |
| viewSelectProps | Partial<ViewSelectProps> & DataAttributes | - | Props passed to view level select |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays in day column headers |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days |
| withDragSlotSelect | boolean | - | If set, enables drag-to-select day ranges |
| withEventsDragAndDrop | boolean | - | If true, events can be dragged and dropped |
| withHeader | boolean | - | If set, the header is displayed |
| withWeekendDays | boolean | - | If set to false, weekend days are hidden |


#### Styles API

ResourcesMonthView component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ResourcesMonthView selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| resourcesMonthView | .mantine-ResourcesMonthView-resourcesMonthView | Root element |
| resourcesMonthViewRoot | .mantine-ResourcesMonthView-resourcesMonthViewRoot | Root container wrapping scroll area |
| resourcesMonthViewScrollArea | .mantine-ResourcesMonthView-resourcesMonthViewScrollArea | Scroll area component |
| resourcesMonthViewDayLabelsRow | .mantine-ResourcesMonthView-resourcesMonthViewDayLabelsRow | Row containing day labels |
| resourcesMonthViewCorner | .mantine-ResourcesMonthView-resourcesMonthViewCorner | Top-left corner element |
| resourcesMonthViewDayLabel | .mantine-ResourcesMonthView-resourcesMonthViewDayLabel | Individual day label element |
| resourcesMonthViewDayLabelWeekday | .mantine-ResourcesMonthView-resourcesMonthViewDayLabelWeekday | Weekday text inside day label |
| resourcesMonthViewDayLabelNumber | .mantine-ResourcesMonthView-resourcesMonthViewDayLabelNumber | Day number inside day label |
| resourcesMonthViewRow | .mantine-ResourcesMonthView-resourcesMonthViewRow | Resource row element |
| resourcesMonthViewResourceLabel | .mantine-ResourcesMonthView-resourcesMonthViewResourceLabel | Resource label element |
| resourcesMonthViewRowSlots | .mantine-ResourcesMonthView-resourcesMonthViewRowSlots | Container for all day cells in a row |
| resourcesMonthViewCell | .mantine-ResourcesMonthView-resourcesMonthViewCell | Individual day cell element |
| resourcesMonthViewInner | .mantine-ResourcesMonthView-resourcesMonthViewInner | Inner container wrapping day labels and rows |
| resourcesMonthViewGroupColumn | .mantine-ResourcesMonthView-resourcesMonthViewGroupColumn | Group label column element |
| resourcesMonthViewGroupColumnEmpty | .mantine-ResourcesMonthView-resourcesMonthViewGroupColumnEmpty | Empty group column cell for ungrouped resources |
| moreEventsButton | .mantine-ResourcesMonthView-moreEventsButton | More events button, part of MoreEvents |
| moreEventsList | .mantine-ResourcesMonthView-moreEventsList | More events list, part of MoreEvents |
| moreEventsDropdown | .mantine-ResourcesMonthView-moreEventsDropdown | More events dropdown, part of MoreEvents |
| header | .mantine-ResourcesMonthView-header | Header container, part of ScheduleHeader |
| headerControl | .mantine-ResourcesMonthView-headerControl | Header control element, part of ScheduleHeader |
| viewSelect | .mantine-ResourcesMonthView-viewSelect | View select element, part of ScheduleHeader |
| monthYearSelectTarget | .mantine-ResourcesMonthView-monthYearSelectTarget | MonthYearSelect target button, part of ScheduleHeader |
| monthYearSelectDropdown | .mantine-ResourcesMonthView-monthYearSelectDropdown | MonthYearSelect dropdown, part of ScheduleHeader |
| monthYearSelectControl | .mantine-ResourcesMonthView-monthYearSelectControl | MonthYearSelect control, part of ScheduleHeader |
| monthYearSelectList | .mantine-ResourcesMonthView-monthYearSelectList | MonthYearSelect list, part of ScheduleHeader |
| monthYearSelectLabel | .mantine-ResourcesMonthView-monthYearSelectLabel | MonthYearSelect label, part of ScheduleHeader |

**ResourcesMonthView CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| resourcesMonthView | --resources-month-view-radius | Controls `border-radius` of the view |
| resourcesMonthView | --resources-month-view-day-width | Controls `width` of each day column |
| resourcesMonthView | --resources-month-view-row-height | Controls `height` of each resource row |
| resourcesMonthView | --resources-month-view-group-label-width | Controls `width` of the group label column |

**ResourcesMonthView data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| resourcesMonthViewDayLabel | data-weekend | Day label represents a weekend day | - |
| resourcesMonthViewDayLabel | data-today | Day label represents today and `highlightToday` is true | - |
| resourcesMonthViewCell | data-weekend | Cell represents a weekend day | - |
| resourcesMonthViewCell | data-drop-target | Cell is the current drag drop target | - |
| resourcesMonthViewCell | data-drag-selected | Cell is selected during drag-to-select | - |
| resourcesMonthViewCell | data-static | `mode="static"` is set | - |
| resourcesMonthView | data-static | `mode="static"` is set | - |
