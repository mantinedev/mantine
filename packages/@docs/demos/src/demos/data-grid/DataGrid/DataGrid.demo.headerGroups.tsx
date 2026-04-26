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
      {
        header: 'Name',
        columns: [
          { accessorKey: 'firstName', header: 'First Name' },
          { accessorKey: 'lastName', header: 'Last Name' },
        ],
      },
      {
        header: 'Details',
        columns: [
          { accessorKey: 'email', header: 'Email' },
          { accessorKey: 'department', header: 'Department' },
        ],
      },
      { accessorKey: 'salary', header: 'Salary' },
    ],
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      {
        header: 'Name',
        columns: [
          { accessorKey: 'firstName', header: 'First Name' },
          { accessorKey: 'lastName', header: 'Last Name' },
        ],
      },
      {
        header: 'Details',
        columns: [
          { accessorKey: 'email', header: 'Email' },
          { accessorKey: 'department', header: 'Department' },
        ],
      },
      { accessorKey: 'salary', header: 'Salary' },
    ],
  });

  return <DataGrid store={store} />;
}

export const headerGroups: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
