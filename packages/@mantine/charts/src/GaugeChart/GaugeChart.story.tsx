import { GaugeChart } from './GaugeChart';

export default { title: 'GaugeChart' };

export function Usage() {
  return <GaugeChart value={72} />;
}

export function Sections() {
  return (
    <GaugeChart
      value={72}
      sections={[
        { value: 60, color: 'teal' },
        { value: 80, color: 'yellow' },
        { value: 100, color: 'red' },
      ]}
    />
  );
}

export function Target() {
  return (
    <GaugeChart
      value={72}
      target={75}
      sections={[
        { value: 60, color: 'teal' },
        { value: 80, color: 'yellow' },
        { value: 100, color: 'red' },
      ]}
    />
  );
}

export function CustomAngles() {
  return <GaugeChart value={72} startAngle={-90} endAngle={90} />;
}

export function Label() {
  return (
    <GaugeChart
      value={72}
      label={
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 24, fontWeight: 700 }}>72%</div>
          <div style={{ fontSize: 12, color: 'gray' }}>CPU Usage</div>
        </div>
      }
    />
  );
}

export function Thickness() {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <GaugeChart value={72} thickness={6} size={160} />
      <GaugeChart value={72} thickness={20} size={160} />
    </div>
  );
}

export function RoundCaps() {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <GaugeChart value={72} roundCaps size={160} />
      <GaugeChart value={72} roundCaps={false} size={160} />
    </div>
  );
}
