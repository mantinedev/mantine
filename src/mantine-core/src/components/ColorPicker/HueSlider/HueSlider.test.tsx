import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { ColorSlider } from '../ColorSlider/ColorSlider';
import { HueSlider } from './HueSlider';

const defaultProps = {
  value: 150,
  onChange: () => {},
  size: 'sm' as const,
};

describe('@mantine/core/HueSlider', () => {
  checkAccessibility([mount(<HueSlider {...defaultProps} aria-label="test-label" />)]);
  itSupportsClassName(HueSlider, defaultProps);
  itSupportsOthers(HueSlider, defaultProps);
  itSupportsStyle(HueSlider, defaultProps);
  itSupportsRef(HueSlider, defaultProps, HTMLDivElement, 'elementRef');

  it('sets thumb color based on given hue value', () => {
    const element = shallow(<HueSlider {...defaultProps} value={324} />);
    expect(element.find(ColorSlider).prop('thumbColor')).toBe('hsl(324, 100%, 50%)');
  });

  it('has correct displayName', () => {
    expect(HueSlider.displayName).toEqual('@mantine/core/HueSlider');
  });
});
