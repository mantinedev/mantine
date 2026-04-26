import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableHiding: false },
      { accessorKey: 'lastName', header: 'Last Name', enableHiding: false },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    withColumnVisibility: true,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <DataGrid.ColumnVisibilityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
    </DataGrid>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableHiding: false },
      { accessorKey: 'lastName', header: 'Last Name', enableHiding: false },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    withColumnVisibility: true,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <DataGrid.ColumnVisibilityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
    </DataGrid>
  );
}

export const columnVisibilityEnableHiding: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
