import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itSupportsInputProps,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {
  label: 'test-label',
};

describe('@mantine/core/TimeInput', () => {
  checkAccessibility([<TimeInput label="test-input" />, <TimeInput aria-label="test-input" />]);
  itSupportsInputProps(TimeInput, defaultProps, 'TimeInput');
  itSupportsFocusEvents(TimeInput, defaultProps, 'input');
  itSupportsProviderVariant(TimeInput, defaultProps, 'TimeInput', ['root', 'input', 'label']);
  itSupportsProviderSize(TimeInput, defaultProps, 'TimeInput', ['root', 'input', 'label']);
  itSupportsSystemProps({
    component: TimeInput,
    props: defaultProps,
    refType: HTMLInputElement,
    displayName: '@mantine/dates/TimeInput',
    othersSelector: 'input',
    providerName: 'TimeInput',
  });
  itDisablesInputInsideDisabledFieldset(TimeInput, defaultProps);
});
