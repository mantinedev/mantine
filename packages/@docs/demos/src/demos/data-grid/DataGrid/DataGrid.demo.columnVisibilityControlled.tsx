import { useState } from 'react';
import { ColumnVisibilityState } from '@tanstack/react-table';
import { Checkbox, Group } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const allColumns = ['firstName', 'lastName', 'email', 'department', 'salary', 'status'];

const code = `
import { useState } from 'react';
import { ColumnVisibilityState } from '@tanstack/react-table';
import { Checkbox, Group } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

const allColumns = ['firstName', 'lastName', 'email', 'department', 'salary', 'status'];

function Demo() {
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibilityState>({});

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    columnVisibility,
    onColumnVisibilityChange: setColumnVisibility,
  });

  const visibleColumns = allColumns.filter((col) => columnVisibility[col] !== false);

  return (
    <>
      <Checkbox.Group value={visibleColumns} onChange={(value) => {
        const next: ColumnVisibilityState = {};
        allColumns.forEach((col) => {
          next[col] = value.includes(col);
        });
        setColumnVisibility(next);
      }} mb="md">
        <Group>
          {allColumns.map((col) => (
            <Checkbox key={col} value={col} label={col} />
          ))}
        </Group>
      </Checkbox.Group>
      <DataGrid store={store} />
    </>
  );
}
`;

function Demo() {
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibilityState>({});

  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
      { accessorKey: 'status', header: 'Status' },
    ],
    columnVisibility,
    onColumnVisibilityChange: setColumnVisibility,
  });

  const visibleColumns = allColumns.filter((col) => columnVisibility[col] !== false);

  return (
    <>
      <Checkbox.Group
        value={visibleColumns}
        onChange={(value) => {
          const next: ColumnVisibilityState = {};
          allColumns.forEach((col) => {
            next[col] = value.includes(col);
          });
          setColumnVisibility(next);
        }}
        mb="md"
      >
        <Group>
          {allColumns.map((col) => (
            <Checkbox key={col} value={col} label={col} />
          ))}
        </Group>
      </Checkbox.Group>
      <DataGrid store={store} />
    </>
  );
}

export const columnVisibilityControlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
