import React from 'react';
import { DonutChart } from './DonutChart';

export default { title: 'DonutChart' };

const data = [
  { name: 'Group A', value: 400, color: 'indigo.6' },
  { name: 'Group B', value: 300, color: 'yellow.6' },
  { name: 'Group C', value: 300, color: 'teal.6' },
  { name: 'Group D', value: 200, color: 'pink.6' },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DonutChart data={data} h={160} bg="red" withLabels />
    </div>
  );
}

export function WithLabels() {
  return (
    <div style={{ padding: 40 }}>
      <DonutChart data={data} h={240} withLabels />
    </div>
  );
}
