import { tests } from '@mantine-tests/core';
import {
  SegmentedControl,
  SegmentedControlProps,
  SegmentedControlStylesNames,
} from './SegmentedControl';

const defaultProps: SegmentedControlProps = {
  transitionDuration: 0,
  data: ['First', 'Second', 'Third'],
};

describe('@mantine/core/SegmentedControl', () => {
  tests.axe([
    <SegmentedControl {...defaultProps} key="1" />,
    <SegmentedControl {...defaultProps} aria-label="group label" key="2" />,
  ]);

  tests.itSupportsSystemProps<SegmentedControlProps, SegmentedControlStylesNames>({
    component: SegmentedControl,
    props: defaultProps,
    id: true,
    displayName: '@mantine/core/SegmentedControl',
    stylesApiSelectors: ['root', 'label', 'input', 'control', 'indicator'],
  });
});
