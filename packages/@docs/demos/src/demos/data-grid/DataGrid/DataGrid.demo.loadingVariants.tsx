import { useState } from 'react';
import { Group, SegmentedControl, Switch } from '@mantine/core';
import { DataGrid, DataGridProps, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { Group, SegmentedControl, Switch } from '@mantine/core';
import { DataGrid, DataGridProps, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [loading, setLoading] = useState(true);
  const [variant, setVariant] = useState<DataGridProps['loadingVariant']>('overlay');

  const store = useDataGrid({
    data: employees.slice(0, 6),
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
  });

  return (
    <>
      <Group mb="md">
        <SegmentedControl
          size="xs"
          data={['overlay', 'bar', 'skeleton']}
          value={variant}
          onChange={(value) => setVariant(value as DataGridProps['loadingVariant'])}
        />
        <Switch
          label="Loading"
          checked={loading}
          onChange={(event) => setLoading(event.currentTarget.checked)}
        />
      </Group>
      <DataGrid store={store} loading={loading} loadingVariant={variant} skeletonRowCount={6} />
    </>
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(true);
  const [variant, setVariant] = useState<DataGridProps['loadingVariant']>('overlay');

  const store = useDataGrid({
    data: employees.slice(0, 6),
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
  });

  return (
    <>
      <Group mb="md">
        <SegmentedControl
          size="xs"
          data={['overlay', 'bar', 'skeleton']}
          value={variant}
          onChange={(value) => setVariant(value as DataGridProps['loadingVariant'])}
        />
        <Switch
          label="Loading"
          checked={loading}
          onChange={(event) => setLoading(event.currentTarget.checked)}
        />
      </Group>
      <DataGrid store={store} loading={loading} loadingVariant={variant} skeletonRowCount={6} />
    </>
  );
}

export const loadingVariants: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
