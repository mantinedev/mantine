import { useState } from 'react';
import { ColumnResizeMode } from '@tanstack/react-table';
import { SegmentedControl } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { ColumnResizeMode } from '@tanstack/react-table';
import { SegmentedControl } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [resizeMode, setResizeMode] = useState<ColumnResizeMode>('onEnd');

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', size: 150 },
      { accessorKey: 'lastName', header: 'Last Name', size: 150 },
      { accessorKey: 'email', header: 'Email', size: 250 },
      { accessorKey: 'department', header: 'Department', size: 150 },
      { accessorKey: 'salary', header: 'Salary', size: 120 },
    ],
    withColumnResizing: true,
    columnResizeMode: resizeMode,
  });

  return (
    <>
      <SegmentedControl
        value={resizeMode}
        onChange={(value) => setResizeMode(value as ColumnResizeMode)}
        data={['onChange', 'onEnd']}
        mb="md"
      />
      <DataGrid store={store} />
    </>
  );
}
`;

function Demo() {
  const [resizeMode, setResizeMode] = useState<ColumnResizeMode>('onEnd');

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', size: 150 },
      { accessorKey: 'lastName', header: 'Last Name', size: 150 },
      { accessorKey: 'email', header: 'Email', size: 250 },
      { accessorKey: 'department', header: 'Department', size: 150 },
      { accessorKey: 'salary', header: 'Salary', size: 120 },
    ],
    withColumnResizing: true,
    columnResizeMode: resizeMode,
  });

  return (
    <>
      <SegmentedControl
        value={resizeMode}
        onChange={(value) => setResizeMode(value as ColumnResizeMode)}
        data={['onChange', 'onEnd']}
        mb="md"
      />
      <DataGrid store={store} />
    </>
  );
}

export const columnResizeMode: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
