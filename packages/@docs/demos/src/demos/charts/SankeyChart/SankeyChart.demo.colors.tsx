import { SankeyChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <SankeyChart
      data={data}
      colors={['indigo.6', 'cyan.6', 'teal.6', 'orange.6', 'red.6']}
    />
  );
}
`;

function Demo() {
  return <SankeyChart data={data} colors={['indigo.6', 'cyan.6', 'teal.6', 'orange.6', 'red.6']} />;
}

export const colors: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
