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
      valueFormatter={(value) => value.toLocaleString('en-US')}
      barTextColor="white"
      getBarProps={(barData) => ({
        style: {
          backgroundColor: barData.value > 500000 ? '#10a37f' : undefined,
          fontWeight: barData.value > 500000 ? 700 : undefined,
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <BarsList
      data={data}
      valueFormatter={(value) => value.toLocaleString('en-US')}
      barTextColor="white"
      getBarProps={(barData) => ({
        style: {
          backgroundColor: barData.value > 500000 ? '#10a37f' : undefined,
          fontWeight: barData.value > 500000 ? 700 : undefined,
        },
      })}
    />
  );
}

export const getBarProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
