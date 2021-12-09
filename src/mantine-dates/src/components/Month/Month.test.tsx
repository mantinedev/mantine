import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsStylesApi,
  itSupportsRef,
} from '@mantine/tests';
import { Month } from './Month';
import { Day } from './Day/Day';
import { Month as MonthStylesApi } from './styles.api';

const defaultProps = { month: new Date(), value: new Date() };

describe('@mantine/core/Month', () => {
  itSupportsStyle(Month, defaultProps);
  itSupportsClassName(Month, defaultProps);
  itSupportsOthers(Month, defaultProps);
  itSupportsMargins(Month, defaultProps);
  itSupportsRef(Month, defaultProps, HTMLTableElement);
  itSupportsStylesApi(
    Month,
    defaultProps,
    Object.keys(MonthStylesApi).filter(
      (key) => key !== 'inRange' && key !== 'firstInRange' && key !== 'lastInRange'
    ),
    'Month'
  );

  it('renders correct amount of weekdays', () => {
    const element = shallow(<Month month={new Date()} />);
    expect(element.render().find('.mantine-Month-weekdayCell')).toHaveLength(7);
  });

  it('renders correct amount of days', () => {
    const element = shallow(<Month month={new Date(2021, 1, 2)} />);
    expect(element.render().find('tbody tr')).toHaveLength(4);
    expect(element.render().find('tbody td')).toHaveLength(28);

    const firstDayOfWeekSunday = shallow(
      <Month month={new Date(2021, 1, 2)} firstDayOfWeek="sunday" />
    );
    expect(firstDayOfWeekSunday.render().find('tbody tr')).toHaveLength(5);
    expect(firstDayOfWeekSunday.render().find('tbody td')).toHaveLength(35);
  });

  it('assigns values to given daysRefs', () => {
    const daysRefs: HTMLButtonElement[][] = [];
    mount(<Month {...defaultProps} month={new Date(2021, 11, 1)} daysRefs={daysRefs} />);
    expect(daysRefs.length).toBe(5);
    expect(daysRefs.every((list) => list.length === 7)).toBe(true);
    expect(daysRefs.every((list) => list.every((date) => date instanceof HTMLButtonElement))).toBe(
      true
    );
  });

  it('adds styles when month days are within range', () => {
    const withoutRange = shallow(<Month month={new Date(2021, 11, 1)} />);
    const withRange = shallow(
      <Month
        month={new Date(2021, 11, 1)}
        range={[new Date(2021, 11, 5), new Date(2021, 11, 15)]}
      />
    );

    expect(withRange.render().find('.mantine-Month-firstInRange')).toHaveLength(1);
    expect(withRange.render().find('.mantine-Month-lastInRange')).toHaveLength(1);
    expect(withRange.render().find('.mantine-Month-inRange')).toHaveLength(11);

    expect(withoutRange.render().find('.mantine-Month-firstInRange')).toHaveLength(0);
    expect(withoutRange.render().find('.mantine-Month-lastInRange')).toHaveLength(0);
    expect(withoutRange.render().find('.mantine-Month-inRange')).toHaveLength(0);
  });

  it('does not add styles when month days outside of range', () => {
    const element = shallow(
      <Month
        month={new Date(2021, 11, 1)}
        range={[new Date(2021, 10, 5), new Date(2021, 10, 15)]}
      />
    );

    expect(element.render().find('.mantine-Month-firstInRange')).toHaveLength(0);
    expect(element.render().find('.mantine-Month-lastInRange')).toHaveLength(0);
    expect(element.render().find('.mantine-Month-inRange')).toHaveLength(0);
  });

  it('adds partial range styles', () => {
    const element = shallow(
      <Month
        month={new Date(2021, 11, 1)}
        range={[new Date(2021, 11, 25), new Date(2021, 12, 15)]}
      />
    );

    expect(element.render().find('.mantine-Month-firstInRange')).toHaveLength(1);
    expect(element.render().find('.mantine-Month-lastInRange')).toHaveLength(0);
    expect(element.render().find('.mantine-Month-inRange')).toHaveLength(9);
  });

  it('prevents day focus when preventFocus is true', () => {
    const preventFocusSpy = jest.fn();
    const defaultFocusSpy = jest.fn();

    const preventFocus = shallow(<Month {...defaultProps} preventFocus />);
    const defaultFocus = shallow(<Month {...defaultProps} preventFocus={false} />);

    preventFocus.find(Day).at(0).simulate('mousedown', { preventDefault: preventFocusSpy });
    defaultFocus.find(Day).at(0).simulate('mousedown', { preventDefault: defaultFocusSpy });

    expect(preventFocusSpy).toHaveBeenCalledTimes(1);
    expect(defaultFocusSpy).toHaveBeenCalledTimes(0);
  });

  it('calls onChange with Date object when Day is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<Month month={new Date(2021, 11, 1)} onChange={spy} />);
    element.find(Day).at(0).simulate('click');
    expect(spy).toHaveBeenCalledWith(new Date(2021, 10, 29));
  });

  it('handles mouseenter events correctly on Day', () => {
    const spy = jest.fn();
    const element = shallow(<Month month={new Date(2021, 11, 1)} onDayMouseEnter={spy} />);
    element.find(Day).at(0).dive().simulate('mouseenter', { event: 'test-event' });
    expect(spy).toHaveBeenCalledWith(new Date(2021, 10, 29), { event: 'test-event' });
  });

  it('sets Day style based on dayStyle function', () => {
    const element = shallow(<Month {...defaultProps} dayStyle={() => ({ background: 'red' })} />);
    expect(element.find(Day).at(0).prop('style')).toEqual({ background: 'red' });
  });

  it('sets Day className based on dayClassName function', () => {
    const element = shallow(<Month {...defaultProps} dayClassName={() => 'test-class'} />);
    expect(element.find(Day).at(0).prop('className')).toBe('test-class');
  });

  it('passes __staticSelector to Day components', () => {
    const element = shallow(<Month {...defaultProps} __staticSelector="Test" />);
    expect(element.find(Day).at(0).prop('__staticSelector')).toBe('Test');
  });

  it('displays selected date', () => {
    const element = shallow(<Month month={new Date(2021, 11, 1)} value={new Date(2021, 11, 5)} />);
    expect(element.find(Day).at(6).prop('selected')).toBe(true);
    expect(element.find(Day).at(7).prop('selected')).toBe(false);
    expect(element.find(Day).at(5).prop('selected')).toBe(false);
  });

  it('changes first day of week based on prop', () => {
    const sunday = shallow(<Month {...defaultProps} firstDayOfWeek="sunday" locale="en" />);
    const monday = shallow(<Month {...defaultProps} firstDayOfWeek="monday" locale="en" />);

    expect(sunday.find('.mantine-Month-weekdayCell').at(0).text()).toBe('Su');
    expect(sunday.find('.mantine-Month-weekdayCell').at(6).text()).toBe('Sa');

    expect(monday.find('.mantine-Month-weekdayCell').at(0).text()).toBe('Mo');
    expect(monday.find('.mantine-Month-weekdayCell').at(6).text()).toBe('Su');
  });

  it('does not render weekdays if hideWeekdays is true', () => {
    const withWeekdays = shallow(<Month {...defaultProps} hideWeekdays={false} />);
    const withoutWeekdays = shallow(<Month {...defaultProps} hideWeekdays />);

    expect(withWeekdays.render().find('thead')).toHaveLength(1);
    expect(withoutWeekdays.render().find('thead')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Month.displayName).toEqual('@mantine/core/Month');
  });
});
