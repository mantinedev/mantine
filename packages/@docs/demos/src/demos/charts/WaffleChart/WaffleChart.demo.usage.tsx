import { WaffleChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { WaffleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <WaffleChart data={data} />;
}
`;

function Demo() {
  return <WaffleChart data={data} />;
}

export const usage: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
