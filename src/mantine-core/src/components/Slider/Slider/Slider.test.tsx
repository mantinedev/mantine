import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  checkAccessibility,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Slider } from './Slider';

const defaultProps = {
  thumbLabel: 'test-label',
};

describe('@mantine/core/Slider', () => {
  checkAccessibility([<Slider {...defaultProps} />]);
  itSupportsStyle(Slider, defaultProps);
  itSupportsMargins(Slider, defaultProps);
  itSupportsClassName(Slider, defaultProps);
  itSupportsOthers(Slider, defaultProps);
  itSupportsSx(Slider, defaultProps);
  itSupportsRef(Slider, defaultProps, HTMLDivElement);

  it('provides name and value to hidden input', () => {
    const element = shallow(<Slider name="test-input" value={50} />);
    expect(element.find('input[type="hidden"]').prop('value')).toBe(50);
    expect(element.find('input[type="hidden"]').prop('name')).toBe('test-input');
  });

  it('has correct displayName', () => {
    expect(Slider.displayName).toEqual('@mantine/core/Slider');
  });
});
