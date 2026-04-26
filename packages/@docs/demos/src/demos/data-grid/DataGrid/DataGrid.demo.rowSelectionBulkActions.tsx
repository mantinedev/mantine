import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Button, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Button, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [data, setData] = useState(employees);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withRowSelection: true,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const selectedRows = store.table.getSelectedRowModel().rows;

  const handleDeleteSelected = () => {
    const selectedIds = new Set(selectedRows.map((row) => row.id));
    setData((current) => current.filter((row) => !selectedIds.has(row.id)));
    setRowSelection({});
  };

  return (
    <>
      {selectedRows.length > 0 && (
        <Group mb="md" p="sm" bg="var(--mantine-color-blue-light)" style={{ borderRadius: 'var(--mantine-radius-sm)' }}>
          <Text size="sm" fw={500} c="blue">
            {selectedRows.length} row{selectedRows.length > 1 ? 's' : ''} selected
          </Text>
          <Button size="xs" color="red" onClick={handleDeleteSelected}>
            Delete selected
          </Button>
          <Button size="xs" variant="default" onClick={() => setRowSelection({})}>
            Clear selection
          </Button>
        </Group>
      )}
      <DataGrid store={store} />
    </>
  );
}
`;

function Demo() {
  const [data, setData] = useState(employees);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withRowSelection: true,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const selectedRows = store.table.getSelectedRowModel().rows;

  const handleDeleteSelected = () => {
    const selectedIds = new Set(selectedRows.map((row) => row.id));
    setData((current) => current.filter((row) => !selectedIds.has(row.id)));
    setRowSelection({});
  };

  return (
    <>
      {selectedRows.length > 0 && (
        <Group
          mb="md"
          p="sm"
          bg="var(--mantine-color-blue-light)"
          style={{ borderRadius: 'var(--mantine-radius-sm)' }}
        >
          <Text size="sm" fw={500} c="blue">
            {selectedRows.length} row{selectedRows.length > 1 ? 's' : ''} selected
          </Text>
          <Button size="xs" color="red" onClick={handleDeleteSelected}>
            Delete selected
          </Button>
          <Button size="xs" variant="default" onClick={() => setRowSelection({})}>
            Clear selection
          </Button>
        </Group>
      )}
      <DataGrid store={store} />
    </>
  );
}

export const rowSelectionBulkActions: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
