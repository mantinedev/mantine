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
      barGap="xl"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`;

function Demo() {
  return (
    <BarsList data={data} barGap="xl" valueFormatter={(value) => value.toLocaleString('en-US')} />
  );
}

export const barGap: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
