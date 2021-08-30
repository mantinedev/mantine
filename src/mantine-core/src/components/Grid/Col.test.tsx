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

  it('sets correct flex-grow based on grow prop', () => {
    const grow = shallow(<Col {...defaultProps} grow />);
    const noGrow = shallow(<Col {...defaultProps} grow={false} />);

    expect(grow.prop('style').flexGrow).toBe(1);
    expect(noGrow.prop('style').flexGrow).toBe(0);
  });

  it('sets correct flex-basis based on columns, span and gutter props', () => {
    const element = shallow(<Col columns={10} gutter={40} span={2} grow={false} />);
    expect(element.prop('className')).toContain('mantine-col-2');
  });

  it('sets correct margin based on gutter', () => {
    const element = shallow(<Col {...defaultProps} gutter={42} />);
    expect(element.prop('style').margin).toBe(21);
  });

  it('sets margin-left based on offset prop', () => {
    const element = shallow(<Col {...defaultProps} columns={10} gutter={40} offset={2} />);
    expect(element.prop('style').marginLeft).toBe('calc(20% + 20px)');
  });

  it('has correct displayName', () => {
    expect(Col.displayName).toEqual('@mantine/core/Col');
  });
});
