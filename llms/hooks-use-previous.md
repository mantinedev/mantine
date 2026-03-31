# usePrevious
Package: @mantine/hooks
Import: import { UsePrevious } from '@mantine/hooks';

## Usage

The `use-previous` hook stores the previous value of a state in a ref.
It returns `undefined` on the initial render and the previous value of a state after rerender:

```tsx
import { TextInput, Text } from '@mantine/core';
import { usePrevious, useInputState } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
```


## Definition

```tsx
function usePrevious<T>(value: T): T | undefined;
```
