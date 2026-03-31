# useHeadroom
Package: @mantine/hooks
Import: import { UseHeadroom } from '@mantine/hooks';

## Usage

The `use-headroom` hook creates headers that are hidden after the user scrolls past a given distance in pixels.
It returns `{ pinned, scrollProgress }` where `pinned` is `true` when the element is at least partially
visible and `scrollProgress` is a number between `0` (fully hidden) and `1` (fully visible).

```tsx
import { Box, Portal, Text } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

function Demo() {
  const { pinned } = useHeadroom({ fixedAt: 120 });

  return (
    <>
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
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text>
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

## scrollProgress

Use `scrollProgress` to create a scroll-linked reveal animation. The value transitions
from `1` (fully visible) to `0` (fully hidden) as the user scrolls down past `fixedAt`,
and back to `1` as the user scrolls up. Direction changes mid-scroll are handled correctly —
the progress continues from wherever it was when the direction changed.

```tsx
import { useHeadroom } from '@mantine/hooks';

function Demo() {
  const { scrollProgress } = useHeadroom({ fixedAt: 120, scrollDistance: 60 });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        transform: `translateY(${(scrollProgress - 1) * 100}%)`,
      }}
    >
      Header
    </div>
  );
}
```

## Exported types

The `UseHeadroomOptions` type is exported from `@mantine/hooks`;

```tsx
import { UseHeadroomOptions } from '@mantine/hooks';
```
