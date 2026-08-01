import { AreaChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { streamData, streamDataCode } from './_data';

const code = `
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="month"
      type="stream"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
        { name: 'Grapes', color: 'grape.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <AreaChart
      h={300}
      data={streamData}
      dataKey="month"
      type="stream"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
        { name: 'Grapes', color: 'grape.6' },
      ]}
    />
  );
}

export const stream: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: streamDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
