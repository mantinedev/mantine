# FloatingWindow
Package: @mantine/core
Import: import { FloatingWindow } from '@mantine/core';
Description: Draggable floating area

## Usage

`FloatingWindow` creates a draggable element with a fixed position:

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


## Constrain to viewport

Use the `constrainToViewport` prop to restrict element movement to the viewport boundaries.
If you do not set the `constrainToViewport` prop, the element can be dragged outside the viewport:

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
          constrainToViewport={false}
        >
          <Group justify="space-between" mb="md">
            <Text>No constrain demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            The floating window is not constrained by the viewport, it can move out of bounds.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
```


## Constrain offset

Use the `constrainOffset` prop to set the offset from the viewport edges when constraining the element:

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
          initialPosition={{ top: 300, left: 30 }}
          style={{ cursor: 'move' }}
          constrainToViewport
          constrainOffset={30}
        >
          <Group justify="space-between" mb="md">
            <Text>Constrain offset demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            This floating window has 30px offset, it cannot move closer that 30px to the edge of the
            viewport.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
```


## Drag handle selector

The `dragHandleSelector` prop allows specifying a selector of an element (or a group of elements) that should be used to drag the floating window.
If not specified, the entire root element is used as a drag target.

The `excludeDragHandleSelector` prop excludes elements within `dragHandleSelector` from the drag event.
In the following example, the close button is excluded from the drag event:

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
          withBorder
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
        >
          <Group
            justify="space-between"
            px="md"
            py="sm"
            className="drag-handle"
            style={{ cursor: 'move' }}
          >
            <Text>Drag handle demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm" px="md" pb="sm">
            Drag floating window around with drag handle element.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
```


## Enabled prop

Use the `enabled` option to enable or disable dragging:

```tsx
import { Button, Chip, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      <Group>
        <Button variant="default" onClick={handlers.toggle}>
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Chip checked={enabled} onChange={() => setEnabled((e) => !e)}>
          Drag {enabled ? 'enabled' : 'disabled'}
        </Chip>
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
          enabled={enabled}
        >
          <Group justify="space-between" mb="md">
            <Text>Enabled demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">This is a floating window. You can drag it around.</Text>
        </FloatingWindow>
      )}
    </>
  );
}
```


## Set position

Call the `setPosition` function to set the position of the element programmatically.
This function accepts an object with `top`, `left`, `right` and `bottom` properties,
from which you should only specify two (for example, `top` and `left`, `bottom` and `right`).

```tsx
import { useRef } from 'react';
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { SetFloatingWindowPosition, useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const setPositionRef = useRef<SetFloatingWindowPosition | null>(null);
  const setPosition = () => {
    setPositionRef.current?.({ bottom: 40, right: 40 });
  };

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Button onClick={setPosition} variant="default">
          Set position to bottom right corner
        </Button>
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
          setPositionRef={setPositionRef}
        >
          <Group justify="space-between" mb="md">
            <Text>Set position demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            You can control floating window position programmatically with setPositionRef.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
```


## Resize handle

Use `FloatingWindow.ResizeHandle` compound component to add a resize handle to the floating window.
The `dimensions` prop on `FloatingWindow` controls the resize behavior:

* `initialWidth` / `initialHeight` – initial size of the window in px
* `minWidth` / `minHeight` – minimum size the window can be resized to
* `maxWidth` / `maxHeight` – maximum size the window can be resized to

The resize handle respects `constrainToViewport` and `constrainOffset` props – the window
cannot be resized beyond the viewport boundaries.

`FloatingWindow.ResizeHandle` renders with `role="separator"` and supports keyboard interaction:
use `Arrow Left`/`Arrow Right` keys to resize width and `Arrow Up`/`Arrow Down` keys to resize
height in 10px steps. `Home`/`End` keys jump to the minimum/maximum size.

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


## Lock axis

Use the `axis` option to restrict movement to the specified axis:

```tsx
import { Button, CloseButton, FloatingWindow, Group, SegmentedControl, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [axis, setAxis] = useState<'x' | 'y'>('y');

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <SegmentedControl data={['x', 'y']} onChange={(val) => setAxis(val as 'x')} value={axis} />
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 200, left: 40 }}
          style={{ cursor: 'move' }}
          axis={axis}
        >
          <Group justify="space-between" mb="md">
            <Text>Axis demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            When you set axis prop, the floating window can be dragged only horizontally or
            vertically.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
```


## use-floating-window hook

If you prefer the hook API, you can use the [useFloatingWindow](https://mantine.dev/llms/hooks-use-floating-window.md) hook.
It supports most of the `FloatingWindow` features:

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



#### Props

**FloatingWindow props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| axis | "x" \| "y" | - | If set, restricts movement to the specified axis |
| constrainOffset | number | - | The offset from the viewport edges when constraining the element. Requires `constrainToViewport: true`. |
| constrainToViewport | boolean | - | If `true`, the element can only move within the current viewport boundaries. |
| dimensions | FloatingWindowDimensions | - | Dimensions configuration for resizable floating window |
| dragHandleSelector | string | - | Selector of an element that should be used to drag floating window. If not specified, the entire root element is used as a drag target. |
| enabled | boolean | - | If `false`, the element can not be dragged. |
| excludeDragHandleSelector | string | - | Selector of an element within `dragHandleSelector` that should be excluded from the drag event. |
| initialPosition | FloatingWindowPositionConfig | - | Initial position. If not set, calculated from element styles. |
| onDragEnd | () => void | - | Called when the drag stops |
| onDragStart | () => void | - | Called when the drag starts |
| onPositionChange | (pos: FloatingWindowPosition) => void | - | Called when the element position changes |
| portalProps | Omit<PortalProps, "children"> | - | Props passed down to `Portal` component |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem |
| setPositionRef | RefObject<SetFloatingWindowPosition \| null> | - | Assigns ref to set position programmatically |
| shadow | MantineShadow | - | Key of `theme.shadows` or any valid CSS value to set `box-shadow` |
| withBorder | boolean | - | Adds border to the root element |
| withinPortal | boolean | - | Determines whether the window should be rendered inside `Portal` |
| zIndex | React.CSSProperties["zIndex"] | - | `z-index` of the root element |


#### Styles API

FloatingWindow component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**FloatingWindow selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-FloatingWindow-root | Root element |

**FloatingWindow data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-dragging | Window is being dragged | - |
