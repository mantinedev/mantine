import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  name: 'Mantine',
  version: 9,
  stable: true,
  deprecated: null,
  tags: ['react', 'ui'],
};

const code = `
import { JsonViewer } from '@mantine/code-highlight';

function Demo() {
  return <JsonViewer value={data} withTypes withSize />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} withTypes withSize />;
}

export const withTypes: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
