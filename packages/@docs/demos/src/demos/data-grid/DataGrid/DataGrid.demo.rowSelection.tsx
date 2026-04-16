import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { Code, Text } from '@mantine/core';
import { DataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <>
      <Text mb="md">
        Selected rows: <Code>{JSON.stringify(Object.keys(rowSelection))}</Code>
      </Text>
      <DataGrid
        data={employees}
        withRowSelection
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        getRowId={(row) => row.id}
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
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <>
      <Text mb="md">
        Selected rows: <Code>{JSON.stringify(Object.keys(rowSelection))}</Code>
      </Text>
      <DataGrid
        data={employees}
        withRowSelection
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        getRowId={(row) => row.id}
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

export const rowSelection: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
