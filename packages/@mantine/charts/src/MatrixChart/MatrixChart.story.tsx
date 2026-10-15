import { useEffect, useState } from 'react';
import { MatrixChart, MatrixChartCell } from './MatrixChart';

export default { title: 'MatrixChart' };

const xLabels = ['6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'];
const yLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const data: MatrixChartCell[] = [
  { x: '6 AM', y: 'Mon', value: 3 },
  { x: '8 AM', y: 'Mon', value: 14 },
  { x: '10 AM', y: 'Mon', value: 26 },
  { x: '12 PM', y: 'Mon', value: 30 },
  { x: '2 PM', y: 'Mon', value: 28 },
  { x: '4 PM', y: 'Mon', value: 22 },
  { x: '6 PM', y: 'Mon', value: 12 },
  { x: '8 PM', y: 'Mon', value: 5 },
  { x: '6 AM', y: 'Tue', value: 4 },
  { x: '8 AM', y: 'Tue', value: 16 },
  { x: '10 AM', y: 'Tue', value: 28 },
  { x: '12 PM', y: 'Tue', value: 32 },
  { x: '2 PM', y: 'Tue', value: 30 },
  { x: '4 PM', y: 'Tue', value: 24 },
  { x: '6 PM', y: 'Tue', value: 14 },
  { x: '8 PM', y: 'Tue', value: 6 },
  { x: '6 AM', y: 'Wed', value: 5 },
  { x: '8 AM', y: 'Wed', value: 18 },
  { x: '10 AM', y: 'Wed', value: 30 },
  { x: '12 PM', y: 'Wed', value: 35 },
  { x: '2 PM', y: 'Wed', value: 32 },
  { x: '4 PM', y: 'Wed', value: 26 },
  { x: '6 PM', y: 'Wed', value: 16 },
  { x: '8 PM', y: 'Wed', value: 8 },
  { x: '6 AM', y: 'Thu', value: 3 },
  { x: '8 AM', y: 'Thu', value: 15 },
  { x: '10 AM', y: 'Thu', value: 25 },
  { x: '12 PM', y: 'Thu', value: 29 },
  { x: '2 PM', y: 'Thu', value: 27 },
  { x: '4 PM', y: 'Thu', value: 21 },
  { x: '6 PM', y: 'Thu', value: 13 },
  { x: '8 PM', y: 'Thu', value: 7 },
  { x: '6 AM', y: 'Fri', value: 2 },
  { x: '8 AM', y: 'Fri', value: 12 },
  { x: '10 AM', y: 'Fri', value: 22 },
  { x: '12 PM', y: 'Fri', value: 26 },
  { x: '2 PM', y: 'Fri', value: 24 },
  { x: '4 PM', y: 'Fri', value: 18 },
  { x: '6 PM', y: 'Fri', value: 15 },
  { x: '8 PM', y: 'Fri', value: 10 },
  { x: '6 AM', y: 'Sat', value: 1 },
  { x: '8 AM', y: 'Sat', value: 4 },
  { x: '10 AM', y: 'Sat', value: 8 },
  { x: '12 PM', y: 'Sat', value: 12 },
  { x: '2 PM', y: 'Sat', value: 14 },
  { x: '4 PM', y: 'Sat', value: 10 },
  { x: '6 PM', y: 'Sat', value: 8 },
  { x: '8 PM', y: 'Sat', value: 6 },
  { x: '6 AM', y: 'Sun', value: null },
  { x: '8 AM', y: 'Sun', value: 2 },
  { x: '10 AM', y: 'Sun', value: 5 },
  { x: '12 PM', y: 'Sun', value: 9 },
  { x: '2 PM', y: 'Sun', value: 10 },
  { x: '4 PM', y: 'Sun', value: 7 },
  { x: '6 PM', y: 'Sun', value: 5 },
  { x: '8 PM', y: 'Sun', value: 3 },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MatrixChart data={data} />
    </div>
  );
}

export function Labels() {
  return (
    <div style={{ padding: 40 }}>
      <MatrixChart data={data} xLabels={xLabels} yLabels={yLabels} withYLabels withXLabels />
    </div>
  );
}

export function Tooltip() {
  return (
    <div style={{ padding: 40 }}>
      <MatrixChart
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        withYLabels
        withTooltip
        getTooltipLabel={({ x, y, value }) =>
          `${y} ${x}: ${value === null ? 'No data' : `${value} visitors`}`
        }
      />
    </div>
  );
}

export function Colors() {
  return (
    <div style={{ padding: 40 }}>
      <MatrixChart
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        withYLabels
        colors={[
          'var(--mantine-color-orange-2)',
          'var(--mantine-color-orange-4)',
          'var(--mantine-color-orange-6)',
          'var(--mantine-color-orange-9)',
        ]}
      />
    </div>
  );
}

export function CellSize() {
  return (
    <div style={{ padding: 40 }}>
      <MatrixChart
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        withYLabels
        cellSize={30}
        gap={3}
      />
    </div>
  );
}

export function Legend() {
  return (
    <div style={{ padding: 40 }}>
      <MatrixChart data={data} xLabels={xLabels} yLabels={yLabels} withYLabels withLegend />
    </div>
  );
}

export function XLabelsPosition() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
      {[-90, -45, 0, 45, 90].map((rotation) => (
        <div key={rotation} style={{ display: 'flex', gap: 40 }}>
          <MatrixChart
            data={data}
            xLabels={[...xLabels.slice(0, -1), 'Late evening']}
            yLabels={yLabels}
            withYLabels
            withXLabels
            xLabelsPosition="top"
            xLabelsRotation={rotation}
          />
          <MatrixChart
            data={data}
            xLabels={[...xLabels.slice(0, -1), 'Late evening']}
            yLabels={yLabels}
            withYLabels
            withXLabels
            xLabelsPosition="bottom"
            xLabelsRotation={rotation}
          />
        </div>
      ))}
    </div>
  );
}

export function LegendLongLabels() {
  return (
    <div style={{ padding: 40 }}>
      <MatrixChart data={data.slice(0, 16)} withLegend legendLabels={['Few WWWW', 'Many WWWW']} />
    </div>
  );
}

export function CellPropsClassName() {
  return (
    <div style={{ padding: 40 }}>
      <MatrixChart
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        withYLabels
        withTooltip
        getTooltipLabel={({ x, y, value }) => `${y} ${x}: ${value ?? 'No data'}`}
        getCellProps={() => ({ className: 'custom-cell', onPointerEnter: () => {} })}
      />
    </div>
  );
}

export function DataEdgeCases() {
  const cases: { title: string; props: Partial<React.ComponentProps<typeof MatrixChart>> }[] = [
    {
      title: 'Hidden outlier',
      props: { data: [...data, { x: 'Midnight', y: 'Mon', value: 1000 }] },
    },
    {
      title: 'Duplicate overwritten',
      props: { data: [{ x: '6 AM', y: 'Mon', value: 1000 }, ...data] },
    },
    { title: 'All equal', props: { data: data.map((cell) => ({ ...cell, value: 5 })) } },
    { title: 'All null', props: { data: data.map((cell) => ({ ...cell, value: null })) } },
    { title: 'NaN domain', props: { data, domain: [NaN, 10] } },
    { title: 'Reversed domain', props: { data, domain: [35, 0] } },
    {
      title: 'Single cell',
      props: { data: [{ x: '6 AM', y: 'Mon', value: 3 }], xLabels: ['6 AM'], yLabels: ['Mon'] },
    },
    {
      title: 'valueFormatter',
      props: { data, valueFormatter: (value: number) => `${value} visitors` },
    },
  ];

  return (
    <div style={{ padding: 40, display: 'flex', flexWrap: 'wrap', gap: 40 }}>
      {cases.map(({ title, props }) => (
        <div key={title} data-case={title}>
          <div style={{ marginBottom: 8 }}>{title}</div>
          <MatrixChart
            data={data}
            xLabels={xLabels}
            yLabels={yLabels}
            withYLabels
            withXLabels
            withLegend
            {...props}
          />
        </div>
      ))}
    </div>
  );
}

export function LiveTooltip() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setTick((current) => current + 1), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const liveData = data.map((cell) => ({ ...cell, value: (cell.value ?? 0) + tick }));

  return (
    <div style={{ padding: 40, display: 'flex', gap: 40 }}>
      {[true, false].map((withinPortal) => (
        <div key={String(withinPortal)} data-within-portal={String(withinPortal)}>
          <div style={{ marginBottom: 8 }}>withinPortal: {String(withinPortal)}</div>
          <MatrixChart
            data={liveData}
            xLabels={xLabels}
            yLabels={yLabels}
            withYLabels
            withXLabels
            withTooltip
            tooltipProps={{ withinPortal }}
            getTooltipLabel={({ x, y, value }) => `${y} ${x}: ${value ?? 'No data'}`}
          />
        </div>
      ))}
    </div>
  );
}
