import { autoPatchWarn, tests } from '@mantine-tests/core';
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
    refType: HTMLDivElement,
    displayName: '@mantine/charts/BubbleChart',
    stylesApiSelectors: ['root'],
  });
});
