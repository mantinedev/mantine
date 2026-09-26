import { AreaChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { brushData, brushDataCode } from './_data';

const code = `
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      withBrush
      brushProps={{ startIndex: 3, endIndex: 10, height: 30 }}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}
`;

function Demo() {
  return (
    <AreaChart
      h={300}
      data={brushData}
      dataKey="date"
      withBrush
      brushProps={{ startIndex: 3, endIndex: 10, height: 30 }}
      series={[{ name: 'Apples', color: 'indigo.6' }]}
    />
  );
}

export const brushProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: brushDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
