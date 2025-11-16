import { tests } from '@mantine-tests/core';
import {
  CurrentTimeIndicator,
  CurrentTimeIndicatorProps,
  CurrentTimeIndicatorStylesNames,
} from './CurrentTimeIndicator';

const defaultProps: CurrentTimeIndicatorProps = {};

describe('@mantine/core/CurrentTimeIndicator', () => {
  tests.itSupportsSystemProps<CurrentTimeIndicatorProps, CurrentTimeIndicatorStylesNames>({
    component: CurrentTimeIndicator,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/CurrentTimeIndicator',
    stylesApiSelectors: [
      'currentTimeIndicator',
      'currentTimeIndicatorLine',
      'currentTimeIndicatorThumb',
    ],
  });
});
