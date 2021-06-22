import React from 'react';
import { mount, shallow } from 'enzyme';
import { checkAccessibility, itSupportsClassName, itSupportsRef } from '@mantine/tests';
import { Day } from './Day';

const defaultProps = {
  value: new Date(),
  selected: true,
  outside: false,
  weekend: false,
  disabled: false,
  hasValue: true,
  elementRef: () => {},
  onKeyDown: () => {},
};

describe('@mantine/core/Month/Day', () => {
  checkAccessibility([mount(<Day {...defaultProps} />)]);
  itSupportsClassName(Day, defaultProps);
  itSupportsRef(Day, defaultProps, HTMLButtonElement, 'elementRef');

  it('has correct displayName', () => {
    expect(Day.displayName).toEqual('@mantine/core/Day');
  });

  it('render correct label with given date value', () => {
    const element = shallow(<Day {...defaultProps} />);
    expect(element.render().text()).toBe(defaultProps.value.getDate().toString());
  });
});
