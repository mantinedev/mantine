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
      tableOptions={{ enableMultiSort: true }}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
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
      tableOptions={{ enableMultiSort: true }}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

export const multiSort: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
