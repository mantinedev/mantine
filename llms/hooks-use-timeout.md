# useTimeout
Package: @mantine/hooks
Import: import { UseTimeout } from '@mantine/hooks';

## Usage



## API

```tsx
import { useTimeout } from '@mantine/hooks';

const { start, clear } = useTimeout(callback, delay, {
  autoInvoke: true,
});
```

Arguments:

* `callback` – function that will be called after the timer elapses
* `delay` – number of milliseconds the timer should wait before the specified function is executed
* `options: { autoInvoke }` - determines whether the timer should be started on mount, defaults to false

Return object:

* `start` - starts the timer
* `clear` – cancels the timer

## Definition

```tsx
interface UseTimeoutOptions {
  autoInvoke: boolean;
}

interface UseTimeoutReturnValue {
  start: (...args: any[]) => void;
  clear: () => void;
}

function useTimeout(
  callback: (...args: any[]) => void,
  delay: number,
  options?: UseTimeoutOptions,
): UseTimeoutReturnValue
```

## Exported types

`UseTimeoutOptions` and `UseTimeoutReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseTimeoutOptions, UseTimeoutReturnValue } from '@mantine/hooks';
```
