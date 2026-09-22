import { Button, Group, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Button, Group, Text } from '@mantine/core';
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
    pageSize: 5,
  });

  const { pageIndex, pageSize } = store.getPagination();
  const total = store.table.getRowCount();

  return (
    <DataGrid store={store}>
      <DataGrid.Footer>
        <Text size="sm">
          Employees {pageIndex * pageSize + 1}–{Math.min((pageIndex + 1) * pageSize, total)} of{' '}
          {total}
        </Text>
        <Group gap="xs" ml="auto">
          <Button
            size={store.getControlSize()}
            variant="default"
            disabled={!store.table.getCanPreviousPage()}
            onClick={() => store.table.previousPage()}
          >
            Previous
          </Button>
          <Button
            size={store.getControlSize()}
            variant="default"
            disabled={!store.table.getCanNextPage()}
            onClick={() => store.table.nextPage()}
          >
            Next
          </Button>
        </Group>
      </DataGrid.Footer>
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
    pageSize: 5,
  });

  const { pageIndex, pageSize } = store.getPagination();
  const total = store.table.getRowCount();

  return (
    <DataGrid store={store}>
      <DataGrid.Footer>
        <Text size="sm">
          Employees {pageIndex * pageSize + 1}–{Math.min((pageIndex + 1) * pageSize, total)} of{' '}
          {total}
        </Text>
        <Group gap="xs" ml="auto">
          <Button
            size={store.getControlSize()}
            variant="default"
            disabled={!store.table.getCanPreviousPage()}
            onClick={() => store.table.previousPage()}
          >
            Previous
          </Button>
          <Button
            size={store.getControlSize()}
            variant="default"
            disabled={!store.table.getCanNextPage()}
            onClick={() => store.table.nextPage()}
          >
            Next
          </Button>
        </Group>
      </DataGrid.Footer>
    </DataGrid>
  );
}

export const customFooter: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
