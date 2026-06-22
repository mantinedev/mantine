# Changelog940

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## ComboboxPopover component

New [ComboboxPopover](https://mantine.dev/llms/core-combobox-popover.md) component allows adding a combobox dropdown
with selectable options to any button element. Unlike `Select` and `MultiSelect`, it does not
render an input – you provide your own target element via `ComboboxPopover.Target`. Supports
single and multiple selection modes with the same `data` format as `Select`.

```tsx
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
```


## DataList component

New [DataList](https://mantine.dev/llms/core-data-list.md) component displays label-value pairs as a semantic description
list using `dl`, `dt`, and `dd` HTML elements. Supports vertical and horizontal orientations,
dividers between items, and all standard Mantine features like Styles API and size prop.

```tsx
import { DataList } from '@mantine/core';

const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
];

function Demo() {
  return (
    <DataList size="md" orientation="vertical" withDivider={false}>
      {data.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList>
  );
}
```


## EmptyState component

New [EmptyState](https://mantine.dev/llms/core-empty-state.md) component displays a placeholder for "no data" situations:
empty search results, empty tables and lists, first-run states or error illustrations with an
optional call to action. It can be used with `icon`, `title` and `description` shorthand props
or with `EmptyState.Indicator`, `EmptyState.Title`, `EmptyState.Description` and
`EmptyState.Actions` compound components for full control.

```tsx
import { Button, EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState>
      <EmptyState.Indicator>
        <MagnifyingGlassIcon />
      </EmptyState.Indicator>
      <EmptyState.Title>No results found</EmptyState.Title>
      <EmptyState.Description>
        We couldn't find anything matching your search. Try adjusting your filters or searching with
        different keywords to see more results.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
        <Button variant="default">Create new</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
```


## Menubar component

New [Menubar](https://mantine.dev/llms/core-menubar.md) component adds a desktop-application style menu bar: a horizontal row
of top-level menu triggers (File, Edit, View, …) where each trigger opens a dropdown. Arrow keys
move between the top-level menus, and once one menu is opened, moving to a sibling opens it
immediately. `Menubar` is built on top of `Menu` and follows the WAI-ARIA menubar pattern.

```tsx
import { Menu, Menubar, Text } from '@mantine/core';

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘N</Text>}>New file</Menu.Item>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘⇧N</Text>}>New window</Menu.Item>
          <Menu.Sub>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Open recent</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Item>project-alpha</Menu.Item>
              <Menu.Item>project-beta</Menu.Item>
              <Menu.Item>project-gamma</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Divider />
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘S</Text>}>Save</Menu.Item>
          <Menu.Item>Save as…</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘Z</Text>}>Undo</Menu.Item>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘⇧Z</Text>}>Redo</Menu.Item>
          <Menu.Divider />
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Help</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Documentation</Menu.Item>
          <Menu.Item>Keyboard shortcuts</Menu.Item>
          <Menu.Item>About</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
```


## ResourcesDayView component

New [ResourcesDayView](https://mantine.dev/llms/schedule-resources-day-view.md) component displays resources as rows and
time slots as columns. Each row represents a resource (conference room, person, equipment) and
shows events assigned to that resource. Supports drag and drop across resources, business hours
highlighting, and slot drag select.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}

// data.ts
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
    start: \`\${today} 09:30:00\`,
    end: \`\${today} 10:30:00\`,
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
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
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
];
```


## ResourcesWeekView component

New [ResourcesWeekView](https://mantine.dev/llms/schedule-resources-week-view.md) component displays resources as rows
and a full week of time slots as columns with a two-level header showing day names and time
labels. Supports drag and drop, slot selection, business hours, and current time indicator.

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


## ResourcesMonthView component

New [ResourcesMonthView](https://mantine.dev/llms/schedule-resources-month-view.md) component displays resources as rows
and days of the month as columns. Events are shown as colored indicators within each
resource-day cell for easy visualization of resource utilization across the month.

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


## ResourcesSchedule component

New [ResourcesSchedule](https://mantine.dev/llms/schedule-resources-schedule.md) wrapper component combines `ResourcesDayView`,
`ResourcesWeekView` and `ResourcesMonthView` into a single component with view switching, similar
to how `Schedule` combines day, week, month and year views.

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


## AgendaView component

New [AgendaView](https://mantine.dev/llms/schedule-agenda-view.md) component renders a vertical list of events for a specified
time period. Events are grouped by date in chronological order.

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
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: `${startOfMonth} 09:30:00`,
    end: `${startOfMonth} 10:00:00`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;COUNT=30',
    },
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


## withAgenda prop for DayView, WeekView, MonthView and Schedule

`DayView`, `WeekView`, `MonthView` and `Schedule` components now support `withAgenda` prop.
When enabled, an "Agenda" button is displayed in the header. Clicking it opens an `AgendaView`
for the currently visible date range.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

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
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: `${startOfMonth} 09:30:00`,
    end: `${startOfMonth} 10:00:00`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;COUNT=30',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: `${startOfMonth} 16:00:00`,
    end: `${startOfMonth} 17:00:00`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <MonthView
      date={date}
      onDateChange={setDate}
      events={events}
      withAgenda
    />
  );
}
```


## MonthView hide weekend days

[MonthView](https://mantine.dev/llms/schedule-month-view.md) now supports `withWeekendDays` prop. Set it to `false`
to hide weekend days: the grid shrinks to the remaining columns and events that span hidden
days are clipped to the visible days. The days that are considered weekend are controlled by
the `weekendDays` prop (or `DatesProvider`, `[0, 6]` by default).

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekendDays={false} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
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


## DayView and WeekView sub-hour grid lines

[DayView](https://mantine.dev/llms/schedule-day-view.md) and [WeekView](https://mantine.dev/llms/schedule-week-view.md) now support `withSubHourGridLines`
prop. When `intervalMinutes` is smaller than `60`, set `withSubHourGridLines={false}` to display only
one grid line per hour while keeping the smaller interval for creating and resizing events. This is
useful to achieve a Google Calendar like layout: events snap to 15 or 30 minutes increments, but the
grid stays clean with hourly lines.

```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
    start: `${tomorrow} 11:15:00`,
    end: `${tomorrow} 12:00:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: `${today} 14:00:00`,
    end: `${today} 14:45:00`,
    color: 'violet',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  // Events snap to 15 minutes increments, but only one grid line per hour is displayed
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={15}
      withSubHourGridLines
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
```


## Input success state

All inputs based on `Input` and `Input.Wrapper` now support a `success` prop. When set, it changes the
input border color to green (`--mantine-color-success`). You can also pass a React node to display
a success message below the input. If both `error` and `success` props are set, `error` takes precedence.

New `--mantine-color-success` CSS variable has been added (resolves to `teal-6` in light mode and `teal-8` in dark mode).

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput placeholder="Success as boolean" label="Success as boolean" success />
      <TextInput
        mt="md"
        placeholder="Success as react node"
        label="Success as react node"
        success="Username is available"
      />
    </>
  );
}
```


## Splitter CSS units

[Splitter.Pane](https://mantine.dev/llms/core-splitter.md) `defaultSize`, `min` and `max` props now accept CSS units in
addition to plain numbers. A plain `number` or `%` string is a flexible size that shares the
leftover space, while a `px` or `rem` string is a fixed size that keeps its pixel size when the
container is resized. This makes it possible to mix a fixed-width sidebar with a fluid content pane:

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={200}>
      <Splitter.Pane defaultSize="240px" min="160px" max="50%" bg="blue">
        Fixed 240px sidebar
      </Splitter.Pane>
      <Splitter.Pane defaultSize={100} bg="teal">
        Flexible content
      </Splitter.Pane>
    </Splitter>
  );
}
```


## Notifications priority

Notifications now support a `priority` property. When the number of active notifications exceeds
the `limit`, notifications with a higher `priority` take the visible slots and lower priority ones
are pushed into the queue. Notifications with equal priority keep insertion order (FIFO), so the
default behavior is unchanged (`priority` defaults to `0`).

```tsx
import { Button, Group } from '@mantine/core';
import { createNotificationsStore, notifications, Notifications } from '@mantine/notifications';

// Dedicated store with limit={1} so the priority behavior is easy to see
const store = createNotificationsStore();

function Demo() {
  return (
    <>
      <Notifications store={store} limit={1} position="top-center" />

      <Group justify="center">
        <Button
          color="gray"
          onClick={() =>
            notifications.show(
              {
                title: 'Low priority',
                message: 'I am pushed to the queue when an urgent notification arrives',
                autoClose: false,
                priority: 0,
              },
              store
            )
          }
        >
          Show low priority
        </Button>

        <Button
          color="red"
          onClick={() =>
            notifications.show(
              {
                title: 'High priority',
                message: 'I take the visible slot even when the limit is reached',
                color: 'red',
                autoClose: false,
                priority: 10,
              },
              store
            )
          }
        >
          Show high priority
        </Button>
      </Group>
    </>
  );
}
```


## Legend support for PieChart, DonutChart and FunnelChart

[PieChart](https://mantine.dev/llms/charts-pie-chart.md), [DonutChart](https://mantine.dev/llms/charts-donut-chart.md) and [FunnelChart](https://mantine.dev/llms/charts-funnel-chart.md)
now support the `withLegend` prop. When enabled, a legend with the name and color of each segment
is displayed. Hovering over a legend item highlights the corresponding segment. Use the `legendProps`
prop to pass props down to the underlying recharts `Legend` component.

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withLegend />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## autoContrast support for virtual colors

[Virtual colors](https://mantine.dev/llms/theming-colors.md#virtual-colors) now support [autoContrast](https://mantine.dev/llms/theming-theme-object.md#autocontrast).
Previously, `filled` components with a virtual color always used white text because the underlying color
could not be resolved on the JavaScript side. The contrast color is now calculated separately for each
color scheme based on the resolved background color, so text stays readable when the virtual color resolves
to a light color in one scheme and a dark color in another. Switch between light and dark color schemes
(`Ctrl + J`) to see the text color adjust:

```tsx
// App.tsx
import { Button, colorsTuple, createTheme, MantineProvider, virtualColor } from '@mantine/core';
import { Demo } from './Demo';

const theme = createTheme({
  colors: {
    white: colorsTuple('#FFFFFF'),
    black: colorsTuple('#000000'),
    adaptive: virtualColor({
      name: 'adaptive',
      dark: 'white',
      light: 'black',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Demo />
    </MantineProvider>
  );
}

// Demo.tsx
import { Button } from '@mantine/core';

export function Demo() {
  return (
    <Button color="adaptive" autoContrast>
      Button
    </Button>
  );
}
```


## Other changes

* [Splitter](https://mantine.dev/llms/core-splitter.md) now supports `resetOnDoubleClick` prop. When enabled, double-clicking a resize handle restores the adjacent panes to their default ratio.
* [TimePicker](https://mantine.dev/llms/dates-time-picker.md) now supports `closeDropdownOnPresetSelect` prop. When set, the dropdown is closed once a value is selected from the presets list.
* [useLongPress](https://mantine.dev/llms/hooks-use-long-press.md) hook now handles `onTouchCancel` events: the returned handlers include an `onTouchCancel` callback so that a long press is correctly canceled when the touch is interrupted by the system (incoming call, browser gesture, etc.).
