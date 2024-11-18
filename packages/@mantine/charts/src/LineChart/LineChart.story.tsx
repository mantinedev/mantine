import { YAxis } from 'recharts';
import { LineChart } from './LineChart';

export default { title: 'LineChart' };

const data = [
  {
    date: 'March 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'March 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'March 24',
    Apples: 3322,
    Oranges: 1000,
    Tomatoes: 3055,
  },
  {
    date: 'March 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'March 26',
    Apples: 3475,
    Oranges: 1812,
    Tomatoes: 2917,
  },
  {
    date: 'March 27',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];

const temperatures = [
  { date: 'Jan', temperature: -25 },
  { date: 'Feb', temperature: -10 },
  { date: 'Mar', temperature: 5 },
  { date: 'Apr', temperature: 15 },
  { date: 'May', temperature: 30 },
  { date: 'Jun', temperature: 15 },
  { date: 'Jul', temperature: 30 },
  { date: 'Aug', temperature: 40 },
  { date: 'Sep', temperature: 15 },
  { date: 'Oct', temperature: 20 },
  { date: 'Nov', temperature: 0 },
  { date: 'Dec', temperature: -10 },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
        valueFormatter={(value) => `$ ${value}`}
        withLegend
        withPointLabels
      />
    </div>
  );
}

export function MultipleYAxis() {
  return (
    <div style={{ padding: 40 }}>
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6', yAxisId: 'right' },
        ]}
        withLegend
        withRightYAxis
        yAxisLabel="Apples and Oranges"
      >
        <YAxis yAxisId="right" orientation="right" />
      </LineChart>
    </div>
  );
}

export function Gradient() {
  return (
    <div style={{ padding: 40 }}>
      <LineChart
        h={300}
        data={temperatures}
        dataKey="date"
        type="gradient"
        series={[{ name: 'temperature', color: 'indigo.6', label: 'Avg. Temperature' }]}
        gradientStops={[
          { offset: 0, color: 'red.6' },
          { offset: 20, color: 'orange.6' },
          { offset: 40, color: 'yellow.5' },
          { offset: 70, color: 'lime.5' },
          { offset: 80, color: 'cyan.5' },
          { offset: 100, color: 'blue.5' },
        ]}
        strokeWidth={5}
        curveType="natural"
        yAxisProps={{ domain: [-25, 40] }}
        valueFormatter={(value) => `${value}°C`}
      />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
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
        withLegend
      />
    </div>
  );
}

export function VerticalValueFormatter() {
  return (
    <div style={{ padding: 40 }}>
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        orientation="vertical"
        valueFormatter={(value) => `$ ${value * 2}`}
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
        withLegend
      />
    </div>
  );
}

export function ReferenceLines() {
  return (
    <div style={{ padding: 40 }}>
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
        referenceLines={[{ y: 2500, color: 'red.5', label: 'Reference line' }]}
        withLegend
      />
    </div>
  );
}
