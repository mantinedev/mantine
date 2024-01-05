import { tests } from '@mantine-tests/core';
import { DonutChart, DonutChartProps, DonutChartStylesNames } from './DonutChart';

const defaultProps: DonutChartProps = {};

describe('@mantine/charts/DonutChart', () => {
  tests.itSupportsSystemProps<DonutChartProps, DonutChartStylesNames>({
    component: DonutChart,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/DonutChart',
    stylesApiSelectors: ['root'],
  });
});
