import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputRightSection,
  itSupportsInputIcon,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { TimeRangeInput, TimeRangeInputProps } from './TimeRangeInput';

const defaultProps: TimeRangeInputProps = {
  label: 'test-label',
  hoursLabel: 'test-hours',
  minutesLabel: 'test-minutes',
  secondsLabel: 'test-seconds',
};

describe('@mantine/dates/TimeRangeInput', () => {
  itSupportsInputRightSection(TimeRangeInput, defaultProps);
  itSupportsInputIcon(TimeRangeInput, defaultProps);
  itConnectsLabelAndInput(TimeRangeInput, defaultProps);
  itSupportsFocusEvents(TimeRangeInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: TimeRangeInput,
    props: defaultProps,
    displayName: '@mantine/dates/TimeRangeInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  checkAccessibility([
    <TimeRangeInput {...defaultProps} />,
    <TimeRangeInput {...defaultProps} withSeconds />,
  ]);
});
