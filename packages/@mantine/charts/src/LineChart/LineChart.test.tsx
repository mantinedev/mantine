import { autoPatchWarn, render, tests } from '@mantine-tests/core';
import { LineChart, LineChartProps, LineChartStylesNames } from './LineChart';

const defaultProps: LineChartProps = {
  data: [
    { date: 'Mar 22', test: 110 },
    { date: 'Mar 23', test: 60 },
  ],
  series: [{ name: 'test', color: 'blue' }],
  dataKey: 'date',
  style: { width: 200, height: 200 },
};

describe('@mantine/charts/LineChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<LineChartProps, LineChartStylesNames>({
    component: LineChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/LineChart',
    stylesApiSelectors: ['root'],
  });

  it('does not pass textColor and gridColor props to the root element', () => {
    const { container } = render(<LineChart {...defaultProps} textColor="red" gridColor="blue" />);
    expect(container.querySelector('[textcolor]')).not.toBeInTheDocument();
    expect(container.querySelector('[gridcolor]')).not.toBeInTheDocument();
  });
});
