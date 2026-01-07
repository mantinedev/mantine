# useDebouncedCallback
Package: @mantine/hooks
Import: import { UseDebouncedCallback } from '@mantine/hooks';

## Usage

`use-debounced-callback` creates a debounced version of the given function,
delaying its execution until a specified time has elapsed since the last invocation.



## flushOnUnmount option

By default, the callback is not fired when the component unmounts.
If you want to execute the pending callback before the component unmounts,
set `flushOnUnmount: true`:

```tsx
import { useDebouncedCallback } from '@mantine/hooks';

const callback = useDebouncedCallback(
  () => console.log('Hello'),
  { delay: 1000, flushOnUnmount: true },
);
```

## Flush debounced callback

You can call the `flush` method to execute the debounced callback immediately:

```tsx
import { useDebouncedCallback } from '@mantine/hooks';

const callback = useDebouncedCallback(() => console.log('Hello'), 1000);

callback.flush(); // immediately executes the pending callback
```

## Definition

```tsx
interface UseDebouncedCallbackOptions {
  delay: number;
  flushOnUnmount?: boolean;
}

type UseDebouncedCallbackReturnValue<T extends (...args: any[]) => any> = ((
  ...args: Parameters<T>
) => void) & { flush: () => void };

function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delayOrOptions: number | UseDebouncedCallbackOptions
): UseDebouncedCallbackReturnValue<T>
```

## Exported types

`UseDebouncedCallbackOptions` and `UseDebouncedCallbackReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseDebouncedCallbackOptions, UseDebouncedCallbackReturnValue } from '@mantine/hooks';
```
