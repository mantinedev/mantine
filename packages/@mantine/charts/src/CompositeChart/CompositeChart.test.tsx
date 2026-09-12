import { autoPatchWarn, render, tests } from '@mantine-tests/core';
import { CompositeChart, CompositeChartProps, CompositeChartStylesNames } from './CompositeChart';

const defaultProps: CompositeChartProps = {
  data: [
    { date: 'Mar 22', test: 110 },
    { date: 'Mar 23', test: 60 },
  ],
  series: [{ name: 'test', color: 'blue', type: 'line' }],
  dataKey: 'date',
  style: { width: 200, height: 200 },
};

describe('@mantine/charts/CompositeChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<CompositeChartProps, CompositeChartStylesNames>({
    component: CompositeChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/CompositeChart',
    stylesApiSelectors: ['root'],
  });

  it('does not pass textColor and gridColor props to the root element', () => {
    const { container } = render(
      <CompositeChart {...defaultProps} textColor="red" gridColor="blue" />
    );
    expect(container.querySelector('[textcolor]')).not.toBeInTheDocument();
    expect(container.querySelector('[gridcolor]')).not.toBeInTheDocument();
  });
});
