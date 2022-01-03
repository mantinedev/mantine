import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { RangeSlider } from './RangeSlider';

const defaultProps = {
  thumbFromLabel: 'test-label',
  thumbToLabel: 'test-label',
};

describe('@mantine/core/RangeSlider', () => {
  checkAccessibility([<RangeSlider {...defaultProps} />]);
  itSupportsSystemProps({
    component: RangeSlider,
    props: defaultProps,
    displayName: '@mantine/core/RangeSlider',
    refType: HTMLDivElement,
  });

  it('provides name and value to hidden inputs', () => {
    const { container } = render(<RangeSlider name="test-input" value={[10, 20]} />);
    const inputs = container.querySelectorAll('input[type="hidden"]');
    expect(inputs[0]).toHaveValue('10');
    expect(inputs[1]).toHaveValue('20');
    expect(inputs[0]).toHaveAttribute('name', 'test-input_from');
    expect(inputs[1]).toHaveAttribute('name', 'test-input_to');
  });
});
