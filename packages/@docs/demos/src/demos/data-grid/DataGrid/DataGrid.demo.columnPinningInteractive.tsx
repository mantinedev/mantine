import { useState } from 'react';
import { ColumnPinningState } from '@tanstack/react-table';
import { Button, Code, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { ColumnPinningState } from '@tanstack/react-table';
import { Button, Code, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    start: [],
    end: [],
  });

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', size: 150 },
      { accessorKey: 'lastName', header: 'Last Name', size: 150 },
      { accessorKey: 'email', header: 'Email', size: 250 },
      { accessorKey: 'department', header: 'Department', size: 150 },
      { accessorKey: 'salary', header: 'Salary', size: 150 },
      { accessorKey: 'startDate', header: 'Start Date', size: 150 },
      { accessorKey: 'status', header: 'Status', size: 120 },
    ],
    columnPinning,
    onColumnPinningChange: setColumnPinning,
  });

  return (
    <div style={{ maxWidth: 600 }}>
      <Text mb="xs">
        Pinned start: <Code>{JSON.stringify(columnPinning.start)}</Code>, end:{' '}
        <Code>{JSON.stringify(columnPinning.end)}</Code>
      </Text>
      <Group mb="md">
        <Button size="xs" onClick={() => setColumnPinning({ start: ['firstName'], end: [] })}>
          Pin firstName to start
        </Button>
        <Button size="xs" onClick={() => setColumnPinning({ start: [], end: ['status'] })}>
          Pin status to end
        </Button>
        <Button
          size="xs"
          onClick={() => setColumnPinning({ start: ['firstName'], end: ['status'] })}
        >
          Pin both
        </Button>
        <Button
          size="xs"
          variant="default"
          onClick={() => setColumnPinning({ start: [], end: [] })}
        >
          Unpin all
        </Button>
      </Group>
      <DataGrid store={store} />
    </div>
  );
}
`;

function Demo() {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    start: [],
    end: [],
  });

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', size: 150 },
      { accessorKey: 'lastName', header: 'Last Name', size: 150 },
      { accessorKey: 'email', header: 'Email', size: 250 },
      { accessorKey: 'department', header: 'Department', size: 150 },
      { accessorKey: 'salary', header: 'Salary', size: 150 },
      { accessorKey: 'startDate', header: 'Start Date', size: 150 },
      { accessorKey: 'status', header: 'Status', size: 120 },
    ],
    columnPinning,
    onColumnPinningChange: setColumnPinning,
  });

  return (
    <div style={{ maxWidth: 600 }}>
      <Text mb="xs">
        Pinned start: <Code>{JSON.stringify(columnPinning.start)}</Code>, end:{' '}
        <Code>{JSON.stringify(columnPinning.end)}</Code>
      </Text>
      <Group mb="md">
        <Button size="xs" onClick={() => setColumnPinning({ start: ['firstName'], end: [] })}>
          Pin firstName to start
        </Button>
        <Button size="xs" onClick={() => setColumnPinning({ start: [], end: ['status'] })}>
          Pin status to end
        </Button>
        <Button
          size="xs"
          onClick={() => setColumnPinning({ start: ['firstName'], end: ['status'] })}
        >
          Pin both
        </Button>
        <Button
          size="xs"
          variant="default"
          onClick={() => setColumnPinning({ start: [], end: [] })}
        >
          Unpin all
        </Button>
      </Group>
      <DataGrid store={store} />
    </div>
  );
}

export const columnPinningInteractive: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
