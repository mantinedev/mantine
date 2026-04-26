import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Button, Code, Group, Paper, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Button, Code, Group, Paper, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withRowSelection: true,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const selectedIds = Object.keys(rowSelection);

  return (
    <>
      <Paper withBorder p="md" mb="md">
        <Group justify="space-between" mb={selectedIds.length > 0 ? 'xs' : undefined}>
          <Text size="sm" fw={500}>
            Selected rows: {selectedIds.length}
          </Text>
          <Button
            size="xs"
            variant="default"
            disabled={selectedIds.length === 0}
            onClick={() => setRowSelection({})}
          >
            Clear selection
          </Button>
        </Group>
        {selectedIds.length > 0 && <Code block>{JSON.stringify(selectedIds, null, 2)}</Code>}
      </Paper>
      <DataGrid store={store} />
    </>
  );
}
`;

function Demo() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    withRowSelection: true,
    rowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const selectedIds = Object.keys(rowSelection);

  return (
    <>
      <Paper withBorder p="md" mb="md">
        <Group justify="space-between" mb={selectedIds.length > 0 ? 'xs' : undefined}>
          <Text size="sm" fw={500}>
            Selected rows: {selectedIds.length}
          </Text>
          <Button
            size="xs"
            variant="default"
            disabled={selectedIds.length === 0}
            onClick={() => setRowSelection({})}
          >
            Clear selection
          </Button>
        </Group>
        {selectedIds.length > 0 && <Code block>{JSON.stringify(selectedIds, null, 2)}</Code>}
      </Paper>
      <DataGrid store={store} />
    </>
  );
}

export const rowSelectionControlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
