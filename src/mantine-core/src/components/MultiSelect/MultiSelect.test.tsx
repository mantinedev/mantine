import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsInputIcon,
  itSupportsInputRightSection,
  itSupportsWrapperProps,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { MultiSelect, MultiSelectProps } from './MultiSelect';

const defaultProps: MultiSelectProps = {
  withinPortal: false,
  transitionDuration: 0,
  label: 'test-multi-select',
  data: ['React', 'Angular', 'Svelte', 'Vue'],
  defaultValue: ['React', 'Angular'],
  id: 'test-multi-select',
};

describe('@mantine/core/MultiSelect', () => {
  checkAccessibility([<MultiSelect {...defaultProps} initiallyOpened />]);
  itSupportsFocusEvents(MultiSelect, defaultProps, '#test-multi-select');
  itSupportsInputIcon(MultiSelect, defaultProps);
  itSupportsInputRightSection(MultiSelect, defaultProps);
  itSupportsWrapperProps(MultiSelect, defaultProps);
  itConnectsLabelAndInput(MultiSelect, defaultProps);
  itSupportsSystemProps({
    component: MultiSelect,
    props: defaultProps,
    displayName: '@mantine/core/MultiSelect',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('renders hidden input with current input value', () => {
    const { container } = render(
      <MultiSelect {...defaultProps} name="custom-select" value={['React', 'Angular']} />
    );
    expect(container.querySelector('input[name="custom-select"]')).toHaveAttribute(
      'value',
      'React,Angular'
    );
  });
});
