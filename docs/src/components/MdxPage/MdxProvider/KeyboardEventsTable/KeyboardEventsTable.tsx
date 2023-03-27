import React from 'react';
import { Kbd, Table, Code, rem } from '@mantine/core';

interface KeyboardEventsTableProps {
  data: { key: string; description: string; condition: string }[];
}

export function KeyboardEventsTable({ data }: KeyboardEventsTableProps) {
  const hasCondition = data.some((item) => item.condition);
  const rows = data.map((item, index) => (
    <tr key={index}>
      <td>
        <Kbd>{item.key}</Kbd>
      </td>
      <td>{item.description}</td>
      {hasCondition && <td>{item.condition ? <Code>{item.condition}</Code> : '–'}</td>}
    </tr>
  ));

  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{ minWidth: rem(500) }}>
        <Table verticalSpacing="md">
          <thead>
            <tr>
              <th>Key</th>
              <th>Description</th>
              {hasCondition && <th>Condition</th>}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}
