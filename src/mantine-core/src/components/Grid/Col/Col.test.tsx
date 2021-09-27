import React from 'react';
import { itRendersChildren, itSupportsClassName, itSupportsStyle } from '@mantine/tests';
import { shallow } from 'enzyme';
import { Col, isValidSpan } from './Col';

const defaultProps = {
  span: 1,
  columns: 12,
  offset: 0,
  gutter: 20,
  grow: false,
};

describe('@mantine/core/Col', () => {
  itRendersChildren(Col, defaultProps);
  itSupportsClassName(Col, defaultProps);
  itSupportsStyle(Col, defaultProps);

  it('correctly detects invalid spans', () => {
    expect(isValidSpan(2)).toBe(true);
    expect(isValidSpan(1.2)).toBe(false);
    expect(isValidSpan(-1.2)).toBe(false);
    expect(isValidSpan(-4)).toBe(false);
    expect(isValidSpan(0)).toBe(false);
  });

  it('does not render column if span prop set incorrectly', () => {
    const float = shallow(<Col {...defaultProps} span={1.2} />);
    const zero = shallow(<Col {...defaultProps} span={0} />);
    const negative = shallow(<Col {...defaultProps} span={-4} />);
    const overflow = shallow(<Col {...defaultProps} span={500} />);
    const regular = shallow(<Col {...defaultProps} span={2} />);

    expect(regular.type()).toBe('div');
    expect(negative.type()).toBe(null);
    expect(zero.type()).toBe(null);
    expect(float.type()).toBe(null);
    expect(overflow.type()).toBe(null);
  });

  it('has correct displayName', () => {
    expect(Col.displayName).toEqual('@mantine/core/Col');
  });
});
