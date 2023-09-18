import React from 'react';
import { Table, rem } from '@mantine/core';
import { DocsSection } from '@/components/DocsSection';

interface DataTableProps {
  data: React.ReactNode[][];
  head?: string[];
}

function getTransformedScaledValue(value: unknown) {
  if (typeof value !== 'string' || !value.includes('var(--mantine-scale)')) {
    return value as string;
  }

  return value
    .match(/^calc\((.*?)\)$/)?.[1]
    .split('*')[0]
    .trim();
}

export function MdxDataTable({ data, head }: DataTableProps) {
  const rows = data.map((row, index) => {
    const cells = row.map((cell, cellIndex) => (
      <Table.Td key={cellIndex}>{getTransformedScaledValue(cell)}</Table.Td>
    ));
    return <Table.Tr key={index}>{cells}</Table.Tr>;
  });

  const ths = Array.isArray(head)
    ? head.map((cell, index) => <Table.Th key={index}>{cell}</Table.Th>)
    : null;

  return (
    <DocsSection>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: rem(400) }}>
          <Table>
            {ths && (
              <Table.Thead>
                <Table.Tr>{ths}</Table.Tr>
              </Table.Thead>
            )}
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
    </DocsSection>
  );
}
