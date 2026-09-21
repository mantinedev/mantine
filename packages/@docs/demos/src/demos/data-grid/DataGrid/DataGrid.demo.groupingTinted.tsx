import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: { align: 'end' },
        aggregationFn: 'mean',
        aggregatedCell: ({ getValue }) => \`Avg $\${Math.round(getValue<number>()).toLocaleString()}\`,
      },
      { accessorKey: 'status', header: 'Status' },
    ],
    getRowId: (row) => row.id,
    withGrouping: true,
    withRowSelection: true,
    grouping: ['department'],
  });

  return <DataGrid store={store} withTintedGroupRows />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: { align: 'end' },
        aggregationFn: 'mean',
        aggregatedCell: ({ getValue }) => `Avg $${Math.round(getValue<number>()).toLocaleString()}`,
      },
      { accessorKey: 'status', header: 'Status' },
    ],
    getRowId: (row) => row.id,
    withGrouping: true,
    withRowSelection: true,
    grouping: ['department'],
  });

  return <DataGrid store={store} withTintedGroupRows />;
}

export const groupingTinted: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
