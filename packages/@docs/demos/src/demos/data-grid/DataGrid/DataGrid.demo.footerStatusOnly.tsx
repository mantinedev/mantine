import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees.slice(0, 8),
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Footer pagination="none" statusFormat="long" />
    </DataGrid>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees.slice(0, 8),
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Footer pagination="none" statusFormat="long" />
    </DataGrid>
  );
}

export const footerStatusOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
