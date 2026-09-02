import { CandlestickChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const dataCode = `export const data = [
  { day: 'Mon', o: 136, h: 142, l: 133, c: 140 },
  { day: 'Tue', o: 140, h: 145, l: 131, c: 133 },
  { day: 'Wed', o: 133, h: 138, l: 129, c: 137 },
  { day: 'Thu', o: 137, h: 150, l: 136, c: 148 },
  { day: 'Fri', o: 148, h: 154, l: 145, c: 146 },
];`;

const data = [
  { day: 'Mon', o: 136, h: 142, l: 133, c: 140 },
  { day: 'Tue', o: 140, h: 145, l: 131, c: 133 },
  { day: 'Wed', o: 133, h: 138, l: 129, c: 137 },
  { day: 'Thu', o: 137, h: 150, l: 136, c: 148 },
  { day: 'Fri', o: 148, h: 154, l: 145, c: 146 },
];

const code = `
import { CandlestickChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CandlestickChart
      h={300}
      data={data}
      dataKey="day"
      dataKeys={{ open: 'o', high: 'h', low: 'l', close: 'c' }}
    />
  );
}
`;

function Demo() {
  return (
    <CandlestickChart
      h={300}
      data={data}
      dataKey="day"
      dataKeys={{ open: 'o', high: 'h', low: 'l', close: 'c' }}
    />
  );
}

export const dataKeys: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
