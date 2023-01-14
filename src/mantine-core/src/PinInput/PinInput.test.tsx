import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { PinInput, PinInputProps } from './PinInput';

const defaultProps: PinInputProps = {};

describe('@mantine/core/PinInput', () => {
  checkAccessibility([<PinInput {...defaultProps} aria-label="Test label" />]);
  itSupportsSystemProps({
    component: PinInput,
    props: defaultProps,
    displayName: '@mantine/core/PinInput',
    refType: HTMLDivElement,
    providerName: 'PinInput',
  });

  it('renders correct amount of inputs based on length prop', () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(container.querySelectorAll('.mantine-PinInput-input')).toHaveLength(5);
  });
});
