import { useState } from 'react';
import { Select } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, Employee, employees } from './_data';

const code = `
import { useState } from 'react';
import { Select } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

const DEPARTMENTS = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

function Demo() {
  const [data, setData] = useState(employees);

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      {
        accessorKey: 'department',
        header: 'Department',
        meta: {
          editComponent: ({ value, onChange, onSave, onCancel }) => (
            <Select
              data={DEPARTMENTS}
              value={value as string}
              onChange={(val) => {
                onChange(val);
                onSave();
              }}
              onKeyDown={(e) => e.key === 'Escape' && onCancel()}
              autoFocus
            />
          ),
        },
      },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    editingMode: 'cell',
    getRowId: (row) => row.id,
  });

  return (
    <DataGrid
      store={store}
      onCellEdit={({ row, columnId, value }) => {
        setData((prev) =>
          prev.map((item) =>
            item.id === row.original.id ? { ...item, [columnId]: value } : item
          )
        );
      }}
    />
  );
}
`;

const DEPARTMENTS = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

function Demo() {
  const [data, setData] = useState<Employee[]>(employees);

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      {
        accessorKey: 'department',
        header: 'Department',
        meta: {
          editComponent: ({
            value,
            onChange,
            onSave,
            onCancel,
          }: {
            value: unknown;
            onChange: (value: unknown) => void;
            onSave: () => void;
            onCancel: () => void;
          }) => (
            <Select
              data={DEPARTMENTS}
              value={value as string}
              onChange={(val) => {
                onChange(val);
                onSave();
              }}
              onKeyDown={(e) => e.key === 'Escape' && onCancel()}
              autoFocus
            />
          ),
        },
      },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    editingMode: 'cell',
    getRowId: (row) => row.id,
  });

  return (
    <DataGrid
      store={store}
      onCellEdit={({ row, columnId, value }) => {
        setData((prev) =>
          prev.map((item) => (item.id === row.original.id ? { ...item, [columnId]: value } : item))
        );
      }}
    />
  );
}

export const customEditComponent: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
