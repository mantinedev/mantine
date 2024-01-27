import React from 'react';
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
    <SegmentedControl {...defaultProps} />,
    <SegmentedControl {...defaultProps} aria-label="group label" />,
  ]);

  tests.itSupportsSystemProps<SegmentedControlProps, SegmentedControlStylesNames>({
    component: SegmentedControl,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/SegmentedControl',
    stylesApiSelectors: ['root', 'label', 'input', 'control', 'indicator'],
  });
});
