import { FunnelChart, FunnelChartCell } from './FunnelChart';

export default { title: 'FunnelChart' };

const data: FunnelChartCell[] = [
  { name: 'Visits', value: 100, color: 'indigo.6' },
  { name: 'Cart', value: 80, color: 'yellow.6' },
  { name: 'Checkout', value: 50, color: 'teal.6' },
  { name: 'Purchase', value: 40, color: 'pink.6' },
  { name: 'Review', value: 26, color: 'red.6' },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <FunnelChart data={data} strokeWidth={1} strokeColor="red" />
    </div>
  );
}

export function WithLabels() {
  return (
    <div
      style={{
        padding: 40,
        gap: 40,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <FunnelChart data={data} withLabels size={300} />
    </div>
  );
}

export function CustomSize() {
  return (
    <div style={{ padding: 40 }}>
      <FunnelChart data={data} withLabels withTooltip size={400} />
    </div>
  );
}
