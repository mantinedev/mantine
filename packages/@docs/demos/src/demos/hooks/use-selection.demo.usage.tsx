import React from 'react';
import { Button, Checkbox, Group, Table, Text } from '@mantine/core';
import { useSelection } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
const elements = [
  { id: '1', position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { id: '2', position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { id: '3', position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { id: '4', position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { id: '5', position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  // Initialize with the first item selected as an example
  const [selected, handlers] = useSelection(elements, [elements[0]]);

  const allSelected = handlers.isAllSelected();
  const someSelected = handlers.isSomeSelected();

  const rows = elements.map((item) => {
    // Check if item (by id) is in the selected array
    const isSelected = selected.some((s) => s.id === item.id);
    return (
      <Table.Tr key={item.id} bg={isSelected ? 'var(--mantine-color-blue-light)' : undefined}>
        <Table.Td>
          <Checkbox
            checked={isSelected}
            onChange={() => handlers.toggle(item)}
          />
        </Table.Td>
        <Table.Td>{item.position}</Table.Td>
        <Table.Td>{item.name}</Table.Td>
        <Table.Td>{item.symbol}</Table.Td>
        <Table.Td>{item.mass}</Table.Td>
      </Table.Tr>
    );
  });

  const handleSelectAllToggle = () => {
    if (allSelected) {
      handlers.resetSelection();
    } else {
      handlers.setSelection(elements);
    }
  };

  return (
    <>
      <Group mb="md">
        <Button onClick={handleSelectAllToggle}>
          {allSelected ? 'Deselect all' : 'Select all'}
        </Button>
        <Button onClick={() => handlers.setSelection([elements[1], elements[3]])} variant="light">
          Select Nitrogen & Barium
        </Button>
        <Button onClick={handlers.resetSelection} variant="outline" color="red">
          Reset selection
        </Button>
      </Group>

      <Text mb="xs" size="sm">
        Selected items: {selected.map(s => s.name).join(', ') || 'None'} (Total: {selected.length})
      </Text>

      <Table miw={700} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: '2rem' }}>
              <Checkbox
                checked={allSelected}
                indeterminate={someSelected && !allSelected}
                onChange={handleSelectAllToggle}
                aria-label="Select all rows"
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
    </>
  );
}
`

const elements = [
  { id: '1', position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { id: '2', position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { id: '3', position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { id: '4', position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { id: '5', position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  // Initialize with the first item selected as an example
  const [selected, handlers] = useSelection(elements, [elements[0]]);

  const allSelected = handlers.isAllSelected();
  const someSelected = handlers.isSomeSelected();

  const rows = elements.map((item) => {
    // Check if item (by id) is in the selected array
    const isSelected = selected.some((s) => s.id === item.id);
    return (
      <Table.Tr key={item.id} bg={isSelected ? 'var(--mantine-color-blue-light)' : undefined}>
        <Table.Td>
          <Checkbox
            checked={isSelected}
            onChange={() => handlers.toggle(item)}
            aria-label={`Select row ${item.name}`}
          />
        </Table.Td>
        <Table.Td>{item.position}</Table.Td>
        <Table.Td>{item.name}</Table.Td>
        <Table.Td>{item.symbol}</Table.Td>
        <Table.Td>{item.mass}</Table.Td>
      </Table.Tr>
    );
  });

  const handleSelectAllToggle = () => {
    if (allSelected) {
      handlers.resetSelection();
    } else {
      handlers.setSelection(elements);
    }
  };

  return (
    <>
      <Group mb="md">
        <Button onClick={handleSelectAllToggle}>
          {allSelected ? 'Deselect all' : 'Select all'}
        </Button>
        <Button onClick={() => handlers.setSelection([elements[1], elements[3]])} variant="light">
          Select Nitrogen & Barium
        </Button>
        <Button onClick={handlers.resetSelection} variant="outline" color="red">
          Reset selection
        </Button>
      </Group>

      <Text mb="xs" size="sm">
        Selected items: {selected.map(s => s.name).join(', ') || 'None'} (Total: {selected.length})
      </Text>

      <Table miw={700} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: '2rem' }}>
              <Checkbox
                checked={allSelected}
                indeterminate={someSelected && !allSelected}
                onChange={handleSelectAllToggle}
                aria-label="Select all rows"
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
    </>
  );
}

export const useSelectionUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
