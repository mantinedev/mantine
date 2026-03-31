# useThrottledState
Package: @mantine/hooks
Import: import { UseThrottledState } from '@mantine/hooks';

## Usage

The `useThrottledState` hook works similarly to `useState` but throttles state updates.
The `setThrottledState` handler in the example below will be called at most once every 1000ms.

```tsx
import { Text, TextInput } from '@mantine/core';
import { useThrottledState } from '@mantine/hooks';

function Demo() {
  const [throttledValue, setThrottledValue] = useThrottledState('', 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => setThrottledValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
```


## Definition

```tsx
function useThrottledState<T = any>(
  defaultValue: T,
  wait: number
): readonly [T, (newValue: React.SetStateAction<T>) => void];
```
