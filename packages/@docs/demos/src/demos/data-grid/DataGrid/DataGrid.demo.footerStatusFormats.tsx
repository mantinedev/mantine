import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import { DataGrid, DataGridFooterProps, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import { DataGrid, DataGridFooterProps, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [statusFormat, setStatusFormat] = useState<DataGridFooterProps['statusFormat']>('compact');

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
    pageSize: 5,
  });

  return (
    <>
      <SegmentedControl
        size="xs"
        mb="md"
        data={['compact', 'long']}
        value={statusFormat}
        onChange={(value) => setStatusFormat(value as DataGridFooterProps['statusFormat'])}
      />
      <DataGrid store={store}>
        <DataGrid.Footer statusFormat={statusFormat} />
      </DataGrid>
    </>
  );
}
`;

function Demo() {
  const [statusFormat, setStatusFormat] = useState<DataGridFooterProps['statusFormat']>('compact');

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
    pageSize: 5,
  });

  return (
    <>
      <SegmentedControl
        size="xs"
        mb="md"
        data={['compact', 'long']}
        value={statusFormat}
        onChange={(value) => setStatusFormat(value as DataGridFooterProps['statusFormat'])}
      />
      <DataGrid store={store}>
        <DataGrid.Footer statusFormat={statusFormat} />
      </DataGrid>
    </>
  );
}

export const footerStatusFormats: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
