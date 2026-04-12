import { autoPatchWarn, tests } from '@mantine-tests/core';
import { SankeyChart, SankeyChartProps, SankeyChartStylesNames } from './SankeyChart';

const data = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};

const defaultProps: SankeyChartProps = {
  data,
};

describe('@mantine/charts/SankeyChart', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<SankeyChartProps, SankeyChartStylesNames>({
    component: SankeyChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/SankeyChart',
    stylesApiSelectors: ['root'],
  });
});
