# useFloatingWindow
Package: @mantine/hooks
Import: import { UseFloatingWindow } from '@mantine/hooks';

## Usage

The `use-floating-window` hook makes a given element draggable:

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


## Constrain to viewport

Use `constrainToViewport` option to restrict element movement to the viewport boundaries.
If you do not set `constrainToViewport` option, the element can be dragged outside the viewport:

```tsx
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: false,
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
              <Text>No constrain demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">
              The floating window is not constrained by the viewport, it can move out of bounds.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
```


## Constrain offset

Use `constrainOffset` option to set the offset from the viewport edges when constraining the element.
This option requires `constrainToViewport: true`:

```tsx
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 30,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 30 },
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
              <Text>Constrain offset demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">
              This floating window has 30px offset, it cannot move closer that 30px to the edge of
              the viewport.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
```


## Drag handle selector

`dragHandleSelector` option allows specifying a selector of an element (or a group of elements) that should be used to drag floating window.
If not specified, the entire root element is used as a drag target.

`excludeDragHandleSelector` option excludes elements within `dragHandleSelector` from the drag event.
In the following example, the close button is excluded from the drag event:

```tsx
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 20,
    dragHandleSelector: '.drag-handle',
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
            withBorder
            pos="fixed"
            style={{ transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
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
          </Paper>
        </Portal>
      )}
    </>
  );
}
```


## Enabled option

Use `enabled` option to enable or disable dragging:

```tsx
import { useState } from 'react';
import { Button, Chip, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [enabled, setEnabled] = useState(true);
  const floatingWindow = useFloatingWindow({
    enabled,
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

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
              <Text>Enabled demo</Text>
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


## Set position

Call `setPosition` function to set the position of the element programmatically.
This function accepts an object with `top`, `left`, `right` and `bottom` properties,
from which you should only specify two (for example, `top` and `left`, `bottom` and `right`).

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
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Button
          onClick={() => floatingWindow.setPosition({ bottom: 40, right: 40 })}
          variant="default"
        >
          Set position to bottom right corner
        </Button>
      </Group>

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
              <Text>Set position demo</Text>
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


## Lock axis

Use `axis` option to restrict movement to the specified axis:

```tsx
import { useState } from 'react';
import { Button, CloseButton, Group, Paper, Portal, SegmentedControl, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [axis, setAxis] = useState<'x' | 'y'>('y');
  const floatingWindow = useFloatingWindow({
    axis,
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <SegmentedControl data={['x', 'y']} onChange={(val) => setAxis(val as 'x')} value={axis} />
      </Group>

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
              <Text>Axis demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">
              When you set axis prop, the floating window can be dragged only horizontally or
              vertically.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
```


## FloatingWindow component

If you prefer component API, you can use [FloatingWindow](https://mantine.dev/llms/core-floating-window.md) component.
It supports the same options as the hook and provides extra features like portal rendering, basic styles and more.

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


## Definition

```tsx
function useFloatingWindow<T extends HTMLElement>(
  options?: UseFloatingWindowOptions
): UseFloatingWindowReturnValue<T>

interface FloatingWindowPositionConfig {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface FloatingWindowPosition {
  /** Element offset from the left side of the viewport */
  x: number;

  /** Element offset from the top side of the viewport */
  y: number;
}

interface UseFloatingWindowOptions {
  /** If `false`, the element can not be dragged. */
  enabled?: boolean;

  /** If `true`, the element can only move within
   * the current viewport boundaries. */
  constrainToViewport?: boolean;

  /** The offset from the viewport edges when constraining the element.
   * Requires `constrainToViewport: true`. */
  constrainOffset?: number;

  /** Selector of an element that should be used to drag floating window.
   * If not specified, the entire root element is used as a drag target. */
  dragHandleSelector?: string;

  /** Selector of an element within `dragHandleSelector`
   * that should be excluded from the drag event. */
  excludeDragHandleSelector?: string;

  /** If set, restricts movement to the specified axis */
  axis?: 'x' | 'y';

  /** Initial position. If not set, calculated from element styles. */
  initialPosition?: FloatingWindowPositionConfig;

  /** Called when the element position changes */
  onPositionChange?: (pos: FloatingWindowPosition) => void;

  /** Called when the drag starts */
  onDragStart?: () => void;

  /** Called when the drag stops */
  onDragEnd?: () => void;
}

type SetFloatingWindowPosition = (position: FloatingWindowPositionConfig) => void;

interface UseFloatingWindowReturnValue<T extends HTMLElement> {
  /** Ref to the element that should be draggable */
  ref: RefCallback<T | null>;

  /** Function to set the position of the element */
  setPosition: SetFloatingWindowPosition;

  /** `true` if the element is currently being dragged */
  isDragging: boolean;
}
```

## Exported types

`UseFloatingWindowOptions` and `UseFloatingWindowReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseFloatingWindowOptions, UseFloatingWindowReturnValue } from '@mantine/hooks';
```
