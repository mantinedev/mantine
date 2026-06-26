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

// Three segments share the name "Other" (a perfectly valid label for categorical data). Highlight
// and the segment tooltip are keyed by the data index, not the name, so each "Other" slice is
// isolated on its own: hovering one "Other" legend row dims the other two, and hovering one "Other"
// slice shows only that slice's value in the tooltip (120 / 80 / 60), not all three at once.
const duplicateNamesData: PieChartCell[] = [
  { name: 'Chrome', value: 350, color: 'indigo.6' },
  { name: 'Safari', value: 220, color: 'cyan.6' },
  { key: 'other-1', name: 'Other', value: 120, color: 'teal.6' },
  { key: 'other-2', name: 'Other', value: 80, color: 'orange.6' },
  { key: 'other-3', name: 'Other', value: 60, color: 'pink.6' },
];

export function DuplicateNames() {
  return (
    <div style={{ padding: 40 }}>
      <PieChart
        data={duplicateNamesData}
        size={220}
        withLegend
        withTooltip
        tooltipDataSource="segment"
      />
    </div>
  );
}
