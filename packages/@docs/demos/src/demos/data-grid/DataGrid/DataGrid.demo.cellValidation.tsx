import { useState } from 'react';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, Employee, employees } from './_data';

const code = `
import { useState } from 'react';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [data, setData] = useState(employees);
  const [dirtyCells, setDirtyCells] = useState<Set<string>>(new Set());

  const store = useDataGrid({
    data,
    columns: [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        meta: {
          validate: (value) => (String(value).trim() ? null : 'First name is required'),
        },
      },
      { accessorKey: 'lastName', header: 'Last Name' },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 220,
        meta: {
          validate: (value) =>
            /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(String(value)) ? null : 'Enter a valid email address',
        },
      },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: {
          align: 'end',
          validate: (value) =>
            Number(value) >= 30000 ? null : 'Salary must be at least $30,000',
        },
      },
    ],
    getRowId: (row) => row.id,
    editingMode: 'cell',
    onEditSave: ({ row, newRow, changedColumnIds }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
      setDirtyCells((prev) => {
        const next = new Set(prev);
        changedColumnIds.forEach((columnId) => next.add(\`\${row.id}:\${columnId}\`));
        return next;
      });
    },
    getCellStatus: ({ row, columnId }) =>
      dirtyCells.has(\`\${row.id}:\${columnId}\`) ? 'dirty' : undefined,
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const [data, setData] = useState<Employee[]>(employees);
  const [dirtyCells, setDirtyCells] = useState<Set<string>>(new Set());

  const store = useDataGrid<Employee>({
    data,
    columns: [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        meta: {
          validate: (value) => (String(value).trim() ? null : 'First name is required'),
        },
      },
      { accessorKey: 'lastName', header: 'Last Name' },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 220,
        meta: {
          validate: (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value)) ? null : 'Enter a valid email address',
        },
      },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: {
          align: 'end',
          validate: (value) => (Number(value) >= 30000 ? null : 'Salary must be at least $30,000'),
        },
      },
    ],
    getRowId: (row) => row.id,
    editingMode: 'cell',
    onEditSave: ({ row, newRow, changedColumnIds }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
      setDirtyCells((prev) => {
        const next = new Set(prev);
        changedColumnIds.forEach((columnId) => next.add(`${row.id}:${columnId}`));
        return next;
      });
    },
    getCellStatus: ({ row, columnId }) =>
      dirtyCells.has(`${row.id}:${columnId}`) ? 'dirty' : undefined,
  });

  return <DataGrid store={store} />;
}

export const cellValidation: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
