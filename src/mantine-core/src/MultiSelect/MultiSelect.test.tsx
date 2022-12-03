import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsInputIcon,
  itSupportsInputRightSection,
  itSupportsWrapperProps,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
  itSupportsInputWrapperProps,
  itSupportsInputContainer,
  itSupportsInputAsterisk,
} from '@mantine/tests';
import { MultiSelect, MultiSelectProps } from './MultiSelect';
import { render } from '@testing-library/react';

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
  itSupportsInputWrapperProps(MultiSelect, defaultProps, 'MultiSelect');
  itSupportsInputAsterisk(MultiSelect, defaultProps, 'MultiSelect');
  itSupportsInputContainer(MultiSelect, defaultProps, 'MultiSelect');
  itSupportsInputRightSection(MultiSelect, defaultProps);
  itSupportsWrapperProps(MultiSelect, defaultProps);
  itConnectsLabelAndInput(MultiSelect, defaultProps);
  itSupportsSystemProps({
    component: MultiSelect,
    props: defaultProps,
    displayName: '@mantine/core/MultiSelect',
    refType: HTMLInputElement,
    othersSelector: '#test-multi-select',
    providerName: 'MultiSelect',
  });

  it('Has un-filtered list when disableSelectedItemFiltering is enabled', () => {
    const { container } = render(
      <MultiSelect {...defaultProps} initiallyOpened disableSelectedItemFiltering />
    );

    expect(container.querySelectorAll('.mantine-MultiSelect-item')).toHaveLength(4);
  });

  it('Has un-filtered list when disableSelectedItemFiltering is disabled', () => {
    const { container } = render(
      <MultiSelect {...defaultProps} initiallyOpened />
    );

    expect(container.querySelectorAll('.mantine-MultiSelect-item')).toHaveLength(2);
  });
});
