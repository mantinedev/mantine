# Changelog920

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## TreeSelect component

New [TreeSelect](https://mantine.dev/llms/core-tree-select.md) component allows picking one or more values from hierarchical tree data.
It supports three selection modes: single, multiple, and checkbox (with parent-child cascade):

```tsx
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
    />
  );
}
```


## Tree select Combobox examples

New [Combobox examples](https://mantine.dev/combobox?e=TreeSelectCombobox) showing how to build tree select components
from Combobox primitives with connecting lines, expand/collapse chevrons, and proper indentation:

* [Tree select](https://mantine.dev/combobox?e=TreeSelectCombobox) – basic single-value tree select
* [Tree multi select](https://mantine.dev/combobox?e=TreeMultiSelectCombobox) – multi select with checkbox cascade
* [Searchable tree select](https://mantine.dev/combobox?e=TreeSelectSearchable) – tree select with search filtering
* [Tree select with checkboxes](https://mantine.dev/combobox?e=TreeSelectCheckbox) – single select with expand-on-click
* [Virtualized tree select](https://mantine.dev/combobox?e=TreeSelectVirtualized) – large tree (~500 nodes) with @tanstack/react-virtual

## Notifications swipe dismissal

[@mantine/notifications](https://mantine.dev/llms/x-notifications.md) now supports dismissing notifications by dragging them
left or right, and with horizontal scroll swipe while hovered. Both interactions can be disabled
on `Notifications`, and individual items can opt out with `allowClose: false`.

```tsx
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Do not forget to star Mantine on GitHub! 🌟',
        })
      }
    >
      Show notification
    </Button>
  );
}
```


## use-drag hook

New [use-drag](https://mantine.dev/llms/hooks-use-drag.md) hook handles pointer drag gestures with movement tracking,
velocity, direction and axis constraints. It uses the Pointer Events API and works with
both mouse and touch input:

```tsx
import { useState } from 'react';
import { Button, Group, Paper, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

interface NotificationItem {
  id: number;
  text: string;
}

function SwipeNotification({
  notification,
  onDismiss,
}: {
  notification: NotificationItem;
  onDismiss: (id: number) => void;
}) {
  const [offset, setOffset] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        const shouldDismiss =
          Math.abs(state.movement[0]) > 120 || state.velocity[0] > 0.5;
        if (shouldDismiss) {
          setDismissed(true);
          setTimeout(() => onDismiss(notification.id), 300);
        } else {
          setOffset(0);
        }
      } else {
        setOffset(state.movement[0]);
      }
    },
    { axis: 'x', threshold: 5, filterTaps: true }
  );

  return (
    <Paper
      ref={ref}
      p="sm"
      mb="xs"
      withBorder
      radius="md"
      style={{
        transform: dismissed
          ? `translateX(${offset > 0 ? 400 : -400}px)`
          : `translateX(${offset}px)`,
        opacity: dismissed ? 0 : 1 - Math.min(Math.abs(offset) / 200, 1) * 0.6,
        transition: active ? 'none' : 'transform 300ms ease, opacity 300ms ease',
        cursor: active ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        userSelect: 'none',
      }}
    >
      {notification.text}
    </Paper>
  );
}

const initialItems: NotificationItem[] = [
  { id: 1, text: 'New message from Alice' },
  { id: 2, text: 'Build succeeded' },
  { id: 3, text: 'Deployment complete' },
  { id: 4, text: 'Review requested' },
];

function Demo() {
  const [notifications, setNotifications] = useState(initialItems);

  return (
    <div style={{ height: 300 }}>
      {notifications.map((n) => (
        <SwipeNotification
          key={n.id}
          notification={n}
          onDismiss={(id) =>
            setNotifications((items) => items.filter((item) => item.id !== id))
          }
        />
      ))}

      {notifications.length === 0 && (
        <Text ta="center" c="dimmed" py="md">All cleared!</Text>
      )}

      <Group justify="center" mt="md">
        <Button onClick={() => setNotifications(initialItems)}>
          Reset
        </Button>
      </Group>
    </div>
  );
}
```


## InlineDateTimePicker component

New [InlineDateTimePicker](https://mantine.dev/llms/dates-inline-date-time-picker.md) component renders a calendar
with a time picker inline, without a dropdown. It supports both default and range modes:

```tsx
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker />;
}
```


Set `type="range"` to select a date and time range with two time inputs:

```tsx
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" />;
}
```


## DateTimePicker range support

[DateTimePicker](https://mantine.dev/llms/dates-date-time-picker.md) now supports `type="range"` to select
a date and time range. In range mode, two time inputs are displayed in the dropdown
for start and end times:

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      type="range"
      label="Pick dates and times range"
      placeholder="Pick dates and times range"
    />
  );
}
```


## DateTimePicker valueFormat function

[DateTimePicker](https://mantine.dev/llms/dates-date-time-picker.md) `valueFormat` prop now accepts a function in addition
to a dayjs format string. The callback receives the value as a `YYYY-MM-DD HH:mm:ss` string and
returns the formatted value, which is useful for cases that cannot be expressed with a dayjs
format string:

```tsx
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat={(date) => dayjs(date).format('dddd, MMMM D [at] h:mm A')}
      defaultValue="2024-04-11 14:45:00"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
```


## RollingNumber component

New [RollingNumber](https://mantine.dev/llms/core-rolling-number.md) component animates value changes with rolling digit
transitions. Each digit independently rolls to its new position when the value changes:

```tsx
import { useState } from 'react';
import { Button, Group, RollingNumber } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(1234);

  return (
    <>
      <RollingNumber value={value} fz="36px" />
      <Group mt="md">
        <Button onClick={() => setValue((v) => v + 1)}>Increment</Button>
        <Button onClick={() => setValue((v) => v - 1)}>Decrement</Button>
        <Button onClick={() => setValue(Math.floor(Math.random() * 10000))}>Random</Button>
      </Group>
    </>
  );
}
```


## MaskInput improvements

[MaskInput](https://mantine.dev/llms/core-mask-input.md) now supports a `resetRef` prop that assigns a function that
clears the input value imperatively. This is useful because `MaskInput` is uncontrolled
internally, so setting `value` from a parent does not clear it:

```tsx
import { useRef } from 'react';
import { MaskInput, Button, Group } from '@mantine/core';

function Demo() {
  const resetRef = useRef<() => void>(null);

  return (
    <>
      <MaskInput
        label="Phone number"
        placeholder="(___) ___-____"
        mask="(999) 999-9999"
        resetRef={resetRef}
      />

      <Group mt="md">
        <Button onClick={() => resetRef.current?.()}>Reset</Button>
      </Group>
    </>
  );
}
```


`MaskInput` integration with [use-form](https://mantine.dev/llms/form-use-form.md) is now documented. Use `defaultValue`
to seed the initial value and `onChangeRaw` to write the raw value to form state:

```tsx
import { Button, MaskInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { phone: '' },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <MaskInput
        mask="(999) 999-9999"
        placeholder="(___) ___-____"
        label="Phone"
        onChangeRaw={(raw) => form.setFieldValue('phone', raw, { forceUpdate: false })}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
```


## SankeyChart component

New [SankeyChart](https://mantine.dev/llms/charts-sankey-chart.md) component visualizes flow between nodes as a Sankey diagram
where the width of each link is proportional to the flow value:

```tsx
// Demo.tsx
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} />;
}

// data.ts
export const data = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};
```


## Reorder pills in MultiSelect and TagsInput

[MultiSelect](https://mantine.dev/llms/core-multi-select.md) and [TagsInput](https://mantine.dev/llms/core-tags-input.md) now support reordering
selected pills. Set the new `withPillsReorder` prop to enable it. Pills can be reordered with
a mouse (drag-and-drop) or keyboard:

* Pills are not part of the `Tab` order. `ArrowLeft` from the input (caret at start) moves
  focus to the last pill.
* `ArrowLeft` and `ArrowRight` navigate between pills (RTL-aware). `ArrowRight` on the last
  pill returns focus to the input.
* `Alt + ArrowLeft` and `Alt + ArrowRight` reorder the focused pill (RTL-aware). Focus follows
  the moved pill so chained moves work.

Reordering is automatically disabled when `disabled` or `readOnly` is set. Custom pill renderers
receive a `reorderProps` payload that can be spread onto the pill element to keep reordering
working:

```tsx
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(['React', 'Angular', 'Vue']);

  return (
    <MultiSelect
      label="Drag pills to reorder"
      description="Selected values can be reordered by dragging pills"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Ember']}
      value={value}
      onChange={setValue}
      withPillsReorder
    />
  );
}
```


## Restrict Tree drop targets

[Tree](https://mantine.dev/llms/core-tree.md) component now supports restricting drop targets with the new `allowDrop` prop.
The callback receives `{ draggedNode, targetNode, position }` and returning `false` hides the drop
indicator and rejects the drop, so users get proper visual feedback before releasing:

```tsx
import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    label: 'Pages',
    value: 'pages',
    children: [
      { label: 'index.tsx', value: 'pages/index.tsx' },
      { label: 'about.tsx', value: 'pages/about.tsx' },
    ],
  },
  {
    label: 'Components (locked)',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
];

const isLocked = (value: string) => value === 'components' || value.startsWith('components/');

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  const locked = isLocked(node.value);

  return (
    <Group gap={6} {...elementProps} draggable={!locked && elementProps.draggable}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
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
      withLines
      // Locked items can't be dragged (also enforced by `draggable={false}` in the
      // Leaf above), items inside the "components" branch can't be drop targets,
      // and the "components" folder itself only accepts siblings before/after — not
      // dropping items inside it.
      allowDrop={({ draggedNode, targetNode, position }) => {
        if (isLocked(draggedNode)) {
          return false;
        }
        if (targetNode === 'components' && position === 'inside') {
          return false;
        }
        return !targetNode.startsWith('components/');
      }}
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
```


## Tree drag handle

[Tree](https://mantine.dev/llms/core-tree.md) component now supports restricting drag initiation to a dedicated handle with
the new `withDragHandle` prop. The handle spreads `dragHandleProps` from the `renderNode` payload.
This is useful when a node contains interactive controls (inputs, buttons) that would otherwise
interfere with dragging:

```tsx
import { useState } from 'react';
import {
  DotsSixVerticalIcon,
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
} from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';
import classes from './Demo.module.css';

const data: TreeNodeData[] = [
  {
    label: 'Pages',
    value: 'pages',
    children: [
      { label: 'index.tsx', value: 'pages/index.tsx' },
      { label: 'about.tsx', value: 'pages/about.tsx' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
];

function Leaf({
  node,
  expanded,
  hasChildren,
  elementProps,
  dragHandleProps,
}: RenderTreeNodePayload) {
  return (
    <Group gap={4} {...elementProps}>
      <button
        type="button"
        {...dragHandleProps}
        className={classes.handle}
        aria-label="Drag to reorder"
      >
        <DotsSixVerticalIcon size={14} weight="bold" />
      </button>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
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
      withDragHandle
      withLines
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
```


## Shared default props for all inputs

Default props set on `Input` and `Input.Wrapper` in `theme.components` now cascade to every
component built on top of them ([TextInput](https://mantine.dev/llms/core-text-input.md), [Textarea](https://mantine.dev/llms/core-textarea.md),
[NumberInput](https://mantine.dev/llms/core-number-input.md), [Select](https://mantine.dev/llms/core-select.md), [DateInput](https://mantine.dev/llms/dates-date-input.md),
and others). This makes it possible to apply shared `size`, `radius`, `variant`, `withAsterisk`
and other props to all inputs at once, while still overriding individual components with their
own default props:

```tsx
import { TextInput, NumberInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        size: 'md',
        radius: 'md',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        withAsterisk: true,
      },
    }),

    NumberInput: NumberInput.extend({
      defaultProps: {
        size: 'lg',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Inherits size and radius from Input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />

      <NumberInput mt="md" label="Number input" placeholder="Overrides shared size with lg" />
    </MantineProvider>
  );
}
```


## Per-day business hours in WeekView

[WeekView](https://mantine.dev/llms/schedule-week-view.md) `businessHours` prop now accepts a per-day object keyed by day of
the week (`0` – Sunday, `6` – Saturday) in addition to the shared `[start, end]` tuple. Days
missing from the object or set to `null` are rendered as fully outside business hours, making it
easy to model partial workdays and non-working days:

```tsx
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={{
        1: ['09:00:00', '17:00:00'],
        2: ['09:00:00', '17:00:00'],
        3: ['09:00:00', '17:00:00'],
        4: ['09:00:00', '17:00:00'],
        5: ['09:00:00', '13:00:00'],
      }}
      startTime="07:00:00"
      endTime="20:00:00"
    />
  );
}
```

