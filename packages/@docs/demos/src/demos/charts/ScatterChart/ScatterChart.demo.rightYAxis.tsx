import { ScatterChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { biaxialData, biaxialDataCode } from './_data';

const code = `
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'month', y: 'value' }}
      withLegend
      withRightYAxis
      xAxisLabel="Month"
      yAxisLabel="Revenue"
      rightYAxisLabel="Conversion rate"
      rightYAxisProps={{ unit: '%' }}
    />
  );
}
`;

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={biaxialData}
      dataKey={{ x: 'month', y: 'value' }}
      withLegend
      withRightYAxis
      xAxisLabel="Month"
      yAxisLabel="Revenue"
      rightYAxisLabel="Conversion rate"
      rightYAxisProps={{ unit: '%' }}
    />
  );
}

export const rightYAxis: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: biaxialDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
