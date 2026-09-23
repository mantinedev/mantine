import { CompositeChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const data = [
  { date: 'Mar 1', Apples: 2200, Oranges: 1400, Tomatoes: 800 },
  { date: 'Mar 2', Apples: 2500, Oranges: 1500, Tomatoes: 1000 },
  { date: 'Mar 3', Apples: 2800, Oranges: 1700, Tomatoes: 1200 },
  { date: 'Mar 4', Apples: 3100, Oranges: 1600, Tomatoes: 900 },
  { date: 'Mar 5', Apples: 3000, Oranges: 1800, Tomatoes: 1100 },
  { date: 'Mar 6', Apples: 2700, Oranges: 2000, Tomatoes: 1300 },
  { date: 'Mar 7', Apples: 2400, Oranges: 2100, Tomatoes: 1500 },
  { date: 'Mar 8', Apples: 2100, Oranges: 1900, Tomatoes: 1400 },
  { date: 'Mar 9', Apples: 1900, Oranges: 1700, Tomatoes: 1200 },
  { date: 'Mar 10', Apples: 2200, Oranges: 1500, Tomatoes: 1000 },
  { date: 'Mar 11', Apples: 2600, Oranges: 1600, Tomatoes: 1100 },
  { date: 'Mar 12', Apples: 3000, Oranges: 1800, Tomatoes: 1300 },
  { date: 'Mar 13', Apples: 3300, Oranges: 2000, Tomatoes: 1600 },
  { date: 'Mar 14', Apples: 3100, Oranges: 2200, Tomatoes: 1700 },
  { date: 'Mar 15', Apples: 2800, Oranges: 2100, Tomatoes: 1500 },
  { date: 'Mar 16', Apples: 2500, Oranges: 1900, Tomatoes: 1300 },
];

const code = `
import { CompositeChart } from '@mantine/charts';

const data = [
  { date: 'Mar 1', Apples: 2200, Oranges: 1400, Tomatoes: 800 },
  { date: 'Mar 2', Apples: 2500, Oranges: 1500, Tomatoes: 1000 },
  /* ...other data points */
];

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      withBrush
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      withBrush
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}

export const brush: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
