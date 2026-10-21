import { useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { CodeHighlightFileTree } from './CodeHighlightFileTree';

export default { title: 'CodeHighlightFileTree' };

const code = [
  {
    fileName: 'JobApplicationForm.tsx',
    language: 'tsx',
    code: `import { useForm } from '@mantine/form';\nimport { PersonalStep } from './steps/PersonalStep';\n\nexport function JobApplicationForm() {\n  const form = useForm({ mode: 'uncontrolled' });\n  return <PersonalStep form={form} />;\n}`,
  },
  {
    fileName: 'steps/PersonalStep.tsx',
    language: 'tsx',
    code: `export function PersonalStep() {\n  return <TextInput label="Name" />;\n}`,
  },
  {
    fileName: 'steps/AddressStep.tsx',
    language: 'tsx',
    code: `export function AddressStep() {\n  return <TextInput label="Street" />;\n}`,
  },
  {
    fileName: 'steps/nested/DeepStep.tsx',
    language: 'tsx',
    code: `export function DeepStep() {\n  return null;\n}`,
  },
  {
    fileName: 'types.ts',
    language: 'tsx',
    code: `export interface Values {\n  name: string;\n  street: string;\n}`,
  },
  {
    fileName: 'validation.ts',
    language: 'tsx',
    code: `export const validation = {\n  name: (value: string) => (value.length < 2 ? 'Too short' : null),\n};`,
  },
  {
    fileName: 'JobApplicationForm.module.css',
    language: 'scss',
    code: `.root {\n  padding: var(--mantine-spacing-md);\n}`,
  },
  {
    fileName: 'JobApplicationForm.test.tsx',
    language: 'tsx',
    code: `it('renders', () => {\n  render(<JobApplicationForm />);\n});`,
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightFileTree code={code} getFileIcon={getCodeFileIcon} radius="md" withBorder />
    </div>
  );
}

export function LongCode() {
  const longCode = code.map((file) => ({
    ...file,
    code: Array(30).fill(file.code).join('\n'),
  }));

  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightFileTree
        code={longCode}
        getFileIcon={getCodeFileIcon}
        withExpandButton
        defaultExpanded={false}
        withLineNumbers
      />
    </div>
  );
}

export function Controlled() {
  const [active, setActive] = useState('types.ts');

  return (
    <Stack p={40}>
      <Group>
        {code.map((file) => (
          <Button
            key={file.fileName}
            variant={file.fileName === active ? 'filled' : 'default'}
            onClick={() => setActive(file.fileName)}
          >
            {file.fileName}
          </Button>
        ))}
      </Group>
      <CodeHighlightFileTree
        code={code}
        activeFile={active}
        onActiveFileChange={setActive}
        getFileIcon={getCodeFileIcon}
        defaultExpandedFolders={[]}
      />
    </Stack>
  );
}

export function ColorSchemes() {
  return (
    <Stack p={40}>
      <CodeHighlightFileTree
        code={code}
        codeColorScheme="dark"
        background="var(--mantine-color-dark-8)"
        getFileIcon={getCodeFileIcon}
        withBorder
        radius="md"
      />
      <CodeHighlightFileTree
        code={code}
        codeColorScheme="light"
        background="var(--mantine-color-gray-0)"
        getFileIcon={getCodeFileIcon}
        withBorder
        radius="md"
      />
    </Stack>
  );
}

export function AlwaysSelect() {
  return (
    <div style={{ padding: 40, maxWidth: 420 }}>
      <CodeHighlightFileTree
        code={code}
        getFileIcon={getCodeFileIcon}
        hideTreeBelow={100000}
        withBorder
        radius="md"
      />
    </div>
  );
}

export function PinnedFiles() {
  const withPrompt = [
    {
      fileName: 'PROMPT.md',
      language: 'markdown',
      code: 'Build a job application form with four steps and a stepper at the top.',
      pinned: true,
    },
    ...code,
  ];

  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightFileTree
        code={withPrompt}
        getFileIcon={getCodeFileIcon}
        radius="md"
        withBorder
      />
    </div>
  );
}

export function StickyTree() {
  const longCode = code.map((file) => ({ ...file, code: Array(80).fill(file.code).join('\n') }));

  return (
    <div style={{ padding: 40 }}>
      <div style={{ height: 300, border: '1px dashed gray', marginBottom: 20 }}>
        Scroll down: the file tree stays visible while the code scrolls with the page
      </div>
      <CodeHighlightFileTree code={longCode} getFileIcon={getCodeFileIcon} radius="md" withBorder />
    </div>
  );
}
