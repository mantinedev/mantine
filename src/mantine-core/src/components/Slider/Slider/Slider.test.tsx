import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Slider, SliderProps } from './Slider';

const defaultProps: SliderProps = {
  thumbLabel: 'test-label',
};

describe('@mantine/core/Slider', () => {
  checkAccessibility([<Slider {...defaultProps} />]);
  itSupportsSystemProps({
    component: Slider,
    props: defaultProps,
    displayName: '@mantine/core/Slider',
    refType: HTMLDivElement,
  });

  it('provides name and value to hidden input', () => {
    const { container } = render(<Slider name="test-input" value={50} />);
    const input = container.querySelector('input[type="hidden"]');
    expect(input).toHaveValue('50');
    expect(input).toHaveAttribute('name', 'test-input');
  });
});
