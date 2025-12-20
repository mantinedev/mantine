import { autoPatchWarn, tests } from '@mantine-tests/core';
import { AreaChart, AreaChartProps, AreaChartStylesNames } from './AreaChart';

const defaultProps: AreaChartProps = {
  data: [
    { date: 'Mar 22', test: 110 },
    { date: 'Mar 23', test: 60 },
  ],
  series: [{ name: 'test', color: 'blue' }],
  dataKey: 'date',
  style: { width: 200, height: 200 },
};

describe('@mantine/charts/AreaChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<AreaChartProps, AreaChartStylesNames>({
    component: AreaChart,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/AreaChart',
    stylesApiSelectors: ['root'],
  });
});
