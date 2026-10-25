import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Button } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Button } from '@mantine/core';
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
    withGlobalFilter: true,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const handleDeleteSelected = () => {
    const selectedIds = new Set(Object.keys(rowSelection));
    setData((current) => current.filter((row) => !selectedIds.has(row.id)));
    setRowSelection({});
  };

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar />
      <DataGrid.SelectionBar>
        <Button size={store.getControlSize()} variant="default" onClick={handleDeleteSelected}>
          Delete selected
        </Button>
      </DataGrid.SelectionBar>
    </DataGrid>
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
    withGlobalFilter: true,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const handleDeleteSelected = () => {
    const selectedIds = new Set(Object.keys(rowSelection));
    setData((current) => current.filter((row) => !selectedIds.has(row.id)));
    setRowSelection({});
  };

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar />
      <DataGrid.SelectionBar>
        <Button size={store.getControlSize()} variant="default" onClick={handleDeleteSelected}>
          Delete selected
        </Button>
      </DataGrid.SelectionBar>
    </DataGrid>
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
