import { useState } from 'react';
import { ColumnFiltersState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { ColumnFiltersState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  return (
    <>
      <Text mb="md">
        Active filters: <Code>{JSON.stringify(columnFilters)}</Code>
      </Text>
      <DataGrid
        data={employees}
        withFiltering
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
        columns={[
          { accessorKey: 'firstName', header: 'First Name' },
          { accessorKey: 'lastName', header: 'Last Name' },
          { accessorKey: 'department', header: 'Department' },
          { accessorKey: 'salary', header: 'Salary' },
          { accessorKey: 'status', header: 'Status' },
        ]}
      />
    </>
  );
}
`;

function Demo() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  return (
    <>
      <Text mb="md">
        Active filters: <Code>{JSON.stringify(columnFilters)}</Code>
      </Text>
      <DataGrid
        data={employees}
        withFiltering
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
        columns={[
          { accessorKey: 'firstName', header: 'First Name' },
          { accessorKey: 'lastName', header: 'Last Name' },
          { accessorKey: 'department', header: 'Department' },
          { accessorKey: 'salary', header: 'Salary' },
          { accessorKey: 'status', header: 'Status' },
        ]}
      />
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
