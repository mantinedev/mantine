import { useState } from 'react';
import { DataGrid, DataGridRow, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { DataGrid, DataGridRow, useDataGrid } from '@mantine/data-grid';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  salary: number;
}

const initialData: Employee[] = [
  { id: '1', firstName: 'Alice', lastName: 'Johnson', department: 'Engineering', salary: 95000 },
  { id: '2', firstName: 'Bob', lastName: 'Smith', department: 'Marketing', salary: 72000 },
  { id: '3', firstName: 'Carol', lastName: 'Williams', department: 'Sales', salary: 68000 },
  { id: '4', firstName: 'David', lastName: 'Brown', department: 'HR', salary: 65000 },
  { id: '5', firstName: 'Eva', lastName: 'Davis', department: 'Finance', salary: 88000 },
];

function Demo() {
  const [data, setData] = useState(initialData);

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    editingMode: 'cell',
    getRowId: (row) => row.id,
  });

  return (
    <DataGrid
      store={store}
      onCellEdit={({ row, columnId, value }: { row: DataGridRow<Employee>; columnId: string; value: unknown }) => {
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

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  salary: number;
}

const initialData: Employee[] = [
  { id: '1', firstName: 'Alice', lastName: 'Johnson', department: 'Engineering', salary: 95000 },
  { id: '2', firstName: 'Bob', lastName: 'Smith', department: 'Marketing', salary: 72000 },
  { id: '3', firstName: 'Carol', lastName: 'Williams', department: 'Sales', salary: 68000 },
  { id: '4', firstName: 'David', lastName: 'Brown', department: 'HR', salary: 65000 },
  { id: '5', firstName: 'Eva', lastName: 'Davis', department: 'Finance', salary: 88000 },
];

function Demo() {
  const [data, setData] = useState(initialData);

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary' },
    ],
    editingMode: 'cell',
    getRowId: (row) => row.id,
  });

  return (
    <DataGrid
      store={store}
      onCellEdit={({
        row,
        columnId,
        value,
      }: {
        row: DataGridRow<Employee>;
        columnId: string;
        value: unknown;
      }) => {
        setData((prev) =>
          prev.map((item) => (item.id === row.original.id ? { ...item, [columnId]: value } : item))
        );
      }}
    />
  );
}

export const cellEditing: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
