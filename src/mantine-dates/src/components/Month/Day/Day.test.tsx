import React from 'react';
import { mount, shallow } from 'enzyme';
import { checkAccessibility, itSupportsClassName } from '@mantine/tests';
import Day from './Day';

const defaultProps = {
  value: new Date(),
  selected: true,
  outside: false,
  weekend: false,
  disabled: false,
  elementRef: () => {},
  onKeyDown: () => {},
};

describe('@mantine/core/Month/Day', () => {
  checkAccessibility([mount(<Day {...defaultProps} />)]);
  itSupportsClassName(Day, defaultProps);

  it('has correct displayName', () => {
    expect(Day.displayName).toEqual('@mantine/core/Day');
  });

  it('support getting ref with elementRef prop', () => {
    const ref = React.createRef();
    mount(<Day {...defaultProps} elementRef={ref as any} />);
    expect(ref.current instanceof HTMLButtonElement).toBe(true);
  });

  it('render correct label with given date value', () => {
    const element = shallow(<Day {...defaultProps} />);
    expect(element.render().text()).toBe(defaultProps.value.getDate().toString());
  });
});
