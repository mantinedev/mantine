# useViewportSize
Package: @mantine/hooks
Import: import { UseViewportSize } from '@mantine/hooks';

## Usage

`use-viewport-size` returns current viewport's `width` and `height`, it subscribes to `resize` and `orientationchange` events,
during ssr hook will return `{ width: 0, height: 0 }`:



## Definition

```tsx
function useViewportSize(): {
  height: number;
  width: number;
};
```
