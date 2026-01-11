import { BarsList } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const data = [
  { name: 'Google', value: 1200000, color: 'blue.6' },
  { name: 'Direct', value: 100000, color: 'green.6' },
  { name: 'Bing', value: 200000, color: 'yellow.6' },
  { name: 'Yahoo', value: 20000, color: 'red.6' },
  { name: 'ChatGPT', value: 1345000, color: 'teal.6' },
  { name: 'Github', value: 100000, color: 'gray.8' },
  { name: 'Yandex', value: 100000, color: 'orange.6' },
];

const dataCode = `export const data = ${JSON.stringify(data, null, 2)};`;

const code = `
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      valueFormatter={(value) => value.toLocaleString()}
    />
  );
}
`;

function Demo() {
  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      valueFormatter={(value) => value.toLocaleString()}
    />
  );
}

export const customColors: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
