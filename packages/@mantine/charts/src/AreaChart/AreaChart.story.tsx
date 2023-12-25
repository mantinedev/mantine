import React from 'react';
import { AreaChart } from './AreaChart';

export default { title: 'AreaChart' };

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

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        curveType="linear"
        withGradient
        dotProps={{ r: 6 }}
        strokeWidth={4}
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function Stacked() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        type="stacked"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function Animation() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        type="stacked"
        animationDuration={200}
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function GridAxis() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        type="stacked"
        gridAxis="none"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function SingleLine() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'teal.6' }]}
      />
    </div>
  );
}
