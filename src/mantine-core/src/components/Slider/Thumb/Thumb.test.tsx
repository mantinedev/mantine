import React from 'react';
import { mount, shallow } from 'enzyme';
import { itSupportsStylesApi, itSupportsRef, checkAccessibility } from '@mantine/tests';
import { Transition } from '../../Transition';
import { Thumb } from './Thumb';

const defaultProps = {
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
};

describe('@mantine/core/Thumb', () => {
  checkAccessibility([mount(<Thumb {...defaultProps} />)]);
  itSupportsStylesApi(Thumb, defaultProps, ['label'], 'Slider');
  itSupportsRef(Thumb, defaultProps, HTMLDivElement);

  it('sets left property based on position prop', () => {
    const element = shallow(<Thumb {...defaultProps} position={62} />);
    expect(element.prop('style').left).toBe('62%');
  });

  it('shows label based on dragging and labelAlwaysOn props', () => {
    const labelAlwaysOn = shallow(<Thumb {...defaultProps} labelAlwaysOn dragging={false} />);
    const dragging = shallow(<Thumb {...defaultProps} labelAlwaysOn={false} dragging />);
    const labelOff = shallow(<Thumb {...defaultProps} labelAlwaysOn={false} dragging={false} />);

    expect(labelAlwaysOn.render().find('.mantine-Slider-label')).toHaveLength(1);
    expect(dragging.render().find('.mantine-Slider-label')).toHaveLength(1);
    expect(labelOff.render().find('.mantine-Slider-label')).toHaveLength(0);
  });

  it('passes duration, transition and timingFunction to Transition component', () => {
    const transition = shallow(
      <Thumb
        {...defaultProps}
        labelTransition="rotate-left"
        labelTransitionDuration={892}
        labelTransitionTimingFunction="linear"
      />
    ).find(Transition);

    expect(transition.prop('duration')).toBe(892);
    expect(transition.prop('timingFunction')).toBe('linear');
    expect(transition.prop('transition')).toBe('rotate-left');
  });

  it('has correct displayName', () => {
    expect(Thumb.displayName).toEqual('@mantine/core/SliderThumb');
  });
});
