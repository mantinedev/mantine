import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: number;
  children?: FileItem[];
}

const data: FileItem[] = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'components',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'Button.tsx', type: 'file', size: 2400 },
          { id: '1-1-2', name: 'Input.tsx', type: 'file', size: 1800 },
          { id: '1-1-3', name: 'Modal.tsx', type: 'file', size: 3200 },
        ],
      },
      {
        id: '1-2',
        name: 'hooks',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'useAuth.ts', type: 'file', size: 950 },
          { id: '1-2-2', name: 'useTheme.ts', type: 'file', size: 620 },
        ],
      },
      { id: '1-3', name: 'index.ts', type: 'file', size: 150 },
    ],
  },
  {
    id: '2',
    name: 'public',
    type: 'folder',
    children: [
      { id: '2-1', name: 'favicon.ico', type: 'file', size: 4096 },
      { id: '2-2', name: 'logo.svg', type: 'file', size: 1240 },
    ],
  },
  { id: '3', name: 'package.json', type: 'file', size: 890 },
  { id: '4', name: 'tsconfig.json', type: 'file', size: 430 },
];

const dataCode = `
interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: number;
  children?: FileItem[];
}

const data: FileItem[] = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'components',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'Button.tsx', type: 'file', size: 2400 },
          { id: '1-1-2', name: 'Input.tsx', type: 'file', size: 1800 },
          { id: '1-1-3', name: 'Modal.tsx', type: 'file', size: 3200 },
        ],
      },
      {
        id: '1-2',
        name: 'hooks',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'useAuth.ts', type: 'file', size: 950 },
          { id: '1-2-2', name: 'useTheme.ts', type: 'file', size: 620 },
        ],
      },
      { id: '1-3', name: 'index.ts', type: 'file', size: 150 },
    ],
  },
  {
    id: '2',
    name: 'public',
    type: 'folder',
    children: [
      { id: '2-1', name: 'favicon.ico', type: 'file', size: 4096 },
      { id: '2-2', name: 'logo.svg', type: 'file', size: 1240 },
    ],
  },
  { id: '3', name: 'package.json', type: 'file', size: 890 },
  { id: '4', name: 'tsconfig.json', type: 'file', size: 430 },
];
`;

const code = `
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { data } from './data';

function Demo() {
  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'type', header: 'Type' },
      {
        accessorKey: 'size',
        header: 'Size',
        cell: ({ getValue }) => {
          const size = getValue<number | undefined>();
          return size !== undefined ? \`\${size.toLocaleString()} B\` : '—';
        },
      },
    ],
    getSubRows: (row) => row.children,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    filterFromLeafRows: true,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar />
    </DataGrid>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'type', header: 'Type' },
      {
        accessorKey: 'size',
        header: 'Size',
        cell: ({ getValue }) => {
          const size = getValue<number | undefined>();
          return size !== undefined ? `${size.toLocaleString()} B` : '—';
        },
      },
    ],
    getSubRows: (row) => row.children,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    filterFromLeafRows: true,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar />
    </DataGrid>
  );
}

export const treeDataFiltering: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
