import { Tree } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <Tree data={data} animation={{ transitionDuration: 200 }} />;
}
`;

function Demo() {
  return <Tree data={data} animation={{ transitionDuration: 200 }} />;
}

export const animation: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
