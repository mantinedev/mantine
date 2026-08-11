import { BulletChart } from './BulletChart';

export default { title: 'BulletChart' };

const ranges = [
  { value: 100000, color: 'red.8', label: 'Poor' },
  { value: 200000, color: 'yellow.8', label: 'Average' },
  { value: 300000, color: 'teal.8', label: 'Good' },
];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        label="Revenue"
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40, height: 300 }}>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        orientation="vertical"
        label="Revenue"
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
    </div>
  );
}

export function NoTarget() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <BulletChart
        value={230000}
        ranges={ranges}
        label="Revenue"
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
    </div>
  );
}

export function CustomColors() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        barColor="black"
        targetColor="white"
        label="Revenue"
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        label="Revenue"
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
      <BulletChart
        value={75}
        target={90}
        ranges={[
          { value: 50, color: 'red.8' },
          { value: 75, color: 'yellow.8' },
          { value: 100, color: 'teal.8' },
        ]}
        label="Satisfaction"
        barColor="blue"
      />
      <BulletChart
        value={42}
        target={30}
        ranges={[
          { value: 20, color: 'teal.8' },
          { value: 35, color: 'yellow.8' },
          { value: 50, color: 'red.8' },
        ]}
        label="Errors"
        barColor="red"
      />
    </div>
  );
}

export function WithTooltip() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        label="Revenue"
        withTooltip
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
    </div>
  );
}

export function BarSizes() {
  return (
    <div style={{ padding: 40, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        label="Small"
        barSize={10}
        size={20}
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        label="Default"
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        label="Large"
        size={48}
        barSize={24}
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
    </div>
  );
}

export function ChartSizeVsBarSize() {
  return (
    <div style={{ padding: 40, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        label="Tall chart, thin bar"
        size={48}
        barSize={8}
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        label="Tall chart, thick bar"
        size={48}
        barSize={32}
        valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
    </div>
  );
}
