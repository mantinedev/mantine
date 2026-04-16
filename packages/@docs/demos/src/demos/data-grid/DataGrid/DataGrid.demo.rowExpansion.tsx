import { Group, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Group, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  return (
    <DataGrid
      data={employees}
      withRowExpansion
      getRowId={(row) => row.id}
      renderExpandedRow={({ row }) => (
        <Group p="md" gap="xl">
          <Text size="sm">Email: {row.original.email}</Text>
          <Text size="sm">Start date: {row.original.startDate}</Text>
          <Text size="sm">
            Salary: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.original.salary)}
          </Text>
        </Group>
      )}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
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
      withRowExpansion
      getRowId={(row) => row.id}
      renderExpandedRow={({ row }) => (
        <Group p="md" gap="xl">
          <Text size="sm">Email: {row.original.email}</Text>
          <Text size="sm">Start date: {row.original.startDate}</Text>
          <Text size="sm">
            Salary:{' '}
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
              row.original.salary
            )}
          </Text>
        </Group>
      )}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

export const rowExpansion: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
