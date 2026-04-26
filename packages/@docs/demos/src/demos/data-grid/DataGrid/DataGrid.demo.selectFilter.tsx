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
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name', enableColumnFilter: true },
      {
        accessorKey: 'department',
        header: 'Department',
        meta: { filterVariant: 'select' },
      },
      { accessorKey: 'salary', header: 'Salary', enableColumnFilter: true },
      {
        accessorKey: 'status',
        header: 'Status',
        meta: { filterVariant: 'select' },
      },
    ],
    withFaceting: true,
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name', enableColumnFilter: true },
      {
        accessorKey: 'department',
        header: 'Department',
        meta: { filterVariant: 'select' },
      },
      { accessorKey: 'salary', header: 'Salary', enableColumnFilter: true },
      {
        accessorKey: 'status',
        header: 'Status',
        meta: { filterVariant: 'select' },
      },
    ],
    withFaceting: true,
  });

  return <DataGrid store={store} />;
}

export const selectFilter: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
