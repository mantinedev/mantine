import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStylesApi,
  checkAccessibility,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { RangeSlider } from './RangeSlider';
import { RangeSlider as RangeSliderStylesApi } from '../styles.api';

const defaultProps = {
  thumbFromLabel: 'test-label',
  thumbToLabel: 'test-label',
};

describe('@mantine/core/RangeSlider', () => {
  checkAccessibility([mount(<RangeSlider {...defaultProps} />)]);
  itSupportsStyle(RangeSlider, defaultProps);
  itSupportsClassName(RangeSlider, defaultProps);
  itSupportsOthers(RangeSlider, defaultProps);
  itSupportsMargins(RangeSlider, defaultProps);
  itSupportsRef(RangeSlider, defaultProps, HTMLDivElement);
  itSupportsStylesApi(
    RangeSlider,
    { label: 'test-label', labelAlwaysOn: true, marks: [{ value: 10, label: 'test' }], value: 50 },
    Object.keys(RangeSliderStylesApi).filter((item) => item !== 'dragging'),
    'Slider'
  );

  it('provides name and value to hidden inputs', () => {
    const element = shallow(<RangeSlider name="test-input" value={[10, 20]} />);
    expect(element.find('input[type="hidden"]').at(0).prop('value')).toBe(10);
    expect(element.find('input[type="hidden"]').at(1).prop('value')).toBe(20);
    expect(element.find('input[type="hidden"]').at(0).prop('name')).toBe('test-input_from');
    expect(element.find('input[type="hidden"]').at(1).prop('name')).toBe('test-input_to');
  });

  it('has correct displayName', () => {
    expect(RangeSlider.displayName).toEqual('@mantine/core/RangeSlider');
  });
});
