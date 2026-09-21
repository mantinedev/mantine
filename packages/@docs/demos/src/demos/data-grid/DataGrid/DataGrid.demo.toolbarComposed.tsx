import { PlusIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { PlusIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    withGlobalFilter: true,
    withColumnVisibility: true,
    pageSize: 10,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <DataGrid.GlobalFilter />
        <DataGrid.RowCount />
        <div style={{ flex: 1 }} />
        <Button size={store.controlSize} leftSection={<PlusIcon size={14} />}>
          Add employee
        </Button>
        <DataGrid.ColumnVisibilityToggle />
        <DataGrid.ExportButton fileName="employees" formats={['csv', 'excel']} />
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    withGlobalFilter: true,
    withColumnVisibility: true,
    pageSize: 10,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <DataGrid.GlobalFilter />
        <DataGrid.RowCount />
        <div style={{ flex: 1 }} />
        <Button size={store.controlSize} leftSection={<PlusIcon size={14} />}>
          Add employee
        </Button>
        <DataGrid.ColumnVisibilityToggle />
        <DataGrid.ExportButton fileName="employees" formats={['csv', 'excel']} />
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}

export const toolbarComposed: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
