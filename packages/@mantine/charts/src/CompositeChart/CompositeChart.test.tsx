import { patchConsoleWarn, tests } from '@mantine-tests/core';
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
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<CompositeChartProps, CompositeChartStylesNames>({
    component: CompositeChart,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/CompositeChart',
    stylesApiSelectors: ['root'],
  });
});
