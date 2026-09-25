import { useState } from 'react';
import { EyeIcon, PencilSimpleIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, Employee, employees } from './_data';

const code = `
import { useState } from 'react';
import { EyeIcon, PencilSimpleIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const [data, setData] = useState(employees);

  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
      {
        id: 'actions',
        header: 'Actions',
        size: 110,
        meta: { type: 'actions' },
        cell: ({ row }) => (
          <Group gap={4} justify="flex-end" wrap="nowrap">
            <Tooltip label="View profile">
              <ActionIcon variant="subtle" color="gray" size={store.getControlSize()} aria-label="View">
                <EyeIcon size={14} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Edit">
              <ActionIcon variant="subtle" color="gray" size={store.getControlSize()} aria-label="Edit">
                <PencilSimpleIcon size={14} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Delete">
              <ActionIcon
                variant="subtle"
                color="red"
                size={store.getControlSize()}
                aria-label="Delete"
                onClick={() => setData((prev) => prev.filter((item) => item.id !== row.id))}
              >
                <TrashIcon size={14} />
              </ActionIcon>
            </Tooltip>
          </Group>
        ),
      },
    ],
    getRowId: (row) => row.id,
    pageSize: 6,
    autoResetPageIndex: false,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Footer />
    </DataGrid>
  );
}
`;

function Demo() {
  const [data, setData] = useState<Employee[]>(employees);

  const store = useDataGrid<Employee>({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
      {
        id: 'actions',
        header: 'Actions',
        size: 110,
        meta: { type: 'actions' },
        cell: ({ row }) => (
          <Group gap={4} justify="flex-end" wrap="nowrap">
            <Tooltip label="View profile">
              <ActionIcon
                variant="subtle"
                color="gray"
                size={store.getControlSize()}
                aria-label="View"
              >
                <EyeIcon size={14} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Edit">
              <ActionIcon
                variant="subtle"
                color="gray"
                size={store.getControlSize()}
                aria-label="Edit"
              >
                <PencilSimpleIcon size={14} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Delete">
              <ActionIcon
                variant="subtle"
                color="red"
                size={store.getControlSize()}
                aria-label="Delete"
                onClick={() => setData((prev) => prev.filter((item) => item.id !== row.id))}
              >
                <TrashIcon size={14} />
              </ActionIcon>
            </Tooltip>
          </Group>
        ),
      },
    ],
    getRowId: (row) => row.id,
    pageSize: 6,
    autoResetPageIndex: false,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Footer />
    </DataGrid>
  );
}

export const actionsColumn: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
