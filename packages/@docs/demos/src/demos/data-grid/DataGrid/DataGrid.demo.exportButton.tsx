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
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
    pageSize: 6,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <DataGrid.ExportButton fileName="employees" />
        <DataGrid.ExportButton formats={['csv']} rows="selected" fileName="selected-employees">
          Download selected
        </DataGrid.ExportButton>
        <DataGrid.ExportButton formats={['copy']} rows="page" columns={['firstName', 'lastName']}>
          Copy names
        </DataGrid.ExportButton>
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
    pageSize: 6,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <DataGrid.ExportButton fileName="employees" />
        <DataGrid.ExportButton formats={['csv']} rows="selected" fileName="selected-employees">
          Download selected
        </DataGrid.ExportButton>
        <DataGrid.ExportButton formats={['copy']} rows="page" columns={['firstName', 'lastName']}>
          Copy names
        </DataGrid.ExportButton>
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}

export const exportButton: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
