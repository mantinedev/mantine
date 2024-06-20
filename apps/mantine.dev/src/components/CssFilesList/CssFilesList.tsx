import { IconCheck, IconCopy } from '@tabler/icons-react';
import { ActionIcon, Code, CopyButton, Group } from '@mantine/core';
import CSS_FILES_LIST from '@/.docgen/css-exports.json';
import { MdxDataTable } from '../MdxProvider';

export function CssFilesList() {
  const files = ['global.css', ...CSS_FILES_LIST.modules].map((file) => [
    file.replace('.css', ''),
    <Group>
      <Code style={{ whiteSpace: 'nowrap' }}>{`import '@mantine/core/styles/${file}';`}</Code>
      <CopyButton value={`import '@mantine/core/styles/${file}';`}>
        {({ copy, copied }) => (
          <ActionIcon
            variant={copied ? 'filled' : 'default'}
            color={copied ? 'teal' : undefined}
            onClick={copy}
            size="sm"
          >
            {copied ? <IconCheck size={12} /> : <IconCopy size={12} />}
          </ActionIcon>
        )}
      </CopyButton>
    </Group>,
  ]);

  return <MdxDataTable data={files} head={['Component', 'Import']} />;
}
