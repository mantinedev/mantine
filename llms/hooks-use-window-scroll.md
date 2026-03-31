# useWindowScroll
Package: @mantine/hooks
Import: import { UseWindowScroll } from '@mantine/hooks';

## Usage

The `use-window-scroll` hook returns the current scroll position and a function to scroll smoothly to a given position:

```tsx
import { useWindowScroll } from '@mantine/hooks';
import { Button, Text, Group } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
```


## Definition

```tsx
interface UseWindowScrollPosition {
  x: number;
  y: number;
}

type UseWindowScrollTo = (position: Partial<UseWindowScrollPosition>) => void;
type UseWindowScrollReturnValue = [UseWindowScrollPosition, UseWindowScrollTo];

function useWindowScroll(): UseWindowScrollReturnValue;
```

## Exported types

The `UseWindowScrollTo`, `UseWindowScrollPosition`, and `UseWindowScrollReturnValue` types are exported from `@mantine/hooks`;

```tsx
import type { UseWindowScrollTo, UseWindowScrollPosition, UseWindowScrollReturnValue } from '@mantine/hooks';
```
