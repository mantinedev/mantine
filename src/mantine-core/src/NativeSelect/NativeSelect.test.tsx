import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const defaultProps: NativeSelectProps = {
  data: ['test-item-1', 'test-item-2', 'test-item-3'],
};

describe('@mantine/core/NativeSelect', () => {
  itSupportsInputProps(NativeSelect, defaultProps, 'NativeSelect');
  itSupportsFocusEvents(NativeSelect, defaultProps, 'select');
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
