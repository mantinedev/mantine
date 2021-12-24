import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  mockResizeObserver,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { SegmentedControl } from './SegmentedControl';

const defaultProps = {
  value: 'test-value-1',
  onChange: () => {},
  data: [
    { label: 'test-label-1', value: 'test-value-1' },
    { label: 'test-label-2', value: 'test-value-2' },
    { label: 'test-label-3', value: 'test-value-3' },
  ],
};

// jest does not support resize observer and will throw error otherwise
mockResizeObserver();

describe('@mantine/core/SegmentedControl', () => {
  checkAccessibility([render(<SegmentedControl {...defaultProps} />)]);
  itSupportsClassName(SegmentedControl, defaultProps);
  itSupportsOthers(SegmentedControl, defaultProps);
  itSupportsMargins(SegmentedControl, defaultProps);
  itSupportsStyle(SegmentedControl, defaultProps);
  itSupportsSx(SegmentedControl, defaultProps);

  it('renders radio inputs and labels based on data and name prop', () => {
    const element = shallow(<SegmentedControl {...defaultProps} name="mnt" value="test-value-2" />);
    const radios = element.find('.mantine-SegmentedControl-input');
    const labels = element.find('.mantine-SegmentedControl-label');
    expect(radios).toHaveLength(defaultProps.data.length);
    expect(labels).toHaveLength(defaultProps.data.length);

    radios.forEach((radio, index) => {
      expect(radio.prop('value')).toBe(defaultProps.data[index].value);
      expect(radio.prop('id')).toBe(`mnt-${defaultProps.data[index].value}`);
      expect(radio.prop('checked')).toBe(defaultProps.data[index].value === 'test-value-2');
    });

    labels.forEach((label, index) => {
      expect(label.prop('children')).toBe(defaultProps.data[index].label);
      expect(label.prop('htmlFor')).toBe(`mnt-${defaultProps.data[index].value}`);
    });
  });

  it('calls onChange with correct value when radio onChange is triggered', () => {
    const spy = jest.fn();
    const element = shallow(<SegmentedControl {...defaultProps} onChange={spy} />);
    element.find('.mantine-SegmentedControl-input').at(1).simulate('change');
    expect(spy).toHaveBeenLastCalledWith(defaultProps.data[1].value);

    element.find('.mantine-SegmentedControl-input').at(2).simulate('change');
    expect(spy).toHaveBeenLastCalledWith(defaultProps.data[2].value);
  });

  it('renders active control based on value prop', () => {
    const withValue = shallow(<SegmentedControl {...defaultProps} value="test-value-1" />);
    expect(withValue.find('.mantine-SegmentedControl-active')).toHaveLength(1);
  });

  it('has correct displayName', () => {
    expect(SegmentedControl.displayName).toEqual('@mantine/core/SegmentedControl');
  });
});
