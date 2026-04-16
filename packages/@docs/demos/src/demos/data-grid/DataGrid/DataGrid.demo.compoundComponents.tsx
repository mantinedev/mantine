import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { DataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  return (
    <DataGrid
      data={employees}
      withGlobalFilter
      withColumnVisibility
      withPagination
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    >
      <DataGrid.Toolbar>
        <DataGrid.GlobalFilter />
        <DataGrid.ColumnVisibilityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
      <DataGrid.Pagination />
      <DataGrid.StatusBar />
    </DataGrid>
  );
}
`;

function Demo() {
  return (
    <DataGrid
      data={employees}
      withGlobalFilter
      withColumnVisibility
      withPagination
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    >
      <DataGrid.Toolbar>
        <DataGrid.GlobalFilter />
        <DataGrid.ColumnVisibilityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
      <DataGrid.Pagination />
      <DataGrid.StatusBar />
    </DataGrid>
  );
}

export const compoundComponents: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
