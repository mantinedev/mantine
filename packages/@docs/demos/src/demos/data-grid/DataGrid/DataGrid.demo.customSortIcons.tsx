import { ArrowsDownUpIcon, SortAscendingIcon } from '@phosphor-icons/react';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { ArrowsDownUpIcon, SortAscendingIcon } from '@phosphor-icons/react';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true },
    ],
  });

  return (
    <DataGrid
      store={store}
      sortedIcon={<SortAscendingIcon size={14} />}
      unsortedIcon={<ArrowsDownUpIcon size={14} />}
    />
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true },
    ],
  });

  return (
    <DataGrid
      store={store}
      sortedIcon={<SortAscendingIcon size={14} />}
      unsortedIcon={<ArrowsDownUpIcon size={14} />}
    />
  );
}

export const customSortIcons: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
