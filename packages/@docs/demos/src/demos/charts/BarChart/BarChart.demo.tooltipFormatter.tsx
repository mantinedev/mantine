import React from 'react';
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
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
      tooltipProps={{
        formatter: (value, name) => {
          switch (name) {
            case 'Smartphones':
              return [value, <>📱</>];
            case 'Laptops':
              return [value, <>💻</>];
            case 'Tablets':
              return [value, <>🖥️</>];
            default:
              return [value, <>{name}</>];
          }
        },
      }}
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
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
      tooltipProps={{
        formatter: (value, name) => {
          switch (name) {
            case 'Smartphones':
              return [value, <>📱</>];
            case 'Laptops':
              return [value, <>💻</>];
            case 'Tablets':
              return [value, <>🖥️</>];
            default:
              return [value, <>{name}</>];
          }
        },
      }}
    />
  );
}

export const tooltipFormatter: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
