import { autoPatchWarn, tests } from '@mantine-tests/core';
import { Sparkline, SparklineProps, SparklineStylesNames } from './Sparkline';

const defaultProps: SparklineProps = {
  data: [0, 1],
};

describe('@mantine/core/Sparkline', () => {
  autoPatchWarn();

  tests.itSupportsSystemProps<SparklineProps, SparklineStylesNames>({
    component: Sparkline,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/Sparkline',
    stylesApiSelectors: ['root'],
  });
});
