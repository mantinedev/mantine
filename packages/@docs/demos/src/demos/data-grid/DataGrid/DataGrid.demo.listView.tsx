import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [view, setView] = useState<'table' | 'cards' | 'flat'>('cards');

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: { align: 'end' },
        cell: ({ getValue }) => \`$\${getValue<number>().toLocaleString()}\`,
      },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
    pageSize: 4,
  });

  return (
    <>
      <SegmentedControl
        size="xs"
        mb="md"
        data={[
          { label: 'Table', value: 'table' },
          { label: 'Cards', value: 'cards' },
          { label: 'Flat', value: 'flat' },
        ]}
        value={view}
        onChange={(value) => setView(value as typeof view)}
      />
      <DataGrid store={store} listView={view === 'table' ? false : view} selectOnRowClick>
        <DataGrid.Toolbar>
          <DataGrid.RowCount />
        </DataGrid.Toolbar>
        <DataGrid.Footer />
      </DataGrid>
    </>
  );
}
`;

function Demo() {
  const [view, setView] = useState<'table' | 'cards' | 'flat'>('cards');

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: { align: 'end' },
        cell: ({ getValue }) => `$${getValue<number>().toLocaleString()}`,
      },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
    pageSize: 4,
  });

  return (
    <>
      <SegmentedControl
        size="xs"
        mb="md"
        data={[
          { label: 'Table', value: 'table' },
          { label: 'Cards', value: 'cards' },
          { label: 'Flat', value: 'flat' },
        ]}
        value={view}
        onChange={(value) => setView(value as typeof view)}
      />
      <DataGrid store={store} listView={view === 'table' ? false : view} selectOnRowClick>
        <DataGrid.Toolbar>
          <DataGrid.RowCount />
        </DataGrid.Toolbar>
        <DataGrid.Footer />
      </DataGrid>
    </>
  );
}

export const listView: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
