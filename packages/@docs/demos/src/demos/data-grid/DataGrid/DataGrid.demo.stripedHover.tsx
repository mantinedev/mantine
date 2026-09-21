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
      striped
      highlightOnHover
      withRowBorders={false}
      stripedColor="var(--mantine-color-blue-light)"
      highlightOnHoverColor="var(--mantine-color-blue-light-hover)"
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email', size: 220 },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <DataGrid
      data={employees}
      striped
      highlightOnHover
      withRowBorders={false}
      stripedColor="var(--mantine-color-blue-light)"
      highlightOnHoverColor="var(--mantine-color-blue-light-hover)"
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email', size: 220 },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
      ]}
    />
  );
}

export const stripedHover: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
