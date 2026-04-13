# Changelog910

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## deduplicateInlineStyles

New `deduplicateInlineStyles` prop on [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) enables
React 19 style tag deduplication for responsive [style props](https://mantine.dev/llms/styles-style-props.md).
When many components share the same responsive style prop values, only a single `<style />`
tag is generated and hoisted to `<head />` instead of each component injecting its own:

```tsx
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider deduplicateInlineStyles>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

This can significantly improve performance when rendering large lists of components
with identical responsive style props. See the
[styles performance guide](https://mantine.dev/llms/styles-styles-performance.md) for more details.

## use-mask hook

New [use-mask](https://mantine.dev/llms/hooks-use-mask.md) hook attaches real-time input masking to any `<input>` element via
a ref callback. It formats user input against a defined pattern and exposes both the masked display
value and the raw unmasked value. The hook supports built-in and custom tokens, dynamic masks,
character transforms, optional segments, and regex array format:

```tsx
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, value, rawValue } = useMask({ mask: '(999) 999-9999' });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">Masked value: {value}</Text>
      <Text size="sm">Raw value: {rawValue}</Text>
    </>
  );
}
```


## MaskInput component

New [MaskInput](https://mantine.dev/llms/core-mask-input.md) component is a wrapper around [use-mask](https://mantine.dev/llms/hooks-use-mask.md) hook
that provides all standard input props (label, description, error, etc.) and supports all mask options:

```tsx
import { MaskInput } from '@mantine/core';


function Demo() {
  return (
    <MaskInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      mask="(999) 999-9999"
      placeholder="(___) ___-____"
    />
  );
}
```


## Treemap component

New [Treemap](https://mantine.dev/llms/charts-treemap.md) component displays hierarchical data as a set of nested
rectangles. It is based on the [Treemap recharts component](https://recharts.org/en-US/api/Treemap):

```tsx
// Demo.tsx
import { Treemap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Treemap data={data} />;
}

// data.ts
export const data = [
  {
    name: 'Frontend',
    color: 'blue.8',
    children: [
      { name: 'React', value: 400 },
      { name: 'Vue', value: 200 },
      { name: 'Angular', value: 150 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.8',
    children: [
      { name: 'Node', value: 300 },
      { name: 'Python', value: 250 },
      { name: 'Go', value: 100 },
    ],
  },
  {
    name: 'Mobile',
    color: 'red.8',
    children: [
      { name: 'React Native', value: 200 },
      { name: 'Flutter', value: 180 },
    ],
  },
];
```


## TimePicker duration type

[TimePicker](https://mantine.dev/llms/dates-time-picker.md) component now supports `type="duration"` prop that allows
entering durations that exceed 24 hours. In this mode, the hours field has no upper limit
and the input width adjusts dynamically based on the entered value:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter duration" type="duration" withSeconds />;
}
```


## Heatmap legend

[Heatmap](https://mantine.dev/llms/charts-heatmap.md) component now supports `withLegend` prop that displays
a color legend below the chart. Use `legendLabels` prop to customize labels
(default: `['Less', 'More']`):

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
      withLegend
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## MonthPicker and YearPicker presets

[MonthPicker](https://mantine.dev/llms/dates-month-picker.md) and [YearPicker](https://mantine.dev/llms/dates-year-picker.md) components now support
`presets` prop that allows adding predefined values to pick from. Presets are also available
in [MonthPickerInput](https://mantine.dev/llms/dates-month-picker-input.md) and [YearPickerInput](https://mantine.dev/llms/dates-year-picker-input.md)
components:

```tsx
import dayjs from 'dayjs';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <MonthPicker
      presets={[
        { value: dayjs().startOf('month').format('YYYY-MM-DD'), label: 'This month' },
        { value: dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().add(6, 'month').startOf('month').format('YYYY-MM-DD'), label: 'In 6 months' },
        { value: dayjs().add(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
```


## use-roving-index hook

New [use-roving-index](https://mantine.dev/llms/hooks-use-roving-index.md) hook implements the
[roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex)
keyboard navigation pattern. It manages `tabIndex` state for a group of focusable elements,
handles arrow key navigation with disabled item skipping, and supports both 1D lists and 2D grids:

```tsx
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Bold', 'Italic', 'Underline', 'Strikethrough', 'Code'];

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button key={item} variant="default" {...getItemProps({ index })}>
          {item}
        </Button>
      ))}
    </Group>
  );
}
```


## Tree drag and drop

[Tree](https://mantine.dev/llms/core-tree.md) component now supports drag-and-drop reordering of nodes.
Provide `onDragDrop` callback to enable it, and use the `moveTreeNode` utility
to update data based on the result:

```tsx
import { useState } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    label: 'Pages',
    value: 'pages',
    children: [
      { label: 'index.tsx', value: 'pages/index.tsx' },
      { label: 'about.tsx', value: 'pages/about.tsx' },
      { label: 'contact.tsx', value: 'pages/contact.tsx' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
      { label: 'Sidebar.tsx', value: 'components/Sidebar.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      {hasChildren && (
        <CaretDownIcon
          size={18}
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const [treeData, setTreeData] = useState(data);

  return (
    <Tree
      data={treeData}
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
```


## Tree async loading

[Tree](https://mantine.dev/llms/core-tree.md) now supports lazy loading of children. Set `hasChildren: true`
on a node without providing `children` – when the node is expanded for the first time,
`onLoadChildren` callback passed to `useTree` is called. Use `mergeAsyncChildren`
utility to splice loaded children into your data:

```tsx
import { useState } from 'react';
import { CaretDownIcon, SpinnerIcon } from '@phosphor-icons/react';
import {
  Group,
  mergeAsyncChildren,
  RenderTreeNodePayload,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const initialData: TreeNodeData[] = [
  { label: 'Documents', value: 'documents', hasChildren: true },
  { label: 'Photos', value: 'photos', hasChildren: true },
  { label: 'README.md', value: 'readme' },
];

// Simulates an API call to load children
async function fetchChildren(parentValue: string): Promise<TreeNodeData[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { label: `${parentValue}/file-1.txt`, value: `${parentValue}/file-1.txt` },
    { label: `${parentValue}/file-2.txt`, value: `${parentValue}/file-2.txt` },
    {
      label: `${parentValue}/subfolder`,
      value: `${parentValue}/subfolder`,
      hasChildren: true,
    },
  ];
}

function Leaf({ node, expanded, hasChildren, elementProps, isLoading }: RenderTreeNodePayload) {
  return (
    <Group gap={5} wrap="nowrap" {...elementProps}>
      {isLoading ? (
        <SpinnerIcon size={18} style={{ animation: 'spin 1s linear infinite', flexShrink: 0 }} />
      ) : (
        hasChildren && (
          <CaretDownIcon
            size={18}
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
          />
        )
      )}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {node.label}
      </span>
    </Group>
  );
}

function Demo() {
  const [data, setData] = useState(initialData);
  const tree = useTree({
    onLoadChildren: async (value) => {
      const children = await fetchChildren(value);
      setData((prev) => mergeAsyncChildren(prev, value, children));
    },
  });

  return (
    <Tree
      data={data}
      tree={tree}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
```


## Tree search and filtering

[Tree](https://mantine.dev/llms/core-tree.md) now includes `filterTreeData` utility to filter tree data based on
a search query. Matching nodes and their ancestors are preserved in the result. You can
provide a custom filter function for advanced matching (for example, fuzzy search with fuse.js):

```tsx
import { useMemo, useState } from 'react';
import {
  filterTreeData,
  getTreeExpandedState,
  TextInput,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
          { label: 'Input.tsx', value: 'src/components/Input.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [
          { label: 'use-debounce.ts', value: 'src/hooks/use-debounce.ts' },
          { label: 'use-media-query.ts', value: 'src/hooks/use-media-query.ts' },
        ],
      },
    ],
  },
  {
    label: 'public',
    value: 'public',
    children: [
      { label: 'favicon.ico', value: 'public/favicon.ico' },
      { label: 'logo.svg', value: 'public/logo.svg' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

function Demo() {
  const [search, setSearch] = useState('');
  const tree = useTree();

  const filteredData = useMemo(
    () => filterTreeData(data, search),
    [search]
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      const next = filterTreeData(data, value);
      tree.setExpandedState(getTreeExpandedState(next, '*'));
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div>
      <TextInput
        placeholder="Search..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree data={filteredData} tree={tree} />
    </div>
  );
}
```


## Tree connecting lines

[Tree](https://mantine.dev/llms/core-tree.md) now supports `withLines` prop to display connecting lines
showing parent-child relationships. Lines adapt to `levelOffset` spacing automatically:

```tsx
import { getTreeExpandedState, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
  });

  return <Tree data={data} tree={tree} withLines />;
}
```


## Tree virtualization

[Tree](https://mantine.dev/llms/core-tree.md) now provides `flattenTreeData` utility and `FlatTreeNode` component
for virtualized rendering of large trees. The component does not depend on any
virtualization library – you supply one yourself (e.g., `@tanstack/react-virtual`):

```tsx
import { useMemo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  FlatTreeNode,
  flattenTreeData,
  getTreeExpandedState,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const ITEM_HEIGHT = 30;

function generateTreeData(count: number): TreeNodeData[] {
  const result: TreeNodeData[] = [];
  let id = 0;

  function addChildren(
    parent: TreeNodeData[],
    depth: number,
    remaining: { count: number }
  ) {
    const childCount = depth === 0 ? 20 : Math.floor(Math.random() * 8) + 2;

    for (let i = 0; i < childCount && remaining.count > 0; i++) {
      id++;
      remaining.count--;
      const hasChild =
        depth < 3 && remaining.count > 0 && Math.random() > 0.3;
      const node: TreeNodeData = {
        label: `${hasChild ? 'Folder' : 'File'} ${id}`,
        value: `node-${id}`,
        children: hasChild ? [] : undefined,
      };

      if (hasChild) {
        addChildren(node.children!, depth + 1, remaining);
      }

      parent.push(node);
    }
  }

  addChildren(result, 0, { count });
  return result;
}

const largeData = generateTreeData(2000);

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(largeData, '*'),
  });

  const flatList = useMemo(
    () => flattenTreeData(largeData, tree.expandedState),
    [tree.expandedState]
  );

  const scrollParentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: flatList.length,
    getScrollElement: () => scrollParentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 20,
  });

  return (
    <div ref={scrollParentRef} style={{ height: 400, overflow: 'auto' }}>
      <div
        data-tree-root
        role="tree"
        style={{
          height: virtualizer.getTotalSize(),
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <FlatTreeNode
            key={flatList[virtualItem.index].node.value}
            {...flatList[virtualItem.index]}
            tree={tree}
            expandOnClick
            selectOnClick
            tabIndex={virtualItem.index === 0 ? 0 : -1}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualItem.size,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
```


## Tree checkStrictly mode

[useTree](https://mantine.dev/llms/core-tree.md) hook now supports `checkStrictly` option. When enabled, checking
a parent node does not affect children and vice versa – each node's checked state is
fully independent:

```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { Checkbox, Group, RenderTreeNodePayload, Tree, useTree } from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        onClick={() =>
          checked
            ? tree.uncheckNode(node.value)
            : tree.checkNode(node.value)
        }
      />

      <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
        <span>{node.label}</span>

        {hasChildren && (
          <CaretDownIcon
            size={14}
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        )}
      </Group>
    </Group>
  );
};

function Demo() {
  const tree = useTree({ checkStrictly: true });
  return (
    <Tree
      data={data}
      tree={tree}
      levelOffset={23}
      expandOnClick={false}
      renderNode={renderTreeNode}
    />
  );
}
```


## Slider startPointValue

[Slider](https://mantine.dev/llms/core-slider.md) component now supports `startPointValue` prop that changes
the origin of the filled bar. When set, the bar extends from the given value toward the
current value – to the left for values below the start point and to the right for values above it:

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      startPointValue={0}
      min={-100}
      max={100}
      defaultValue={40}
      marks={[
        { value: -100, label: '-100' },
        { value: -50, label: '-50' },
        { value: 0, label: '0' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
      ]}
    />
  );
}
```


## WeekView forceCurrentTimeIndicator

[WeekView](https://mantine.dev/llms/schedule-week-view.md) component now supports `forceCurrentTimeIndicator` prop.
When set, the current time indicator is displayed on the same day of week even when viewing
a different week:

```tsx
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date="2030-06-10"
      events={events}
      withCurrentTimeIndicator
      forceCurrentTimeIndicator
    />
  );
}
```


## New demo: MonthView events rendering

New [MonthView](https://mantine.dev/llms/schedule-month-view.md) demo shows how to use `renderEvent` to visually
differentiate all-day and timed events. All-day events render as regular colored bars,
while timed events display as a colored dot with the start time and title:

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { Box, UnstyledButton } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

function isAllDayEvent(event: ScheduleEventData) {
  const start = dayjs(event.start);
  const end = dayjs(event.end);
  return start.isSame(start.startOf('day')) && end.isSame(end.startOf('day'));
}

const events: ScheduleEventData[] = [/* ...events */];

function Demo() {
  return (
    <MonthView
      date={new Date()}
      events={events}
      renderEvent={(event, props) => {
        if (isAllDayEvent(event)) {
          return <UnstyledButton {...props} />;
        }

        const { children, className, style, ...others } = props;
        return (
          <UnstyledButton
            {...others}
            style={{
              ...style,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 10,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              pointerEvents: 'all',
              cursor: 'pointer',
              paddingInline: 2,
            }}
          >
            <Box
              component="span"
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: `var(--event-bg)`,
                flexShrink: 0,
              }}
            />
            <span style={{ width: 28, flexShrink: 0 }}>{dayjs(event.start).format('h:mm')}</span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {event.title}
            </span>
          </UnstyledButton>
        );
      }}
    />
  );
}
```


## Other changes

* [useClickOutside](https://mantine.dev/llms/hooks-use-click-outside.md) hook now supports `enabled` parameter to dynamically enable/disable the listener. The hook also uses `event.composedPath()` in both `ref` and `nodes` branches for consistent Shadow DOM support and correctly ignores clicks on detached DOM nodes in the single-ref mode.
* [useCounter](https://mantine.dev/llms/hooks-use-counter.md) hook now supports `step` option to configure increment/decrement step size (default `1`).
* [useDebouncedCallback](https://mantine.dev/llms/hooks-use-debounced-callback.md) hook now supports `maxWait` option to guarantee execution within a maximum time window during continuous calls, and `isPending()` method to check if a debounced call is waiting.
* [useDebouncedValue](https://mantine.dev/llms/hooks-use-debounced-value.md) hook now returns a `flush` method to immediately apply the pending debounced value.
* [useScrollIntoView](https://mantine.dev/llms/hooks-use-scroll-into-view.md) hook now supports `onScrollCancel` callback that fires when the scroll animation is interrupted by the user, and returns a `scrolling` boolean to indicate whether a scroll animation is in progress.
