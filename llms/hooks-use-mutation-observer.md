# useMutationObserver
Package: @mantine/hooks
Import: import { UseMutationObserver } from '@mantine/hooks';

## Usage

`use-mutation-observer` is a wrapper for the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
It allows subscribing changes being made to the DOM tree.



## Target element

If you cannot pass `ref` to the target element, you can pass a function to resolve
the target element as a third argument.



## Definition

```tsx
function useMutationObserver<Element extends HTMLElement>(
  callback: MutationCallback,
  options: MutationObserverInit,
  target?: HTMLElement | (() => HTMLElement) | null
): RefObject<Element>;
```
