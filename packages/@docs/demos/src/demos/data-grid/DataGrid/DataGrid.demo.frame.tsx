import { DataGrid, DataGridProps } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { employees } from './_data';

const columns = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'department', header: 'Department' },
  { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' as const } },
];

function Wrapper(props: DataGridProps) {
  return <DataGrid data={employees.slice(0, 5)} columns={columns} {...props} />;
}

const code = `
import { DataGrid } from '@mantine/data-grid';
import { employees } from './data';

const columns = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'department', header: 'Department' },
  { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' as const } },
];

function Demo() {
  return (
    <DataGrid
      data={employees.slice(0, 5)}
      columns={columns}
      {{props}}
    />
  );
}
`;

export const frame: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { prop: 'withTableBorder', type: 'boolean', initialValue: true, libraryValue: true },
    { prop: 'radius', type: 'size', initialValue: 'md', libraryValue: null },
  ],
};
