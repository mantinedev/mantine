import React from 'react';
import { Kbd, Table, Code, rem } from '@mantine/core';

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
    <div style={{ overflowX: 'auto' }}>
      <div style={{ minWidth: rem(500) }}>
        <Table verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Td>Key</Table.Td>
              <Table.Td>Description</Table.Td>
              {hasCondition && <Table.Td>Condition</Table.Td>}
            </Table.Tr>
          </Table.Thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}
