# useSet
Package: @mantine/hooks
Import: import { UseSet } from '@mantine/hooks';

## Usage

The `useSet` hook returns a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
object that can be used as React state: the `add`, `clear`, and `delete` methods trigger state updates.

```tsx
import { useState } from 'react';
import { Code, Stack, TextInput } from '@mantine/core';
import { useSet } from '@mantine/hooks';

function Demo() {
  const [input, setInput] = useState('');
  const scopes = useSet<string>(['@mantine', '@mantine-tests', '@mantinex']);

  const isDuplicate = scopes.has(input.trim().toLowerCase());

  const items = Array.from(scopes).map((scope) => <Code key={scope}>{scope}</Code>);

  return (
    <>
      <TextInput
        label="Add new scope"
        placeholder="Enter scope"
        description="Duplicate scopes are not allowed"
        value={input}
        onChange={(event) => setInput(event.currentTarget.value)}
        error={isDuplicate && 'Scope already exists'}
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Enter' && !isDuplicate) {
            scopes.add(input.trim().toLowerCase());
            setInput('');
          }
        }}
      />

      <Stack gap={5} align="flex-start" mt="md">
        {items}
      </Stack>
    </>
  );
}
```


## Definition

```tsx
function useSet<T>(values?: T[]): Set<T>;
```
