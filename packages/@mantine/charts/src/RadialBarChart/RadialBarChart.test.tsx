import { patchConsoleWarn, tests } from '@mantine-tests/core';
import { RadialBarChart, RadialBarChartProps, RadialBarChartStylesNames } from './RadialBarChart';

const defaultProps: RadialBarChartProps = {
  data: [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 30 },
  ],
  dataKey: 'value',
};

describe('@mantine/core/RadialBarChart', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<RadialBarChartProps, RadialBarChartStylesNames>({
    component: RadialBarChart,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/RadialBarChart',
    stylesApiSelectors: ['root'],
  });
});
