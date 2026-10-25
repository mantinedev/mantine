import { useState } from 'react';
import { GroupingState } from '@tanstack/react-table';
import { Button, Code, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { GroupingState } from '@tanstack/react-table';
import { Button, Code, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [grouping, setGrouping] = useState<GroupingState>([]);

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
    grouping,
    onGroupingChange: setGrouping,
  });

  const toggleGrouping = (columnId: string) => {
    setGrouping((prev) =>
      prev.includes(columnId) ? prev.filter((id) => id !== columnId) : [...prev, columnId]
    );
  };

  return (
    <div>
      <Text mb="xs">
        Active grouping: <Code>{grouping.length ? grouping.join(', ') : 'none'}</Code>
      </Text>
      <Group mb="md">
        <Button
          size="xs"
          variant={grouping.includes('department') ? 'filled' : 'default'}
          onClick={() => toggleGrouping('department')}
        >
          Group by Department
        </Button>
        <Button
          size="xs"
          variant={grouping.includes('status') ? 'filled' : 'default'}
          onClick={() => toggleGrouping('status')}
        >
          Group by Status
        </Button>
        <Button size="xs" variant="default" onClick={() => setGrouping([])}>
          Clear grouping
        </Button>
      </Group>
      <DataGrid store={store} />
    </div>
  );
}
`;

function Demo() {
  const [grouping, setGrouping] = useState<GroupingState>([]);

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
    grouping,
    onGroupingChange: setGrouping,
  });

  const toggleGrouping = (columnId: string) => {
    setGrouping((prev) =>
      prev.includes(columnId) ? prev.filter((id) => id !== columnId) : [...prev, columnId]
    );
  };

  return (
    <div>
      <Text mb="xs">
        Active grouping: <Code>{grouping.length ? grouping.join(', ') : 'none'}</Code>
      </Text>
      <Group mb="md">
        <Button
          size="xs"
          variant={grouping.includes('department') ? 'filled' : 'default'}
          onClick={() => toggleGrouping('department')}
        >
          Group by Department
        </Button>
        <Button
          size="xs"
          variant={grouping.includes('status') ? 'filled' : 'default'}
          onClick={() => toggleGrouping('status')}
        >
          Group by Status
        </Button>
        <Button size="xs" variant="default" onClick={() => setGrouping([])}>
          Clear grouping
        </Button>
      </Group>
      <DataGrid store={store} />
    </div>
  );
}

export const groupingInteractive: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
