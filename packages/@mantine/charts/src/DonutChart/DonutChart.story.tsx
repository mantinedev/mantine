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
      <DonutChart data={data} strokeWidth={1} strokeColor="red" />
    </div>
  );
}

export function ChartLabel() {
  return (
    <div style={{ padding: 40 }}>
      <DonutChart data={data} chartLabel="Some label" />
    </div>
  );
}

export function WithLabels() {
  return (
    <div style={{ padding: 40 }}>
      <DonutChart data={data} withLabels size={200} thickness={40} />
    </div>
  );
}

export function Semicircle() {
  return (
    <div style={{ padding: 40 }}>
      <DonutChart data={data} startAngle={180} endAngle={0} h={250} withLabels bg="red" />
    </div>
  );
}

export function SegmentTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <DonutChart data={data} tooltipDataSource="segment" />
    </div>
  );
}
