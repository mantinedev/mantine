# useDebouncedValue
Package: @mantine/hooks
Import: import { UseDebouncedValue } from '@mantine/hooks';

## Usage

`use-debounced-value` hook debounces value changes.
This can be useful in case you want to perform a heavy operation based on react state,
for example, send search request. Unlike [use-debounced-state](https://mantine.dev/hooks/use-debounced-state/) it
is designed to work with controlled components.



## Differences from use-debounced-state

* You have direct access to the non-debounced value.
* It is used for controlled inputs (`value` prop instead of `defaultValue`), for example renders on every state change like a character typed in an input.
* It works with props or other state providers, and it does not force use of `useState`.

## Leading update

You can immediately update value with first call with `{ leading: true }` options:



## Cancel update

Hook provides `cancel` callback, you can use it to cancel update.
Update cancels automatically on component unmount.

In this example, type in some text and click the cancel button
within a second to cancel debounced value change:



## Definition

```tsx
interface UseDebouncedValueOptions {
  leading?: boolean;
}

type UseDebouncedValueReturnValue<T> = [T, () => void];

function useDebouncedValue<T = any>(
  value: T,
  wait: number,
  options?: UseDebouncedValueOptions,
): UseDebouncedValueReturnValue<T>
```

## Exported types

`UseDebouncedValueOptions` and `UseDebouncedValueReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseDebouncedValueOptions, UseDebouncedValueReturnValue } from '@mantine/hooks';
```
