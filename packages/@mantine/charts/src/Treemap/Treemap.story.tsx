import { Treemap, TreemapData } from './Treemap';

export default { title: 'Treemap' };

const data: TreemapData[] = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Germany', value: 200, color: 'pink.6' },
  { name: 'UK', value: 150, color: 'grape.6' },
  { name: 'France', value: 120, color: 'cyan.6' },
];

const nestedData: TreemapData[] = [
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      { name: 'React', value: 400 },
      { name: 'Vue', value: 200 },
      { name: 'Angular', value: 150 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 300 },
      { name: 'Python', value: 250 },
      { name: 'Go', value: 100 },
    ],
  },
  {
    name: 'Mobile',
    color: 'orange.6',
    children: [
      { name: 'React Native', value: 200 },
      { name: 'Flutter', value: 180 },
    ],
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Treemap data={data} />
    </div>
  );
}

export function WithNestedData() {
  return (
    <div style={{ padding: 40 }}>
      <Treemap data={nestedData} />
    </div>
  );
}

export function NoTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <Treemap data={data} withTooltip={false} />
    </div>
  );
}

export function CustomHeight() {
  return (
    <div style={{ padding: 40 }}>
      <Treemap data={data} height={500} />
    </div>
  );
}

export function CustomStroke() {
  return (
    <div style={{ padding: 40 }}>
      <Treemap data={data} strokeColor="red" strokeWidth={3} />
    </div>
  );
}

const noColorData: TreemapData[] = [
  { name: 'Very long category name here', value: 400 },
  { name: 'Another long category name', value: 300 },
  { name: 'Short', value: 200 },
  { name: 'Tiny', value: 20 },
  {
    name: 'Group',
    children: [
      { name: 'Other', value: 100 },
      { name: 'Nested long label', value: 80 },
    ],
  },
  {
    name: 'Second group',
    color: 'yellow.4',
    children: [
      { name: 'Other', value: 100 },
      { name: 'Y', value: 60 },
    ],
  },
];

export function LabelsAndFallbackColors() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Treemap data={noColorData} />
      <div style={{ width: 200 }}>
        <Treemap data={noColorData} />
      </div>
      <Treemap data={noColorData} textColor="red.5" />
      <Treemap data={noColorData} tooltipAnimationDuration={300} />
    </div>
  );
}

const wideLabelsData: TreemapData[] = [
  { name: 'WWWWWWWWWWWWWWWWWWWW', value: 100, color: 'blue.6' },
  { name: 'MMMMMMMMMMMMMMMMMMMM', value: 100, color: 'teal.6' },
  { name: '東京都千代田区丸の内一丁目', value: 100, color: 'orange.6' },
  { name: '👩‍👩‍👧‍👦🏳️‍🌈🇯🇵👍🏽😀😀😀😀😀😀😀😀😀😀😀😀😀😀', value: 100, color: 'grape.6' },
];

export function LongLabels() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
      {[300, 600].map((width) => (
        <div key={width} style={{ width }}>
          <Treemap data={wideLabelsData} />
        </div>
      ))}
      {[80, 160, 300].map((width) => (
        <div key={width} style={{ width }}>
          <Treemap data={data} />
        </div>
      ))}
    </div>
  );
}

export function FillDataKey() {
  const tanks: TreemapData[] = [
    { name: 'Tank A', fill: 75 },
    { name: 'Tank B', fill: 40, color: 'red.6' },
    { name: 'Tank C', fill: 20 },
  ];

  return (
    <div style={{ padding: 40 }}>
      <Treemap data={tanks} dataKey="fill" />
    </div>
  );
}
