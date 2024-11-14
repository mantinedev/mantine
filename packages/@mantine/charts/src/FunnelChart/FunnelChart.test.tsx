import { patchConsoleWarn, tests } from '@mantine-tests/core';
import { FunnelChart, FunnelChartProps, FunnelChartStylesNames } from './FunnelChart';

const data = [
  { name: 'Visits', value: 5000, color: 'indigo.6' },
  { name: 'Cart', value: 2000, color: 'yellow.6' },
  { name: 'Checkout', value: 1000, color: 'teal.6' },
  { name: 'Purchase', value: 500, color: 'pink.6' },
];

const defaultProps: FunnelChartProps = {
  data,
};

describe('@mantine/charts/FunnelChart', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<FunnelChartProps, FunnelChartStylesNames>({
    component: FunnelChart,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/FunnelChart',
    stylesApiSelectors: ['root'],
  });
});
