# Changelog950

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## Migration to oxc

Mantine has migrated its linting and formatting toolchain from ESLint and Prettier
to [oxc](https://oxc.rs) – [oxlint](https://www.npmjs.com/package/oxlint) is now used
as the linter and [oxfmt](https://www.npmjs.com/package/oxfmt) as the formatter. Both
tools are written in Rust and are significantly faster than their predecessors, which
makes linting and formatting the entire codebase almost instant.

The shared configuration is available as a new
[oxc-config-mantine](https://mantine.dev/llms/oxc-config-mantine.md) package (a replacement for the previous
`eslint-config-mantine`). You can use it in your own projects to follow the same
code style and conventions as Mantine.

## Native level select in date pickers

[DatePicker](https://mantine.dev/llms/dates-date-picker.md) and all other date picker components ([DatePickerInput](https://mantine.dev/llms/dates-date-picker-input.md),
[MonthPicker](https://mantine.dev/llms/dates-month-picker.md), [YearPicker](https://mantine.dev/llms/dates-year-picker.md), [DateTimePicker](https://mantine.dev/llms/dates-date-time-picker.md), etc.)
now support the `withNativeLevelSelect` prop. When enabled, it replaces the calendar header level button
with native `<select>` elements, making it easy to quickly navigate to a specific month and year.

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withNativeLevelSelect yearsSelectRange={[2020, 2035]} />;
}
```


## Timeline opposite and alternate content

[Timeline](https://mantine.dev/llms/core-timeline.md) `Timeline.Item` component now supports the `opposite` prop that allows
rendering content on the opposite side of the timeline. When any item has the `opposite` prop,
the timeline switches to a centered layout with content on both sides of the line.

```tsx
import { Timeline, Text } from '@mantine/core';
import { GitBranchIcon, GitCommitIcon, GitPullRequestIcon, ChatCircleDotsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<GitBranchIcon size={12} />}
        title="New branch"
        opposite={
          <Text size="sm" c="dimmed">
            2 hours ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<GitCommitIcon size={12} />}
        title="Commits"
        opposite={
          <Text size="sm" c="dimmed">
            52 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to <Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={<GitPullRequestIcon size={12} />}
        lineVariant="dashed"
        opposite={
          <Text size="sm" c="dimmed">
            34 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request <Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<ChatCircleDotsIcon size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
      </Timeline.Item>
    </Timeline>
  );
}
```


Set the `alternate` prop on individual `Timeline.Item` components to switch
the position of content and opposite:

```tsx
import { Timeline, Text } from '@mantine/core';
import { GitBranchIcon, GitCommitIcon, GitPullRequestIcon, ChatCircleDotsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<GitBranchIcon size={12} />}
        title="New branch"
        opposite={
          <Text size="sm" c="dimmed">
            2 hours ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<GitCommitIcon size={12} />}
        title="Commits"
        opposite={
          <Text size="sm" c="dimmed">
            52 minutes ago
          </Text>
        }
        alternate
      >
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to <Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={<GitPullRequestIcon size={12} />}
        lineVariant="dashed"
        opposite={
          <Text size="sm" c="dimmed">
            34 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request <Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
      </Timeline.Item>

      <Timeline.Item
        title="Code review"
        bullet={<ChatCircleDotsIcon size={12} />}
        opposite={
          <Text size="sm" c="dimmed">
            12 minutes ago
          </Text>
        }
        alternate
      >
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
      </Timeline.Item>
    </Timeline>
  );
}
```


## FloatingWindow resize handle

[FloatingWindow](https://mantine.dev/llms/core-floating-window.md) now supports a `ResizeHandle` compound component
that allows users to resize the floating window by dragging a handle element.
Set the `dimensions` prop on `FloatingWindow` to control resize constraints for both
width (`initialWidth`, `minWidth`, `maxWidth`) and height (`initialHeight`, `minHeight`, `maxHeight`).

The resize handle is fully accessible – it supports keyboard interaction with
`Arrow Left`/`Arrow Right` keys for width, `Arrow Up`/`Arrow Down` for height (10px steps),
and `Home`/`End` keys (jump to min/max size).

```tsx
import { NotchesIcon } from '@phosphor-icons/react';
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
          withBorder
          constrainOffset={40}
          dimensions={{
            initialWidth: 260,
            maxWidth: 500,
            minWidth: 180,
            initialHeight: 260,
            maxHeight: 400,
            minHeight: 220,
          }}
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 60 }}
          style={{ overflow: 'hidden' }}
        >
          <Group
            justify="space-between"
            px="md"
            py="sm"
            className="drag-handle"
            style={{ cursor: 'move' }}
          >
            <Text fw={500} fz="sm">
              Resize demo
            </Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm" px="md" pb="sm">
            Drag the grip icon in the bottom-right corner to resize.
            Use Arrow keys when the handle is focused:
            Left/Right for width, Up/Down for height.
          </Text>
          <FloatingWindow.ResizeHandle
            aria-label="Resize floating window"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: 20,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'nwse-resize',
            }}
          >
            <NotchesIcon size={14} style={{ opacity: 0.5 }} />
          </FloatingWindow.ResizeHandle>
        </FloatingWindow>
      )}
    </>
  );
}
```


## Cascader component

New [Cascader](https://mantine.dev/llms/core-cascader.md) component allows selecting a value from hierarchical data
by drilling down through cascading columns. Picking an option in one column reveals its
children in a new column to the right, and the value is an ordered path from the root option
to the selected node. It supports `changeOnSelect`, `hover` expand trigger, search, a flat list
layout for mobile, and full keyboard navigation.

```tsx
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  // Switch to a flat list on small screens
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
```


## SunburstChart component

New [SunburstChart](https://mantine.dev/llms/charts-sunburst-chart.md) component displays hierarchical data
as concentric rings, similar to a treemap plotted in polar coordinates.

```tsx
// Demo.tsx
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} />;
}

// data.ts
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
```


## BulletChart component

New [BulletChart](https://mantine.dev/llms/charts-bullet-chart.md) component displays a single measure against
a qualitative range, useful for comparing a primary value (such as revenue) against
a target and qualitative thresholds like poor, average, and good.

```tsx
// Demo.tsx
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
    />
  );
}

// data.ts
export const ranges = ${JSON.stringify(ranges, null, 2)};
```


## Charts keyboard navigation

All [@mantine/charts](https://mantine.dev/llms/charts-getting-started.md#keyboard-navigation) components now expose the
`accessibilityLayer` prop (`true` by default) that makes charts navigable with the keyboard.
The chart surface is focusable and displays the Mantine focus ring; once focused, the arrow keys
move the active tooltip point-by-point and  toggles the tooltip, so users who do not
use a mouse can read the underlying values. The prop is supported by `AreaChart`, `BarChart`,
`LineChart`, `CompositeChart`, `ScatterChart`, `BubbleChart`, `PieChart`, `DonutChart`, `RadarChart`,
`RadialBarChart` and `FunnelChart` components.

## Charts brush

[AreaChart](https://mantine.dev/llms/charts-area-chart.md), [BarChart](https://mantine.dev/llms/charts-bar-chart.md), [LineChart](https://mantine.dev/llms/charts-line-chart.md)
and [CompositeChart](https://mantine.dev/llms/charts-composite-chart.md) now support the `withBrush` prop that displays a
brush (range selector) under the chart. Drag the brush handles to zoom into a subset of the data.
Use the `brushProps` prop to customize the underlying recharts `Brush`, or render the new
themed `ChartBrush` component as a child of the chart for full control.

```tsx
// Demo.tsx
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      withBrush
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { date: 'Mar 1', Apples: 2200, Oranges: 1400 },
  { date: 'Mar 2', Apples: 2500, Oranges: 1500 },
  { date: 'Mar 3', Apples: 2800, Oranges: 1700 },
  { date: 'Mar 4', Apples: 3100, Oranges: 1600 },
  { date: 'Mar 5', Apples: 3000, Oranges: 1800 },
  { date: 'Mar 6', Apples: 2700, Oranges: 2000 },
  { date: 'Mar 7', Apples: 2400, Oranges: 2100 },
  { date: 'Mar 8', Apples: 2100, Oranges: 1900 },
  { date: 'Mar 9', Apples: 1900, Oranges: 1700 },
  { date: 'Mar 10', Apples: 2200, Oranges: 1500 },
  { date: 'Mar 11', Apples: 2600, Oranges: 1600 },
  { date: 'Mar 12', Apples: 3000, Oranges: 1800 },
  { date: 'Mar 13', Apples: 3300, Oranges: 2000 },
  { date: 'Mar 14', Apples: 3100, Oranges: 2200 },
  { date: 'Mar 15', Apples: 2800, Oranges: 2100 },
  { date: 'Mar 16', Apples: 2500, Oranges: 1900 },
];
```


## Heatmap month labels position

[Heatmap](https://mantine.dev/llms/charts-heatmap.md) now supports `monthLabelsPosition` prop that allows
displaying month labels at the bottom of the heatmap instead of the top (default).

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      monthLabelsPosition="bottom"
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Accordion disable collapse

[Accordion](https://mantine.dev/llms/core-accordion.md) now supports the `disableCollapse` prop. When enabled in single
mode (`multiple={false}`), the open item cannot be collapsed by clicking it again, so one item
always stays open. Pair it with `defaultValue` or `value` to guarantee that a section is open
from the start – useful for settings panels, stepper-style flows and FAQ pages.

```tsx
// Demo.tsx
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" disableCollapse order={3}>
      {items}
    </Accordion>
  );
}

// data.ts
export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
```


## ScrollArea vertical scrollbar position

[ScrollArea](https://mantine.dev/llms/core-scroll-area.md) now supports the `verticalScrollbarPosition` prop that pins the
vertical scrollbar to a physical side (`left` or `right`) regardless of direction. This is useful
for RTL applications where users expect the vertical scrollbar to stay on the right, matching the
behavior of most desktop software. The prop also realigns the offset padding, the corner and the
horizontal scrollbar gap, so it works correctly with `offsetScrollbars` and `scrollbars="xy"`.

```tsx
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea
      w={300}
      h={200}
      type="always"
      scrollbars="y"
       verticalScrollbarPosition="right" offsetScrollbars={true}
    >
      {/* ... content */}
    </ScrollArea>
  );
}
```


## Schedule intervals larger than one hour

[ResourcesDayView](https://mantine.dev/llms/schedule-resources-day-view.md) and
[ResourcesWeekView](https://mantine.dev/llms/schedule-resources-week-view.md) now support `intervalMinutes` values
larger than 60. Previously the interval was capped at one hour – you can now set it to any
whole number of hours (for example `120` or `240`) to display multi-hour time slots. Values
of 60 or less must still divide evenly into an hour; any value that does not keep the grid on
hour boundaries falls back to `60`.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { SegmentedControl, Stack } from '@mantine/core';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [intervalMinutes, setIntervalMinutes] = useState('120');

  return (
    <Stack>
      <SegmentedControl
        value={intervalMinutes}
        onChange={setIntervalMinutes}
        data={[
          { label: '1 hour', value: '60' },
          { label: '2 hours', value: '120' },
          { label: '4 hours', value: '240' },
        ]}
      />
      <ResourcesDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        intervalMinutes={Number(intervalMinutes)}
        startScrollTime="08:00:00"
      />
    </Stack>
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


## New example: Table virtualization

New [Table](https://mantine.dev/llms/core-table.md) example demonstrates how to use `Table.ScrollContainer` with
`@tanstack/react-virtual` to efficiently render large datasets with 5,000 rows.

```tsx
import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Table } from '@mantine/core';
import { generateData } from './data';


const data = generateData(5000);
const ROW_HEIGHT = 36;

function Demo() {
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ROW_HEIGHT,
    overscan: 20,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <Table.ScrollContainer
      minWidth={500}
      maxHeight={400}
      scrollAreaProps={{ viewportRef: setScrollParent }}
    >
      <Table stickyHeader layout="fixed">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={50}>#</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Company</Table.Th>
            <Table.Th>City</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {virtualItems.length > 0 && (
            <tr aria-hidden>
              <td
                aria-hidden
                colSpan={5}
                style={{ height: virtualItems[0].start, padding: 0, border: 'none' }}
              />
            </tr>
          )}

          {virtualItems.map((virtualItem) => {
            const row = data[virtualItem.index];
            return (
              <Table.Tr key={virtualItem.index}>
                <Table.Td>{row.id}</Table.Td>
                <Table.Td>{row.name}</Table.Td>
                <Table.Td>{row.email}</Table.Td>
                <Table.Td>{row.company}</Table.Td>
                <Table.Td>{row.city}</Table.Td>
              </Table.Tr>
            );
          })}

          {virtualItems.length > 0 && (
            <tr aria-hidden>
              <td
                aria-hidden
                colSpan={5}
                style={{
                  height:
                    virtualizer.getTotalSize() -
                    virtualItems[virtualItems.length - 1].end,
                  padding: 0,
                  border: 'none',
                }}
              />
            </tr>
          )}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
```

