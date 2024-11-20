import { BarChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      getBarColor={(value) => (value > 700 ? 'teal.8' : 'red.8')}
      series={[{ name: 'Laptops', color: 'gray.6' }]}
    />
  );
}
`;

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      getBarColor={(value) => (value > 700 ? 'teal.8' : 'red.8')}
      series={[{ name: 'Laptops', color: 'gray.6' }]}
    />
  );
}

export const getBarColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
