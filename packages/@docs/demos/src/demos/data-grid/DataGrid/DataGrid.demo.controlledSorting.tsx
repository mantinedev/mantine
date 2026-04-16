import { useState } from 'react';
import { SortingState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { SortingState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [sorting, setSorting] = useState<SortingState>([]);

  return (
    <>
      <Text mb="md">
        Current sorting: <Code>{JSON.stringify(sorting)}</Code>
      </Text>
      <DataGrid
        data={employees}
        sorting={sorting}
        onSortingChange={setSorting}
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
  const [sorting, setSorting] = useState<SortingState>([]);

  return (
    <>
      <Text mb="md">
        Current sorting: <Code>{JSON.stringify(sorting)}</Code>
      </Text>
      <DataGrid
        data={employees}
        sorting={sorting}
        onSortingChange={setSorting}
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

export const controlledSorting: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
