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
      { accessorKey: 'firstName', header: 'First Name', size: 150, minSize: 100, maxSize: 300 },
      { accessorKey: 'lastName', header: 'Last Name', size: 150, minSize: 100, maxSize: 300 },
      { accessorKey: 'email', header: 'Email', size: 250, minSize: 200 },
      { accessorKey: 'department', header: 'Department', size: 120, minSize: 80, maxSize: 150 },
      { accessorKey: 'salary', header: 'Salary', size: 100 },
    ],
    withColumnResizing: true,
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', size: 150, minSize: 100, maxSize: 300 },
      { accessorKey: 'lastName', header: 'Last Name', size: 150, minSize: 100, maxSize: 300 },
      { accessorKey: 'email', header: 'Email', size: 250, minSize: 200 },
      { accessorKey: 'department', header: 'Department', size: 120, minSize: 80, maxSize: 150 },
      { accessorKey: 'salary', header: 'Salary', size: 100 },
    ],
    withColumnResizing: true,
  });

  return <DataGrid store={store} />;
}

export const columnSizingMinMax: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
