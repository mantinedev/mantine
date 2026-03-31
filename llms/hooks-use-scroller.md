# useScroller
Package: @mantine/hooks
Import: import { UseScroller } from '@mantine/hooks';

## Usage

The `use-scroller` hook manages horizontal scroll behavior for a container element.
It provides scroll state (whether content can be scrolled in either direction),
scroll functions, and drag-to-scroll functionality.

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


## Scroll amount

Use `scrollAmount` option to control how many pixels the content scrolls
when `scrollStart` or `scrollEnd` functions are called. Default value is `200`:

```tsx
import { Box, Button, Group, Text } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller({ scrollAmount: 400 });

  return (
    <Box>
      <Group mb="md" justify="space-between">
        <Group>
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
        <Text size="sm" c="dimmed">scrollAmount: 400px</Text>
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


## Draggable

Use `draggable` option to enable or disable drag-to-scroll functionality.
When `draggable` is `true` (default), users can click and drag to scroll the content:

```tsx
import { Box, Button, Group, Text } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller({ draggable: false });

  return (
    <Box>
      <Group mb="md" justify="space-between">
        <Group>
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
        <Text size="sm" c="dimmed">draggable: false</Text>
      </Group>

      <div
        ref={scroller.ref}
        style={{
          overflow: 'auto',
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


## Scroller component

If you prefer component API, you can use [Scroller](https://mantine.dev/llms/core-scroller.md) component.
It provides the same functionality with additional styling and control button features.

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


## Definition

```tsx
function useScroller<T extends HTMLElement = HTMLDivElement>(
  options?: UseScrollerOptions
): UseScrollerReturnValue<T>;

interface UseScrollerOptions {
  /** Amount of pixels to scroll when calling scroll functions, `200` by default */
  scrollAmount?: number;

  /** Determines whether content can be scrolled by dragging with mouse, `true` by default */
  draggable?: boolean;

  /** Called when scroll state changes (canScrollStart or canScrollEnd) */
  onScrollStateChange?: (state: UseScrollerScrollState) => void;
}

interface UseScrollerScrollState {
  /** Whether content can be scrolled towards the start (left in LTR, right in RTL) */
  canScrollStart: boolean;

  /** Whether content can be scrolled towards the end (right in LTR, left in RTL) */
  canScrollEnd: boolean;
}

interface UseScrollerReturnValue<T extends HTMLElement = HTMLDivElement> {
  /** Ref callback to attach to the scrollable container element */
  ref: RefCallback<T | null>;

  /** Whether content can be scrolled towards the start */
  canScrollStart: boolean;

  /** Whether content can be scrolled towards the end */
  canScrollEnd: boolean;

  /** Scrolls towards the start direction */
  scrollStart: () => void;

  /** Scrolls towards the end direction */
  scrollEnd: () => void;

  /** `true` if the user is currently dragging the content */
  isDragging: boolean;

  /** Props to spread on the scrollable container for drag functionality */
  dragHandlers: {
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
  };
}
```

## Exported types

`UseScrollerOptions`, `UseScrollerReturnValue` and `UseScrollerScrollState` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type {
  UseScrollerOptions,
  UseScrollerReturnValue,
  UseScrollerScrollState,
} from '@mantine/hooks';
```
