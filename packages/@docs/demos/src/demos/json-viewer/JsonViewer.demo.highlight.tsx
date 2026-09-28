import {
  JsonViewer,
  JsonViewerHighlightType,
  serializeJsonViewerPath,
} from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  name: '@mantine/core',
  version: '9.7.0',
  description: 'React components library',
  deprecated: 'Use @mantine/core@9 instead',
  license: 'MIT',
  author: {
    name: 'Vitaly Rtishchev',
    url: 'https://github.com/rtivital',
  },
  repository: {
    type: 'git',
    url: 'https://github.com/mantinedev/mantine',
  },
};

const highlightItems: Record<string, JsonViewerHighlightType> = {
  [serializeJsonViewerPath(['version'])]: 'added',
  [serializeJsonViewerPath(['deprecated'])]: 'removed',
  [serializeJsonViewerPath(['author', 'url'])]: 'added',
};

const dataCode = `
export const data = ${JSON.stringify(jsonData, null, 2)};
`;

const code = `
import {
  JsonViewer,
  JsonViewerHighlightType,
  serializeJsonViewerPath,
} from '@mantine/code-highlight';
import { data } from './data';

const highlightItems: Record<string, JsonViewerHighlightType> = {
  [serializeJsonViewerPath(['version'])]: 'added',
  [serializeJsonViewerPath(['deprecated'])]: 'removed',
  [serializeJsonViewerPath(['author', 'url'])]: 'added',
};

function Demo() {
  return (
    <JsonViewer
      value={data}
      highlightItems={highlightItems}
      defaultExpandDepth={3}
    />
  );
}
`;

function Demo() {
  return <JsonViewer value={jsonData} highlightItems={highlightItems} defaultExpandDepth={3} />;
}

export const highlight: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
