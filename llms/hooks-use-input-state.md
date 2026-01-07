# useInputState
Package: @mantine/hooks
Import: import { UseInputState } from '@mantine/hooks';

## Usage

`use-input-state` handles state of native inputs (with event in `onChange` handler) and custom inputs (with value in `onChange` handler).
Hook works with all Mantine and native inputs:

```tsx
import { useState } from 'react';
import { NumberInput, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

function WithUseInputState() {
  const [stringValue, setStringValue] = useInputState('');
  const [numberValue, setNumberValue] = useInputState<
    string | number
  >(0);

  return (
    <>
      <input
        type="text"
        value={stringValue}
        onChange={setStringValue}
      />
      <TextInput value={stringValue} onChange={setStringValue} />
      <NumberInput value={numberValue} onChange={setNumberValue} />
    </>
  );
}

function WithUseState() {
  const [stringValue, setStringValue] = useState('');
  const [numberValue, setNumberValue] = useState<string | number>(0);

  return (
    <>
      <input
        type="text"
        value={stringValue}
        onChange={(event) =>
          setStringValue(event.currentTarget.value)
        }
      />
      <TextInput
        value={stringValue}
        onChange={(event) =>
          setStringValue(event.currentTarget.value)
        }
      />
      <NumberInput value={numberValue} onChange={setNumberValue} />
    </>
  );
}
```

## Definition

```tsx
type UseInputStateReturnValue<T> = [
  T,
  (value: null | undefined | T | React.ChangeEvent<any>) => void,
];

function useInputState<T>(initialState: T): UseInputStateReturnValue<T>
```

## Exported types

`UseInputStateReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseInputStateReturnValue } from '@mantine/hooks';
```
