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
      { accessorKey: 'firstName', header: 'First Name', size: 150 },
      { accessorKey: 'lastName', header: 'Last Name', size: 150 },
      { accessorKey: 'email', header: 'Email', size: 250 },
      { accessorKey: 'department', header: 'Department', size: 150 },
      { accessorKey: 'salary', header: 'Salary', size: 150 },
      { accessorKey: 'startDate', header: 'Start Date', size: 150 },
      { accessorKey: 'status', header: 'Status', size: 120 },
    ],
    columnPinning: { start: ['firstName', 'lastName'], end: ['status'] },
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
      { accessorKey: 'firstName', header: 'First Name', size: 150 },
      { accessorKey: 'lastName', header: 'Last Name', size: 150 },
      { accessorKey: 'email', header: 'Email', size: 250 },
      { accessorKey: 'department', header: 'Department', size: 150 },
      { accessorKey: 'salary', header: 'Salary', size: 150 },
      { accessorKey: 'startDate', header: 'Start Date', size: 150 },
      { accessorKey: 'status', header: 'Status', size: 120 },
    ],
    columnPinning: { start: ['firstName', 'lastName'], end: ['status'] },
  });

  return (
    <div style={{ maxWidth: 600 }}>
      <DataGrid store={store} />
    </div>
  );
}

export const columnPinningMultiple: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
