import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  name: 'Mantine',
  version: '9.7.0',
  description: 'React components library',
  keywords: ['react', 'components', 'ui'],
  author: {
    name: 'Vitaly Rtishchev',
    url: 'https://github.com/rtivital',
  },
  license: 'MIT',
  private: false,
};

const dataCode = `
export const data = ${JSON.stringify(jsonData, null, 2)};
`;

const code = `
import { JsonViewer } from '@mantine/code-highlight';
import { data } from './data';

function Demo() {
  return <JsonViewer value={data} withLineNumbers />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} withLineNumbers />;
}

export const lineNumbers: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
