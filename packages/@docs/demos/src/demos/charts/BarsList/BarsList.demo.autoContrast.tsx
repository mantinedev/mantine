import { BarsList } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const data = [
  { name: 'Yellow', value: 1200000, color: 'yellow.4' },
  { name: 'Cyan', value: 800000, color: 'cyan.2' },
  { name: 'Lime', value: 600000, color: 'lime.3' },
  { name: 'Dark Blue', value: 400000, color: 'blue.9' },
  { name: 'Dark Red', value: 200000, color: 'red.9' },
];

const dataCode = `export const data = ${JSON.stringify(data, null, 2)};`;

const code = `
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      autoContrast
      valueFormatter={(value) => value.toLocaleString()}
    />
  );
}
`;

function Demo() {
  return (
    <BarsList
      data={data}
      autoContrast
      valueFormatter={(value) => value.toLocaleString()}
    />
  );
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
