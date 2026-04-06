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
};

const code = `
import { JsonViewer } from '@mantine/code-highlight';

function Demo() {
  return <JsonViewer value={data} withCopy />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} withCopy />;
}

export const withCopy: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
