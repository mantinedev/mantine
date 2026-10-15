import { SankeyChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { colorData, colorDataCode } from './_data';

const code = `
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} />;
}
`;

function Demo() {
  return <SankeyChart data={colorData} />;
}

export const color: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: colorDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
