# useViewportSize
Package: @mantine/hooks
Import: import { UseViewportSize } from '@mantine/hooks';

## Usage

The `use-viewport-size` hook returns the current viewport's `width` and `height`. It subscribes to `resize` and `orientationchange` events.
During SSR, the hook will return `{ width: 0, height: 0 }`:

```tsx
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
```


## Definition

```tsx
function useViewportSize(): {
  height: number;
  width: number;
};
```
