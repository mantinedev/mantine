import { AreaChart } from './AreaChart';

export default { title: 'AreaChart' };

const data = [
  {
    date: 'March 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'March 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'March 24',
    Apples: 3322,
    Oranges: 1000,
    Tomatoes: 3055,
  },
  {
    date: 'March 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'March 26',
    Apples: 3475,
    Oranges: 1812,
    Tomatoes: 2917,
  },
  {
    date: 'March 27',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];

const splitData = [
  {
    date: 'March 22',
    Apples: 110,
  },
  {
    date: 'March 23',
    Apples: 60,
  },
  {
    date: 'March 24',
    Apples: -40,
  },
  {
    date: 'March 25',
    Apples: 40,
  },
  {
    date: 'March 26',
    Apples: -40,
  },
  {
    date: 'March 27',
    Apples: 80,
  },
];

const connectNullsData = [
  {
    date: 'March 22',
    Apples: 110,
  },
  {
    date: 'March 23',
    Apples: 60,
  },
  {
    date: 'March 24',
    Apples: 80,
  },
  {
    date: 'March 25',
    Apples: null,
  },
  {
    date: 'March 26',
    Apples: null,
  },
  {
    date: 'March 27',
    Apples: 40,
  },
  {
    date: 'March 28',
    Apples: 120,
  },
  {
    date: 'March 29',
    Apples: 80,
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        curveType="linear"
        withGradient
        withLegend
        withPointLabels
        series={[
          { name: 'Apples', color: 'indigo.6', strokeDasharray: '5 5' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function ValueFormatter() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        curveType="linear"
        withGradient
        withLegend
        valueFormatter={(value) => `$ ${new Intl.NumberFormat('en-US').format(value)}`}
        series={[
          { name: 'Apples', color: 'indigo.6', strokeDasharray: '5 5' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function ReferenceLines() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        curveType="linear"
        withGradient
        referenceLines={[
          { x: 'March 24', label: 'Ref' },
          { y: 3000, label: 'Profit reached', color: 'red.5' },
        ]}
        series={[
          { name: 'Apples', color: 'indigo.6', strokeDasharray: '5 5' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        curveType="linear"
        withGradient
        withLegend
        orientation="vertical"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function VerticalValueFormatter() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        curveType="linear"
        withGradient
        withLegend
        orientation="vertical"
        valueFormatter={(value) => `$ ${value * 2}`}
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function WithLegend() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        curveType="linear"
        type="stacked"
        withGradient
        withLegend
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function ConnectNulls() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={connectNullsData}
        dataKey="date"
        withGradient
        connectNulls={false}
        series={[{ name: 'Apples', color: 'indigo.6' }]}
      />
    </div>
  );
}

export function Split() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={splitData}
        dataKey="date"
        strokeWidth={1}
        type="split"
        fillOpacity={0.2}
        dotProps={{ r: 2, strokeWidth: 1 }}
        activeDotProps={{ r: 3, strokeWidth: 1 }}
        series={[{ name: 'Apples', color: 'bright' }]}
      />
      <AreaChart
        h={400}
        data={splitData}
        dataKey="date"
        strokeWidth={1}
        type="split"
        fillOpacity={0.2}
        dotProps={{ r: 2, strokeWidth: 1 }}
        activeDotProps={{ r: 3, strokeWidth: 1 }}
        series={[{ name: 'Apples', color: 'bright' }]}
        splitColors={['violet', 'orange']}
      />
    </div>
  );
}

export function Stacked() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        type="stacked"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function Unit() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        type="stacked"
        unit="$"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function PercentType() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        type="percent"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function Animation() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        type="stacked"
        tooltipAnimationDuration={200}
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function GridAxis() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        type="stacked"
        gridAxis="none"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
      />
    </div>
  );
}

export function SingleLine() {
  return (
    <div style={{ padding: 40 }}>
      <AreaChart
        h={400}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'teal.6' }]}
      />
    </div>
  );
}
