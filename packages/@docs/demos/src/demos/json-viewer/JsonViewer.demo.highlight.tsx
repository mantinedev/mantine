import { JsonViewer, serializeJsonViewerPath } from '@mantine/code-highlight';
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

const highlightItems = {
  [serializeJsonViewerPath(['version'])]: 'added' as const,
  [serializeJsonViewerPath(['deprecated'])]: 'removed' as const,
  [serializeJsonViewerPath(['author', 'url'])]: 'added' as const,
};

const code = `
import { JsonViewer, serializeJsonViewerPath } from '@mantine/code-highlight';

const highlightItems = {
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
  code,
};
