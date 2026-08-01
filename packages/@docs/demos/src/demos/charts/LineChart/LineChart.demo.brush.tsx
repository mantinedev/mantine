import { LineChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const data = [
  { date: 'Mar 1', Apples: 2200, Oranges: 1400 },
  { date: 'Mar 2', Apples: 2500, Oranges: 1500 },
  { date: 'Mar 3', Apples: 2800, Oranges: 1700 },
  { date: 'Mar 4', Apples: 3100, Oranges: 1600 },
  { date: 'Mar 5', Apples: 3000, Oranges: 1800 },
  { date: 'Mar 6', Apples: 2700, Oranges: 2000 },
  { date: 'Mar 7', Apples: 2400, Oranges: 2100 },
  { date: 'Mar 8', Apples: 2100, Oranges: 1900 },
  { date: 'Mar 9', Apples: 1900, Oranges: 1700 },
  { date: 'Mar 10', Apples: 2200, Oranges: 1500 },
  { date: 'Mar 11', Apples: 2600, Oranges: 1600 },
  { date: 'Mar 12', Apples: 3000, Oranges: 1800 },
  { date: 'Mar 13', Apples: 3300, Oranges: 2000 },
  { date: 'Mar 14', Apples: 3100, Oranges: 2200 },
  { date: 'Mar 15', Apples: 2800, Oranges: 2100 },
  { date: 'Mar 16', Apples: 2500, Oranges: 1900 },
];

const code = `
import { LineChart } from '@mantine/charts';

const data = [
  { date: 'Mar 1', Apples: 2200, Oranges: 1400 },
  { date: 'Mar 2', Apples: 2500, Oranges: 1500 },
  /* ...other data points */
];

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withBrush
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
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
      withBrush
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
      ]}
    />
  );
}

export const brush: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
