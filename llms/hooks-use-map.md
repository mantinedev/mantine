# useMap
Package: @mantine/hooks
Import: import { UseMap } from '@mantine/hooks';

## Usage

The `useMap` hook returns a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
object that can be used as React state – the `set`, `clear`, and `delete` methods update state and trigger rerender.

```tsx
import { PlusIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Table } from '@mantine/core';
import { useMap } from '@mantine/hooks';

function Demo() {
  const map = useMap([
    ['/hooks/use-media-query', 4124],
    ['/hooks/use-clipboard', 8341],
    ['/hooks/use-fetch', 9001],
  ]);

  const rows = Array.from(map.entries()).map(([key, value]) => (
    <Table.Tr key={key}>
      <Table.Td>{key}</Table.Td>
      <Table.Td>{value}</Table.Td>
      <Table.Td>
        <Group>
          <ActionIcon variant="default" onClick={() => map.set(key, value + 1)} fw={500}>
            <PlusIcon size={18} />
          </ActionIcon>
          <ActionIcon variant="default" onClick={() => map.delete(key)} c="red">
            <TrashIcon size={18} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table layout="fixed">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Page</Table.Th>
          <Table.Th>Views last month</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```


## Definition

```tsx
function useMap<T, V>(initialState?: [T, V][]): Map<T, V>;
```
