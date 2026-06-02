# Splitter
Package: @mantine/core
Import: import { Splitter } from '@mantine/core';
Description: Resizable split pane layout

## Usage

`Splitter` component provides resizable split pane layout. It is built on top of the
[use-splitter](https://mantine.dev/llms/hooks-use-splitter.md) hook and provides a declarative API with
Styles API integration.

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter orientation="horizontal" h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}
```


## Vertical orientation

Set `orientation="vertical"` to split panes vertically:

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter orientation="vertical" h={300}>
      <Splitter.Pane defaultSize={60} min={20} bg="blue">
        Top pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={40} min={20} bg="teal">
        Bottom pane
      </Splitter.Pane>
    </Splitter>
  );
}
```


## Collapsible panes

Set `collapsible` prop on `Splitter.Pane` to allow the pane to be collapsed
by dragging past its minimum size. Use `splitterRef` to access imperative API
for programmatic collapse/expand:

```tsx
import { useRef } from 'react';
import { Button, Group, Splitter } from '@mantine/core';
import { UseSplitterReturnValue } from '@mantine/hooks';

function Demo() {
  const splitterRef = useRef<UseSplitterReturnValue>(null);

  return (
    <>
      <Splitter splitterRef={splitterRef} h={200}>
        <Splitter.Pane defaultSize={30} min={20} collapsible bg="blue">
          Collapsible sidebar
        </Splitter.Pane>
        <Splitter.Pane defaultSize={70} min={30} bg="teal">
          Main content
        </Splitter.Pane>
      </Splitter>
      <Group mt="md">
        <Button size="xs" onClick={() => splitterRef.current?.toggleCollapse(0)}>
          Toggle sidebar
        </Button>
      </Group>
    </>
  );
}
```


## Controlled

To control panel sizes, use `sizes` and `onSizeChange` props:

```tsx
import { useState } from 'react';
import { Button, Group, Splitter, Text } from '@mantine/core';

function Demo() {
  const [sizes, setSizes] = useState([50, 50]);

  return (
    <>
      <Splitter sizes={sizes} onSizeChange={setSizes} h={200}>
        <Splitter.Pane defaultSize={50} min={20} bg="blue">
          Panel A ({Math.round(sizes[0])}%)
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} min={20} bg="teal">
          Panel B ({Math.round(sizes[1])}%)
        </Splitter.Pane>
      </Splitter>
      <Text size="sm" mt="sm">
        Current sizes: [{sizes.map((s) => Math.round(s)).join(', ')}]
      </Text>
      <Group mt="xs">
        <Button size="xs" onClick={() => setSizes([30, 70])}>30 / 70</Button>
        <Button size="xs" onClick={() => setSizes([50, 50])}>50 / 50</Button>
        <Button size="xs" onClick={() => setSizes([70, 30])}>70 / 30</Button>
      </Group>
    </>
  );
}
```


## Multiple panes

`Splitter` supports any number of panes. Handles are automatically rendered between panes:

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={200}>
      <Splitter.Pane defaultSize={25} min={10} bg="blue">
        First
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={10} bg="teal">
        Second
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="grape">
        Third
      </Splitter.Pane>
    </Splitter>
  );
}
```


## Nested splitters

You can nest `Splitter` components to create complex layouts:

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={350}>
      <Splitter.Pane defaultSize={30} min={15} bg="blue">
        Sidebar
      </Splitter.Pane>
      <Splitter.Pane defaultSize={70} min={30}>
        <Splitter orientation="vertical" h="100%">
          <Splitter.Pane defaultSize={60} min={20} bg="teal">
            Editor
          </Splitter.Pane>
          <Splitter.Pane defaultSize={40} min={20} bg="grape">
            Terminal
          </Splitter.Pane>
        </Splitter>
      </Splitter.Pane>
    </Splitter>
  );
}
```


## Redistribute

When using multiple panes, set `redistribute` prop to control how space is borrowed from
non-adjacent panels when the immediate neighbor is at its min/max:

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter redistribute="nearest" h={200}>
      <Splitter.Pane defaultSize={25} min={10} bg="blue">
        Panel A
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="teal">
        Panel B
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="grape">
        Panel C
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="orange">
        Panel D
      </Splitter.Pane>
    </Splitter>
  );
}
```


## Line size

Use `lineSize` prop to control the thickness of the separator line between panes:

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter lineSize={2} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}
```


## Without handle

Set `withHandle={false}` to hide the thumb with grip icon. The separator line
between panes is still visible and draggable:

```tsx
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter withHandle={false} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}
```


## Imperative API

Use `splitterRef` prop to access imperative splitter API:

```tsx
import { useRef } from 'react';
import { Splitter } from '@mantine/core';
import { UseSplitterReturnValue } from '@mantine/hooks';

function Demo() {
  const splitterRef = useRef<UseSplitterReturnValue>(null);

  return (
    <>
      <button onClick={() => splitterRef.current?.collapse(0)}>
        Collapse first pane
      </button>
      <Splitter splitterRef={splitterRef}>
        <Splitter.Pane defaultSize={50} min={20} collapsible>
          First pane
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} min={20}>
          Second pane
        </Splitter.Pane>
      </Splitter>
    </>
  );
}
```

## Wrap Splitter.Pane

`Splitter` component relies on `Splitter.Pane` order. Wrapping `Splitter.Pane` is not supported,
`Splitter.Pane` must be a direct child of `Splitter`.

```tsx
import { Splitter } from '@mantine/core';

// This will not work – wrapped pane will not be recognized
function WillNotWork() {
  return (
    <Splitter.Pane defaultSize={50} min={20}>
      This part will not render correctly
    </Splitter.Pane>
  );
}

// Create a separate component for pane content instead
function PaneContent() {
  return <div>This will work as expected!</div>;
}

function Demo() {
  return (
    <Splitter h={200}>
      <Splitter.Pane defaultSize={50} min={20}>
        First pane
      </Splitter.Pane>
      {/* Do not wrap Splitter.Pane in another component */}
      {/* <WillNotWork /> */}
      <Splitter.Pane defaultSize={50} min={20}>
        <PaneContent />
      </Splitter.Pane>
    </Splitter>
  );
}
```

## use-splitter hook

`Splitter` component is built on top of the [use-splitter](https://mantine.dev/llms/hooks-use-splitter.md) hook.
If you need more control over the layout and styling, you can use the hook directly.


#### Props

**Splitter props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Splitter panes |
| handleColor | MantineColor | - | Key of `theme.colors` or any valid CSS color for the separator line |
| handleIcon | React.ReactNode | - | Custom icon displayed in the handle thumb, by default uses grip icon based on orientation |
| lineSize | string \| number | - | CSS value for separator line thickness between panes |
| onCollapseChange | (panelIndex: number, collapsed: boolean) => void | - | Called when a panel collapses or expands |
| onResizeEnd | (handleIndex: number, sizes: number[]) => void | - | Called when drag ends |
| onResizeStart | (handleIndex: number) => void | - | Called when drag starts |
| onSizeChange | (sizes: number[]) => void | - | Called during resize with updated sizes |
| orientation | "horizontal" \| "vertical" | - | Layout direction |
| redistribute | "nearest" \| "equal" \| UseSplitterRedistributeFn | - | How to redistribute space when immediate neighbor is at its min/max |
| shiftStep | number | - | Shift+arrow step size in percentage |
| sizes | number[] | - | Controlled sizes (percentages summing to 100) |
| splitterRef | RefObject<UseSplitterReturnValue<any> \| null> | - | Ref to imperative splitter API (sizes, collapse, expand, etc.) |
| step | number | - | Keyboard step size in percentage |
| withHandle | boolean | - | Determines whether the thumb with grip icon is displayed on the handle |


#### Styles API

Splitter component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Splitter selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Splitter-root | Root element |
| pane | .mantine-Splitter-pane | Pane element (`Splitter.Pane` component) |
| handle | .mantine-Splitter-handle | Handle element between panes, contains the separator line and the thumb |
| thumb | .mantine-Splitter-thumb | Thumb element inside the handle, contains the grip icon |

**Splitter CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --splitter-line-size | Controls the thickness of the separator line between panes |
| root | --splitter-handle-color | Controls the color of the separator line between panes |
