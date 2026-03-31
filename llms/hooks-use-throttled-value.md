# useThrottledValue
Package: @mantine/hooks
Import: import { UseThrottledValue } from '@mantine/hooks';

## Usage

The `useThrottledValue` hook accepts a value and a wait time in milliseconds.
It returns a throttled value that cannot change more than once every `wait` milliseconds.

```tsx
import { Text, TextInput } from '@mantine/core';
import { useThrottledValue } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const throttledValue = useThrottledValue(value, 1000);

  return (
    <>
      <TextInput placeholder="Search" onChange={(event) => setValue(event.currentTarget.value)} />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
```


## Definition

```tsx
function useThrottledValue<T>(value: T, wait: number): T;
```
