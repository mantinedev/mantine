import { CandlestickChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { CandlestickChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <CandlestickChart h={300} data={data} dataKey="date" maxCandleWidth={12} />;
}
`;

function Demo() {
  return <CandlestickChart h={300} data={data} dataKey="date" maxCandleWidth={12} />;
}

export const maxCandleWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
