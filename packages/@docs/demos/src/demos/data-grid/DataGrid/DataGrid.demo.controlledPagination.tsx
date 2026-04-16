import { useState } from 'react';
import { PaginationState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { PaginationState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  return (
    <>
      <Text mb="md">
        Current page: <Code>{JSON.stringify(pagination)}</Code>
      </Text>
      <DataGrid
        data={employees}
        withPagination
        pagination={pagination}
        onPaginationChange={setPagination}
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
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  return (
    <>
      <Text mb="md">
        Current page: <Code>{JSON.stringify(pagination)}</Code>
      </Text>
      <DataGrid
        data={employees}
        withPagination
        pagination={pagination}
        onPaginationChange={setPagination}
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

export const controlledPagination: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
