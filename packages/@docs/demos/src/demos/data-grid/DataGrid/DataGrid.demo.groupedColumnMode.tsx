import { useState } from 'react';
import { Button, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { Button, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [mode, setMode] = useState<'reorder' | 'remove' | false>('remove');

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    withGrouping: true,
    grouping: ['department'],
    groupedColumnMode: mode,
  });

  return (
    <div>
      <Text mb="xs">
        groupedColumnMode: <strong>{String(mode)}</strong>
      </Text>
      <Group mb="md">
        <Button
          size="xs"
          variant={mode === 'reorder' ? 'filled' : 'default'}
          onClick={() => setMode('reorder')}
        >
          reorder
        </Button>
        <Button
          size="xs"
          variant={mode === 'remove' ? 'filled' : 'default'}
          onClick={() => setMode('remove')}
        >
          remove
        </Button>
        <Button
          size="xs"
          variant={mode === false ? 'filled' : 'default'}
          onClick={() => setMode(false)}
        >
          false
        </Button>
      </Group>
      <DataGrid store={store} />
    </div>
  );
}
`;

function Demo() {
  const [mode, setMode] = useState<'reorder' | 'remove' | false>('remove');

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    withGrouping: true,
    grouping: ['department'],
    groupedColumnMode: mode,
  });

  return (
    <div>
      <Text mb="xs">
        groupedColumnMode: <strong>{String(mode)}</strong>
      </Text>
      <Group mb="md">
        <Button
          size="xs"
          variant={mode === 'reorder' ? 'filled' : 'default'}
          onClick={() => setMode('reorder')}
        >
          reorder
        </Button>
        <Button
          size="xs"
          variant={mode === 'remove' ? 'filled' : 'default'}
          onClick={() => setMode('remove')}
        >
          remove
        </Button>
        <Button
          size="xs"
          variant={mode === false ? 'filled' : 'default'}
          onClick={() => setMode(false)}
        >
          false
        </Button>
      </Group>
      <DataGrid store={store} />
    </div>
  );
}

export const groupedColumnMode: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
