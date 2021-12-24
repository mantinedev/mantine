import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  checkAccessibility,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { RangeSlider } from './RangeSlider';

const defaultProps = {
  thumbFromLabel: 'test-label',
  thumbToLabel: 'test-label',
};

describe('@mantine/core/RangeSlider', () => {
  checkAccessibility([render(<RangeSlider {...defaultProps} />)]);
  itSupportsStyle(RangeSlider, defaultProps);
  itSupportsClassName(RangeSlider, defaultProps);
  itSupportsOthers(RangeSlider, defaultProps);
  itSupportsMargins(RangeSlider, defaultProps);
  itSupportsSx(RangeSlider, defaultProps);
  itSupportsRef(RangeSlider, defaultProps, HTMLDivElement);

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
