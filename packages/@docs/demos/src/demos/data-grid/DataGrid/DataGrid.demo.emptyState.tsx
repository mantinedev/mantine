import { useState } from 'react';
import { Button, Stack, Switch, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, Employee, employees } from './_data';

const code = `
import { useState } from 'react';
import { Button, Stack, Switch, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

const noEmployees: typeof employees = [];

function Demo() {
  const [noData, setNoData] = useState(false);

  const store = useDataGrid({
    data: noData ? noEmployees : employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    withGlobalFilter: true,
  });

  return (
    <>
      <Switch
        mb="md"
        label="Simulate an empty data source"
        checked={noData}
        onChange={(event) => setNoData(event.currentTarget.checked)}
      />
      <DataGrid
        store={store}
        emptyState={({ isFiltered, rowCount }) => (
          <Stack align="center" gap="xs" py="xl">
            <Text fw={500}>{isFiltered ? 'No employees match your search' : 'No employees yet'}</Text>
            <Text size="sm" c="dimmed">
              {isFiltered
                ? \`Nothing matched in \${rowCount} employees\`
                : 'Add an employee to get started'}
            </Text>
            {isFiltered ? (
              <Button size="xs" variant="default" onClick={() => store.setGlobalFilter('')}>
                Clear search
              </Button>
            ) : (
              <Button size="xs">Add employee</Button>
            )}
          </Stack>
        )}
      >
        <DataGrid.Toolbar />
      </DataGrid>
    </>
  );
}
`;

const noEmployees: Employee[] = [];

function Demo() {
  const [noData, setNoData] = useState(false);

  const store = useDataGrid({
    data: noData ? noEmployees : employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    withGlobalFilter: true,
  });

  return (
    <>
      <Switch
        mb="md"
        label="Simulate an empty data source"
        checked={noData}
        onChange={(event) => setNoData(event.currentTarget.checked)}
      />
      <DataGrid
        store={store}
        emptyState={({ isFiltered, rowCount }) => (
          <Stack align="center" gap="xs" py="xl">
            <Text fw={500}>
              {isFiltered ? 'No employees match your search' : 'No employees yet'}
            </Text>
            <Text size="sm" c="dimmed">
              {isFiltered
                ? `Nothing matched in ${rowCount} employees`
                : 'Add an employee to get started'}
            </Text>
            {isFiltered ? (
              <Button size="xs" variant="default" onClick={() => store.setGlobalFilter('')}>
                Clear search
              </Button>
            ) : (
              <Button size="xs">Add employee</Button>
            )}
          </Stack>
        )}
      >
        <DataGrid.Toolbar />
      </DataGrid>
    </>
  );
}

export const emptyState: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
