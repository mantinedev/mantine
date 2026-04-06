import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  id: 1,
  name: 'Mantine',
  type: 'library',
};

const code = `
import { JsonViewer } from '@mantine/code-highlight';

function Demo() {
  return <JsonViewer value={data} rootName="response" />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} rootName="response" />;
}

export const rootName: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
