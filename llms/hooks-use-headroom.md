# useHeadroom
Package: @mantine/hooks
Import: import { UseHeadroom } from '@mantine/hooks';

## Usage

The `use-headroom` hook creates headers that are hidden after the user scrolls past a given distance in pixels.
It returns `{ pinned, scrollProgress }` where `pinned` is `true` when the element is at least partially
visible and `scrollProgress` is a number between `0` (fully hidden) and `1` (fully visible).

```tsx
import { Box, Button, Group, Portal, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const { pinned } = useHeadroom({ fixedAt: 120 });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              padding: 'var(--mantine-spacing-xs)',
              height: 60,
              zIndex: 1000000,
              transform: `translate3d(0, ${pinned ? 0 : '-110px'}, 0)`,
              transition: 'transform 400ms ease',
              backgroundColor: 'var(--mantine-color-body)',
            }}
          >
            <Group justify="center" h="100%">
              <Text>Pinned header – {pinned ? 'visible' : 'hidden'}</Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Button onClick={handlers.toggle} variant="default">
        {showHeader ? 'Hide' : 'Show'} header
      </Button>
    </>
  );
}
```


## scrollProgress

Use `scrollProgress` to create a scroll-linked reveal animation instead of an instant
show/hide toggle. The value transitions from `1` (fully visible) to `0` (fully hidden)
as the user scrolls down past `fixedAt`, and back to `1` as the user scrolls up.
Direction changes mid-scroll are handled correctly — the progress continues from
wherever it was when the direction changed. Set `scrollDistance` to control how many
pixels of scrolling are needed to fully reveal or hide the element.

```tsx
import { Box, Button, Group, Portal, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const { scrollProgress } = useHeadroom({ fixedAt: 120, scrollDistance: 60 });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              zIndex: 1000000,
              transform: `translateY(${(scrollProgress - 1) * 100}%)`,
              backgroundColor: 'var(--mantine-color-violet-6)',
            }}
          >
            <Group justify="center" h="100%">
              <Text c="white" fw={500}>
                Scroll-linked — {Math.round(scrollProgress * 100)}% visible
              </Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Button onClick={handlers.toggle} variant="default">
        {showHeader ? 'Hide' : 'Show'} header
      </Button>
    </>
  );
}
```


## Callbacks

The hook supports `onPin`, `onRelease`, and `onFix` callbacks:

* `onPin` is called when the header becomes visible (user scrolls up)
* `onRelease` is called when the header is hidden (user scrolls down)
* `onFix` is called when the scroll position enters the fixed zone (scroll position ≤ `fixedAt`)

```tsx
import { useState } from 'react';
import { Box, Button, Code, Group, Portal, Stack, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) =>
    setLog((prev) => [`${new Date().toLocaleTimeString()} — ${msg}`, ...prev].slice(0, 10));

  const { pinned } = useHeadroom({
    fixedAt: 80,
    onPin: () => addLog('onPin'),
    onRelease: () => addLog('onRelease'),
    onFix: () => addLog('onFix'),
  });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              zIndex: 1000000,
              transform: `translate3d(0, ${pinned ? 0 : '-110px'}, 0)`,
              transition: 'transform 400ms ease',
              backgroundColor: pinned
                ? 'var(--mantine-color-teal-6)'
                : 'var(--mantine-color-red-6)',
            }}
          >
            <Group justify="center" h="100%">
              <Text c="white" fw={500}>
                {pinned ? 'Pinned' : 'Released'}
              </Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Stack>
        <Button onClick={handlers.toggle} variant="default">
          {showHeader ? 'Hide' : 'Show'} header
        </Button>
        <Code block>
          {log.length === 0 ? 'Scroll to see callback events' : log.join('\\n')}
        </Code>
      </Stack>
    </>
  );
}
```


## Definition

```tsx
interface UseHeadroomOptions {
  /** Number in px at which element should be fixed, 0 by default */
  fixedAt?: number;

  /** Number of px to scroll to fully reveal or hide the element, 100 by default */
  scrollDistance?: number;

  /** Called when element is pinned */
  onPin?: () => void;

  /** Called when element is at fixed position */
  onFix?: () => void;

  /** Called when element is unpinned */
  onRelease?: () => void;
}

interface UseHeadroomReturnValue {
  /** True when the element is at least partially visible */
  pinned: boolean;

  /** Reveal progress: 0 = fully hidden, 1 = fully visible */
  scrollProgress: number;
}

function useHeadroom(input?: UseHeadroomOptions): UseHeadroomReturnValue;
```

## Exported types

The `UseHeadroomOptions` type is exported from `@mantine/hooks`;

```tsx
import { UseHeadroomOptions } from '@mantine/hooks';
```
