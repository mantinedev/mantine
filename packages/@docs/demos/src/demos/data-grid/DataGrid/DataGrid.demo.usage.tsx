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
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <DataGrid
      data={employees}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
      {...props}
    />
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [
    { type: 'boolean', prop: 'striped', initialValue: false, libraryValue: false },
    { type: 'boolean', prop: 'highlightOnHover', initialValue: false, libraryValue: false },
    { type: 'boolean', prop: 'stickyHeader', initialValue: false, libraryValue: false },
    { type: 'boolean', prop: 'withRowNumbers', initialValue: false, libraryValue: false },
  ],
};
