# useDrag
Package: @mantine/hooks
Import: import { UseDrag } from '@mantine/hooks';

## Usage

`use-drag` hook handles pointer drag gestures over an element. It tracks movement,
velocity, direction and supports axis constraints, threshold activation and tap detection.
The hook uses the Pointer Events API and works with both mouse and touch input.

```tsx
import { useRef, useState } from 'react';
import { Code, Group, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const posRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const { ref, active } = useDrag((state) => {
    if (state.first) {
      startPosRef.current = { ...posRef.current };
    }
    const newPos = {
      x: startPosRef.current.x + state.movement[0],
      y: startPosRef.current.y + state.movement[1],
    };
    posRef.current = newPos;
    setPos(newPos);
  });

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 200,
            height: 120,
            backgroundColor: active
              ? 'var(--mantine-color-teal-filled)'
              : 'var(--mantine-color-blue-filled)',
            borderRadius: 'var(--mantine-radius-md)',
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            cursor: active ? 'grabbing' : 'grab',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--mantine-color-white)',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          Drag me
        </div>
      </Group>
      <Text ta="center" mt="sm" size="sm">
        Position: <Code>{`{ x: ${Math.round(pos.x)}, y: ${Math.round(pos.y)} }`}</Code>
      </Text>
    </>
  );
}
```


## Axis constraint

Use the `axis` option to constrain movement to a single axis.
Set `axis` to `'x'` or `'y'` for a fixed constraint, or `'lock'` to
lock to whichever axis has more movement after `axisThreshold` is exceeded:

```tsx
import { useRef, useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const xPosRef = useRef(0);
  const xStartRef = useRef(0);
  const [xPos, setXPos] = useState(0);

  const yPosRef = useRef(0);
  const yStartRef = useRef(0);
  const [yPos, setYPos] = useState(0);

  const { ref: xRef, active: xActive } = useDrag(
    (state) => {
      if (state.first) {
        xStartRef.current = xPosRef.current;
      }
      const x = xStartRef.current + state.movement[0];
      xPosRef.current = x;
      setXPos(x);
    },
    { axis: 'x' }
  );

  const { ref: yRef, active: yActive } = useDrag(
    (state) => {
      if (state.first) {
        yStartRef.current = yPosRef.current;
      }
      const y = yStartRef.current + state.movement[1];
      yPosRef.current = y;
      setYPos(y);
    },
    { axis: 'y' }
  );

  return (
    <>
      <Group justify="center" gap="xl">
        <div>
          <div
            ref={xRef}
            style={{
              width: 80,
              height: 80,
              backgroundColor: xActive
                ? 'var(--mantine-color-teal-filled)'
                : 'var(--mantine-color-blue-filled)',
              borderRadius: 'var(--mantine-radius-md)',
              transform: `translateX(${xPos}px)`,
              cursor: xActive ? 'grabbing' : 'grab',
              touchAction: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--mantine-color-white)',
              fontWeight: 600,
              userSelect: 'none',
            }}
          >
            X only
          </div>
          <Text ta="center" mt="xs" size="sm">x: {Math.round(xPos)}</Text>
        </div>
        <div>
          <div
            ref={yRef}
            style={{
              width: 80,
              height: 80,
              backgroundColor: yActive
                ? 'var(--mantine-color-teal-filled)'
                : 'var(--mantine-color-blue-filled)',
              borderRadius: 'var(--mantine-radius-md)',
              transform: `translateY(${yPos}px)`,
              cursor: yActive ? 'grabbing' : 'grab',
              touchAction: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--mantine-color-white)',
              fontWeight: 600,
              userSelect: 'none',
            }}
          >
            Y only
          </div>
          <Text ta="center" mt="xs" size="sm">y: {Math.round(yPos)}</Text>
        </div>
      </Group>
    </>
  );
}
```


## Distinguishing taps from drags

When `filterTaps` is enabled, the last state includes a `tap` property that is `true`
when the total distance is below `tapThreshold` (default `3px`). Combined with `threshold`,
this lets you distinguish clicks from drags on the same element:

```tsx
import { useState } from 'react';
import { Badge, Group, Text, UnstyledButton } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const [taps, setTaps] = useState(0);
  const [drags, setDrags] = useState(0);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        if (state.tap) {
          setTaps((t) => t + 1);
        } else {
          setDrags((d) => d + 1);
        }
      }
    },
    { filterTaps: true, threshold: 5 }
  );

  return (
    <>
      <Group justify="center">
        <UnstyledButton
          ref={ref}
          style={{
            width: 200,
            height: 80,
            backgroundColor: active
              ? 'var(--mantine-color-teal-filled)'
              : 'var(--mantine-color-blue-filled)',
            borderRadius: 'var(--mantine-radius-md)',
            cursor: active ? 'grabbing' : 'pointer',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--mantine-color-white)',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          Click or drag me
        </UnstyledButton>
      </Group>

      <Group justify="center" mt="md" gap="lg">
        <Text size="sm">
          Taps: <Badge>{taps}</Badge>
        </Text>
        <Text size="sm">
          Drags: <Badge color="teal">{drags}</Badge>
        </Text>
      </Group>
    </>
  );
}
```


## Swipe to dismiss

Use `movement` and `velocity` on the last event to decide whether to dismiss an item.
This pattern works well for notifications:

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


## Drag to scroll

Apply `delta` to a container's `scrollLeft` to create a drag-to-scroll interaction:

```tsx
import { useRef } from 'react';
import { Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { ref, active } = useDrag(
    (state) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= state.delta[0];
      }
    },
    { axis: 'x', filterTaps: true, threshold: 5 }
  );

  const assignRef = (node: HTMLDivElement | null) => {
    scrollRef.current = node;
    ref(node);
  };

  return (
    <>
      <div
        ref={assignRef}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
          userSelect: 'none',
          borderRadius: 'var(--mantine-radius-md)',
          border: '1px solid var(--mantine-color-default-border)',
          padding: 'var(--mantine-spacing-md)',
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 80,
              marginRight: 12,
              backgroundColor: `hsl(${i * 18}, 60%, 70%)`,
              borderRadius: 'var(--mantine-radius-sm)',
              fontWeight: 600,
              verticalAlign: 'top',
            }}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <Text ta="center" mt="sm" size="sm" c="dimmed">
        Drag horizontally to scroll
      </Text>
    </>
  );
}
```


## Touch support

The hook uses the Pointer Events API which handles both mouse and touch automatically.
For touch devices, set `touch-action: none` on the draggable element to prevent
the browser from interpreting touch drag as scroll:

```css
.draggable {
  touch-action: none;
}
```

If you want to allow scrolling on one axis while dragging on the other (e.g. horizontal
drag with vertical scroll), use `touch-action: pan-y` or `touch-action: pan-x`.

## Definition

```tsx
type Vector2 = [number, number];

interface UseDragState {
  /** Current pointer position */
  xy: Vector2;

  /** Position where the gesture started */
  initial: Vector2;

  /** Displacement from start, respects axis constraint */
  movement: Vector2;

  /** Change since previous event */
  delta: Vector2;

  /** Absolute distance per axis */
  distance: Vector2;

  /** Movement direction per axis: -1, 0 or 1 */
  direction: Vector2;

  /** Speed per axis in px/ms */
  velocity: Vector2;

  /** Time since drag started in ms */
  elapsedTime: number;

  /** `true` on the first handler call */
  first: boolean;

  /** `true` on the last handler call (pointer released or canceled) */
  last: boolean;

  /** `true` while the gesture is ongoing */
  active: boolean;

  /** `true` when the gesture qualifies as a tap (requires `filterTaps`) */
  tap: boolean;

  /** `true` when the gesture was interrupted by a `pointercancel` event */
  canceled: boolean;

  /** Function to programmatically cancel the current gesture */
  cancel: () => void;

  /** The source pointer event */
  event: PointerEvent;

}

interface UseDragOptions {
  /** Constrain movement to an axis, `'lock'` locks to whichever axis has more movement */
  axis?: 'x' | 'y' | 'lock';

  /** Movement in px to determine lock axis, default `1` */
  axisThreshold?: number;

  /** Enable tap detection on the last event, default `false` */
  filterTaps?: boolean;

  /** Max displacement in px to be considered a tap, default `3` */
  tapThreshold?: number;

  /** Min displacement before drag activates, default `0` */
  threshold?: number | Vector2;

  /** Enable or disable the hook, default `true` */
  enabled?: boolean;

}

interface UseDragReturnValue<T extends HTMLElement = any> {
  /** Ref callback to attach to the target element */
  ref: React.RefCallback<T | null>;

  /** `true` while a drag gesture is active */
  active: boolean;
}

function useDrag<T extends HTMLElement = any>(
  handler: (state: UseDragState) => void,
  options?: UseDragOptions,
): UseDragReturnValue<T>
```

## Exported types

`UseDragState`, `UseDragOptions` and `UseDragReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseDragState, UseDragOptions, UseDragReturnValue } from '@mantine/hooks';
```
