# useWindowScroll
Package: @mantine/hooks
Import: import { UseWindowScroll } from '@mantine/hooks';

## Usage

`use-window-scroll` returns current scroll position and a function to scroll smoothly to given position:



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

`UseWindowScrollTo`, `UseWindowScrollPosition` and `UseWindowScrollReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseWindowScrollTo, UseWindowScrollPosition, UseWindowScrollReturnValue } from '@mantine/hooks';
```
