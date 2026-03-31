# use-element-size
Package: @mantine/hooks
Import: import { use-element-size } from '@mantine/hooks';
Description: Returns element width and height and observes changes with ResizeObserver

## Usage

```tsx
import { useElementSize } from '@mantine/hooks';

function Demo() {
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: 400, height: 120 }} />
      <div>Width: {width}, height: {height}</div>
    </>
  );
}
```


## API

`use-element-size` is a simpler version of the [use-resize-observer](https://mantine.dev/llms/hooks-use-resize-observer.md) hook.
The hook returns a `ref` object that should be passed to the observed element, and the element's `height` and `width`.
On the first render (as well as during SSR), or when no element is being observed, the `width` and `height` properties are equal to `0`.

```tsx
import { useElementSize } from '@mantine/hooks';

const { ref, width, height } = useElementSize();
```

## Definition

```tsx
interface UseElementSizeReturnValue {
  ref: React.RefObject<HTMLElement>;
  width: number;
  height: number;
}

function useElementSize<T extends HTMLElement = any>(): UseElementSizeReturnValue;
```
