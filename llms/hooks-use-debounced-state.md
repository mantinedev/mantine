# useDebouncedState
Package: @mantine/hooks
Import: import { UseDebouncedState } from '@mantine/hooks';

## Usage

`use-debounced-state` hook debounces value changes.
This can be useful in case you want to perform a heavy operation based on react state,
for example, send search request. Unlike [use-debounced-value](https://mantine.dev/hooks/use-debounced-value/) it
is designed to work with uncontrolled components.



## Differences from use-debounce-value

* You do not have direct access to the non-debounced value.
* It is used for uncontrolled inputs (`defaultValue` prop instead of `value`), for example does not render with every state change like a character typed in an input.
* It does not work with custom state providers or props, and it uses `useState` internally.

## Leading update

You can immediately update value with first call with `{ leading: true }` options:



## Definition

```tsx
interface UseDebouncedStateOptions {
  leading?: boolean;
}

type UseDebouncedStateReturnValue<T> = [T, (newValue: SetStateAction<T>) => void];

function useDebouncedState<T = any>(
  defaultValue: T,
  wait: number,
  options?: UseDebouncedStateOptions,
): UseDebouncedStateReturnValue<T>
```

## Exported types

`UseDebouncedStateOptions` and `UseDebouncedStateReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseDebouncedStateOptions, UseDebouncedStateReturnValue } from '@mantine/hooks';
```
