import { Treemap } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Treemap } from '@mantine/charts';

const data = [
  { name: 'USA', value: 400, color: 'indigo.0' },
  { name: 'India', value: 300, color: 'yellow.1' },
  { name: 'Japan', value: 100, color: 'teal.1' },
  { name: 'Other', value: 200, color: 'gray.2' },
];

function Demo() {
  return <Treemap data={data} autoContrast />;
}
`;

const data = [
  { name: 'USA', value: 400, color: 'indigo.0' },
  { name: 'India', value: 300, color: 'yellow.1' },
  { name: 'Japan', value: 100, color: 'teal.1' },
  { name: 'Other', value: 200, color: 'gray.2' },
];

function Demo() {
  return <Treemap data={data} autoContrast />;
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
