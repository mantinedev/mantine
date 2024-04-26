import { ScatterChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { doubleData, doubleDataCode } from './_data';

const code = `
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}
`;

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={doubleData}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}

export const multipleSeries: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: doubleDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
