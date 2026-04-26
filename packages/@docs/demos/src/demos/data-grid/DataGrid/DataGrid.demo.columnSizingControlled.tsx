import { useState } from 'react';
import { ColumnSizingState } from '@tanstack/react-table';
import { Button, Code, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { ColumnSizingState } from '@tanstack/react-table';
import { Button, Code, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

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
    columnSizing,
    onColumnSizingChange: setColumnSizing,
  });

  return (
    <>
      <DataGrid store={store} />
      <Text mt="md" mb="xs">
        Current column sizing state:
      </Text>
      <Code block>{JSON.stringify(columnSizing, null, 2)}</Code>
      <Button mt="md" onClick={() => setColumnSizing({})}>
        Reset sizes
      </Button>
    </>
  );
}
`;

function Demo() {
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

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
    columnSizing,
    onColumnSizingChange: setColumnSizing,
  });

  return (
    <>
      <DataGrid store={store} />
      <Text mt="md" mb="xs">
        Current column sizing state:
      </Text>
      <Code block>{JSON.stringify(columnSizing, null, 2)}</Code>
      <Button mt="md" onClick={() => setColumnSizing({})}>
        Reset sizes
      </Button>
    </>
  );
}

export const columnSizingControlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
