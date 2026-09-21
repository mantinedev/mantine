import { Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
    ],
    withRowExpansion: true,
    getRowId: (row) => row.id,
    tableOptions: { initialState: { expanded: { '2': true } } },
  });

  return (
    <DataGrid
      store={store}
      withTintedExpandedRows
      expandOnRowClick
      renderExpandedRow={({ row }) => (
        <Group gap="xl">
          <Text size="sm">Email: {row.original.email}</Text>
          <Text size="sm">Start date: {row.original.startDate}</Text>
        </Group>
      )}
    />
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
    ],
    withRowExpansion: true,
    getRowId: (row) => row.id,
    tableOptions: { initialState: { expanded: { '2': true } } },
  });

  return (
    <DataGrid
      store={store}
      withTintedExpandedRows
      expandOnRowClick
      renderExpandedRow={({ row }) => (
        <Group gap="xl">
          <Text size="sm">Email: {row.original.email}</Text>
          <Text size="sm">Start date: {row.original.startDate}</Text>
        </Group>
      )}
    />
  );
}

export const expandedRowsTinted: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
