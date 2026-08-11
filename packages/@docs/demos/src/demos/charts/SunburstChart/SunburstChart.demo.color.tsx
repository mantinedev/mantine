import { SunburstChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SunburstChart } from '@mantine/charts';

const data = [
  { name: 'Sales', value: 500, color: 'violet.6' },
  { name: 'Marketing', value: 300, color: 'grape.6' },
  { name: 'Engineering', value: 400, color: 'pink.6' },
  { name: 'Support', value: 200, color: 'red.6' },
];

function Demo() {
  return <SunburstChart data={data} />;
}
`;

const data = [
  { name: 'Sales', value: 500, color: 'violet.6' },
  { name: 'Marketing', value: 300, color: 'grape.6' },
  { name: 'Engineering', value: 400, color: 'pink.6' },
  { name: 'Support', value: 200, color: 'red.6' },
];

function Demo() {
  return <SunburstChart data={data} />;
}

export const color: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
