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

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    editingMode: 'row',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });

  return <DataGrid store={store} withFloatingEditActions />;
}
`;

function Demo() {
  const [data, setData] = useState<Employee[]>(employees);

  const store = useDataGrid<Employee>({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    editingMode: 'row',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });

  return <DataGrid store={store} withFloatingEditActions />;
}

export const floatingEditActions: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
