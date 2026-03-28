import { autoPatchWarn, tests } from '@mantine-tests/core';
import { PieChart, PieChartProps, PieChartStylesNames } from './PieChart';

const defaultProps: PieChartProps = {
  data: [],
};

describe('@mantine/charts/PieChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<PieChartProps, PieChartStylesNames>({
    component: PieChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/PieChart',
    stylesApiSelectors: ['root'],
  });
});
