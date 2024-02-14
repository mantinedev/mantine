import React from 'react';
import { PieChart } from './PieChart';

export default { title: 'PieChart' };

const data = [
  { name: 'Group A', value: 400, color: 'indigo.6' },
  { name: 'Group B', value: 300, color: 'yellow.6' },
  { name: 'Group C', value: 300, color: 'teal.6' },
  { name: 'Group D', value: 200, color: 'pink.6' },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <PieChart data={data} strokeWidth={1} />
    </div>
  );
}

export function WithLabels() {
  return (
    <div style={{ padding: 40 }}>
      <PieChart data={data} withLabels size={200} />
      <PieChart data={data} withLabels size={200} labelsPosition="inside" />
      <PieChart data={data} withLabels size={200} labelsType="percent" />
    </div>
  );
}

export function Semicircle() {
  return (
    <div style={{ padding: 40 }}>
      <PieChart data={data} startAngle={180} endAngle={0} h={250} withLabels bg="red" />
    </div>
  );
}

export function SegmentTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <PieChart data={data} tooltipDataSource="segment" />
    </div>
  );
}
