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
      {
        header: 'Name',
        columns: [
          { accessorKey: 'firstName', header: 'First Name', size: 150 },
          { accessorKey: 'lastName', header: 'Last Name', size: 150 },
        ],
      },
      {
        header: 'Details',
        columns: [
          { accessorKey: 'email', header: 'Email', size: 250 },
          { accessorKey: 'department', header: 'Department', size: 150 },
        ],
      },
      { accessorKey: 'salary', header: 'Salary', size: 120 },
      { accessorKey: 'status', header: 'Status', size: 120 },
    ],
    columnPinning: { start: ['firstName', 'lastName'], end: [] },
  });

  return (
    <div style={{ maxWidth: 600 }}>
      <DataGrid store={store} />
    </div>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      {
        header: 'Name',
        columns: [
          { accessorKey: 'firstName', header: 'First Name', size: 150 },
          { accessorKey: 'lastName', header: 'Last Name', size: 150 },
        ],
      },
      {
        header: 'Details',
        columns: [
          { accessorKey: 'email', header: 'Email', size: 250 },
          { accessorKey: 'department', header: 'Department', size: 150 },
        ],
      },
      { accessorKey: 'salary', header: 'Salary', size: 120 },
      { accessorKey: 'status', header: 'Status', size: 120 },
    ],
    columnPinning: { start: ['firstName', 'lastName'], end: [] },
  });

  return (
    <div style={{ maxWidth: 600 }}>
      <DataGrid store={store} />
    </div>
  );
}

export const pinningWithGroups: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
