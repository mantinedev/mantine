# useMouse
Package: @mantine/hooks
Import: import { UseMouse } from '@mantine/hooks';

## Usage



If you do not provide `ref`, mouse position is tracked relative to the document element:



## API

Set `resetOnExit` option to reset mouse position to `0, 0` when mouse leaves the element:

```tsx
import { useMouse } from '@mantine/hooks';

const { ref, x, y } = useMouse({ resetOnExit: true });
```

The hook returns an object with `ref` and `x`, `y` mouse coordinates:

```tsx
import { useMouse } from '@mantine/hooks';

const {
  ref, // -> pass ref to target element, if not used document element will be used as target element
  x, // -> mouse x position
  y, // -> mouse y position
} = useMouse();
```

On the first render (as well as during SSR), both `x` and `y` values are equal to `0`.

## Definition

```tsx
function useMouse<T extends HTMLElement = any>(options?: {
  resetOnExit?: boolean;
}): {
  x: number;
  y: number;
  ref: React.RefObject<T>;
};
```
