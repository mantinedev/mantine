import { useState } from 'react';
import { ArchiveIcon, FolderIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionBar, ActionIcon, Checkbox, Group, Table, Text, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { ArchiveIcon, FolderIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionBar, ActionIcon, Checkbox, Group, Table, Text, Tooltip } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selection, setSelection] = useState<number[]>([]);

  const toggleRow = (position: number) =>
    setSelection((current) =>
      current.includes(position)
        ? current.filter((item) => item !== position)
        : [...current, position]
    );

  const toggleAll = () =>
    setSelection((current) =>
      current.length === elements.length ? [] : elements.map((element) => element.position)
    );

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.position}
      bg={selection.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selection.includes(element.position)}
          onChange={() => toggleRow(element.position)}
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                aria-label="Select all"
                checked={selection.length === elements.length}
                indeterminate={selection.length > 0 && selection.length !== elements.length}
                onChange={toggleAll}
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

      <ActionBar opened={selection.length > 0} onClose={() => setSelection([])}>
        <Text size="sm" fw={500}>{selection.length} rows selected</Text>
        <ActionBar.Divider />
        <Tooltip.Group openDelay={300} closeDelay={100}>
          <Group gap="xs">
            <Tooltip label="Delete">
              <ActionIcon variant="default" color="red" size="lg">
                <TrashIcon size={16} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Move to folder">
              <ActionIcon variant="default" size="lg">
                <FolderIcon size={16} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Archive">
              <ActionIcon variant="default" size="lg">
                <ArchiveIcon size={16} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Tooltip.Group>
        <ActionBar.Divider />
        <ActionBar.CloseButton />
      </ActionBar>
    </>
  );
}
`;

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selection, setSelection] = useState<number[]>([]);

  const toggleRow = (position: number) =>
    setSelection((current) =>
      current.includes(position)
        ? current.filter((item) => item !== position)
        : [...current, position]
    );

  const toggleAll = () =>
    setSelection((current) =>
      current.length === elements.length ? [] : elements.map((element) => element.position)
    );

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.position}
      bg={selection.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selection.includes(element.position)}
          onChange={() => toggleRow(element.position)}
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                aria-label="Select all"
                checked={selection.length === elements.length}
                indeterminate={selection.length > 0 && selection.length !== elements.length}
                onChange={toggleAll}
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

      <ActionBar opened={selection.length > 0} onClose={() => setSelection([])}>
        <Text size="sm" fw={500}>
          {selection.length} rows selected
        </Text>
        <ActionBar.Divider />
        <Tooltip.Group openDelay={300} closeDelay={100}>
          <Group gap="xs">
            <Tooltip label="Delete">
              <ActionIcon variant="default" color="red" size="lg">
                <TrashIcon size={16} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Move to folder">
              <ActionIcon variant="default" size="lg">
                <FolderIcon size={16} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Archive">
              <ActionIcon variant="default" size="lg">
                <ArchiveIcon size={16} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Tooltip.Group>
        <ActionBar.Divider />
        <ActionBar.CloseButton />
      </ActionBar>
    </>
  );
}

export const withActions: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
