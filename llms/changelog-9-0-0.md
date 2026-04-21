# Changelog900

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## Migration guide

This changelog covers breaking changes and new features in Mantine 9.0.
To migrate your application to Mantine 9.0, follow [8.x → 9.x migration guide](https://mantine.dev/llms/guides-8x-to-9x.md).

## Peer dependencies requirements updates

Starting from Mantine 9.0, the following dependencies are required:

* React 19.2+ for all `@mantine/*` packages
* Tiptap 3+ for `@mantine/tiptap` ([migration guide](https://mantine.dev/llms/guides-tiptap-3-migration.md))
* Recharts 3+ for `@mantine/charts` (no migration required)

## New @mantine/schedule package

New [`@mantine/schedule`](https://mantine.dev/llms/schedule-getting-started.md) package provides a complete set of
calendar scheduling components for React applications. It includes multiple view levels,
drag-and-drop event management, and extensive customization options.

### Schedule

[Schedule](https://mantine.dev/llms/schedule-schedule.md) is a unified container component that combines all views with built-in navigation and view switching. Drag events to reschedule them:

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


### DayView

[DayView](https://mantine.dev/llms/schedule-day-view.md) displays a single day with configurable time slots, all-day event section, current time indicator, and business hours highlighting. Drag events to reschedule them:

```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: 'violet',
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
```


### WeekView

[WeekView](https://mantine.dev/llms/schedule-week-view.md) shows a weekly calendar grid with time slots, week numbers, weekend day toggling, and multi-day event spanning. Drag events across days and time slots:

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
    start: `${tomorrow} 11:00:00`,
    end: `${tomorrow} 12:00:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Company Holiday',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 5,
    title: 'Release Day',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
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
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
```


### MonthView

[MonthView](https://mantine.dev/llms/schedule-month-view.md) displays a monthly calendar grid with event overflow handling, outside days display, and week numbers. Drag events to different days:

```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: `${today} 09:00:00`,
    end: `${today} 10:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
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

  return <MonthView date={new Date()} events={events} withEventsDragAndDrop onEventDrop={handleEventDrop} />;
}
```


### YearView

[YearView](https://mantine.dev/llms/schedule-year-view.md) provides a 12-month year overview organized by quarters with day-level event indicators:

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
      events={events}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisYear = dayjs().format('YYYY');

const events = [
  {
    id: 1,
    title: 'New Year',
    start: \\\`\\\${thisYear}-01-01 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-01-01\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Spring Event',
    start: \\\`\\\${thisYear}-03-15 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-03-15\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
];
```


### MobileMonthView

[MobileMonthView](https://mantine.dev/llms/schedule-mobile-month-view.md) is a mobile-optimized month view with event details panel for the selected day:

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


To get started, follow the [getting started guide](https://mantine.dev/llms/schedule-getting-started.md).

## Collapse horizontal orientation

[Collapse](https://mantine.dev/llms/core-collapse.md) component now supports horizontal orientation:

```tsx
import { Button, Collapse, Stack, Typography } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);

  return (
    <Stack h={240} align="flex-start">
      <Button onClick={handlers.toggle} w="fit-content">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <Collapse expanded={expanded} orientation="horizontal">
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md" w={200}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
      </Collapse>
    </Stack>
  );
}
```


## use-collapse and use-horizontal-collapse hooks

New `use-collapse` hook is the hook version of [Collapse](https://mantine.dev/llms/core-collapse.md) component.
It allows animation of height from `0` to `auto` and vice versa.

```tsx
import { Button, Typography } from '@mantine/core';
import { useCollapse, useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);
  const { getCollapseProps } = useCollapse({ expanded });

  return (
    <>
      <Button onClick={handlers.toggle} mb="md">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <div {...getCollapseProps()}>
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </div>
    </>
  );
}
```


`use-horizontal-collapse` works the same way as `use-collapse` but animates width instead of height:

```tsx
import { Button, Stack, Typography } from '@mantine/core';
import { useDisclosure, useHorizontalCollapse } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);
  const { getCollapseProps } = useHorizontalCollapse({ expanded });

  return (
    <Stack h={240}>
      <Button onClick={handlers.toggle} w="fit-content">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <div {...getCollapseProps({ style: { width: 200 } })}>
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md" w={200}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
      </div>
    </Stack>
  );
}
```


## use-floating-window hook

New [use-floating-window](https://mantine.dev/llms/hooks-use-floating-window.md) hook allows creating floating draggable
elements:

```tsx
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <Portal>
          <Paper
            w={280}
            p="md"
            withBorder
            pos="fixed"
            style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
          >
            <Group justify="space-between" mb="md">
              <Text>Usage demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">This is a floating window. You can drag it around.</Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
```


## FloatingWindow component

[FloatingWindow](https://mantine.dev/llms/core-floating-window.md) provides component API for [use-floating-window](https://mantine.dev/llms/hooks-use-floating-window.md) hook:

```tsx
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
        >
          <Group justify="space-between" mb="md">
            <Text>Usage demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">This is a floating window. You can drag it around.</Text>
        </FloatingWindow>
      )}
    </>
  );
}
```


## OverflowList component

New [OverflowList](https://mantine.dev/llms/core-overflow-list.md) component displays list of items and collapses the overflowing items into a single element:

```tsx
// OverflowListDemo.tsx
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}

// data.ts
export const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
```


## Marquee component

New [Marquee](https://mantine.dev/llms/core-marquee.md) component creates continuous scrolling animation for content:

```tsx
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee gap="lg">
      <MantineLogo width={80} type="full" color="blue" />
      <MantineLogo width={80} type="full" color="cyan" />
      <MantineLogo width={80} type="full" color="teal" />
      <MantineLogo width={80} type="full" color="green" />
      <MantineLogo width={80} type="full" color="lime" />
      <MantineLogo width={80} type="full" color="yellow" />
      <MantineLogo width={80} type="full" color="orange" />
      <MantineLogo width={80} type="full" color="red" />
    </Marquee>
  );
}
```


## Scroller component

New [Scroller](https://mantine.dev/llms/core-scroller.md) component displays horizontally scrollable content with navigation controls.
It supports native scrolling via trackpad, shift + mouse wheel, touch gestures, and mouse drag:

```tsx
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
```


## use-scroller hook

New [use-scroller](https://mantine.dev/llms/hooks-use-scroller.md) hook provides logic for creating custom scrollable containers with navigation controls:

```tsx
import { Box, Button, Group } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller();

  return (
    <Box>
      <Group mb="md">
        <Button
          onClick={scroller.scrollStart}
          disabled={!scroller.canScrollStart}
          variant="default"
          size="xs"
        >
          ← Scroll left
        </Button>
        <Button
          onClick={scroller.scrollEnd}
          disabled={!scroller.canScrollEnd}
          variant="default"
          size="xs"
        >
          Scroll right →
        </Button>
      </Group>

      <div
        ref={scroller.ref}
        {...scroller.dragHandlers}
        style={{
          overflow: 'auto',
          cursor: scroller.isDragging ? 'grabbing' : 'grab',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}
```


## BarsList component

New [BarsList](https://mantine.dev/llms/charts-bars-list.md) component displays a list of horizontal bars with names and values.
It supports custom colors, auto contrast, value formatting, and custom bar rendering:

```tsx
// Demo.tsx
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <BarsList data={data} />;
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Card horizontal orientation

[Card](https://mantine.dev/llms/core-card.md) component now supports horizontal orientation:

```tsx
import { Box, Card, Group, RingProgress, Text } from '@mantine/core';

const completed = 1887;
const total = 2334;
const stats = [
  { value: 447, label: 'Remaining' },
  { value: 76, label: 'In progress' },
];

function Demo() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card padding="sm" withBorder orientation="horizontal">
      <Card.Section inheritPadding px="xs" withBorder>
        <RingProgress
          roundCaps
          thickness={6}
          size={150}
          sections={[{ value: (completed / total) * 100, color: 'blue' }]}
          label={
            <div>
              <Text ta="center" fz="lg">
                {((completed / total) * 100).toFixed(0)}%
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Completed
              </Text>
            </div>
          }
        />
      </Card.Section>

      <Card.Section inheritPadding px="md">
        <Text fz="xl">Project tasks</Text>
        <Box mt="xs">
          <Text>1887</Text>
          <Text fz="xs" c="dimmed">
            Completed
          </Text>
        </Box>

        <Group mt="sm">{items}</Group>
      </Card.Section>
    </Card>
  );
}
```


## Checkbox.Group and Switch.Group maxSelectedValues

[Checkbox.Group](https://mantine.dev/llms/core-checkbox.md) and [Switch.Group](https://mantine.dev/llms/core-switch.md) now support `maxSelectedValues` prop to limit the number of selected values.
When the limit is reached, the remaining controls are disabled and cannot be selected.

```tsx
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group defaultValue={['react']} maxSelectedValues={2}>
      <Group>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
```


## Inputs loading state

All Mantine input components based on [Input](https://mantine.dev/llms/core-input.md) component now support `loading` prop.

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput placeholder="Your email" loading />;
}
```


## renderPill in MultiSelect and TagsInput

[MultiSelect](https://mantine.dev/llms/core-multi-select.md) and [TagsInput](https://mantine.dev/llms/core-tags-input.md) components now support `renderPill` prop to customize pill rendering:

```tsx
import { MultiSelect, Pill, Avatar } from '@mantine/core';

const users = [
  { value: 'Emily Johnson', label: 'Emily Johnson', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png' },
  { value: 'Ava Rodriguez', label: 'Ava Rodriguez', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png' },
  { value: 'Olivia Chen', label: 'Olivia Chen', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png' },
  { value: 'Ethan Barnes', label: 'Ethan Barnes', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png' },
  { value: 'Mason Taylor', label: 'Mason Taylor', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png' },
];

const usersMap = new Map(users.map((user) => [user.value.toString(), user]));

function Demo() {
  return (
    <MultiSelect
      data={users}
      label="Candidates"
      placeholder="Select candidates"
      defaultValue={['Emily Johnson', 'Ava Rodriguez']}
      renderPill={({ option, onRemove }) => {
        const user = usersMap.get(option?.value.toString());
        return (
          <Pill withRemoveButton onRemove={onRemove}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar src={user?.image} size={16} />
              {option?.label}
            </div>
          </Pill>
        );
      }}
    />
  );
}
```


## Clear section mode

All clearable input components now support `clearSectionMode` prop that determines how the clear button and `rightSection` are rendered:

* `'both'` (default) – render both the clear button and `rightSection`
* `'rightSection'` – render only the user-supplied `rightSection`, ignore clear button
* `'clear'` – render only the clear button, ignore `rightSection`

This prop is supported by [Select](https://mantine.dev/llms/core-select.md), [Autocomplete](https://mantine.dev/llms/core-autocomplete.md),
[MultiSelect](https://mantine.dev/llms/core-multi-select.md), [TagsInput](https://mantine.dev/llms/core-tags-input.md), [FileInput](https://mantine.dev/llms/core-file-input.md),
[DateInput](https://mantine.dev/llms/dates-date-input.md), [DatePickerInput](https://mantine.dev/llms/dates-date-picker-input.md),
[MonthPickerInput](https://mantine.dev/llms/dates-month-picker-input.md), [YearPickerInput](https://mantine.dev/llms/dates-year-picker-input.md),
[TimePicker](https://mantine.dev/llms/dates-time-picker.md), and [DateTimePicker](https://mantine.dev/llms/dates-date-time-picker.md).

```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DatePickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DatePickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DatePickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
```


## use-form async validation

[use-form](https://mantine.dev/llms/form-use-form.md) validation rules can now be async – return a `Promise` that resolves to an
error message or `null`. When all rules are synchronous, `form.validate()`, `form.validateField()` and
`form.isValid()` return their results directly (not wrapped in a `Promise`). When any rule is async,
these methods return promises instead. TypeScript infers the correct return type based on your
validation rules, so you get precise types without manual annotations.

The `form.validating` property is `true` while any async validation is in progress, and
`form.isValidating(path)` checks individual fields. The `validating` state is never set for
forms with only synchronous rules.

Each rule receives an `AbortSignal` as the fourth argument. The signal is aborted when a newer
validation supersedes the current one, which you can use to cancel in-flight HTTP requests.

```tsx
import { Button, Group, Loader, TextInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';

// Simulates an async API call to check if the username is available
function checkUsernameAvailability(username: string, signal?: AbortSignal): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const taken = ['admin', 'user', 'test', 'mantine'];
      resolve(taken.includes(username.toLowerCase()) ? 'Username is already taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '' },
    validate: {
      username: async (value, _values, _path, signal) => {
        if (value.trim().length < 3) {
          return 'Username must be at least 3 characters';
        }
        return checkUsernameAvailability(value, signal);
      },
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Username"
        placeholder="Pick a username"
        key={form.key('username')}
        disabled={form.submitting}
        rightSection={form.validating ? <Loader size={16} /> : null}
        {...form.getInputProps('username')}
      />

      <TextInput
        withAsterisk
        mt="md"
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        disabled={form.submitting}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
```


When using async validation with `validateInputOnChange`, set `validateDebounce` to avoid
firing an API call on every keystroke:

```tsx
import { Button, Group, Loader, TextInput } from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';

// Simulates an async API call to check if the username is available
function checkUsernameAvailability(username: string, signal?: AbortSignal): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const taken = ['admin', 'user', 'test', 'mantine'];
      resolve(taken.includes(username.toLowerCase()) ? 'Username is already taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '' },

    // Debounce async validation by 500ms – prevents firing
    // an API call on every keystroke
    validateDebounce: 500,
    validateInputOnChange: ['username'],

    validate: {
      username: async (value, _values, _path, signal) => {
        if (value.trim().length < 3) {
          return 'Username must be at least 3 characters';
        }
        return checkUsernameAvailability(value, signal);
      },
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Username"
        description="Try: admin, user, test, mantine"
        placeholder="Pick a username"
        key={form.key('username')}
        disabled={form.submitting}
        rightSection={form.isValidating('username') ? <Loader size={16} /> : null}
        {...form.getInputProps('username')}
      />

      <TextInput
        withAsterisk
        mt="md"
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        disabled={form.submitting}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
```


## use-form TransformedValues type argument

[use-form](https://mantine.dev/llms/form-use-form.md) now supports passing second type argument `TransformedValues` to define the type of
transformed values returned by `form.getTransformedValues` and `form.onSubmit`:

```tsx
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  locationId: string;
}

interface TransformedValues {
  name: string;
  locationId: number;
}

function Demo() {
  const form = useForm<FormValues, TransformedValues>({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      locationId: '2',
    },

    transformValues: (values) => ({
      ...values,
      locationId: Number(values.locationId),
    }),
  });
}
```

## Generic components

[SegmentedControl](https://mantine.dev/llms/core-segmented-control.md), [Select](https://mantine.dev/llms/core-select.md), [MultiSelect](https://mantine.dev/llms/core-multi-select.md),
[Chip.Group](https://mantine.dev/llms/core-chip.md), [Switch.Group](https://mantine.dev/llms/core-switch.md), [Checkbox.Group](https://mantine.dev/llms/core-checkbox.md) and [Radio.Group](https://mantine.dev/llms/core-radio.md)
now support generic value type. You can pass primitive values (numbers, strings, booleans, bigint)
as the type argument. The generic type is used for `value`, `defaultValue`, `onChange` and other props.

For example, generic type can now be used with [SegmentedControl](https://mantine.dev/llms/core-segmented-control.md)
to specify string union:

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <SegmentedControl<'orange' | 'grape' | 'apple'>
      data={[
        { value: 'orange', label: 'Orange' },
        { value: 'grape', label: 'Grape' },
        { value: 'apple', label: 'Apple' },
      ]}
    />
  );
}
```

## Combobox virtualization

[Combobox](https://mantine.dev/llms/core-combobox.md) component now supports [virtualization](https://mantine.dev/llms/core-combobox.md#virtualization)
with the `useVirtualizedCombobox` hook. The hook does not depend on any specific virtualization library.
The recommended option is [@tanstack/react-virtual](https://tanstack.com/virtual/latest).

Example of implementation with `useVirtualizedCombobox` and [@tanstack/react-virtual](https://tanstack.com/virtual/latest):

```tsx
import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Combobox, Input, InputBase, ScrollArea, useVirtualizedCombobox } from '@mantine/core';

const ITEM_HEIGHT = 36;

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: `value-${index}`,
    label: `Label ${index}`,
    id: `item-${index}`,
    disabled: false,
  }));

function Demo() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: largeData.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  });

  const combobox = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        setSelectedOptionIndex(activeOptionIndex);
        requestAnimationFrame(() => {
          virtualizer.scrollToIndex(activeOptionIndex, { align: 'auto' });
        });
      }
    },
    isOptionDisabled: (index) => largeData[index].disabled,
    totalOptionsCount: largeData.length,
    getOptionId: (index) => largeData[index].id,
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      }
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  function onOptionSubmit(index: number) {
    const option = largeData[index];
    setValue(option.value);
    setActiveOptionIndex(index);
    combobox.closeDropdown();
    combobox.resetSelectedOption();
  }

  return (
    <Combobox store={combobox} resetSelectionOnOptionHover={false} keepMounted>
      <Combobox.Target>
        <InputBase component="button" onClick={() => combobox.toggleDropdown()} pointer>
          {value || <Input.Placeholder>Pick a value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize
            mah={220}
            type="scroll"
            scrollbarSize={4}
            viewportRef={setScrollParent}
            onMouseDown={(event) => event.preventDefault()}
          >
            <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
              {virtualizer.getVirtualItems().map((virtualItem) => {
                const item = largeData[virtualItem.index];
                return (
                  <Combobox.Option
                    value={item.value}
                    key={item.value}
                    active={virtualItem.index === activeOptionIndex}
                    selected={virtualItem.index === selectedOptionIndex}
                    onClick={() => onOptionSubmit(virtualItem.index)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: virtualItem.size,
                      transform: `translateY(${virtualItem.start}px)`,
                    }}
                  >
                    {item.label}
                  </Combobox.Option>
                );
              })}
            </div>
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


You can find more virtualization examples on the [Combobox examples page](https://mantine.dev/combobox?e=VirtualizedTanstack).

## Highlight per-term colors

[Highlight](https://mantine.dev/llms/core-highlight.md) component now supports custom colors for individual highlight terms.
You can provide an array of objects with `text` and `color` properties to assign different colors
to different highlighted terms:

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      highlight={[
        { text: 'error', color: 'red' },
        { text: 'warning', color: 'yellow' },
        { text: 'success', color: 'green' },
      ]}
    >
      Error: Invalid input. Warning: Check this field. Success: All tests passed.
    </Highlight>
  );
}
```


## Highlight whole-word matching

[Highlight](https://mantine.dev/llms/core-highlight.md) component now supports `wholeWord` prop to match only complete words.
When enabled, 'the' will not match 'there' or 'theme':

```tsx
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With whole word matching (wholeWord={'{'}true{'}'})
        </Text>
        <Highlight highlight="the" wholeWord>
          The theme is there
        </Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          Without whole word matching (default)
        </Text>
        <Highlight highlight="the">The theme is there</Highlight>
      </div>
    </Stack>
  );
}
```


## Pagination and use-pagination startValue

[Pagination](https://mantine.dev/llms/core-pagination.md) component and [use-pagination](https://mantine.dev/llms/hooks-use-pagination.md) hook now support `startValue` prop
to define the starting page number. For example, with `startValue={5}` and `total={15}`,
the pagination range will be from 5 to 15:

```tsx
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">Pages 5–15 (startValue=5, total=15)</Text>
      <Pagination total={15} startValue={5} defaultValue={5} />
    </>
  );
}
```


## Grid improvements

[Grid](https://mantine.dev/llms/core-grid.md) component no longer uses negative margins for spacing between columns.
Instead, it now uses native CSS `gap` property, which means you no longer need to use
`overflow="hidden"` to prevent content overflow caused by negative margins.

## Slider vertical orientation

[Slider](https://mantine.dev/llms/core-slider.md) and [RangeSlider](https://mantine.dev/llms/core-slider.md) components now support vertical orientation:

```tsx
import { RangeSlider, Slider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <div style={{ display: 'flex', gap: 40 }}>
      <Slider orientation="vertical" defaultValue={45} marks={marks} />
      <RangeSlider orientation="vertical" defaultValue={[25, 65]} marks={marks} />
    </div>
  );
}
```


## SimpleGrid improvements

[SimpleGrid](https://mantine.dev/llms/core-simple-grid.md) component now supports `minColWidth` prop to use CSS Grid `auto-fill`/`auto-fit`
to automatically adjust the number of columns based on available space and minimum column width.
When `minColWidth` is set, the `cols` prop is ignored. Use `autoFlow` prop to switch between
`auto-fill` (default) and `auto-fit` behavior.

```tsx
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid minColWidth="200px">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
```


[SimpleGrid](https://mantine.dev/llms/core-simple-grid.md) also now supports `autoRows` prop to control the size of
implicitly created grid rows:

```tsx
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={3} autoRows="minmax(100px, auto)">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
```


## Calendar fullWidth prop

[Calendar](https://mantine.dev/llms/dates-calendar.md), [DatePicker](https://mantine.dev/llms/dates-date-picker.md), [MonthPicker](https://mantine.dev/llms/dates-month-picker.md) and [YearPicker](https://mantine.dev/llms/dates-year-picker.md)
components now support `fullWidth` prop to make the calendar stretch to fill 100% of its parent container width:

```tsx
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar fullWidth />;
}
```


## Namespace types exports

Many Mantine components and hooks now provide namespace exports for related types.
For example, [use-disclosure](https://mantine.dev/llms/hooks-use-disclosure.md) hook types can now be accessed like this:

```tsx
import { useDisclosure } from '@mantine/hooks';

const options: useDisclosure.Options = {
  onOpen: () => console.log('open'),
  onClose: () => console.log('close'),
};

function Demo() {
  const [opened, handlers] = useDisclosure(options);
}
```

Example of using namespace types with [Button](https://mantine.dev/llms/core-button.md) props type:

```tsx
import { Button } from '@mantine/core';

const buttonProps: Button.Props = {
    variant: 'filled',
    size: 'md',
    disabled: false,
  };

function Demo() {
  return <Button {...buttonProps}>Click me</Button>;
}
```

## Font weights

New `fontWeights` property was added to the [theme object](https://mantine.dev/llms/theming-theme-object.md).
It allows you to control `font-weight` values used across all components.
The default values are:

* `regular` – `400`
* `medium` – `600`
* `bold` – `700`

Each value is mapped to a CSS variable: `--mantine-font-weight-regular`, `--mantine-font-weight-medium`, `--mantine-font-weight-bold`.
All components that previously used hardcoded `font-weight` values now use these CSS variables.

For example, to revert the medium font weight from `600` back to `500` (the default in Mantine 8):

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontWeights: {
    medium: '500',
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## @mantine/mcp-server package

Mantine now includes `@mantine/mcp-server` package that exposes Mantine
documentation over [Model Context Protocol](https://modelcontextprotocol.io/).
It allows AI tools to query Mantine docs and props data through MCP tools instead of raw web scraping.

The server uses static data generated from Mantine documentation and serves:

* item discovery with `list_items`
* full documentation page retrieval with `get_item_doc`
* normalized props metadata with `get_item_props`
* keyword-based lookup with `search_docs`

This setup is useful in agent workflows where tools can call MCP functions directly to
retrieve structured data and reduce prompt size.

Basic server configuration:

```json
{
  "mcpServers": {
    "mantine": {
      "command": "npx",
      "args": ["-y", "@mantine/mcp-server"],
      "env": {
        "MANTINE_MCP_DATA_URL": "https://mantine.dev/mcp"
      }
    }
  }
}
```

For setup details, supported tools, and client-specific instructions, see
[Mantine with LLMs](https://mantine.dev/llms/guides-llms.md).

## Mantine skills for Claude Code and Codex

Mantine skills for AI coding agents are documented in the
[Mantine with LLMs](https://mantine.dev/llms/guides-llms.md) guide.

The guide includes:

* available skills in [`mantinedev/skills`](https://github.com/mantinedev/skills)
* installation commands for each skill
* separate usage instructions for Claude Code and Codex

## New use-form validators

New `isUrl` and `isOneOf` [validators](https://mantine.dev/llms/form-validators.md) were added to `@mantine/form` package:

* `isUrl` – validates that the value is a valid URL. Supports custom protocols and localhost option.
* `isOneOf` – validates that the value is included in the given list of allowed values.

```tsx
import { isOneOf, isUrl, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { website: '', role: '' },
  validate: {
    website: isUrl('Invalid URL'),
    role: isOneOf(['admin', 'user'], 'Invalid role'),
  },
});
```

## Standard Schema support in use-form

`@mantine/form` now has built-in support for [Standard Schema](https://standardschema.dev/),
a community specification implemented by Zod v4, Valibot, ArkType, and other schema libraries.
Use `schemaResolver` to validate forms with any compliant library without installing
a separate resolver package:

```tsx
import { z } from 'zod/v4';
import { useForm, schemaResolver } from '@mantine/form';

const schema = z.object({
  name: z.string().min(2, { error: 'Name should have at least 2 letters' }),
  email: z.email({ error: 'Invalid email' }),
  age: z.number().min(18, { error: 'You must be at least 18 to create an account' }),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: '', email: '', age: 16 },
  validate: schemaResolver(schema, { sync: true }),
});
```

Pass `{ sync: true }` when your schema is synchronous to get synchronous return types
for `form.validate()`, `form.validateField()`, and `form.isValid()`.

## AppShell static mode

[AppShell](https://mantine.dev/llms/core-app-shell.md) component now supports `mode="static"` which renders
all AppShell elements as part of the normal document flow using CSS Grid instead of
fixed positioning. Static mode supports `layout="alt"` to place navbar and aside
at full height with header and footer adjusted between them.
See [AppShell examples](https://mantine.dev/app-shell/?e=BasicAppShell) for more details.

## ScrollArea startScrollPosition

`ScrollArea` component now supports `startScrollPosition` prop to set the initial scroll
position when the component mounts:

```tsx
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={200} startScrollPosition={{ y: 250 }}>
      {/* ... content */}
    </ScrollArea>
  );
}
```


## useEffectEvent migration in hooks

Five hooks — `usePageLeave`, `useWindowEvent`, `useHotkeys`, `useClickOutside`, and `useCollapse` —
have been updated to use React 19's stable `useEffectEvent`. Previously these hooks captured stale
closures or caused unnecessary event listener re-registrations when non-memoized callbacks were
passed. With `useEffectEvent`, each hook registers a single stable listener that always calls the
latest version of the provided callback, so wrapping callbacks in `useCallback` or `useMemo` is no
longer required.

## React 19 Activity for keepMounted

[Transition](https://mantine.dev/llms/core-transition.md), [Collapse](https://mantine.dev/llms/core-collapse.md), [Tabs.Panel](https://mantine.dev/llms/core-tabs.md),
[Stepper](https://mantine.dev/llms/core-stepper.md), and [Tree](https://mantine.dev/llms/core-tree.md) now use React 19's
[Activity](https://react.dev/reference/react/Activity) component when `keepMounted` is set.
`Activity` preserves the state of hidden subtrees — form inputs, scroll positions, and any other
component state survive while the content is not visible. `Stepper` and `Tree` gain a new
`keepMounted` prop; all other components already had it.

```tsx
import { useState } from 'react';
import { Stepper, TextInput } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(0);

  // TextInput values are preserved when navigating between steps
  return (
    <Stepper active={active} onStepClick={setActive} keepMounted>
      <Stepper.Step label="Step 1">
        <TextInput label="Value survives navigation" />
      </Stepper.Step>
      <Stepper.Step label="Step 2">
        <TextInput label="Value survives navigation" />
      </Stepper.Step>
    </Stepper>
  );
}
```

## Documentation updates

* New [Custom components](https://mantine.dev/llms/guides-custom-components.md) guide explaining how to create custom components with Mantine's styling system
* New [Controlled vs Uncontrolled](https://mantine.dev/llms/guides-controlled-vs-uncontrolled.md) guide explaining differences between controlled and uncontrolled components
* [HueSlider](https://mantine.dev/llms/core-hue-slider.md) and [AlphaSlider](https://mantine.dev/llms/core-alpha-slider.md) components now have their own documentation pages
* Uncontrolled documentation and usage with `FormData` section was added to all inputs components
* [JsonInput](https://mantine.dev/llms/core-json-input.md) documentation now includes custom serialization example with `superjson` library
* [Pagination](https://mantine.dev/llms/core-pagination.md) documentation now includes URL synchronization examples for Next.js, react-router-dom and nuqs
* [use-form](https://mantine.dev/llms/form-use-form.md) documentation now includes separate examples with [all Mantine inputs](https://mantine.dev/llms/form-all-inputs.md)

## Other changes

* [Notifications](https://mantine.dev/llms/x-notifications.md) component now pauses auto close timer of all visible notifications when any notification is hovered (new default). Use `pauseResetOnHover="notification"` to keep the previous behavior of pausing only the hovered notification.
* [useHeadroom](https://mantine.dev/llms/hooks-use-headroom.md) hook now returns `{ pinned: boolean; scrollProgress: number }` object instead of a plain `boolean`. `scrollProgress` is a value between `0` (fully hidden) and `1` (fully visible) that can be used for scroll-linked reveal animations. A new `scrollDistance` option controls how many pixels of scrolling are required to fully reveal or hide the element (default: `100`).
* New [useScrollDirection](https://mantine.dev/llms/hooks-use-scroll-direction.md) hook detects whether the user is currently scrolling up or down. It returns `'up'`, `'down'`, or `'unknown'`, handles resize events to avoid false direction changes, and always uses the latest state without stale closure issues.
* Default `theme.defaultRadius` was changed from `sm` (`4px`) to `md` (`8px`)
* `light` variant in all components now uses different colors values without transparency to improve contrast
* `mod` prop now converts camelCase keys to kebab-case for data attributes in all components
* `@mantine/form` package now includes built-in [Standard Schema](https://mantine.dev/llms/form-schema-validation.md) support via `schemaResolver`
* `@mantine/form` `getInputProps` now supports `type: 'radio'` for individual radio inputs – returns `checked`/`defaultChecked` and passes through the radio option `value`
* `@mantine/form` now supports async validation rules. `form.validate()`, `form.validateField()` and `form.isValid()` return results directly when all rules are synchronous and return promises only when async rules are present. New `form.validating`, `form.isValidating(path)`, `validateDebounce` and `resolveValidationError` options were added.
* `createPolymorphicComponent` function was renamed to shorter `polymorphic` for convenience
* Mantine components now use theme-controlled `fontWeights` values. The default `medium` font weight was changed from `500` to `600` for better readability.
* All Mantine components now support logical margin and padding style props:
  * `mis` - margin-inline-start
  * `mie` - margin-inline-end
  * `pis` - padding-inline-start
  * `pie` - padding-inline-end
* [Tree](https://mantine.dev/llms/core-tree.md) component now supports controlled state via `expandedState`, `selectedState` and `checkedState` props.
* [Tree](https://mantine.dev/llms/core-tree.md) component no longer defines `data-hovered` attribute for hover state, you need to apply hover styles with `&:hover` instead. This change improves rendering performance by [resolving this issue](https://github.com/mantinedev/mantine/issues/7266).
* [Collapse](https://mantine.dev/llms/core-collapse.md) component now uses `expanded` prop instead of `in`
* [Collapse](https://mantine.dev/llms/core-collapse.md), [NavLink](https://mantine.dev/llms/core-nav-link.md) and [Accordion.Panel](https://mantine.dev/llms/core-accordion.md) now support `keepMounted={false}` prop to unmount collapsed content
* [Select](https://mantine.dev/llms/core-select.md) and [MultiSelect](https://mantine.dev/llms/core-multi-select.md) components now support primitive value types (numbers, booleans, strings) for data and value
* [MultiSelect](https://mantine.dev/llms/core-multi-select.md) now supports `onMaxValues` prop, which is called when the user attempts to select more values than `maxValues`
* [TagsInput](https://mantine.dev/llms/core-tags-input.md) component now supports `onMaxTags` prop, which is called when the user attempts to add more tags than `maxTags`
* [Accordion](https://mantine.dev/llms/core-accordion.md) component now supports `ref` prop
* [Text](https://mantine.dev/llms/core-text.md) and [Anchor](https://mantine.dev/llms/core-anchor.md) components no longer accept `color` prop, use `c` style prop instead
* [PasswordInput](https://mantine.dev/llms/core-password-input.md) component visibility toggle icon was updated
* [Popover](https://mantine.dev/llms/core-popover.md) and [Tooltip](https://mantine.dev/llms/core-tooltip.md) components no longer accept `positionDependencies` prop, it is no longer required
* [TypographyStylesProvider](https://mantine.dev/llms/core-typography.md) component was renamed to [Typography](https://mantine.dev/llms/core-typography.md)
* [Checkbox](https://mantine.dev/llms/core-checkbox.md) component now supports `readOnly` and `withErrorStyles` props
* [Spoiler](https://mantine.dev/llms/core-spoiler.md) component:
  * `initialState` prop was renamed to `defaultExpanded` for consistency with other components
  * New `showAriaLabel` and `hideAriaLabel` props allow customizing ARIA labels
* [Checkbox.Group](https://mantine.dev/llms/core-checkbox.md#checkboxgroup-with-formdata) and [Switch.Group](https://mantine.dev/llms/core-switch.md#switchgroup-with-formdata) can now be used in uncontrolled forms and can be accessed through `FormData`
* [ColorPicker](https://mantine.dev/llms/core-color-picker.md) component now supports `name` and `hiddenInputProps` props to include color value in uncontrolled form submissions
* [Dialog](https://mantine.dev/llms/core-dialog.md) now enables `withBorder` by default
* [Pagination](https://mantine.dev/llms/core-pagination.md) component now supports `input-` prefix for `size` prop to match input and button sizes
* [FloatingIndicator](https://mantine.dev/llms/core-floating-indicator.md) component now supports `onTransitionStart` and `onTransitionEnd` callbacks
* [LoadingOverlay](https://mantine.dev/llms/core-loading-overlay.md) component now supports `onEnter`, `onEntered`, `onExit` and `onExited` callbacks
* [Grid](https://mantine.dev/llms/core-grid.md) component `gutter` prop was renamed to `gap` for consistency with other layout components. New `rowGap` and `columnGap` props allow separate control of row and column spacing. [Grid.Col](https://mantine.dev/llms/core-grid.md) now supports `align` prop for per-column vertical alignment.
* [Indicator](https://mantine.dev/llms/core-indicator.md) component now supports:
  * `maxValue` prop to display `{maxValue}+` when the label exceeds the maximum value
  * `showZero` prop (default `true`) to control visibility of indicator with label `0`
  * `offset` prop object with `x` and `y` properties for separate horizontal and vertical offsets
* [NumberInput](https://mantine.dev/llms/core-number-input.md) component now supports:
  * `onMinReached` and `onMaxReached` callbacks
  * `selectAllOnFocus` prop to select all text when input is focused
  * `bigint` values for `value`, `defaultValue`, `onChange`, `min`, `max`, `step` and `startValue` (with `string` fallback for intermediate states)
* [RingProgress](https://mantine.dev/llms/core-ring-progress.md) component now supports
  * `sectionGap` prop to add visual separation between sections in degrees
  * `startAngle` prop to control where the progress starts (0 = right, 90 = bottom, 180 = left, 270 = top)
* [List](https://mantine.dev/llms/core-list.md) component now supports HTML5 list attributes: `start`, `reversed`, and `value` props for enhanced semantic HTML support
* [JsonInput](https://mantine.dev/llms/core-json-input.md) component now supports `indentSpaces` prop to control the number of spaces used for formatting JSON
* [Rating](https://mantine.dev/llms/core-rating.md) component now supports `allowClear` prop to reset rating to 0 by clicking the same value
* [ScrollArea](https://mantine.dev/llms/core-scroll-area.md) component now supports `onLeftReached` and `onRightReached` callbacks for horizontal scroll boundaries
* [Slider](https://mantine.dev/llms/core-slider.md) and [RangeSlider](https://mantine.dev/llms/core-range-slider.md) now support hidden marks with `hidden: true` property. Hidden marks allow snapping to specific values without displaying them visually, useful with `restrictToMarks` prop.
* [use-tree](https://mantine.dev/llms/core-tree.md) no longer supports callback state setters for `setExpandedState`, `setSelectedState`, and `setCheckedState` functions
* [use-fullscreen](https://mantine.dev/llms/hooks-use-fullscreen.md) hook was split into two hooks: `useFullscreenElement` and `useFullscreenDocument`
* [use-media-query](https://mantine.dev/llms/hooks-use-media-query.md) hook no longer includes fallback for old Safari versions (iOS 13 and earlier, released before 2019)
* [use-resize-observer](https://mantine.dev/llms/hooks-use-resize-observer.md) now uses the new callback ref approach. The new approach makes hook usable with dynamic node changes. This change might be breaking, validate hook usage in your application.
* [use-mouse](https://mantine.dev/llms/hooks-use-mouse.md) hook now uses the new callback ref approach to resolve the issue with stale refs. The previous hook functionality was split into two hooks: `useMouse` (for ref) and `useMousePosition` (for document).
* [use-mutation-observer](https://mantine.dev/llms/hooks-use-mutation-observer.md) hook now uses the new callback ref approach. The new approach makes hook usable with dynamic node changes. Additionally, a new `useMutationObserverTarget` hook was added for observing external target elements.
* [use-disclosure](https://mantine.dev/llms/hooks-use-disclosure.md) hook now supports new `set` handler
* [use-floating-indicator](https://mantine.dev/hooks/use-floating-indicator) hook now supports `onTransitionStart` and `onTransitionEnd` callbacks
* `@mantine/hooks` types were renamed for consistency:
  * `UseScrollSpyReturnType` → `UseScrollSpyReturnValue`
  * `StateHistory` → `UseStateHistoryValue`
  * `OS` → `UseOSReturnValue`
