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
        categories={[
          { name: 'Apples', color: 'teal' },
          { name: 'Oranges', color: 'blue' },
          { name: 'Tomatoes', color: 'pink' },
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
        categories={[{ name: 'Apples', color: 'teal' }]}
      />
    </div>
  );
}
