import { useState } from 'react';
import { ColumnFiltersState } from '@tanstack/react-table';
import { Code, Text, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { ColumnFiltersState } from '@tanstack/react-table';
import { Code, Text, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name', enableColumnFilter: true },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    columnFilters,
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <>
      <TextInput
        placeholder="Filter by first name"
        value={(store.getColumnFilterValue('firstName') as string) ?? ''}
        onChange={(event) => store.setColumnFilter('firstName', event.currentTarget.value)}
        mb="md"
      />
      <Text mb="md">
        Active filters: <Code>{JSON.stringify(columnFilters)}</Code>
      </Text>
      <DataGrid store={store} />
    </>
  );
}
`;

function Demo() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name', enableColumnFilter: true },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    columnFilters,
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <>
      <TextInput
        placeholder="Filter by first name"
        value={(store.getColumnFilterValue('firstName') as string) ?? ''}
        onChange={(event) => store.setColumnFilter('firstName', event.currentTarget.value)}
        mb="md"
      />
      <Text mb="md">
        Active filters: <Code>{JSON.stringify(columnFilters)}</Code>
      </Text>
      <DataGrid store={store} />
    </>
  );
}

export const controlledFilters: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
