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
