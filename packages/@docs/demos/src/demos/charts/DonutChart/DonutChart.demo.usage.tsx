import React from 'react';
import { DonutChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DonutChart } from '@mantine/charts';

const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];

function Demo() {
  return <DonutChart data={data} />;
}
`;

const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];

function Demo() {
  return <DonutChart data={data} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
