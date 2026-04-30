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
