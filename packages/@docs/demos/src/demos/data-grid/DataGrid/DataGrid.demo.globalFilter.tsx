import { TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { TextInput } from '@mantine/core';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withGlobalFilter: true,
  });

  return (
    <>
      <TextInput
        placeholder="Search..."
        value={store.globalFilter ?? ''}
        onChange={(event) => store.setGlobalFilter(event.currentTarget.value)}
        mb="md"
      />
      <DataGrid store={store} />
    </>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withGlobalFilter: true,
  });

  return (
    <>
      <TextInput
        placeholder="Search..."
        value={store.globalFilter ?? ''}
        onChange={(event) => store.setGlobalFilter(event.currentTarget.value)}
        mb="md"
      />
      <DataGrid store={store} />
    </>
  );
}

export const globalFilter: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
