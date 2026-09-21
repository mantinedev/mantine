export interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: number;
  children?: FileItem[];
}

export const fileTree: FileItem[] = [
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

export const treeDataCode = `
export interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: number;
  children?: FileItem[];
}

export const fileTree: FileItem[] = [
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
