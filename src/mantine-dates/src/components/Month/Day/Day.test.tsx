import React from 'react';
import { shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { Day } from './Day';

const defaultProps = {
  value: new Date(),
  selected: true,
  outside: false,
  weekend: false,
  disabled: false,
  hasValue: true,
  firstInRange: false,
  lastInRange: false,
  inRange: false,
  fullWidth: false,
  firstInMonth: false,
  size: 'sm' as const,
  onKeyDown: () => {},
  onMouseEnter: () => {},
};

describe('@mantine/core/Month/Day', () => {
  checkAccessibility([<Day {...defaultProps} />]);
  itSupportsClassName(Day, defaultProps);
  itSupportsStyle(Day, defaultProps);
  itSupportsOthers(Day, defaultProps);
  itSupportsRef(Day, defaultProps, HTMLButtonElement);

  it('calls onMouseEnter with date and event', () => {
    const spy = jest.fn();
    const element = shallow(<Day {...defaultProps} onMouseEnter={spy} />);
    element.simulate('mouseenter', { testEvent: 'test' });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(defaultProps.value, { testEvent: 'test' });
  });

  it('sets data-mantine-stop-propagation attribute', () => {
    const element = shallow(<Day {...defaultProps} />);
    expect(element.render().attr('data-mantine-stop-propagation')).toBe('true');
  });

  it('render correct label with given date value', () => {
    const element = shallow(<Day {...defaultProps} />);
    expect(element.render().text()).toBe(defaultProps.value.getDate().toString());
  });

  it('has correct displayName', () => {
    expect(Day.displayName).toEqual('@mantine/core/Day');
  });
});
