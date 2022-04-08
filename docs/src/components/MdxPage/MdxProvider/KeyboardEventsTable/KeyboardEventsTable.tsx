import React from 'react';
import { Kbd, Table, Code } from '@mantine/core';

interface KeyboardEventsTableProps {
  data: { key: string; description: string; condition: string }[];
}

export function KeyboardEventsTable({ data }: KeyboardEventsTableProps) {
  const rows = data.map((item, index) => (
    <tr key={index}>
      <td>
        <Kbd>{item.key}</Kbd>
      </td>
      <td>{item.description}</td>
      <td>{item.condition ? <Code>{item.condition}</Code> : '–'}</td>
    </tr>
  ));

  return (
    <Table verticalSpacing="md">
      <thead>
        <tr>
          <th>Key</th>
          <th>Description</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
