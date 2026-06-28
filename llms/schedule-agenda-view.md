# AgendaView
Package: @mantine/schedule
Import: import { AgendaView } from '@mantine/schedule';
Description: Vertical list view of events grouped by date

## Usage

`AgendaView` renders a vertical list of events for a specified time period. Events are grouped by
date in chronological order with date headers for each group.

```tsx
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');

const events = [
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: `${startOfMonth} 09:00:00`,
    end: `${startOfMonth} 10:30:00`,
    color: 'blue',
  },
  {
    id: 'client-call',
    title: 'Client Call',
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: 'green',
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: `${startOfMonth} 16:00:00`,
    end: `${startOfMonth} 17:00:00`,
    color: 'cyan',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().startOf('month').format('YYYY-MM-DD')}
      rangeEnd={dayjs().endOf('month').format('YYYY-MM-DD')}
      events={events}
    />
  );
}
```


## All-day and multi-day events

Timed events show their time range, all-day events display an "All day" label, and multi-day
events appear on each date they span.

```tsx
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'timed',
    title: 'Team Meeting',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'blue',
  },
  {
    id: 'allday',
    title: 'Company Holiday',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(2, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 'multiday',
    title: 'Sales Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(5, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'grape',
  },
  {
    id: 'timed-2',
    title: 'Client Call',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
  },
  {
    id: 'evening',
    title: 'Dinner Event',
    start: dayjs().add(4, 'day').format('YYYY-MM-DD 19:00:00'),
    end: dayjs().add(4, 'day').format('YYYY-MM-DD 21:00:00'),
    color: 'orange',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
    />
  );
}
```


## Date formats

Use `headerFormat` to control the range label in the header and `dateHeaderFormat` to control
individual date group headers. Both accept a [dayjs format string](https://day.js.org/docs/en/display/format)
or a callback function.

```tsx
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 'meeting',
    title: 'Team Meeting',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 11:30:00'),
    color: 'green',
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(2, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'violet',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      headerFormat="MMM D"
      dateHeaderFormat="ddd, D MMM"
    />
  );
}
```


## Custom event rendering

Use `renderEvent` to fully customize how each event row is rendered. The callback receives the
event data and default root props that you should spread onto your wrapper element.

```tsx
import dayjs from 'dayjs';
import { Badge, Box, Group, Text, UnstyledButton } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    payload: { location: 'Room A', category: 'meeting' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: `${today} 10:00:00`,
    end: `${today} 12:00:00`,
    color: 'grape',
    payload: { location: 'Creative Space', category: 'workshop' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { location: 'Zoom', category: 'dev' },
  },
  {
    id: 'conference',
    title: 'Tech Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(3, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: { location: 'Convention Center', category: 'event' },
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      renderEvent={(event, props) => (
        <UnstyledButton {...props}>
          <Box
            style={{
              display: 'flex',
              gap: 'var(--mantine-spacing-sm)',
              padding: 'var(--mantine-spacing-xs) var(--mantine-spacing-sm)',
            }}
          >
            <Box
              style={{
                width: 4,
                borderRadius: 2,
                flexShrink: 0,
                backgroundColor: `var(--mantine-color-${event.color}-filled)`,
              }}
            />
            <div style={{ flex: 1 }}>
              <Group justify="space-between" wrap="nowrap">
                <Text size="sm" fw={500}>
                  {event.title}
                </Text>
                <Badge size="xs" variant="light" color={event.color}>
                  {event.payload?.category}
                </Badge>
              </Group>
              <Text size="xs" c="dimmed">
                {dayjs(event.start).format('HH:mm')} – {dayjs(event.end).format('HH:mm')}
              </Text>
              {event.payload?.location && (
                <Text size="xs" c="dimmed" mt={2}>
                  📍 {event.payload.location}
                </Text>
              )}
            </div>
          </Box>
        </UnstyledButton>
      )}
    />
  );
}
```


## Event click

Use `onEventClick` to handle event interactions. The example below opens a modal with event
details when an event is clicked.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Modal, Stack, Text } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    payload: { description: 'Daily team sync', location: 'Room A' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: `${today} 10:00:00`,
    end: `${today} 12:00:00`,
    color: 'grape',
    payload: { description: 'Collaborative design session', location: 'Creative Space' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { description: 'Review pull requests', location: 'Zoom' },
  },
];

function Demo() {
  const [selected, setSelected] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <AgendaView
        rangeStart={dayjs().format('YYYY-MM-DD')}
        rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
        events={events}
        onEventClick={(event) => setSelected(event)}
      />

      <Modal
        opened={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              {dayjs(selected.start).format('MMM D, YYYY HH:mm')} –{' '}
              {dayjs(selected.end).format('HH:mm')}
            </Text>
            {selected.payload?.description && (
              <Text size="sm">{selected.payload.description}</Text>
            )}
            {selected.payload?.location && (
              <Text size="sm" c="dimmed">
                Location: {selected.payload.location}
              </Text>
            )}
          </Stack>
        )}
      </Modal>
    </>
  );
}
```


## Localization

Set `locale` to translate date headers and pass `labels` to override built-in strings like
"All day" and "No events".

```tsx
import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Reunión diaria',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 'workshop',
    title: 'Taller de diseño',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'grape',
  },
  {
    id: 'conference',
    title: 'Conferencia',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(4, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      locale="es"
      labels={{
        allDay: 'Todo el día',
        noEvents: 'Sin eventos',
      }}
    />
  );
}
```


## Static mode

Set `mode="static"` to disable all event interactions. In static mode, events are not clickable.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().startOf('month').format('YYYY-MM-DD')}
      rangeEnd={dayjs().endOf('month').format('YYYY-MM-DD')}
      events={events}
      mode="static"
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const today = dayjs().format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```



#### Styles API

AgendaView component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**AgendaView selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| agendaView | .mantine-AgendaView-agendaView | Root element |
| agendaViewHeader | .mantine-AgendaView-agendaViewHeader | Header container with date range and close button |
| agendaViewHeaderLabel | .mantine-AgendaView-agendaViewHeaderLabel | Date range label in the header |
| agendaViewBody | .mantine-AgendaView-agendaViewBody | Body container for date groups |
| agendaViewDateGroup | .mantine-AgendaView-agendaViewDateGroup | Date group container |
| agendaViewDateHeader | .mantine-AgendaView-agendaViewDateHeader | Date header text within a group |
| agendaViewEvent | .mantine-AgendaView-agendaViewEvent | Event item button |
| agendaViewEventBody | .mantine-AgendaView-agendaViewEventBody | Event body layout container |
| agendaViewEventColor | .mantine-AgendaView-agendaViewEventColor | Event color indicator |
| agendaViewEventTitle | .mantine-AgendaView-agendaViewEventTitle | Event title text |
| agendaViewEventTime | .mantine-AgendaView-agendaViewEventTime | Event time label |
| agendaViewNoEvents | .mantine-AgendaView-agendaViewNoEvents | No events message |

**AgendaView CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| agendaView | --agenda-view-radius | Controls border radius |
