import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { SegmentedControl, SegmentedControlProps } from './SegmentedControl';

const defaultProps: SegmentedControlProps<string> = {
  value: 'test-value-1',
  onChange: () => {},
  transitionDuration: 0,
  data: [
    { label: 'test-label-1', value: 'test-value-1' },
    { label: 'test-label-2', value: 'test-value-2' },
    { label: 'test-label-3', value: 'test-value-3' },
  ],
};

describe('@mantine/core/SegmentedControl', () => {
  checkAccessibility([<SegmentedControl {...defaultProps} />]);
  itSupportsSystemProps({
    component: SegmentedControl,
    props: defaultProps,
    displayName: '@mantine/core/SegmentedControl',
  });
});
