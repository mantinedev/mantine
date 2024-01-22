import React from 'react';
import { AreaChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{
        formatter: (value) => {
          switch (value) {
            case 'Apples':
              return <>🍏</>;
            case 'Oranges':
              return <>🍊</>;
            case 'Tomatoes':
              return <>🍅</>;
            default:
              return <>{value}</>;
          }
        },
      }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{
        formatter: (value) => {
          switch (value) {
            case 'Apples':
              return <>🍏</>;
            case 'Oranges':
              return <>🍊</>;
            case 'Tomatoes':
              return <>🍅</>;
            default:
              return <>{value}</>;
          }
        },
      }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

export const legendFormatter: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
