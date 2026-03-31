# useCounter
Package: @mantine/hooks
Import: import { UseCounter } from '@mantine/hooks';

## Usage

```tsx
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group justify="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
```


## Definition

```tsx
interface UseCounterOptions {
  min?: number;
  max?: number;
}

interface UseCounterHandlers {
  increment: () => void;
  decrement: () => void;
  set: (value: number) => void;
  reset: () => void;
}

type UseCounterReturnValue = [number, UseCounterHandlers];

function useCounter(
  initialValue?: number,
  options?: UseCounterOptions,
): UseCounterReturnValue
```

## Exported types

The `UseCounterOptions`, `UseCounterHandlers`, and `UseCounterReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseCounterOptions, UseCounterHandlers, UseCounterReturnValue } from '@mantine/hooks';
```
