import { BarsList } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const data = [
  { name: 'React', value: 850000, color: 'blue' },
  { name: 'Vue', value: 620000, color: 'green' },
  { name: 'Angular', value: 540000, color: 'yellow' },
  { name: 'Svelte', value: 380000, color: 'red' },
  { name: 'Next.js', value: 920000, color: 'teal' },
  { name: 'Nuxt', value: 410000, color: 'gray' },
  { name: 'Remix', value: 295000, color: 'orange' },
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
      variant="filled"
      valueFormatter={(value) => value.toLocaleString('en-US')}
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
      variant="filled"
      valueFormatter={(value) => value.toLocaleString('en-US')}
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
