import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  it('onComplete is called on last input', () => {
    const log = jest.spyOn(global.console, 'log');
    const { container } = render(
      <PinInput {...defaultProps} onComplete={(value) => console.log(value)} />
    );

    expect(container.querySelectorAll('.mantine-PinInput-input')).toHaveLength(4);

    container.querySelectorAll('.mantine-PinInput-input').forEach((element) => {
      fireEvent.change(element, { target: { value: '1' } });
    });

    expect(log).toHaveBeenCalledWith('1111');
  });
});
