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

function pt() {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });
}

describe('@mantine/charts/CompositeChart', () => {
  pt();

  tests.itSupportsSystemProps<CompositeChartProps, CompositeChartStylesNames>({
    component: CompositeChart,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/CompositeChart',
    stylesApiSelectors: ['root'],
  });
});
