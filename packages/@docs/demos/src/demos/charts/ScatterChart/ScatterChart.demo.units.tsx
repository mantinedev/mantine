import React from 'react';
import { ScatterChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { spendingsData, spendingsDataCode } from './_data';

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
      data={spendingsData}
      dataKey={{ x: 'age', y: 'average_monthly_spending' }}
      yAxisProps={{ domain: [800, 3500] }}
      unit={{ y: '$' }}
    />
  );
}

export const units: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: spendingsDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
