import { Box } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Box } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'department', header: 'Department' },
    ],
    getRowId: (row) => row.id,
    pageSize: 3,
  });

  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 320, maxWidth: '100%' }}>
      <DataGrid store={store}>
        <DataGrid.Footer pageSizeOptions={[3, 6, 9]} />
      </DataGrid>
    </Box>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'department', header: 'Department' },
    ],
    getRowId: (row) => row.id,
    pageSize: 3,
  });

  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 320, maxWidth: '100%' }}>
      <DataGrid store={store}>
        <DataGrid.Footer pageSizeOptions={[3, 6, 9]} />
      </DataGrid>
    </Box>
  );
}

export const footerCompact: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
