import { useState } from 'react';
import { ExpandedState } from '@tanstack/react-table';
import { Button, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { ExpandedState } from '@tanstack/react-table';
import { Button, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withRowExpansion: true,
    expanded,
    onExpandedChange: setExpanded,
    getRowId: (row) => row.id,
  });

  const expandedCount = typeof expanded === 'boolean' ? 'all' : Object.keys(expanded).length;

  return (
    <>
      <Group mb="md">
        <Button size="xs" variant="default" onClick={() => store.table.toggleAllRowsExpanded(true)}>
          Expand all
        </Button>
        <Button size="xs" variant="default" onClick={() => store.table.toggleAllRowsExpanded(false)}>
          Collapse all
        </Button>
        <Text size="sm" c="dimmed">
          Expanded rows: {expandedCount}
        </Text>
      </Group>
      <DataGrid
        store={store}
        renderExpandedRow={({ row }) => (
          <Group gap="xl">
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
      />
    </>
  );
}
`;

function Demo() {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withRowExpansion: true,
    expanded,
    onExpandedChange: setExpanded,
    getRowId: (row) => row.id,
  });

  const expandedCount = typeof expanded === 'boolean' ? 'all' : Object.keys(expanded).length;

  return (
    <>
      <Group mb="md">
        <Button size="xs" variant="default" onClick={() => store.table.toggleAllRowsExpanded(true)}>
          Expand all
        </Button>
        <Button
          size="xs"
          variant="default"
          onClick={() => store.table.toggleAllRowsExpanded(false)}
        >
          Collapse all
        </Button>
        <Text size="sm" c="dimmed">
          Expanded rows: {expandedCount}
        </Text>
      </Group>
      <DataGrid
        store={store}
        renderExpandedRow={({ row }) => (
          <Group gap="xl">
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
      />
    </>
  );
}

export const rowExpansionControlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
