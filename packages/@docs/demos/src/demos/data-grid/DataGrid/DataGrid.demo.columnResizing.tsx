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
      withColumnResizing
      columns={[
        { accessorKey: 'firstName', header: 'First Name', size: 150 },
        { accessorKey: 'lastName', header: 'Last Name', size: 150 },
        { accessorKey: 'email', header: 'Email', size: 250 },
        { accessorKey: 'department', header: 'Department', size: 150 },
        { accessorKey: 'salary', header: 'Salary', size: 120 },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <DataGrid
      data={employees}
      withColumnResizing
      columns={[
        { accessorKey: 'firstName', header: 'First Name', size: 150 },
        { accessorKey: 'lastName', header: 'Last Name', size: 150 },
        { accessorKey: 'email', header: 'Email', size: 250 },
        { accessorKey: 'department', header: 'Department', size: 150 },
        { accessorKey: 'salary', header: 'Salary', size: 120 },
      ]}
    />
  );
}

export const columnResizing: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
