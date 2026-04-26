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
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true },
      { accessorKey: 'status', header: 'Status', enableSorting: true },
    ],
    withSorting: true,
    tableOptions: { enableMultiSort: true },
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true },
      { accessorKey: 'status', header: 'Status', enableSorting: true },
    ],
    withSorting: true,
    tableOptions: { enableMultiSort: true },
  });

  return <DataGrid store={store} />;
}

export const multiSort: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
