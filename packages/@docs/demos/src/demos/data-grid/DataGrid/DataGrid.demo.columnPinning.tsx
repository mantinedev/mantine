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
      withColumnPinning
      columnPinning={{ left: ['firstName'], right: [] }}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'startDate', header: 'Start Date' },
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
      withColumnPinning
      columnPinning={{ left: ['firstName'], right: [] }}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'startDate', header: 'Start Date' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

export const columnPinning: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
