import { WaffleChart } from './WaffleChart';

export default { title: 'WaffleChart' };

const data = [
  { name: 'Chrome', value: 65, color: 'blue' },
  { name: 'Safari', value: 19, color: 'teal' },
  { name: 'Firefox', value: 10, color: 'orange' },
  { name: 'Other', value: 6, color: 'gray' },
];

export function Usage() {
  return <WaffleChart data={data} />;
}

export function Legend() {
  return <WaffleChart data={data} withLegend legendPosition="right" />;
}

export function Tooltip() {
  return (
    <WaffleChart
      data={data}
      withTooltip
      getTooltipLabel={(cell) => `${cell.name}: ${cell.value}%`}
    />
  );
}

export function FillDirections() {
  return (
    <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
      <WaffleChart data={data} fillDirection="left-to-right" />
      <WaffleChart data={data} fillDirection="right-to-left" />
      <WaffleChart data={data} fillDirection="top-to-bottom" />
      <WaffleChart data={data} fillDirection="bottom-to-top" />
    </div>
  );
}

export function CustomGrid() {
  return <WaffleChart data={data} rows={5} columns={20} />;
}

export function Gap() {
  return (
    <div style={{ display: 'flex', gap: 40 }}>
      <WaffleChart data={data} gap={0} cellRadius={0} />
      <WaffleChart data={data} gap={4} cellRadius={4} />
    </div>
  );
}

export function EmptyColor() {
  return (
    <WaffleChart
      data={[{ name: 'Completed', value: 68, color: 'teal' }]}
      total={100}
      emptyColor="gray.3"
    />
  );
}
