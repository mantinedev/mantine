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
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
      styles={{
        thead: { backgroundColor: 'var(--mantine-color-blue-light)' },
        th: { fontWeight: 700 },
        td: { fontSize: 'var(--mantine-font-size-sm)' },
        tr: { borderBottom: '1px solid var(--mantine-color-border)' },
      }}
    />
  );
}
`;

function Demo() {
  return (
    <DataGrid
      data={employees}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
      styles={{
        thead: { backgroundColor: 'var(--mantine-color-blue-light)' },
        th: { fontWeight: 700 },
        td: { fontSize: 'var(--mantine-font-size-sm)' },
        tr: { borderBottom: '1px solid var(--mantine-color-border)' },
      }}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
