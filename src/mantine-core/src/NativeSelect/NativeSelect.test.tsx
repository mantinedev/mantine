import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const defaultProps: NativeSelectProps = {
  label: 'test-label',
  data: ['test-item-1', 'test-item-2', 'test-item-3'],
};

describe('@mantine/core/NativeSelect', () => {
  itSupportsInputProps(NativeSelect, defaultProps, 'NativeSelect');
  itSupportsFocusEvents(NativeSelect, defaultProps, 'select');
  itSupportsProviderVariant(NativeSelect, defaultProps, 'NativeSelect', ['root', 'input', 'label']);
  itSupportsProviderSize(NativeSelect, defaultProps, 'NativeSelect', ['root', 'input', 'label']);
  itSupportsSystemProps({
    component: NativeSelect,
    props: defaultProps,
    displayName: '@mantine/core/NativeSelect',
    refType: HTMLSelectElement,
    othersSelector: '.mantine-NativeSelect-input',
    providerName: 'NativeSelect',
  });

  checkAccessibility([
    <NativeSelect {...defaultProps} label="test-label" />,
    <NativeSelect {...defaultProps} aria-label="test-label" />,
  ]);

  it('renders correct amount of options', () => {
    const { container } = render(<NativeSelect {...defaultProps} />);
    expect(container.querySelectorAll('option')).toHaveLength(defaultProps.data.length);
  });
});
