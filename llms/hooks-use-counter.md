# useCounter
Package: @mantine/hooks
Import: import { UseCounter } from '@mantine/hooks';

## Usage



## Definition

```tsx
interface UseCounterOptions {
  min?: number;
  max?: number;
}

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

`UseCounterOptions`, `UseCounterHandlers` and `UseCounterReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseCounterOptions, UseCounterHandlers, UseCounterReturnValue } from '@mantine/hooks';
```
