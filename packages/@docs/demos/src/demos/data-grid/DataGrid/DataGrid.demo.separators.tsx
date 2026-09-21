import { Stack, Text } from '@mantine/core';
import { DataGrid, DataGridProps } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Stack, Text } from '@mantine/core';
import { DataGrid, DataGridProps } from '@mantine/data-grid';
import { employees } from './data';

const columns = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'department', header: 'Department' },
  { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' as const } },
];

const looks: { label: string; props: Partial<DataGridProps> }[] = [
  { label: 'Default rules', props: {} },
  { label: 'Subtle rules', props: { withRowBorders: 'subtle' } },
  { label: 'Stripes without rules', props: { striped: true, withRowBorders: false } },
  { label: 'Column borders between data columns', props: { withColumnBorders: 'data' } },
  { label: 'Every separator', props: { striped: 'even', withColumnBorders: true } },
];

function Demo() {
  return (
    <Stack gap="lg">
      {looks.map(({ label, props }) => (
        <div key={label}>
          <Text size="sm" fw={500} mb="xs">
            {label}
          </Text>
          <DataGrid
            data={employees.slice(0, 4)}
            columns={columns}
            highlightOnHover
            {...props}
          />
        </div>
      ))}
    </Stack>
  );
}
`;

const columns = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'department', header: 'Department' },
  { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' as const } },
];

const looks: { label: string; props: Partial<DataGridProps> }[] = [
  { label: 'Default rules', props: {} },
  { label: 'Subtle rules', props: { withRowBorders: 'subtle' } },
  { label: 'Stripes without rules', props: { striped: true, withRowBorders: false } },
  { label: 'Column borders between data columns', props: { withColumnBorders: 'data' } },
  { label: 'Every separator', props: { striped: 'even', withColumnBorders: true } },
];

function Demo() {
  return (
    <Stack gap="lg">
      {looks.map(({ label, props }) => (
        <div key={label}>
          <Text size="sm" fw={500} mb="xs">
            {label}
          </Text>
          <DataGrid data={employees.slice(0, 4)} columns={columns} highlightOnHover {...props} />
        </div>
      ))}
    </Stack>
  );
}

export const separators: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
