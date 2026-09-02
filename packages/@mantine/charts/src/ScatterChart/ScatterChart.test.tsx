import { tests } from '@mantine-tests/core';
import { ScatterChart, ScatterChartProps, ScatterChartStylesNames } from './ScatterChart';

const defaultProps: ScatterChartProps = {
  data: [],
  dataKey: { x: 'x', y: 'y' },
};

describe('@mantine/charts/ScatterChart', () => {
  tests.itSupportsSystemProps<ScatterChartProps, ScatterChartStylesNames>({
    component: ScatterChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/ScatterChart',
    stylesApiSelectors: ['root'],
  });
});
