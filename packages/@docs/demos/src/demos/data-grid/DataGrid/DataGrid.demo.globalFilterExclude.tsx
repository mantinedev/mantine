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
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      {
        accessorKey: 'email',
        header: 'Email (excluded)',
        enableGlobalFilter: false,
      },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary (excluded)',
        enableGlobalFilter: false,
      },
    ],
    withGlobalFilter: true,
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      {
        accessorKey: 'email',
        header: 'Email (excluded)',
        enableGlobalFilter: false,
      },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary (excluded)',
        enableGlobalFilter: false,
      },
    ],
    withGlobalFilter: true,
  });

  return <DataGrid store={store} />;
}

export const globalFilterExclude: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
