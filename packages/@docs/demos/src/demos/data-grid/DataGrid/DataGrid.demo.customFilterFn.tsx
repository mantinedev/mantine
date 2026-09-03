import { DataGrid, DataGridFilterFn, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const exactMatchFilter: DataGridFilterFn = (row, columnId, filterValue) => {
  if (!filterValue) {
    return true;
  }
  const cellValue = String(row.getValue(columnId));
  return cellValue === filterValue;
};

const code = `
import { DataGrid, DataGridFilterFn, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

const exactMatchFilter: DataGridFilterFn = (row, columnId, filterValue) => {
  if (!filterValue) {
    return true;
  }
  const cellValue = String(row.getValue(columnId));
  return cellValue === filterValue;
};

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name', enableColumnFilter: true },
      {
        accessorKey: 'department',
        header: 'Department (exact match)',
        filterFn: exactMatchFilter,
      },
      { accessorKey: 'salary', header: 'Salary', enableColumnFilter: true },
    ],
  });

  return <DataGrid store={store} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name', enableColumnFilter: true },
      {
        accessorKey: 'department',
        header: 'Department (exact match)',
        filterFn: exactMatchFilter,
      },
      { accessorKey: 'salary', header: 'Salary', enableColumnFilter: true },
    ],
  });

  return <DataGrid store={store} />;
}

export const customFilterFn: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
