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
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    withCellSelection: true,
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
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    withCellSelection: true,
  });

  return <DataGrid store={store} />;
}

export const cellSelection: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
