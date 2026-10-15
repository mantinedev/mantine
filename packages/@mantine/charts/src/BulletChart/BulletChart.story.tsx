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

function EdgeCase(
  props: Omit<React.ComponentProps<typeof BulletChart>, 'ranges'> & {
    ranges?: React.ComponentProps<typeof BulletChart>['ranges'];
  }
) {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ width: 320 }}>
          <BulletChart ranges={ranges} {...props} />
        </div>
        <div style={{ width: 180 }}>
          <BulletChart ranges={ranges} {...props} />
        </div>
      </div>
      <div style={{ height: 300 }}>
        <BulletChart ranges={ranges} orientation="vertical" {...props} />
      </div>
    </div>
  );
}

export function ScaleEdges() {
  return (
    <>
      <EdgeCase value={0} target={300000} label="Edges" />
      <EdgeCase value={300000} target={0} label="Edges" />
      <EdgeCase value={300000} target={300000} label="Max" />
    </>
  );
}

export function BeyondMax() {
  return (
    <>
      <EdgeCase value={400000} target={500000} label="Beyond" />
      <EdgeCase value={150000} target={450000} label="Target" />
    </>
  );
}

export function NonFiniteValues() {
  return (
    <>
      <EdgeCase value={NaN} target={NaN} label="NaN" />
      <EdgeCase value={150000} target={Infinity} label="Infinity" />
    </>
  );
}

export function EmptyRanges() {
  return <EdgeCase value={100} target={50} ranges={[]} label="Empty" />;
}

export function NegativeValues() {
  return <EdgeCase value={-50000} target={-10} label="Negative" />;
}

export function Formatted() {
  return (
    <EdgeCase
      value={230000}
      target={150000}
      label="Revenue"
      valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
    />
  );
}

export function TargetContrast() {
  const darkRanges = [
    { value: 100000, color: 'red.9' },
    { value: 200000, color: 'yellow.3' },
    { value: 300000, color: 'teal.9' },
  ];

  return (
    <>
      <EdgeCase value={0} target={50000} label="Red" />
      <EdgeCase value={0} target={150000} label="Yellow" />
      <EdgeCase value={0} target={250000} label="Teal" />
      <EdgeCase value={100000} target={400000} label="Track" />
      <EdgeCase value={250000} target={150000} label="Bar" />
      <EdgeCase value={0} target={50000} ranges={darkRanges} label="Red 9" />
      <EdgeCase value={0} target={150000} ranges={darkRanges} label="Yellow 3" />
      <EdgeCase value={0} target={250000} ranges={darkRanges} label="Teal 9" />
    </>
  );
}
