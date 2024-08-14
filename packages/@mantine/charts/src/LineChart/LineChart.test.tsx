import React from 'react';
import { patchConsoleWarn, render, tests } from '@mantine-tests/core';
import { LineChart, LineChartProps, LineChartStylesNames } from './LineChart';

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <OriginalModule.ResponsiveContainer width={800} height={800}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

const defaultProps: LineChartProps = {
  data: [
    { date: 'Mar 22', test: 110 },
    { date: 'Mar 23', test: 60 },
  ],
  series: [{ name: 'test', color: 'blue' }],
  dataKey: 'date',
  style: { width: 200, height: 200 },
};

const nestedData = [
  {
    date: 'Mar 22',
    TomatoesProp: 2452,
    salad: {
      ApplesProp: 2890,
      OrangesProp: 2338,
    },
  },
  {
    date: 'Mar 23',
    TomatoesProp: 2402,
    salad: {
      ApplesProp: 2756,
      OrangesProp: 2103,
    },
  },
];

const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
];

describe('@mantine/charts/LineChart', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<LineChartProps, LineChartStylesNames>({
    component: LineChart,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/LineChart',
    stylesApiSelectors: ['root'],
  });

  it('renders LineChart legend with nested series name', async () => {
    const { container } = render(
      <div style={{ padding: 40 }}>
        <LineChart
          h={300}
          data={nestedData}
          dataKey="date"
          series={[
            { name: 'salad.ApplesProp', color: 'indigo.6', label: 'AppleLabel' },
            { name: 'salad.OrangesProp', color: 'blue.6', label: 'OrangesLabel' },
            { name: 'TomatoesProp', color: 'teal.6', label: 'TomatoesLabel' },
          ]}
          curveType="linear"
          withLegend
        />
      </div>
    );

    expect(container.querySelector('.recharts-surface')).toBeInTheDocument();

    const legendElementList = container.querySelectorAll('.mantine-ChartLegend-legendItemName');
    expect(legendElementList).toHaveLength(3);

    expect(legendElementList[0].textContent).toEqual('AppleLabel');
    expect(legendElementList[1].textContent).toEqual('OrangesLabel');
    expect(legendElementList[2].textContent).toEqual('TomatoesLabel');
  });

  it('renders LineChart legend labels', () => {
    const { container } = render(
      <div style={{ padding: 40 }}>
        <LineChart
          h={300}
          data={data}
          dataKey="date"
          withLegend
          legendProps={{ verticalAlign: 'bottom' }}
          series={[
            { name: 'Apples', label: 'Apples sales', color: 'indigo.6' },
            { name: 'Oranges', label: 'Oranges sales', color: 'blue.6' },
            { name: 'Tomatoes', label: 'Tomatoes sales', color: 'teal.6' },
          ]}
        />
      </div>
    );

    expect(container.querySelector('.recharts-surface')).toBeInTheDocument();

    const legendElementList = container.querySelectorAll('.mantine-ChartLegend-legendItemName');
    expect(legendElementList).toHaveLength(3);

    expect(legendElementList[0].textContent).toEqual('Apples sales');
    expect(legendElementList[1].textContent).toEqual('Oranges sales');
    expect(legendElementList[2].textContent).toEqual('Tomatoes sales');
  });
});
