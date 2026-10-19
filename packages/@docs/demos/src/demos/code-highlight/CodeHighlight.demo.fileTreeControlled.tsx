import { useState } from 'react';
import { CodeHighlightFileTree } from '@mantine/code-highlight';
import { Button, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { fileTreeCode } from './code-highlight-file-tree-data';
import { getFileIcon, getFolderIcon } from './code-highlight-file-tree-icons';

const code = `
import { useState } from 'react';
import { CodeHighlightFileTree } from '@mantine/code-highlight';
import { Button, Group } from '@mantine/core';
import { fileTreeCode } from './data';
import { getFileIcon, getFolderIcon } from './icons';

function Demo() {
  const [activeFile, setActiveFile] = useState('types.ts');

  return (
    <>
      <Group mb="md">
        <Button variant="default" onClick={() => setActiveFile('steps/PersonalStep.tsx')}>
          Open PersonalStep.tsx
        </Button>
        <Button variant="default" onClick={() => setActiveFile('steps/address/countries.json')}>
          Open countries.json
        </Button>
      </Group>

      <CodeHighlightFileTree
        code={fileTreeCode}
        activeFile={activeFile}
        onActiveFileChange={setActiveFile}
        defaultExpandedFolders={[]}
        getFileIcon={getFileIcon}
        getFolderIcon={getFolderIcon}
        radius="md"
        withBorder
      />
    </>
  );
}
`;

const iconsCode = `
import {
  BracketsCurlyIcon,
  FileSvgIcon,
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
} from '@phosphor-icons/react';
import { CssIcon, TypeScriptIcon } from '@mantinex/dev-icons';

export function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  if (fileName.endsWith('.json')) {
    return <BracketsCurlyIcon size={14} />;
  }

  if (fileName.endsWith('.svg')) {
    return <FileSvgIcon size={14} />;
  }

  return <FileTextIcon size={14} />;
}

export function getFolderIcon(_folderPath: string, expanded: boolean) {
  return expanded ? <FolderOpenIcon size={14} /> : <FolderSimpleIcon size={14} />;
}
`;

const dataCode = `
export const fileTreeCode = [
  { fileName: 'JobApplicationForm.tsx', language: 'tsx', code: '...' },
  { fileName: 'JobApplicationForm.module.css', language: 'scss', code: '...' },
  { fileName: 'steps/PersonalStep.tsx', language: 'tsx', code: '...' },
  { fileName: 'steps/PersonalStep.module.css', language: 'scss', code: '...' },
  { fileName: 'steps/address/AddressStep.tsx', language: 'tsx', code: '...' },
  { fileName: 'steps/address/countries.json', language: 'json', code: '...' },
  { fileName: 'assets/logo.svg', language: 'html', code: '...' },
  { fileName: 'types.ts', language: 'tsx', code: '...' },
  { fileName: 'validation.ts', language: 'tsx', code: '...' },
  { fileName: 'README.md', language: 'text', code: '...' },
  { fileName: 'JobApplicationForm.test.tsx', language: 'tsx', code: '...' },
];
`;

function Demo() {
  const [activeFile, setActiveFile] = useState('types.ts');

  return (
    <>
      <Group mb="md">
        <Button variant="default" onClick={() => setActiveFile('steps/PersonalStep.tsx')}>
          Open PersonalStep.tsx
        </Button>
        <Button variant="default" onClick={() => setActiveFile('steps/address/countries.json')}>
          Open countries.json
        </Button>
      </Group>

      <CodeHighlightFileTree
        code={fileTreeCode}
        activeFile={activeFile}
        onActiveFileChange={setActiveFile}
        defaultExpandedFolders={[]}
        getFileIcon={getFileIcon}
        getFolderIcon={getFolderIcon}
        radius="md"
        withBorder
      />
    </>
  );
}

export const fileTreeControlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'icons.tsx', code: iconsCode, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
