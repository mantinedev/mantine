import { RadarChart } from './RadarChart';

export default { title: 'RadarChart' };

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <RadarChart
        data={data}
        h={300}
        series={[
          { name: 'A', color: 'lime.4', opacity: 0.1 },
          { name: 'B', color: 'violet.4', opacity: 0.1 },
        ]}
        dataKey="subject"
        withLegend
      />
    </div>
  );
}
