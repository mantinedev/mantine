import { Menu } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Menu } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 220,
        meta: { disableColumnMenu: true },
      },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true, meta: { align: 'end' } },
    ],
    withColumnVisibility: true,
    withColumnPinning: true,
    withColumnResizing: true,
    withColumnReorder: true,
    withGrouping: true,
  });

  return (
    <DataGrid
      store={store}
      withColumnMenu
      columnMenuItems={(column) => (
        <Menu.Item onClick={() => navigator.clipboard.writeText(column.id)}>Copy column id</Menu.Item>
      )}
    />
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 220,
        meta: { disableColumnMenu: true },
      },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true, meta: { align: 'end' } },
    ],
    withColumnVisibility: true,
    withColumnPinning: true,
    withColumnResizing: true,
    withColumnReorder: true,
    withGrouping: true,
  });

  return (
    <DataGrid
      store={store}
      withColumnMenu
      columnMenuItems={(column) => (
        <Menu.Item onClick={() => navigator.clipboard.writeText(column.id)}>
          Copy column id
        </Menu.Item>
      )}
    />
  );
}

export const columnMenu: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
