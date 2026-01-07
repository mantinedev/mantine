# useStateHistory
Package: @mantine/hooks
Import: import { UseStateHistory } from '@mantine/hooks';

## Usage

`useStateHistory` hook is used to create a state with history, it returns current value, handlers to
go back/forward and a history object with all previous values and current index.



## Definition

`UseStateHistoryHandlers` and `StateHistory` interfaces are exported from `@mantine/hooks`
package.

```tsx
interface UseStateHistoryHandlers<T> {
  set: (value: T) => void;
  back: (steps?: number) => void;
  forward: (steps?: number) => void;
  reset: () => void;
}

interface UseStateHistoryValue<T> {
  history: T[];
  current: number;
}

type UseStateHistoryReturnValue<T> = [
  T,
  UseStateHistoryHandlers<T>,
  UseStateHistoryValue<T>,
];

function useStateHistory<T>(initialValue: T): UseStateHistoryReturnValue<T>;
```

## Exported types

`UseStateHistoryHandlers`, `UseStateHistoryReturnValue` and `UseStateHistoryValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseStateHistoryHandlers, UseStateHistoryReturnValue, UseStateHistoryValue } from '@mantine/hooks';
```
