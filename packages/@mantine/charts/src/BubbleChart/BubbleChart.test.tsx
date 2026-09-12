import { autoPatchWarn, render, tests } from '@mantine-tests/core';
import { BubbleChart, BubbleChartProps, BubbleChartStylesNames } from './BubbleChart';

const defaultProps: BubbleChartProps = {
  data: [],
  dataKey: { x: 'x', y: 'y', z: 'z' },
  range: [0, 100],
};

describe('@mantine/charts/BubbleChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<BubbleChartProps, BubbleChartStylesNames>({
    component: BubbleChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/BubbleChart',
    stylesApiSelectors: ['root'],
  });

  it('does not pass textColor and gridColor props to the root element', () => {
    const { container } = render(
      <BubbleChart {...defaultProps} textColor="red" gridColor="blue" />
    );
    expect(container.querySelector('[textcolor]')).not.toBeInTheDocument();
    expect(container.querySelector('[gridcolor]')).not.toBeInTheDocument();
  });
});
