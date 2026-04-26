import { useState } from 'react';
import { SortingState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { SortingState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true },
      { accessorKey: 'status', header: 'Status' },
    ],
    sorting,
    onSortingChange: setSorting,
  });

  return (
    <>
      <Text mb="md">
        Current sorting: <Code>{JSON.stringify(sorting)}</Code>
      </Text>
      <DataGrid store={store} />
    </>
  );
}
`;

function Demo() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true },
      { accessorKey: 'status', header: 'Status' },
    ],
    sorting,
    onSortingChange: setSorting,
  });

  return (
    <>
      <Text mb="md">
        Current sorting: <Code>{JSON.stringify(sorting)}</Code>
      </Text>
      <DataGrid store={store} />
    </>
  );
}

export const controlledSorting: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
