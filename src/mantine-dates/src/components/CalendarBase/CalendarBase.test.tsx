import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsSystemProps, checkAccessibility } from '@mantine/tests';
import { YearPicker } from './YearPicker/YearPicker';
import { MonthPicker } from './MonthPicker/MonthPicker';
import { MonthsList } from './MonthsList/MonthsList';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';
import { CalendarBase, CalendarBaseProps } from './CalendarBase';

const HEADER_CONTROL_SELECTOR = '.mantine-CalendarBase-calendarHeaderControl';

const labelsProps = {
  nextMonthLabel: 'next month',
  previousMonthLabel: 'previous month',
  nextYearLabel: 'next year',
  previousYearLabel: 'previous year',
  nextDecadeLabel: 'next decade',
  previousDecadeLabel: 'previous decade',
};

const defaultProps: CalendarBaseProps = {};

describe('@mantine/core/CalendarBase', () => {
  itSupportsSystemProps({
    component: CalendarBase,
    props: defaultProps,
    displayName: '@mantine/dates/CalendarBase',
    refType: HTMLDivElement,
  });

  checkAccessibility([
    <CalendarBase {...labelsProps} initialLevel="date" />,
    <CalendarBase {...labelsProps} initialLevel="month" />,
    <CalendarBase {...labelsProps} initialLevel="year" />,
  ]);

  it('renders correct views based on initialLevel', () => {
    const dateLevel = shallow(<CalendarBase initialLevel="date" />);
    const monthLevel = shallow(<CalendarBase initialLevel="month" />);
    const yearLevel = shallow(<CalendarBase initialLevel="year" />);

    expect(dateLevel.find(MonthsList)).toHaveLength(1);
    expect(dateLevel.find(MonthPicker)).toHaveLength(0);
    expect(dateLevel.find(YearPicker)).toHaveLength(0);

    expect(monthLevel.find(MonthsList)).toHaveLength(0);
    expect(monthLevel.find(MonthPicker)).toHaveLength(1);
    expect(monthLevel.find(YearPicker)).toHaveLength(0);

    expect(yearLevel.find(MonthsList)).toHaveLength(0);
    expect(yearLevel.find(MonthPicker)).toHaveLength(0);
    expect(yearLevel.find(YearPicker)).toHaveLength(1);
  });

  it('passes __staticSelector, styles and classNames to MonthPicker, MonthsList and YearPicker components', () => {
    const props = {
      __staticSelector: 'Test',
      styles: { calendarHeader: { background: 'red' } },
      classNames: { calendarHeaderControl: 'test-class' },
    };
    const dateLevel = shallow(<CalendarBase initialLevel="date" {...props} />);
    const monthLevel = shallow(<CalendarBase initialLevel="month" {...props} />);
    const yearLevel = shallow(<CalendarBase initialLevel="year" {...props} />);

    const monthsListProps = dateLevel.find(MonthsList).props();
    const monthPickerProps = monthLevel.find(MonthPicker).props();
    const yearPickerProps = yearLevel.find(YearPicker).props();

    expect(monthsListProps.__staticSelector).toBe('Test');
    expect(monthsListProps.styles).toEqual({ calendarHeader: { background: 'red' } });
    expect(monthsListProps.classNames).toEqual({ calendarHeaderControl: 'test-class' });

    expect(monthPickerProps.__staticSelector).toBe('Test');
    expect(monthPickerProps.styles).toEqual({ calendarHeader: { background: 'red' } });
    expect(monthPickerProps.classNames).toEqual({ calendarHeaderControl: 'test-class' });

    expect(yearPickerProps.__staticSelector).toBe('Test');
    expect(yearPickerProps.styles).toEqual({ calendarHeader: { background: 'red' } });
    expect(yearPickerProps.classNames).toEqual({ calendarHeaderControl: 'test-class' });
  });

  it('passes all props to MonthsList component', () => {
    const props: CalendarBaseProps = {
      amountOfMonths: 2,
      locale: 'ru',
      minDate: new Date(),
      maxDate: new Date(),
      allowLevelChange: false,
      size: 'md' as const,
      dayClassName: () => '',
      dayStyle: () => ({}),
      disableOutsideEvents: true,
      excludeDate: () => true,
      hideWeekdays: true,
      fullWidth: true,
      preventFocus: true,
      firstDayOfWeek: 'sunday',
      value: new Date(),
      range: [new Date(), new Date()],
      onChange: () => {},
      labelFormat: 'YYYY MMMM',
      onDayMouseEnter: () => {},
      hideOutsideDates: true,
    };

    const element = shallow(<CalendarBase {...props} />);
    const monthsListProps = element.find(MonthsList).props();
    Object.keys(props).forEach((prop) => {
      expect(monthsListProps[prop]).toEqual(props[prop]);
    });
  });

  it('calls onMonthChange when month changes', () => {
    const spy = jest.fn();
    const element = shallow(<CalendarBase onMonthChange={spy} month={new Date(2021, 11, 1)} />);
    element
      .find(MonthsList)
      .dive()
      .find(CalendarHeader)
      .dive()
      .find(HEADER_CONTROL_SELECTOR)
      .at(0)
      .simulate('click');
    expect(spy).toHaveBeenLastCalledWith(new Date(2021, 10, 1));
    element
      .find(MonthsList)
      .dive()
      .find(CalendarHeader)
      .dive()
      .find(HEADER_CONTROL_SELECTOR)
      .at(1)
      .simulate('click');
    expect(spy).toHaveBeenLastCalledWith(new Date(2022, 0, 1));
  });
});
