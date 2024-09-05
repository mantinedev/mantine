import { RadialBarChart } from './RadialBarChart';

export default { title: 'RadialBarChart' };

const data = [
  {
    name: '18-24',
    uv: 31.47,
    color: 'blue.7',
  },
  {
    name: '25-29',
    uv: 26.69,
    color: 'orange.6',
  },
  {
    name: '30-34',
    uv: 15.69,
    color: 'yellow.7',
  },
  {
    name: '35-39',
    uv: 8.22,
    color: 'cyan.6',
  },
  {
    name: '40-49',
    uv: 8.63,
    color: 'green',
  },
  {
    name: '50+',
    uv: 2.63,
    color: 'pink',
  },
  {
    name: 'unknown',
    uv: 6.67,
    color: 'red',
  },
];

export function Usage() {
  return (
    <div style={{}}>
      <RadialBarChart data={data} h={400} dataKey="uv" />
    </div>
  );
}
