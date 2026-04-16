import { DataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { DataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  return (
    <DataGrid
      data={employees}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    >
      <DataGrid.Toolbar>
        <DataGrid.DensityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
    </DataGrid>
  );
}
`;

function Demo() {
  return (
    <DataGrid
      data={employees}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    >
      <DataGrid.Toolbar>
        <DataGrid.DensityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
    </DataGrid>
  );
}

export const density: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
