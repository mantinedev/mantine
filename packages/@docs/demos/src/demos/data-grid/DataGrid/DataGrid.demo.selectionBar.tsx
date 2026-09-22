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
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
    withGlobalFilter: true,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    pageSize: 8,
  });

  const selectedIds = () => new Set(Object.keys(rowSelection));

  const deactivateSelected = () => {
    const ids = selectedIds();
    setData((current) =>
      current.map((row) => (ids.has(row.id) ? { ...row, status: 'inactive' as const } : row))
    );
    setRowSelection({});
  };

  const deleteSelected = () => {
    const ids = selectedIds();
    setData((current) => current.filter((row) => !ids.has(row.id)));
    setRowSelection({});
  };

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar />
      <DataGrid.SelectionBar>
        <Button size={store.getControlSize()} variant="default" onClick={deactivateSelected}>
          Deactivate
        </Button>
        <Button size={store.getControlSize()} variant="light" color="red" onClick={deleteSelected}>
          Delete
        </Button>
      </DataGrid.SelectionBar>
      <DataGrid.Footer />
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
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
    withGlobalFilter: true,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    pageSize: 8,
  });

  const selectedIds = () => new Set(Object.keys(rowSelection));

  const deactivateSelected = () => {
    const ids = selectedIds();
    setData((current) =>
      current.map((row) => (ids.has(row.id) ? { ...row, status: 'inactive' as const } : row))
    );
    setRowSelection({});
  };

  const deleteSelected = () => {
    const ids = selectedIds();
    setData((current) => current.filter((row) => !ids.has(row.id)));
    setRowSelection({});
  };

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar />
      <DataGrid.SelectionBar>
        <Button size={store.getControlSize()} variant="default" onClick={deactivateSelected}>
          Deactivate
        </Button>
        <Button size={store.getControlSize()} variant="light" color="red" onClick={deleteSelected}>
          Delete
        </Button>
      </DataGrid.SelectionBar>
      <DataGrid.Footer />
    </DataGrid>
  );
}

export const selectionBar: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
