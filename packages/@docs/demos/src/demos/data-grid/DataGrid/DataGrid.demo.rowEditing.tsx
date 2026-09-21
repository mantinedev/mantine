import { useState } from 'react';
import { ActionIcon, Group } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, Employee, employees } from './_data';

const code = `
import { useState } from 'react';
import { ActionIcon, Group } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';
import { CheckIcon, CloseIcon, PencilIcon } from './icons';

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
        meta: { type: 'actions' },
        cell: ({ row }) => (
          <Group gap={4} justify="flex-end" wrap="nowrap">
            {row.getIsEditing() ? (
              <>
                <ActionIcon
                  variant="subtle"
                  size={store.controlSize}
                  aria-label="Save"
                  onClick={() => row.saveEditing()}
                >
                  <CheckIcon />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  size={store.controlSize}
                  aria-label="Cancel"
                  onClick={() => row.cancelEditing()}
                >
                  <CloseIcon />
                </ActionIcon>
              </>
            ) : (
              <ActionIcon
                variant="subtle"
                color="gray"
                size={store.controlSize}
                aria-label="Edit"
                onClick={() => row.startEditing()}
              >
                <PencilIcon />
              </ActionIcon>
            )}
          </Group>
        ),
      },
    ],
    getRowId: (row) => row.id,
    editingMode: 'row',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });

  return <DataGrid store={store} />;
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
        meta: { type: 'actions' },
        cell: ({ row }) => (
          <Group gap={4} justify="flex-end" wrap="nowrap">
            {row.getIsEditing() ? (
              <>
                <ActionIcon
                  variant="subtle"
                  size={store.controlSize}
                  aria-label="Save"
                  onClick={() => row.saveEditing()}
                >
                  <CheckIcon />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  size={store.controlSize}
                  aria-label="Cancel"
                  onClick={() => row.cancelEditing()}
                >
                  <CloseIcon />
                </ActionIcon>
              </>
            ) : (
              <ActionIcon
                variant="subtle"
                color="gray"
                size={store.controlSize}
                aria-label="Edit"
                onClick={() => row.startEditing()}
              >
                <PencilIcon />
              </ActionIcon>
            )}
          </Group>
        ),
      },
    ],
    getRowId: (row) => row.id,
    editingMode: 'row',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });

  return <DataGrid store={store} />;
}

function PencilIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
      <path d="M13.5 6.5l4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

const iconsCode = `
export function PencilIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
      <path d="M13.5 6.5l4 4" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
`;

export const rowEditing: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: iconsCode, language: 'tsx', fileName: 'icons.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
