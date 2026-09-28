import { tests } from '@mantine-tests/core';
import { RadialBarChart, RadialBarChartProps, RadialBarChartStylesNames } from './RadialBarChart';

const defaultProps: RadialBarChartProps = {
  data: [],
  dataKey: 'value',
};

describe('@mantine/charts/RadialBarChart', () => {
  tests.itSupportsSystemProps<RadialBarChartProps, RadialBarChartStylesNames>({
    component: RadialBarChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/RadialBarChart',
    stylesApiSelectors: ['root'],
  });
});
