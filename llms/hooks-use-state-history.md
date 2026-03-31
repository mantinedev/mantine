# useStateHistory
Package: @mantine/hooks
Import: import { UseStateHistory } from '@mantine/hooks';

## Usage

The `useStateHistory` hook creates a state with history. It returns the current value, handlers to
go back/forward, and a history object with all previous values and the current index.

```tsx
import { Button, Code, Group, Text } from '@mantine/core';
import { useStateHistory } from '@mantine/hooks';

function Demo() {
  const [value, handlers, history] = useStateHistory(1);
  return (
    <>
      <Text>Current value: {value}</Text>
      <Group my="md">
        <Button onClick={() => handlers.set(Math.ceil(Math.random() * 100) + 1)}>Set value</Button>
        <Button onClick={() => handlers.back()}>Back</Button>
        <Button onClick={() => handlers.forward()}>Forward</Button>
        <Button onClick={() => handlers.reset()}>Reset</Button>
      </Group>
      <Code block>{JSON.stringify(history, null, 2)}</Code>
    </>
  );
}
```


## Definition

The `UseStateHistoryHandlers` and `StateHistory` interfaces are exported from the `@mantine/hooks`
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

The `UseStateHistoryHandlers`, `UseStateHistoryReturnValue`, and `UseStateHistoryValue` types are exported from `@mantine/hooks`;

```tsx
import type { UseStateHistoryHandlers, UseStateHistoryReturnValue, UseStateHistoryValue } from '@mantine/hooks';
```
