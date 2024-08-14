import { PieChart, PieChartCell } from './PieChart';

export default { title: 'PieChart' };

const data: PieChartCell[] = [
  { name: 'Group A', value: 400, color: 'indigo.6' },
  { name: 'Group B', value: 300, color: 'yellow.6' },
  { name: 'Group C', value: 300, color: 'teal.6' },
  { name: 'Group D', value: 200, color: 'pink.6' },
  { key: 'e-1', name: 'Group E', value: 100, color: 'red.6' },
  { key: 'e-2', name: 'Group E', value: 150, color: 'orange.6' },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <PieChart data={data} strokeWidth={1} strokeColor="red" />
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
      <PieChart data={data} withLabels size={200} labelsPosition="inside" />
      <PieChart
        data={data}
        withLabels
        size={200}
        labelsPosition="inside"
        valueFormatter={(number) =>
          new Intl.NumberFormat('en', { currency: 'USD', style: 'currency' }).format(number)
        }
      />

      <PieChart style={{ width: '350px' }} data={data} withLabels size={200} />
      <PieChart style={{ width: '350px' }} data={data} withLabels size={200} labelsType="percent" />
      <PieChart
        style={{ width: '350px' }}
        data={data}
        withLabels
        size={200}
        valueFormatter={(number) =>
          new Intl.NumberFormat('en', { currency: 'USD', style: 'currency' }).format(number)
        }
      />
    </div>
  );
}

export function WithTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <PieChart data={data} withLabels withTooltip size={200} />
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
