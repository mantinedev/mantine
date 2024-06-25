import { patchConsoleWarn, tests } from '@mantine-tests/core';
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
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<AreaChartProps, AreaChartStylesNames>({
    component: AreaChart,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/AreaChart',
    stylesApiSelectors: ['root'],
  });
});
