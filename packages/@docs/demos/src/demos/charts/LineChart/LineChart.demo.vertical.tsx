import { LineChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      orientation="vertical"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      orientation="vertical"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}

export const vertical: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
