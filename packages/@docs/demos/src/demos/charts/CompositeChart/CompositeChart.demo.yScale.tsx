import { CompositeChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { yScaleData, yScaleDataCode } from './_data';

const code = `
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
    />
  );
}
`;

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={yScaleData}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
    />
  );
}

export const yScale: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: yScaleDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
