import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: [...employees].sort((a, b) => a.department.localeCompare(b.department)),
    columns: [
      { accessorKey: 'department', header: 'Department', spanRows: true },
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: [...employees].sort((a, b) => a.department.localeCompare(b.department)),
    columns: [
      { accessorKey: 'department', header: 'Department', spanRows: true },
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
  });

  return <DataGrid store={store} />;
}

export const cellSpanning: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
