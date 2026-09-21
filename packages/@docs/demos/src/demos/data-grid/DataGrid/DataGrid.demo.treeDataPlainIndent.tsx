import { FileIcon, FolderIcon, FolderOpenIcon } from '@phosphor-icons/react';
import { Group } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { fileTree, treeDataCode as dataCode } from './_tree-data';

const code = `
import { FileIcon, FolderIcon, FolderOpenIcon } from '@phosphor-icons/react';
import { Group } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { fileTree } from './data';

function Demo() {
  const store = useDataGrid({
    data: fileTree,
    columns: [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row, getValue }) => (
          <Group gap={6} wrap="nowrap">
            {row.original.type === 'folder' ? (
              row.getIsExpanded() ? (
                <FolderOpenIcon size={16} />
              ) : (
                <FolderIcon size={16} />
              )
            ) : (
              <FileIcon size={16} />
            )}
            {getValue<string>()}
          </Group>
        ),
      },
      { accessorKey: 'type', header: 'Type' },
      {
        accessorKey: 'size',
        header: 'Size',
        meta: { align: 'end' },
        cell: ({ getValue }) => {
          const size = getValue<number | undefined>();
          return size !== undefined ? \`\${size.toLocaleString()} B\` : '';
        },
      },
    ],
    getSubRows: (row) => row.children,
    getRowId: (row) => row.id,
    tableOptions: { initialState: { expanded: true } },
  });

  return <DataGrid store={store} withTreeLines={false} />;
}
`;

function Demo() {
  const store = useDataGrid({
    data: fileTree,
    columns: [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row, getValue }) => (
          <Group gap={6} wrap="nowrap">
            {row.original.type === 'folder' ? (
              row.getIsExpanded() ? (
                <FolderOpenIcon size={16} />
              ) : (
                <FolderIcon size={16} />
              )
            ) : (
              <FileIcon size={16} />
            )}
            {getValue<string>()}
          </Group>
        ),
      },
      { accessorKey: 'type', header: 'Type' },
      {
        accessorKey: 'size',
        header: 'Size',
        meta: { align: 'end' },
        cell: ({ getValue }) => {
          const size = getValue<number | undefined>();
          return size !== undefined ? `${size.toLocaleString()} B` : '';
        },
      },
    ],
    getSubRows: (row) => row.children,
    getRowId: (row) => row.id,
    tableOptions: { initialState: { expanded: true } },
  });

  return <DataGrid store={store} withTreeLines={false} />;
}

export const treeDataPlainIndent: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
