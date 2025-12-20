import { tests } from '@mantine-tests/core';
import { RingProgress, RingProgressProps, RingProgressStylesNames } from './RingProgress';

const defaultProps: RingProgressProps = {
  size: 100,
  thickness: 10,
  label: 'test',
  sections: [{ value: 20, color: 'orange' }],
};

describe('@mantine/core/RingProgress', () => {
  tests.itSupportsSystemProps<RingProgressProps, RingProgressStylesNames>({
    component: RingProgress,
    props: defaultProps,
    displayName: '@mantine/core/RingProgress',
    stylesApiSelectors: ['root', 'svg', 'curve', 'label'],
  });
});
