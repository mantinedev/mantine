import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { RangeCalendar } from './RangeCalendar';
import { Month } from '../Month/Month';
import { CalendarWrapper } from '../Calendar/CalendarWrapper/CalendarWrapper';
import { CalendarHeader } from '../Calendar/CalendarHeader/CalendarHeader';
import { Calendar as CalendarStylesApi } from '../Calendar/styles.api';

const defaultProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => {},
  withSelect: true,
};

describe('@mantine/dates/RangeCalendar', () => {
  itSupportsClassName(RangeCalendar, defaultProps);
  itSupportsOthers(RangeCalendar, defaultProps);
  itSupportsStyle(RangeCalendar, defaultProps);
  itSupportsMargins(RangeCalendar, defaultProps);
  itSupportsRef(RangeCalendar, defaultProps, HTMLDivElement);
  itSupportsStylesApi(
    RangeCalendar,
    defaultProps,
    Object.keys(CalendarStylesApi).filter(
      (prop) =>
        prop !== 'calendar' &&
        prop !== 'calendarLabel' &&
        prop !== 'inRange' &&
        prop !== 'firstInRange' &&
        prop !== 'lastInRange'
    ),
    'range-calendar',
    'with select'
  );

  itSupportsStylesApi(
    RangeCalendar,
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
    'range-calendar',
    'with label'
  );

  it('provides size and fullWidth props to CalendarWrapper component', () => {
    const element = shallow(<RangeCalendar {...defaultProps} size="xl" fullWidth />).find(
      CalendarWrapper
    );
    expect(element.prop('size')).toBe('xl');
    expect(element.prop('fullWidth')).toBe(true);
  });

  it('passes __staticSelector prop to CalendarHeader and Month components', () => {
    const element = shallow(
      <RangeCalendar {...defaultProps} withMultipleMonths __staticSelector="test-selector" />
    );

    expect(element.find(Month).at(0).prop('__staticSelector')).toBe('test-selector');
    expect(element.find(CalendarHeader).at(0).prop('__staticSelector')).toBe('test-selector');

    expect(element.find(Month).at(1).prop('__staticSelector')).toBe('test-selector-second-month');
    expect(element.find(CalendarHeader).at(1).prop('__staticSelector')).toBe(
      'test-selector-second-month'
    );
  });

  it('passes size, nextMonthLabel, previousMonthLabel, withSelect, yearsRange, labelFormat props to CalendarHeader component', () => {
    const calendarHeaders = shallow(
      <RangeCalendar
        {...defaultProps}
        size="xl"
        nextMonthLabel="test-next-label"
        previousMonthLabel="test-previous-label"
        withSelect
        yearsRange={{ from: 2011, to: 2032 }}
        labelFormat="MM YYYY"
        withMultipleMonths
      />
    ).find(CalendarHeader);

    const props = calendarHeaders.at(0).props();
    const propsSecondHeader = calendarHeaders.at(1).props();

    expect(props.size).toBe('xl');
    expect(props.nextMonthLabel).toBe('test-next-label');
    expect(props.previousMonthLabel).toBe('test-previous-label');
    expect(props.withSelect).toBe(true);
    expect(props.yearsRange).toEqual({ from: 2011, to: 2032 });
    expect(props.labelFormat).toBe('MM YYYY');

    expect(propsSecondHeader.size).toBe('xl');
    expect(propsSecondHeader.nextMonthLabel).toBe('test-next-label');
    expect(propsSecondHeader.previousMonthLabel).toBe('test-previous-label');
    expect(propsSecondHeader.withSelect).toBe(true);
    expect(propsSecondHeader.yearsRange).toEqual({ from: 2011, to: 2032 });
    expect(propsSecondHeader.labelFormat).toBe('MM YYYY');
  });

  it('passes range, dayClassName, disableOutsideEvents, minDate, maxDate, excludeDate, fullWidth, size props to Month component', () => {
    const value: [Date, Date] = [new Date(), new Date()];
    const minDate = new Date();
    const maxDate = new Date();
    const dayClassName = jest.fn();
    const excludeDate = jest.fn();

    const months = shallow(
      <RangeCalendar
        {...defaultProps}
        value={value}
        dayClassName={dayClassName}
        disableOutsideEvents
        minDate={minDate}
        maxDate={maxDate}
        excludeDate={excludeDate}
        fullWidth
        size="xl"
        withMultipleMonths
      />
    ).find(Month);

    const props = months.at(0).props();
    const propsSecondMonth = months.at(1).props();

    expect(props.range).toBe(value);
    expect(props.dayClassName).toBe(dayClassName);
    expect(props.minDate).toBe(minDate);
    expect(props.maxDate).toBe(maxDate);
    expect(props.excludeDate).toBe(excludeDate);
    expect(props.disableOutsideEvents).toBe(true);
    expect(props.fullWidth).toBe(true);
    expect(props.size).toBe('xl');

    expect(propsSecondMonth.range).toBe(value);
    expect(propsSecondMonth.dayClassName).toBe(dayClassName);
    expect(propsSecondMonth.minDate).toBe(minDate);
    expect(propsSecondMonth.maxDate).toBe(maxDate);
    expect(propsSecondMonth.excludeDate).toBe(excludeDate);
    expect(propsSecondMonth.disableOutsideEvents).toBe(true);
    expect(propsSecondMonth.fullWidth).toBe(true);
    expect(propsSecondMonth.size).toBe('xl');
  });

  it('has correct displayName', () => {
    expect(RangeCalendar.displayName).toEqual('@mantine/dates/RangeCalendar');
  });
});
