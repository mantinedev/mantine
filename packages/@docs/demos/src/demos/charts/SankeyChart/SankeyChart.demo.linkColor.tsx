import { SankeyChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} nodeColor="indigo.6" linkColor="gray.6" />;
}
`;

function Demo() {
  return <SankeyChart data={data} nodeColor="indigo.6" linkColor="gray.6" />;
}

export const linkColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
