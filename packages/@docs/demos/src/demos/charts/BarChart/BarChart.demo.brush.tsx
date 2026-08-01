import { BarChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const data = [
  { month: 'Jan', Smartphones: 1200, Laptops: 900 },
  { month: 'Feb', Smartphones: 1400, Laptops: 1000 },
  { month: 'Mar', Smartphones: 1300, Laptops: 1100 },
  { month: 'Apr', Smartphones: 1600, Laptops: 1200 },
  { month: 'May', Smartphones: 1500, Laptops: 1300 },
  { month: 'Jun', Smartphones: 1800, Laptops: 1250 },
  { month: 'Jul', Smartphones: 2000, Laptops: 1400 },
  { month: 'Aug', Smartphones: 1900, Laptops: 1500 },
  { month: 'Sep', Smartphones: 1700, Laptops: 1450 },
  { month: 'Oct', Smartphones: 2100, Laptops: 1600 },
  { month: 'Nov', Smartphones: 2300, Laptops: 1700 },
  { month: 'Dec', Smartphones: 2500, Laptops: 1800 },
];

const code = `
import { BarChart } from '@mantine/charts';

const data = [
  { month: 'Jan', Smartphones: 1200, Laptops: 900 },
  { month: 'Feb', Smartphones: 1400, Laptops: 1000 },
  /* ...other data points */
];

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withBrush
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withBrush
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
      ]}
    />
  );
}

export const brush: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
