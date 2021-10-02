import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  checkAccessibility,
  itSupportsMargins,
} from '@mantine/tests';
import { Calendar } from './Calendar';
import { Month } from '../Month/Month';
import { CalendarWrapper } from './CalendarWrapper/CalendarWrapper';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';
import { Calendar as CalendarStylesApi } from './styles.api';

const defaultProps = { month: new Date(), value: new Date(), withSelect: true };

describe('@mantine/dates/Calendar', () => {
  itSupportsClassName(Calendar, defaultProps);
  itSupportsOthers(Calendar, defaultProps);
  itSupportsMargins(Calendar, defaultProps);
  itSupportsStyle(Calendar, defaultProps);
  checkAccessibility([
    mount(
      <Calendar
        {...defaultProps}
        nextMonthLabel="Next month"
        previousMonthLabel="Previous month"
        monthLabel="Select month"
        yearLabel="Select year"
      />
    ),
    mount(
      <Calendar
        {...defaultProps}
        withSelect={false}
        nextMonthLabel="Next month"
        previousMonthLabel="Previous month"
      />
    ),
  ]);
  itSupportsStylesApi(
    Calendar,
    defaultProps,
    Object.keys(CalendarStylesApi).filter(
      (prop) =>
        prop !== 'calendar' &&
        prop !== 'calendarLabel' &&
        prop !== 'inRange' &&
        prop !== 'firstInRange' &&
        prop !== 'lastInRange'
    ),
    'calendar',
    'with select'
  );

  itSupportsStylesApi(
    Calendar,
    { ...defaultProps, withSelect: false },
    Object.keys(CalendarStylesApi).filter(
      (prop) =>
        prop !== 'calendar' &&
        prop !== 'calendarSelect' &&
        prop !== 'calendarSelectGroup' &&
        prop !== 'inRange' &&
        prop !== 'firstInRange' &&
        prop !== 'lastInRange'
    ),
    'calendar',
    'with label'
  );

  it('provides size and fullWidth props to CalendarWrapper component', () => {
    const element = shallow(<Calendar {...defaultProps} size="xl" fullWidth />).find(
      CalendarWrapper
    );
    expect(element.prop('size')).toBe('xl');
    expect(element.prop('fullWidth')).toBe(true);
  });

  it('passes __staticSelector prop to CalendarHeader and Month components', () => {
    const element = shallow(<Calendar {...defaultProps} __staticSelector="test-selector" />);
    expect(element.find(Month).prop('__staticSelector')).toBe('test-selector');
    expect(element.find(CalendarHeader).prop('__staticSelector')).toBe('test-selector');
  });

  it('passes size, nextMonthLabel, previousMonthLabel, withSelect, yearsRange, labelFormat props to CalendarHeader component', () => {
    const props = shallow(
      <Calendar
        {...defaultProps}
        size="xl"
        nextMonthLabel="test-next-label"
        previousMonthLabel="test-previous-label"
        withSelect
        yearsRange={{ from: 2011, to: 2032 }}
        labelFormat="MM YYYY"
      />
    )
      .find(CalendarHeader)
      .props();

    expect(props.size).toBe('xl');
    expect(props.nextMonthLabel).toBe('test-next-label');
    expect(props.previousMonthLabel).toBe('test-previous-label');
    expect(props.withSelect).toBe(true);
    expect(props.yearsRange).toEqual({ from: 2011, to: 2032 });
    expect(props.labelFormat).toBe('MM YYYY');
  });

  it('passes value, onChange, dayClassName, dayStyle, disableOutsideEvents, minDate, maxDate, excludeDate, fullWidth, size props to Month component', () => {
    const value = new Date();
    const minDate = new Date();
    const maxDate = new Date();
    const onChange = jest.fn();
    const dayClassName = jest.fn();
    const dayStyle = jest.fn();
    const excludeDate = jest.fn();

    const props = shallow(
      <Calendar
        {...defaultProps}
        value={value}
        onChange={onChange}
        dayClassName={dayClassName}
        dayStyle={dayStyle}
        disableOutsideEvents
        minDate={minDate}
        maxDate={maxDate}
        excludeDate={excludeDate}
        fullWidth
        size="xl"
      />
    )
      .find(Month)
      .props();

    expect(props.value).toBe(value);
    expect(props.onChange).toBe(onChange);
    expect(props.dayClassName).toBe(dayClassName);
    expect(props.dayStyle).toBe(dayStyle);
    expect(props.minDate).toBe(minDate);
    expect(props.maxDate).toBe(maxDate);
    expect(props.excludeDate).toBe(excludeDate);
    expect(props.disableOutsideEvents).toBe(true);
    expect(props.fullWidth).toBe(true);
    expect(props.size).toBe('xl');
  });

  it('has correct displayName', () => {
    expect(Calendar.displayName).toEqual('@mantine/dates/Calendar');
  });
});
