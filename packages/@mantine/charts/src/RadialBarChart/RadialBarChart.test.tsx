import { autoPatchWarn, tests } from '@mantine-tests/core';
import { RadialBarChart, RadialBarChartProps, RadialBarChartStylesNames } from './RadialBarChart';

const defaultProps: RadialBarChartProps = {
  data: [],
  dataKey: 'value',
};

describe('@mantine/core/RadialBarChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<RadialBarChartProps, RadialBarChartStylesNames>({
    component: RadialBarChart,
    props: defaultProps,
    displayName: '@mantine/core/RadialBarChart',
    stylesApiSelectors: ['root'],
  });
});
