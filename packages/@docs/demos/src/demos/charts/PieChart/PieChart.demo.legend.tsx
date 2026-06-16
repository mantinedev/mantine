import { PieChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withLegend />;
}
`;

function Demo() {
  return <PieChart data={data} withLegend />;
}

export const legend: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  centered: true,
};
