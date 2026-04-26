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
      { accessorKey: 'salary', header: 'Salary' },
    ],
    editingMode: 'row',
    getRowId: (row) => row.id,
  });

  return (
    <DataGrid
      store={store}
      onRowEdit={({ row, values }) => {
        setData((prev) =>
          prev.map((item) =>
            item.id === row.original.id ? { ...item, ...values } : item
          )
        );
      }}
    />
  );
}
`;

function Demo() {
  const [data, setData] = useState<Employee[]>(employees);

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    editingMode: 'row',
    getRowId: (row) => row.id,
  });

  return (
    <DataGrid
      store={store}
      onRowEdit={({ row, values }) => {
        setData((prev) =>
          prev.map((item) => (item.id === row.original.id ? { ...item, ...values } : item))
        );
      }}
    />
  );
}

export const rowEditing: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
