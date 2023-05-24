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
  itSupportsProviderSize,
  itSupportsProviderVariant,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { render } from '@testing-library/react';
import { MultiSelect, MultiSelectProps } from './MultiSelect';

const defaultProps: MultiSelectProps = {
  withinPortal: false,
  transitionProps: { duration: 0 },
  label: 'test-multi-select',
  data: ['React', 'Angular', 'Svelte', 'Vue'],
  defaultValue: ['React', 'Angular'],
  id: 'test-multi-select',
};

describe('@mantine/core/MultiSelect', () => {
  itSupportsProviderVariant(MultiSelect, defaultProps, 'MultiSelect', ['root', 'input', 'label']);
  itSupportsProviderSize(MultiSelect, defaultProps, 'MultiSelect', ['root', 'input', 'label']);
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
  itDisablesInputInsideDisabledFieldset(MultiSelect, defaultProps);

  it('Has un-filtered list when disableSelectedItemFiltering is enabled', () => {
    const { container } = render(
      <MultiSelect {...defaultProps} initiallyOpened disableSelectedItemFiltering />
    );

    expect(container.querySelectorAll('.mantine-MultiSelect-item')).toHaveLength(4);
  });

  it('Has un-filtered list when disableSelectedItemFiltering is disabled', () => {
    const { container } = render(<MultiSelect {...defaultProps} initiallyOpened />);

    expect(container.querySelectorAll('.mantine-MultiSelect-item')).toHaveLength(2);
  });
});
