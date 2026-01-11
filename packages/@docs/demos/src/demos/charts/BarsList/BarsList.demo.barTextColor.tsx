import { BarsList } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barColor="yellow.4"
      barTextColor="dark.9"
      valueFormatter={(value) => value.toLocaleString()}
    />
  );
}
`;

function Demo() {
  return (
    <BarsList
      data={data}
      barColor="yellow.4"
      barTextColor="dark.9"
      valueFormatter={(value) => value.toLocaleString()}
    />
  );
}

export const barTextColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
