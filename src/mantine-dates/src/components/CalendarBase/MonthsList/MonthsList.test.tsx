import React from 'react';
import { mount, shallow } from 'enzyme';
import { checkAccessibility } from '@mantine/tests';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { MonthsList } from './MonthsList';

const HEADER_CONTROL_SELECTOR = '.mantine-MonthsList-calendarHeaderControl';
const LEVEL_SELECTOR = '.mantine-MonthsList-calendarHeaderLevel';

const defaultProps = {
  amountOfMonths: 1,
  month: new Date(2021, 11, 1),
  locale: 'en',
  allowLevelChange: true,
  daysRefs: { current: [[]] } as any,
  onMonthChange: () => {},
  onNextLevel: () => {},
  onDayKeyDown: () => {},
};

describe('@mantine/dates/MonthsList', () => {
  checkAccessibility([
    mount(
      <MonthsList
        {...defaultProps}
        amountOfMonths={1}
        nextMonthLabel="Next"
        previousMonthLabel="Previous"
      />
    ),
    mount(
      <div>
        <MonthsList
          {...defaultProps}
          amountOfMonths={2}
          nextMonthLabel="Next"
          previousMonthLabel="Previous"
        />
      </div>
    ),
    mount(
      <div>
        <MonthsList
          {...defaultProps}
          amountOfMonths={3}
          nextMonthLabel="Next"
          previousMonthLabel="Previous"
        />
      </div>
    ),
  ]);

  it('sets nextLevelDisabled on CalendarHeader component based on allowLevelChange prop', () => {
    const allowLevelChange = shallow(<MonthsList {...defaultProps} allowLevelChange />);
    const disallowLevelChange = shallow(<MonthsList {...defaultProps} allowLevelChange />);
    expect(allowLevelChange.find(CalendarHeader).prop('nextLevelDisabled')).toBe(false);
    expect(disallowLevelChange.find(CalendarHeader).prop('nextLevelDisabled')).toBe(false);
  });

  it('calls onNextLevel when level label is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<MonthsList {...defaultProps} onNextLevel={spy} />);
    element.find(CalendarHeader).dive().find(LEVEL_SELECTOR).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('sets CalendarHeader label based on current selected month and labelFormat', () => {
    const element = shallow(
      <MonthsList {...defaultProps} month={new Date(2021, 11, 1)} labelFormat="MMMM YYYY" />
    );
    expect(element.render().find(LEVEL_SELECTOR).text()).toBe('December 2021');
  });

  it('calls onMonthChange when next/previous buttons are clicked', () => {
    const spy = jest.fn();
    const element = shallow(
      <MonthsList {...defaultProps} month={new Date(2021, 11, 1)} onMonthChange={spy} />
    );
    const header = element.find(CalendarHeader).dive();
    const nextControl = header.find(HEADER_CONTROL_SELECTOR).at(1);
    const previousControl = header.find(HEADER_CONTROL_SELECTOR).at(0);

    nextControl.simulate('click');
    expect(spy).toHaveBeenLastCalledWith(new Date(2022, 0, 1));

    previousControl.simulate('click');
    expect(spy).toHaveBeenLastCalledWith(new Date(2021, 10, 1));
  });

  it('sets hasNext/hasPrevious CalendarHeader props based on minDate/maxDate props', () => {
    const withMaxYear = shallow(<MonthsList {...defaultProps} maxDate={new Date(2021, 11, 1)} />);
    const withMinYear = shallow(<MonthsList {...defaultProps} minDate={new Date(2021, 11, 1)} />);

    expect(withMaxYear.find(CalendarHeader).prop('hasNext')).toBe(false);
    expect(withMaxYear.find(CalendarHeader).prop('hasPrevious')).toBe(true);

    expect(withMinYear.find(CalendarHeader).prop('hasNext')).toBe(true);
    expect(withMinYear.find(CalendarHeader).prop('hasPrevious')).toBe(false);
  });

  it('passes nextLabel/previousLabel props to CalendarHeader component', () => {
    const element = shallow(
      <MonthsList {...defaultProps} nextMonthLabel="next-test" previousMonthLabel="previous-test" />
    );

    expect(element.find(CalendarHeader).prop('nextLabel')).toBe('next-test');
    expect(element.find(CalendarHeader).prop('previousLabel')).toBe('previous-test');
  });

  it('renders correct amount of months', () => {
    const two = shallow(<MonthsList {...defaultProps} amountOfMonths={2} />);
    const three = shallow(<MonthsList {...defaultProps} amountOfMonths={3} />);
    const four = shallow(<MonthsList {...defaultProps} amountOfMonths={4} />);

    expect(two.find(CalendarHeader)).toHaveLength(2);
    expect(three.find(CalendarHeader)).toHaveLength(3);
    expect(four.find(CalendarHeader)).toHaveLength(4);
  });

  it('has correct displayName', () => {
    expect(MonthsList.displayName).toEqual('@mantine/dates/MonthsList');
  });
});
