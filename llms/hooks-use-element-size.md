# use-element-size
Package: @mantine/hooks
Import: import { use-element-size } from '@mantine/hooks';
Description: Returns element width and height and observes changes with ResizeObserver

## Usage



## API

`use-element-size` is a simpler version of [use-resize-observer](https://mantine.dev/hooks/use-resize-observer/) hook.
Hook returns a `ref` object that should be passed to the observed element, and the element's `height` and `width`.
On the first render (as well as during SSR), or when no element is being observed, `width` and `height` properties are equal to `0`.

```tsx
import { useElementSize } from '@mantine/hooks';

const { ref, width, height } = useElementSize();
```

## Definition

```tsx
type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

function useResizeObserver<T extends HTMLElement = any>(
  options?: ResizeObserverOptions
): readonly [React.RefObject<T>, ObserverRect];
```
