import { Treemap } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Treemap } from '@mantine/charts';

const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: '#c92a2a' },
  { name: 'Japan', value: 100, color: 'rgb(8, 127, 91)' },
  { name: 'Other', value: 200, color: 'var(--mantine-color-gray-8)' },
];

function Demo() {
  return <Treemap data={data} />;
}
`;

const data = [
  { name: 'USA', value: 400, color: 'indigo.8' },
  { name: 'India', value: 300, color: '#c92a2a' },
  { name: 'Japan', value: 100, color: 'rgb(8, 127, 91)' },
  { name: 'Other', value: 200, color: 'var(--mantine-color-gray-8)' },
];

function Demo() {
  return <Treemap data={data} />;
}

export const color: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
