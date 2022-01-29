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
    excludeOthers: true,
    refType: HTMLSelectElement,
  });

  checkAccessibility([
    <NativeSelect {...defaultProps} label="test-label" />,
    <NativeSelect {...defaultProps} aria-label="test-label" />,
  ]);

  it('renders correct amount of options', () => {
    const { container: withoutPlaceholder } = render(<NativeSelect {...defaultProps} />);
    const { container: withPlaceholder } = render(
      <NativeSelect {...defaultProps} placeholder="$" />
    );
    expect(withoutPlaceholder.querySelectorAll('option')).toHaveLength(defaultProps.data.length);
    expect(withPlaceholder.querySelectorAll('option')).toHaveLength(defaultProps.data.length + 1);
  });
});
