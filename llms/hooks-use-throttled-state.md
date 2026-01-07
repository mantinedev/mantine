# useThrottledState
Package: @mantine/hooks
Import: import { UseThrottledState } from '@mantine/hooks';

## Usage

`useThrottledState` works similar to `useState` but throttles the state updates.
`setThrottledState` handler in the example below will be called at most once every 1000ms.



## Definition

```tsx
function useThrottledState<T = any>(
  defaultValue: T,
  wait: number
): readonly [T, (newValue: React.SetStateAction<T>) => void];
```
