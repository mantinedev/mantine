import React from 'react';
import { shallow } from 'enzyme';
import { ActionIcon } from '@mantine/core';
import { CalendarHeader } from './CalendarHeader';
import { CalendarLabel } from '../CalendarLabel/CalendarLabel';

const defaultProps = {
  classNames: {},
  styles: {},
  size: 'md' as const,
  nextMonthLabel: 'next-month-label',
  previousMonthLabel: 'prev-month-label',
  previousMonthDisabled: false,
  nextMonthDisabled: false,
  onPreviousMonth: () => {},
  onNextMonth: () => {},
  locale: 'en',
  withSelect: false,
  yearsRange: { from: 2020, to: 2021 },
  month: new Date(),
  setMonth: () => {},
  labelFormat: 'MMMM YYYY',
  __staticSelector: 'calendar',
};

describe('@mantine/dates/CalendarHeader', () => {
  it('calls onPreviousMonth and onNextMonth functions when corresponding buttons are clicked', () => {
    const onNext = jest.fn();
    const onPrev = jest.fn();
    const buttons = shallow(
      <CalendarHeader {...defaultProps} onNextMonth={onNext} onPreviousMonth={onPrev} />
    ).find(ActionIcon);
    buttons.at(0).simulate('click');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');

    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onPrev).toHaveBeenCalledTimes(2);
  });

  it('passes withSelect, yearsRange, value, onChange, labelFormat, size, __staticSelector props to CalendarLabel component', () => {
    const value = new Date();
    const onChange = jest.fn();
    const props = shallow(
      <CalendarHeader
        {...defaultProps}
        __staticSelector="test-selector"
        withSelect
        month={value}
        setMonth={onChange}
        yearsRange={{ from: 2000, to: 2030 }}
        labelFormat="MMMM"
        size="xl"
      />
    )
      .find(CalendarLabel)
      .props();

    expect(props.__staticSelector).toBe('test-selector');
    expect(props.withSelect).toBe(true);
    expect(props.value).toBe(value);
    expect(props.onChange).toBe(onChange);
    expect(props.yearsRange).toEqual({ from: 2000, to: 2030 });
    expect(props.labelFormat).toEqual('MMMM');
    expect(props.size).toEqual('xl');
  });

  it('passes previousMonthLabel and nextMonthLabel aria-labels to corresponding controls', () => {
    const buttons = shallow(
      <CalendarHeader
        {...defaultProps}
        nextMonthLabel="test-next-month"
        previousMonthLabel="test-previous-month"
      />
    ).find(ActionIcon);

    expect(buttons.at(0).prop('aria-label')).toBe('test-previous-month');
    expect(buttons.at(1).prop('aria-label')).toBe('test-next-month');
  });

  it('passes previousMonthHidden and nextMonthHidden props to corresponding controls', () => {
    const buttons = shallow(
      <CalendarHeader
        {...defaultProps}
        nextMonthLabel="test-next-month"
        previousMonthLabel="test-previous-month"
      />
    ).find(ActionIcon);

    const buttonsHidden = shallow(
      <CalendarHeader
        {...defaultProps}
        nextMonthLabel="test-next-month"
        previousMonthLabel="test-previous-month"
        previousMonthHidden
        nextMonthHidden
      />
    ).find(ActionIcon);

    expect(buttons.at(0).prop('style').visibility).toBe('visible');
    expect(buttons.at(1).prop('style').visibility).toBe('visible');

    expect(buttonsHidden.at(0).prop('style').visibility).toBe('hidden');
    expect(buttonsHidden.at(1).prop('style').visibility).toBe('hidden');
  });

  it('has correct displayName', () => {
    expect(CalendarHeader.displayName).toEqual('@mantine/dates/CalendarHeader');
  });
});
