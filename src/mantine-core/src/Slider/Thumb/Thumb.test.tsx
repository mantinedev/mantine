import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsRef, checkAccessibility } from '@mantine/tests';
import { Thumb, ThumbProps } from './Thumb';

const defaultProps: ThumbProps = {
  max: 100,
  min: 0,
  value: 10,
  position: 10,
  label: 'test-label',
  dragging: false,
  onMouseDown: () => {},
  color: 'blue',
  size: 10,
  labelTransition: 'skew-up' as const,
  labelTransitionDuration: 150,
  labelTransitionTimingFunction: 'ease',
  labelAlwaysOn: true,
  thumbLabel: 'test-label',
  disabled: false,
  thumbSize: 16,
  variant: '',
};

describe('@mantine/core/Thumb', () => {
  checkAccessibility([<Thumb {...defaultProps} />]);
  itSupportsRef(Thumb, defaultProps, HTMLDivElement);

  it('sets left property based on position prop', () => {
    const { container } = render(<Thumb {...defaultProps} position={62} />);
    expect(container.firstChild).toHaveStyle({ left: '62%' });
  });

  it('shows label based on dragging and labelAlwaysOn props', () => {
    const { container: labelAlwaysOn } = render(
      <Thumb {...defaultProps} labelAlwaysOn dragging={false} />
    );
    const { container: dragging } = render(
      <Thumb {...defaultProps} labelAlwaysOn={false} dragging />
    );
    const { container: labelOff } = render(
      <Thumb {...defaultProps} labelAlwaysOn={false} dragging={false} />
    );

    expect(labelAlwaysOn.querySelectorAll('.mantine-Slider-label')).toHaveLength(1);
    expect(dragging.querySelectorAll('.mantine-Slider-label')).toHaveLength(1);
    expect(labelOff.querySelectorAll('.mantine-Slider-label')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Thumb.displayName).toStrictEqual('@mantine/core/SliderThumb');
  });
});
