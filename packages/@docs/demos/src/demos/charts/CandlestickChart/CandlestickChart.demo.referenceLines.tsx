import { CandlestickChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { CandlestickChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CandlestickChart
      h={300}
      data={data}
      dataKey="date"
      referenceLines={[
        { y: 160, label: 'Resistance', color: 'red.6' },
        { y: 128, label: 'Support', color: 'teal.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <CandlestickChart
      h={300}
      data={data}
      dataKey="date"
      referenceLines={[
        { y: 160, label: 'Resistance', color: 'red.6' },
        { y: 128, label: 'Support', color: 'teal.6' },
      ]}
    />
  );
}

export const referenceLines: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
