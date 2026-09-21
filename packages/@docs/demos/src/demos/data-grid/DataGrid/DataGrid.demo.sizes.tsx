import { MantineSize, Stack, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { MantineSize, Stack, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

const gridSizes: MantineSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

function SizedGrid({ size }: { size: MantineSize }) {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    size,
    withRowSelection: true,
    withRowNumbers: true,
    withGlobalFilter: true,
    pageSize: 3,
  });

  return (
    <div>
      <Text size="sm" fw={500} mb="xs">
        size="{size}"
      </Text>
      <DataGrid store={store}>
        <DataGrid.Toolbar />
        <DataGrid.Footer />
      </DataGrid>
    </div>
  );
}

function Demo() {
  return (
    <Stack gap="lg">
      {gridSizes.map((size) => (
        <SizedGrid key={size} size={size} />
      ))}
    </Stack>
  );
}
`;

const gridSizes: MantineSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

function SizedGrid({ size }: { size: MantineSize }) {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    getRowId: (row) => row.id,
    size,
    withRowSelection: true,
    withRowNumbers: true,
    withGlobalFilter: true,
    pageSize: 3,
  });

  return (
    <div>
      <Text size="sm" fw={500} mb="xs">
        size="{size}"
      </Text>
      <DataGrid store={store}>
        <DataGrid.Toolbar />
        <DataGrid.Footer />
      </DataGrid>
    </div>
  );
}

function Demo() {
  return (
    <Stack gap="lg">
      {gridSizes.map((size) => (
        <SizedGrid key={size} size={size} />
      ))}
    </Stack>
  );
}

export const sizes: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
