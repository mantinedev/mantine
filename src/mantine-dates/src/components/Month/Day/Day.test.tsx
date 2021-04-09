import React from 'react';
import { mount, shallow } from 'enzyme';
import { checkAccessibility, itSupportsClassName } from '@mantine/tests';
import Day from './Day';

const defaultProps = {
  value: new Date(),
  selected: true,
  outside: false,
  weekend: false,
  disableOutsideEvents: false,
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

  it('sets correct tabIndex based on outside and disableOutsideEvents props', () => {
    const outsideNoEvents = shallow(<Day {...defaultProps} outside disableOutsideEvents />);
    const outsideWithEvents = shallow(
      <Day {...defaultProps} outside disableOutsideEvents={false} />
    );
    const insideWithEvents = shallow(
      <Day {...defaultProps} outside={false} disableOutsideEvents />
    );
    const insideWithoutEvents = shallow(
      <Day {...defaultProps} outside={false} disableOutsideEvents={false} />
    );

    expect(outsideNoEvents.render().attr('tabindex')).toBe('-1');
    expect(outsideWithEvents.render().attr('tabindex')).toBe('0');
    expect(insideWithEvents.render().attr('tabindex')).toBe('0');
    expect(insideWithoutEvents.render().attr('tabindex')).toBe('0');
  });
});
