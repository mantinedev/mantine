import { SunburstChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} />;
}
`;

const dataCode = `
export const data = [
  {
    name: 'Sales',
    color: 'violet.6',
    children: [
      { name: 'Europe', value: 300 },
      { name: 'Asia', value: 200 },
    ],
  },
  {
    name: 'Marketing',
    color: '#fd7e14',
    children: [
      { name: 'Ads', value: 180 },
      { name: 'Events', value: 120 },
    ],
  },
  {
    name: 'Engineering',
    color: 'teal.6',
    children: [
      { name: 'Frontend', value: 250 },
      { name: 'Backend', value: 150, color: 'cyan.6' },
    ],
  },
];
`;

const data = [
  {
    name: 'Sales',
    color: 'violet.6',
    children: [
      { name: 'Europe', value: 300 },
      { name: 'Asia', value: 200 },
    ],
  },
  {
    name: 'Marketing',
    color: '#fd7e14',
    children: [
      { name: 'Ads', value: 180 },
      { name: 'Events', value: 120 },
    ],
  },
  {
    name: 'Engineering',
    color: 'teal.6',
    children: [
      { name: 'Frontend', value: 250 },
      { name: 'Backend', value: 150, color: 'cyan.6' },
    ],
  },
];

function Demo() {
  return <SunburstChart data={data} />;
}

export const color: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
