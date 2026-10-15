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

export function RoundCapsWithSections() {
  const sections = [
    { value: 60, color: 'teal' },
    { value: 80, color: 'yellow' },
    { value: 100, color: 'red' },
  ];

  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      <GaugeChart value={72} roundCaps size={160} sections={sections} />
      <GaugeChart value={72} roundCaps={false} size={160} sections={sections} />
      <GaugeChart value={72} roundCaps size={160} sections={[{ value: 80, color: 'teal' }]} />
      <GaugeChart
        value={72}
        roundCaps
        size={160}
        target={72}
        sections={[
          { value: 60, color: 'teal' },
          { value: 80, color: 'yellow' },
        ]}
      />
      <GaugeChart
        value={72}
        roundCaps
        size={160}
        startAngle={120}
        endAngle={-120}
        sections={sections}
      />
      <GaugeChart
        value={72}
        roundCaps
        size={160}
        startAngle={0}
        endAngle={360}
        sections={sections}
      />
      <GaugeChart
        value={72}
        roundCaps
        size={160}
        thickness={24}
        sections={[
          { value: 0, color: 'gray' },
          { value: 50, color: 'teal' },
          { value: 100, color: 'red' },
          { value: 100, color: 'gray' },
        ]}
      />
    </div>
  );
}

export function FullCircle() {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <GaugeChart value={72} startAngle={0} endAngle={360} size={160} />
      <GaugeChart value={72} startAngle={-180} endAngle={180} size={160} />
      <GaugeChart
        value={72}
        startAngle={0}
        endAngle={360}
        size={160}
        sections={[
          { value: 33, color: 'green.6' },
          { value: 66, color: 'yellow.6' },
          { value: 100, color: 'red.6' },
        ]}
      />
    </div>
  );
}

export function CounterClockwise() {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <GaugeChart value={72} startAngle={120} endAngle={-120} size={160} />
      <GaugeChart
        value={72}
        startAngle={120}
        endAngle={-120}
        size={160}
        target={40}
        sections={[
          { value: 33, color: 'green.6' },
          { value: 66, color: 'yellow.6' },
          { value: 100, color: 'red.6' },
        ]}
      />
    </div>
  );
}

export function NonFiniteInput() {
  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <GaugeChart value={NaN} size={160} data-testid="value-nan" />
      <GaugeChart value={Infinity} size={160} data-testid="value-infinity" />
      <GaugeChart value={72} min={NaN} max={NaN} size={160} data-testid="min-max-nan" />
      <GaugeChart value={72} target={NaN} size={160} data-testid="target-nan" />
      <GaugeChart
        value={72}
        size={160}
        data-testid="section-nan"
        sections={[
          { value: 30, color: 'teal' },
          { value: NaN, color: 'yellow' },
          { value: 60, color: 'orange' },
          { value: 100, color: 'red' },
        ]}
      />
      <GaugeChart value={72} startAngle={NaN} endAngle={NaN} size={160} data-testid="angles-nan" />
    </div>
  );
}

export function ReversedRange() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <GaugeChart value={30} min={0} max={100} size={160} data-testid="normal" />
      <GaugeChart value={30} min={100} max={0} size={160} data-testid="reversed" />
    </div>
  );
}

export function LongLabel() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <GaugeChart
        value={72}
        label="Average processor utilization across all cluster nodes"
        data-testid="long-label"
      />
      <GaugeChart
        value={72}
        startAngle={0}
        endAngle={90}
        label="Processor utilization"
        data-testid="quarter-arc"
      />
      <GaugeChart
        value={72}
        startAngle={-90}
        endAngle={90}
        label="Processor utilization"
        data-testid="half-arc"
      />
    </div>
  );
}

export function FlexStretch() {
  return (
    <div style={{ display: 'flex', gap: 20, height: 240, background: 'rgba(0, 0, 0, 0.05)' }}>
      <GaugeChart value={72} size={160} data-testid="stretch" />
      <GaugeChart value={72} size={160} startAngle={-90} endAngle={90} />
    </div>
  );
}

export function DegenerateGeometry() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <GaugeChart value={72} startAngle={30} endAngle={30} data-testid="zero-span" />
      <GaugeChart value={72} thickness={250} data-testid="thick" />
      <GaugeChart value={72} size={0} data-testid="zero-size" />
      <GaugeChart value={0} thickness={24} roundCaps data-testid="empty-round-caps" />
    </div>
  );
}
