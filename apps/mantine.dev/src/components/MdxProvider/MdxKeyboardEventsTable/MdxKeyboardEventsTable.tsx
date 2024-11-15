import { Code, Kbd, Table } from '@mantine/core';

interface KeyboardEventsTableProps {
  data: { key: string; description: string; condition: string }[];
}

export function MdxKeyboardEventsTable({ data }: KeyboardEventsTableProps) {
  const hasCondition = data.some((item) => item.condition);
  const rows = data.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Kbd>{item.key}</Kbd>
      </Table.Td>
      <Table.Td>{item.description}</Table.Td>
      {hasCondition && <Table.Td>{item.condition ? <Code>{item.condition}</Code> : '–'}</Table.Td>}
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Key</Table.Th>
            <Table.Th>Description</Table.Th>
            {hasCondition && <Table.Th>Condition</Table.Th>}
          </Table.Tr>
        </Table.Thead>
        <tbody>{rows}</tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
