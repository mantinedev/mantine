import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withRowSelection: true,
    enableMultiRowSelection: false,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const selectedId = Object.keys(rowSelection)[0] ?? null;

  return (
    <>
      <Text mb="md" size="sm">
        Selected row ID: <Code>{selectedId ?? 'none'}</Code>
      </Text>
      <DataGrid store={store} />
    </>
  );
}
`;

function Demo() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withRowSelection: true,
    enableMultiRowSelection: false,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const selectedId = Object.keys(rowSelection)[0] ?? null;

  return (
    <>
      <Text mb="md" size="sm">
        Selected row ID: <Code>{selectedId ?? 'none'}</Code>
      </Text>
      <DataGrid store={store} />
    </>
  );
}

export const rowSelectionSingle: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
