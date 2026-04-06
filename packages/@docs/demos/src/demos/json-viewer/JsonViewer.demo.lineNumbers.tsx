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

const code = `
import { JsonViewer } from '@mantine/code-highlight';

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
  code,
};
