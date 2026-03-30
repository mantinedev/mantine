import { CheckIcon, CopyIcon } from '@phosphor-icons/react';
import { ActionIcon, Code, CopyButton, Group } from '@mantine/core';
import CSS_FILES_LIST from '@/.docgen/css-exports.json';
import { MdxDataTable } from '../MdxProvider';
import classes from './CssFilesList.module.css';

const allCssFilesPaths = [...CSS_FILES_LIST.global, ...CSS_FILES_LIST.modules];

interface CssFilePathProps {
  filePath: string;
}

function CssFilePath({ filePath }: CssFilePathProps) {
  const importCode = `import '@mantine/core/styles/${filePath}';`;
  return (
    <Group wrap="nowrap" gap={5}>
      <CopyButton value={importCode}>
        {({ copy, copied }) => (
          <ActionIcon
            variant={copied ? 'filled' : 'default'}
            color={copied ? 'teal' : undefined}
            onClick={copy}
            size="sm"
          >
            {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
          </ActionIcon>
        )}
      </CopyButton>
      <Code className={classes.fileName}>{importCode}</Code>
    </Group>
  );
}

export function CssFilesList() {
  const files = allCssFilesPaths.map((filePath) => [
    filePath.replace('.css', ''),
    <CssFilePath filePath={filePath} />,
  ]);

  return <MdxDataTable data={files} head={['Component', 'Import']} />;
}
