import { useState } from 'react';
import { SortingState } from '@tanstack/react-table';
import { DataGrid, DataGridProps, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { employees } from './_data';

function Wrapper(props: DataGridProps) {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'salary', desc: true }]);
  const store = useDataGrid({
    data: employees.slice(0, 6),
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      {
        accessorKey: 'status',
        header: 'Status',
        enableSorting: true,
        meta: { align: 'center' },
      },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true, meta: { align: 'end' } },
    ],
    sorting,
    onSortingChange: setSorting,
  });

  return <DataGrid store={store} {...props} />;
}

const code = `
import { useState } from 'react';
import { SortingState } from '@tanstack/react-table';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'salary', desc: true }]);
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableSorting: true },
      { accessorKey: 'lastName', header: 'Last Name', enableSorting: true },
      { accessorKey: 'status', header: 'Status', enableSorting: true, meta: { align: 'center' } },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true, meta: { align: 'end' } },
    ],
    sorting,
    onSortingChange: setSorting,
  });

  return (
    <DataGrid
      store={store}
      {{props}}
    />
  );
}
`;

export const sortIndicators: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'sortIndicator',
      type: 'segmented',
      data: ['hover', 'always'],
      initialValue: 'hover',
      libraryValue: 'hover',
    },
    {
      prop: 'sortIndicatorPosition',
      type: 'segmented',
      data: ['trailing', 'inline'],
      initialValue: 'trailing',
      libraryValue: 'trailing',
    },
  ],
};
