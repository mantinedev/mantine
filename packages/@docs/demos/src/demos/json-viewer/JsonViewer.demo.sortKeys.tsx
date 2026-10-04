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

const dataCode = `
export const data = ${JSON.stringify(jsonData, null, 2)};
`;

const code = `
import { JsonViewer } from '@mantine/code-highlight';
import { data } from './data';

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
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
