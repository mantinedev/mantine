import { useState } from 'react';
import { RowPinningState } from '@tanstack/react-table';
import { ActionIcon, Group } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { RowPinningState } from '@tanstack/react-table';
import { ActionIcon, Group } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [rowPinning, setRowPinning] = useState<RowPinningState>({
    top: [],
    bottom: [],
  });

  const store = useDataGrid({
    data: employees,
    columns: [
      {
        id: 'pin',
        header: 'Pin',
        size: 100,
        cell: ({ row }) => (
          <Group gap={4} wrap="nowrap">
            <ActionIcon
              size="xs"
              variant={row.getIsPinned() === 'top' ? 'filled' : 'default'}
              onClick={() => row.pin(row.getIsPinned() === 'top' ? false : 'top')}
            >
              &#x2191;
            </ActionIcon>
            <ActionIcon
              size="xs"
              variant={row.getIsPinned() === 'bottom' ? 'filled' : 'default'}
              onClick={() => row.pin(row.getIsPinned() === 'bottom' ? false : 'bottom')}
            >
              &#x2193;
            </ActionIcon>
          </Group>
        ),
      },
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    rowPinning,
    onRowPinningChange: setRowPinning,
    enableRowPinning: true,
    keepPinnedRows: true,
    getRowId: (row) => row.id,
  });

  return <DataGrid store={store} stickyHeader height={300} />;
}
`;

function Demo() {
  const [rowPinning, setRowPinning] = useState<RowPinningState>({
    top: [],
    bottom: [],
  });

  const store = useDataGrid({
    data: employees,
    columns: [
      {
        id: 'pin',
        header: 'Pin',
        size: 100,
        cell: ({ row }) => (
          <Group gap={4} wrap="nowrap">
            <ActionIcon
              size="xs"
              variant={row.getIsPinned() === 'top' ? 'filled' : 'default'}
              onClick={() => row.pin(row.getIsPinned() === 'top' ? false : 'top')}
            >
              &#x2191;
            </ActionIcon>
            <ActionIcon
              size="xs"
              variant={row.getIsPinned() === 'bottom' ? 'filled' : 'default'}
              onClick={() => row.pin(row.getIsPinned() === 'bottom' ? false : 'bottom')}
            >
              &#x2193;
            </ActionIcon>
          </Group>
        ),
      },
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    rowPinning,
    onRowPinningChange: setRowPinning,
    enableRowPinning: true,
    keepPinnedRows: true,
    getRowId: (row) => row.id,
  });

  return <DataGrid store={store} stickyHeader height={300} />;
}

export const rowPinningInteractive: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
