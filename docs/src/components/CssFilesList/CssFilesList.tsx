import React from 'react';
import { Code } from '@mantine/core';
import CSS_FILES_LIST from '@/.docgen/css-exports.json';
import { MdxDataTable } from '../MdxProvider';

export function CssFilesList() {
  const files = ['global.css', ...CSS_FILES_LIST.modules].map((file) => [
    file.replace('.css', ''),
    <Code style={{ whiteSpace: 'nowrap' }}>{`import '@mantine/core/styles/${file}';`}</Code>,
  ]);

  return <MdxDataTable data={files} head={['Component', 'Import']} />;
}
