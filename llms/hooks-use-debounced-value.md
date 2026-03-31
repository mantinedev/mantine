# useDebouncedValue
Package: @mantine/hooks
Import: import { UseDebouncedValue } from '@mantine/hooks';

## Usage

The `use-debounced-value` hook debounces value changes.
This can be useful when you want to perform a heavy operation based on React state,
for example, sending a search request. Unlike [use-debounced-state](https://mantine.dev/llms/hooks-use-debounced-state.md), it
is designed to work with controlled components.

```tsx
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
```


## Differences from use-debounced-state

* You have direct access to the non-debounced value.
* It is used for controlled inputs (`value` prop instead of `defaultValue`), for example, it renders on every state change like a character typed in an input.
* It works with props or other state providers, and it does not force use of `useState`.

## Leading update

You can immediately update the value with the first call using `{ leading: true }` options:

```tsx
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
```


## Cancel update

The hook provides a `cancel` callback; you can use it to cancel the update.
Update cancels automatically on component unmount.

In this example, type in some text and click the cancel button
within a second to cancel debounced value change:

```tsx
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text, Button } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Button onClick={cancel} size="lg">
        Cancel
      </Button>

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
```


## Definition

```tsx
interface UseDebouncedValueOptions {
  leading?: boolean;
}

type UseDebouncedValueReturnValue<T> = [T, () => void];

function useDebouncedValue<T = any>(
  value: T,
  wait: number,
  options?: UseDebouncedValueOptions,
): UseDebouncedValueReturnValue<T>
```

## Exported types

The `UseDebouncedValueOptions` and `UseDebouncedValueReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseDebouncedValueOptions, UseDebouncedValueReturnValue } from '@mantine/hooks';
```
