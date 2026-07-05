import { tests } from '@mantine-tests/core';
import {
  CandlestickChart,
  CandlestickChartProps,
  CandlestickChartStylesNames,
} from './CandlestickChart';

const defaultProps: CandlestickChartProps = {
  data: [
    { date: 'Mar 22', open: 100, high: 130, low: 90, close: 120 },
    { date: 'Mar 23', open: 120, high: 125, low: 100, close: 105 },
  ],
  dataKey: 'date',
  style: { width: 200, height: 200 },
};

describe('@mantine/charts/CandlestickChart', () => {
  tests.itSupportsSystemProps<CandlestickChartProps, CandlestickChartStylesNames>({
    component: CandlestickChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/CandlestickChart',
    stylesApiSelectors: ['root'],
  });
});
