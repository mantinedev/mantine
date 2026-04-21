# useEventListener
Package: @mantine/hooks
Import: import { UseEventListener } from '@mantine/hooks';

## Usage

The `use-event-listener` hook adds a given event listener to an element to which `ref` is assigned.
The hook supports the same options as the `addEventListener` method.
After the component is unmounted, the listener is automatically removed.

```tsx
import { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
```


## Definition

```tsx
function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(
  type: K,
  listener: (this: T, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): React.RefCallback<T | null>
```
