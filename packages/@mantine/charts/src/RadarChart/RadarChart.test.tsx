import { autoPatchWarn, tests } from '@mantine-tests/core';
import { RadarChart, RadarChartProps, RadarChartStylesNames } from './RadarChart';

const defaultProps: RadarChartProps = {
  data: [],
  series: [],
  dataKey: 'test',
};

describe('@mantine/charts/RadarChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<RadarChartProps, RadarChartStylesNames>({
    component: RadarChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/RadarChart',
    stylesApiSelectors: ['root'],
  });
});
