import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  name: 'Mantine',
  version: '9.7.0',
  description: 'React components library',
  homepage: 'https://mantine.dev',
  license: 'MIT',
  keywords: ['react', 'components', 'ui'],
  author: {
    name: 'Vitaly Rtishchev',
    url: 'https://github.com/rtivital',
  },
  repository: {
    type: 'git',
    url: 'https://github.com/mantinedev/mantine',
  },
  bugs: {
    url: 'https://github.com/mantinedev/mantine/issues',
  },
  dependencies: {
    react: '^19.2.0',
    'react-dom': '^19.2.0',
  },
  devDependencies: null,
  private: false,
  sideEffects: false,
};

const dataCode = `
export const data = ${JSON.stringify(jsonData, null, 2)};
`;

const code = `
import { JsonViewer } from '@mantine/code-highlight';
import { data } from './data';

function Demo() {
  return <JsonViewer value={data} />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
