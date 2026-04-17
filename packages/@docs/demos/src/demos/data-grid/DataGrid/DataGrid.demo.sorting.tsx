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
      withSorting
      columns={[
        { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
        { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
        { accessorKey: 'department', header: 'Department', enableSorting: true },
        { accessorKey: 'salary', header: 'Salary', enableSorting: true },
        { accessorKey: 'startDate', header: 'Start Date' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <DataGrid
      data={employees}
      withSorting
      columns={[
        { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
        { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
        { accessorKey: 'department', header: 'Department', enableSorting: true },
        { accessorKey: 'salary', header: 'Salary', enableSorting: true },
        { accessorKey: 'startDate', header: 'Start Date' },
      ]}
    />
  );
}

export const sorting: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
