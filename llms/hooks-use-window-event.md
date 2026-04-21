# useWindowEvent
Package: @mantine/hooks
Import: import { UseWindowEvent } from '@mantine/hooks';

## Usage

The `use-window-event` hook adds an event listener to the `window` object on component mount and removes it on unmount:

```tsx
import { useEffect } from 'react';
import { useWindowEvent } from '@mantine/hooks';

const handler = (event: KeyboardEvent) => console.log(event);

// regular way
useEffect(() => {
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, []);

// with use-window-event hook
useWindowEvent('keydown', handler);
```

## Example

Search focus with `⌘ + K` on macOS or `Ctrl + K` on Windows and Linux on the Mantine docs website:

```tsx
import { useRef } from 'react';
import { useWindowEvent } from '@mantine/hooks';

function Demo() {
  const inputRef = useRef<HTMLInputElement>(null);

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      inputRef.current?.focus();
    }
  });

  return <input ref={inputRef} />;
}
```

## Definition

The hook has the same definition as `window.addEventListener` function:

```tsx
function useWindowEvent<K extends string>(
  type: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => void
    : (this: Window, ev: CustomEvent) => void,
  options?: boolean | AddEventListenerOptions
): void;
```
