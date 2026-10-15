import { SunburstChart, SunburstChartData } from './SunburstChart';

export default { title: 'SunburstChart' };

const data: SunburstChartData[] = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];

const flatData: SunburstChartData[] = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Germany', value: 200, color: 'pink.6' },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={data} />
    </div>
  );
}

export function FlatData() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={flatData} />
    </div>
  );
}

export function NoTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={data} withTooltip={false} />
    </div>
  );
}

export function CustomSize() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={data} size={500} />
    </div>
  );
}

export function CustomStroke() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={data} strokeColor="red" />
    </div>
  );
}

export function WithLabels() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={data} withLabels size={400} />
    </div>
  );
}

export function CustomAngles() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={data} startAngle={90} endAngle={270} />
    </div>
  );
}

export function InvalidValues() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart
        withLabels
        data={[
          { name: 'Missing', color: 'red.6' },
          { name: 'A', value: 10, color: 'blue.6' },
          { name: 'NaN', value: NaN, color: 'orange.6' },
          { name: 'Negative', value: -5, color: 'grape.6' },
          { name: 'B', value: 5, color: 'teal.6' },
          {
            name: 'Parent smaller than children',
            value: 10,
            color: 'pink.6',
            children: [
              { name: 'p1', value: 30 },
              { name: 'p2', value: 30 },
            ],
          },
          { name: 'Parent larger than children', value: 40, children: [{ name: 'c1', value: 10 }] },
        ]}
      />
    </div>
  );
}

export function AllZero() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart
        data={[
          { name: 'A', value: 0 },
          { name: 'B', value: 0 },
        ]}
      />
    </div>
  );
}

export function NoColors() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart
        data={[
          { name: 'A', value: 10 },
          { name: 'B', value: 20, children: [{ name: 'b1', value: 12 }] },
          {
            name: 'C',
            children: [
              { name: 'c1', value: 5 },
              { name: 'c2', value: 10, color: 'rgb(250, 82, 82)' },
            ],
          },
          { name: 'D', value: 8 },
        ]}
      />
    </div>
  );
}

export function HalfRing() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={data} startAngle={180} endAngle={0} withLabels size={400} />
    </div>
  );
}

export function TinySlicesWithLabels() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart
        withLabels
        data={[
          { name: 'Big', value: 500, color: 'blue.6' },
          { name: 'Zero', value: 0, color: 'red.6' },
          ...Array.from({ length: 59 }, (_, index) => ({
            name: `Tiny ${index}`,
            value: 1,
            color: 'teal.6',
          })),
        ]}
      />
    </div>
  );
}

export function LabelsValueFormatter() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart
        data={data}
        withLabels
        size={400}
        valueFormatter={(value) => `$${value}`}
        aria-label="Technology spending"
      />
    </div>
  );
}

export function StartAngleOnly() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart data={data} startAngle={90} withLabels />
    </div>
  );
}

export function NumericStringValues() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart
        withLabels
        data={[
          { name: 'A', value: '5' as any, color: 'blue.6' },
          { name: 'B', value: 10, color: 'teal.6' },
          { name: 'C', value: 'abc' as any, color: 'red.6' },
        ]}
      />
    </div>
  );
}

export function SunburstChartPropsOverrides() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart
        data={data}
        withLabels
        size={400}
        sunburstChartProps={{ outerRadius: 150, textOptions: { fill: 'red' } } as any}
      />
    </div>
  );
}

export function CustomTooltipContent() {
  return (
    <div style={{ padding: 40 }}>
      <SunburstChart
        data={data}
        tooltipProps={{
          content: ({ payload }) => {
            const item = payload?.[0];
            return item ? (
              <div data-custom-tooltip style={{ background: 'white', padding: 8 }}>
                {`${item.name}: dataKey=${String(item.dataKey)} payload.value=${(item.payload as any)?.value}`}
              </div>
            ) : null;
          },
        }}
      />
    </div>
  );
}
