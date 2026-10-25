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
  const [grouping, setGrouping] = useState<GroupingState>(['department']);

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: {
          formatAggregatedValue: (value) => \`$\${Math.round(Number(value)).toLocaleString()}\`,
        },
        aggregationFn: 'mean',
        aggregatedCell: ({ getValue }) =>
          \`Avg: $\${Math.round(getValue() as number).toLocaleString()}\`,
      },
      {
        accessorKey: 'status',
        header: 'Count',
        aggregationFn: 'count',
        aggregatedCell: ({ getValue }) => \`\${getValue()} employees\`,
      },
    ],
    withGrouping: true,
    grouping,
    onGroupingChange: setGrouping,
  });

  return (
    <div>
      <Text mb="xs">
        Grouping by: <Code>{grouping.length ? grouping.join(', ') : 'none'}</Code>
      </Text>
      <Group mb="md">
        <Button
          size="xs"
          variant={grouping.includes('department') ? 'filled' : 'default'}
          onClick={() =>
            setGrouping((prev) =>
              prev.includes('department')
                ? prev.filter((id) => id !== 'department')
                : [...prev, 'department']
            )
          }
        >
          Group by Department
        </Button>
        <Button
          size="xs"
          variant={grouping.includes('status') ? 'filled' : 'default'}
          onClick={() =>
            setGrouping((prev) =>
              prev.includes('status')
                ? prev.filter((id) => id !== 'status')
                : [...prev, 'status']
            )
          }
        >
          Group by Status
        </Button>
        <Button size="xs" variant="default" onClick={() => setGrouping([])}>
          Clear
        </Button>
      </Group>
      <DataGrid store={store} />
    </div>
  );
}
`;

function Demo() {
  const [grouping, setGrouping] = useState<GroupingState>(['department']);

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: {
          formatAggregatedValue: (value) => `$${Math.round(Number(value)).toLocaleString()}`,
        },
        aggregationFn: 'mean',
        aggregatedCell: ({ getValue }) =>
          `Avg: $${Math.round(getValue() as number).toLocaleString()}`,
      },
      {
        accessorKey: 'status',
        header: 'Count',
        aggregationFn: 'count',
        aggregatedCell: ({ getValue }) => `${getValue()} employees`,
      },
    ],
    withGrouping: true,
    grouping,
    onGroupingChange: setGrouping,
  });

  return (
    <div>
      <Text mb="xs">
        Grouping by: <Code>{grouping.length ? grouping.join(', ') : 'none'}</Code>
      </Text>
      <Group mb="md">
        <Button
          size="xs"
          variant={grouping.includes('department') ? 'filled' : 'default'}
          onClick={() =>
            setGrouping((prev) =>
              prev.includes('department')
                ? prev.filter((id) => id !== 'department')
                : [...prev, 'department']
            )
          }
        >
          Group by Department
        </Button>
        <Button
          size="xs"
          variant={grouping.includes('status') ? 'filled' : 'default'}
          onClick={() =>
            setGrouping((prev) =>
              prev.includes('status') ? prev.filter((id) => id !== 'status') : [...prev, 'status']
            )
          }
        >
          Group by Status
        </Button>
        <Button size="xs" variant="default" onClick={() => setGrouping([])}>
          Clear
        </Button>
      </Group>
      <DataGrid store={store} />
    </div>
  );
}

export const groupingAggregation: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
