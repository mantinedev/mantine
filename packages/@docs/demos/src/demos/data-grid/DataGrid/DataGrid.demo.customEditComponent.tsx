import { useState } from 'react';
import { Select } from '@mantine/core';
import { DataGrid, DataGridEditComponentProps, useDataGrid } from '@mantine/data-grid';
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
          editComponent: ({ value, onChange, onSave, onCancel, error }) => (
            <Select
              data={DEPARTMENTS}
              value={value as string}
              error={error}
              onChange={(next) => {
                onChange(next);
                onSave();
              }}
              onKeyDown={(event) => event.key === 'Escape' && onCancel()}
              variant="unstyled"
              autoFocus
            />
          ),
        },
      },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    editingMode: 'cell',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });

  return <DataGrid store={store} />;
}
`;

const DEPARTMENTS = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

function Demo() {
  const [data, setData] = useState<Employee[]>(employees);

  const store = useDataGrid<Employee>({
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
            error,
          }: DataGridEditComponentProps<Employee>) => (
            <Select
              data={DEPARTMENTS}
              value={value as string}
              error={error}
              onChange={(next) => {
                onChange(next);
                onSave();
              }}
              onKeyDown={(event) => event.key === 'Escape' && onCancel()}
              variant="unstyled"
              autoFocus
            />
          ),
        },
      },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    editingMode: 'cell',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });

  return <DataGrid store={store} />;
}

export const customEditComponent: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
