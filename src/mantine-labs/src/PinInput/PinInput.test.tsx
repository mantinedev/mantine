import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsFocusEvents,
  checkAccessibility,
  itSupportsSystemProps,
} from '@mantine/tests';
import { PinInput } from './PinInput';

const defaultProps = {};

describe('@mantine/core/PinInput', () => {
  checkAccessibility([<PinInput {...defaultProps} />]);
  itSupportsFocusEvents(PinInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: PinInput,
    props: defaultProps,
    displayName: '@mantine/core/PinInput',
    refType: HTMLDivElement,
    excludeOthers: true,
  });
  itSupportsClassName(PinInput, defaultProps);
  itSupportsMargins(PinInput, defaultProps);
  itSupportsOthers(PinInput, defaultProps);
  itSupportsStyle(PinInput, defaultProps);
  itSupportsRef(PinInput, defaultProps, HTMLDivElement);

  it('renders correct amount of inputs based on length prop', () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(container.querySelectorAll('.mantine-PinInput-input')).toHaveLength(5);
  });
});
