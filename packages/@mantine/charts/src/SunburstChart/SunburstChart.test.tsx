import { autoPatchWarn, tests } from '@mantine-tests/core';
import { SunburstChart, SunburstChartProps, SunburstChartStylesNames } from './SunburstChart';

const defaultProps: SunburstChartProps = {
  data: [
    { name: 'A', value: 100, color: 'blue' },
    { name: 'B', value: 200, color: 'red' },
  ],
};

describe('@mantine/charts/SunburstChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<SunburstChartProps, SunburstChartStylesNames>({
    component: SunburstChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/SunburstChart',
    stylesApiSelectors: ['root'],
  });
});
