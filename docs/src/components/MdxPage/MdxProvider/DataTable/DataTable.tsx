import React from 'react';
import { Table, rem } from '@mantine/core';
import DocsSection from '../../../DocsSection/DocsSection';

interface DataTableProps {
  data: React.ReactNode[][];
  head?: string[];
}

export default function DataTable({ data, head }: DataTableProps) {
  const rows = data.map((row, index) => {
    const cells = row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>);
    return <tr key={index}>{cells}</tr>;
  });

  const ths = Array.isArray(head) ? head.map((cell, index) => <th key={index}>{cell}</th>) : null;

  return (
    <DocsSection>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: rem(400) }}>
          <Table>
            {ths && (
              <thead>
                <tr>{ths}</tr>
              </thead>
            )}
            <tbody>{rows}</tbody>
          </Table>
        </div>
      </div>
    </DocsSection>
  );
}
