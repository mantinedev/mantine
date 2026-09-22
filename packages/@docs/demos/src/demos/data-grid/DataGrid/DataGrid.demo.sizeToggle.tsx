import { MantineSize, SegmentedControl } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { MantineSize, SegmentedControl } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
    withRowNumbers: true,
    pageSize: 6,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <DataGrid.RowCount />
        <SegmentedControl
          ml="auto"
          size="xs"
          data={['xs', 'sm', 'md', 'lg', 'xl']}
          value={store.getSize()}
          onChange={(value) => store.setSize(value as MantineSize)}
        />
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
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    withRowSelection: true,
    withRowNumbers: true,
    pageSize: 6,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <DataGrid.RowCount />
        <SegmentedControl
          ml="auto"
          size="xs"
          data={['xs', 'sm', 'md', 'lg', 'xl']}
          value={store.getSize()}
          onChange={(value) => store.setSize(value as MantineSize)}
        />
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}

export const sizeToggle: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
