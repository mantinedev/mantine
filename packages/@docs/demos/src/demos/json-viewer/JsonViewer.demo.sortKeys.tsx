import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  zebra: 'last',
  apple: 'first',
  mango: 'middle',
  banana: 'second',
  nested: {
    zoo: 3,
    ark: 1,
    bee: 2,
  },
};

const code = `
import { JsonViewer } from '@mantine/code-highlight';

function Demo() {
  return <JsonViewer value={data} sortKeys />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} sortKeys />;
}

export const sortKeys: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
