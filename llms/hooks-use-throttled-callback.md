# useThrottledCallback
Package: @mantine/hooks
Import: import { UseThrottledCallback } from '@mantine/hooks';

## Usage

The `useThrottledCallback` hook accepts a function and a wait time in milliseconds.
It returns a throttled version of the function that will only be called at most once every `wait` milliseconds.

```tsx
import { Text, TextInput } from '@mantine/core';
import { useThrottledCallback } from '@mantine/hooks';

function Demo() {
  const [throttledValue, setValue] = useState('');
  const throttledSetValue = useThrottledCallback((value) => setValue(value), 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => throttledSetValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
```


## Definition

```tsx
function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  wait: number
): (...args: Parameters<T>) => void;
```
