import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStylesApi,
  checkAccessibility,
  itSupportsMargins,
} from '@mantine/tests';
import { Slider } from './Slider';
import { Slider as SliderStylesApi } from '../styles.api';

const defaultProps = {
  thumbLabel: 'test-label',
};

describe('@mantine/core/Slider', () => {
  checkAccessibility([mount(<Slider {...defaultProps} />)]);
  itSupportsStyle(Slider, defaultProps);
  itSupportsMargins(Slider, defaultProps);
  itSupportsClassName(Slider, defaultProps);
  itSupportsOthers(Slider, defaultProps);
  itSupportsStylesApi(
    Slider,
    { label: 'test-label', labelAlwaysOn: true, marks: [{ value: 10, label: 'test' }], value: 50 },
    Object.keys(SliderStylesApi).filter((item) => item !== 'dragging'),
    'slider'
  );

  it('provides name and value to hidden input', () => {
    const element = shallow(<Slider name="test-input" value={50} />);
    expect(element.find('input[type="hidden"]').prop('value')).toBe(50);
    expect(element.find('input[type="hidden"]').prop('name')).toBe('test-input');
  });

  it('has correct displayName', () => {
    expect(Slider.displayName).toEqual('@mantine/core/Slider');
  });
});
