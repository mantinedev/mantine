# useSelection
Package: @mantine/hooks
Import: import { UseSelection } from '@mantine/hooks';

## Usage

```tsx
import { Checkbox, Table } from '@mantine/core';
import { useSelection } from '@mantine/hooks';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const positions = useMemo(() => elements.map((element) => element.position), [elements]);

  const [selection, handlers] = useSelection({
    data: positions,
    defaultSelection: [39, 56],
  });

  const rows = elements.map((element) => {
    const isSelected = selection.includes(element.position);
    return (
      <Table.Tr key={element.name} bg={isSelected ? 'var(--mantine-color-blue-light)' : undefined}>
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={isSelected}
            onChange={(event) => {
              if (event.target.checked) {
                handlers.select(element.position);
              } else {
                handlers.deselect(element.position);
              }
            }}
          />
        </Table.Td>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.symbol}</Table.Td>
        <Table.Td>{element.mass}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Checkbox
              aria-label="Select deselect all rows"
              indeterminate={handlers.isSomeSelected()}
              checked={handlers.isAllSelected()}
              onChange={() => {
                if (handlers.isAllSelected()) {
                  handlers.resetSelection();
                } else {
                  handlers.setSelection(elements.map((el) => el.position));
                }
              }}
            />
          </Table.Th>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```


## Definition

```tsx
export interface UseSelectionInput<T> {
  /** The array of items to select from */
  data: T[];

  /** The initial selection, empty array by default */
  defaultSelection?: T[];

  /** If true, selection is reset when data changes */
  resetSelectionOnDataChange?: boolean;
}

export interface UseSelectionHandlers<T> {
  /** Add an item to the selection */
  select: (selected: T) => void;

  /** Remove an item from the selection */
  deselect: (deselected: T) => void;

  /** Toggle an item's selection state */
  toggle: (toggled: T) => void;

  /** Returns true if all items from the `data` are selected */
  isAllSelected: () => boolean;

  /** Returns true if at least one item from the `data` is selected */
  isSomeSelected: () => boolean;

  /** Set the selection to a specific array of items */
  setSelection: (selection: T[]) => void;

  /** Clear all selections */
  resetSelection: () => void;
}

export type UseSelectionReturnValue<T> = readonly [T[], UseSelectionHandlers<T>];

function useSelection<T>(input: UseSelectionInput<T>): UseSelectionReturnValue<T>
```

## Exported types

`UseSelectionInput`, `UseSelectionReturnValue` and `UseSelectionHandlers` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseSelectionInput, UseSelectionReturnValue, UseSelectionHandlers } from '@mantine/hooks';
```
