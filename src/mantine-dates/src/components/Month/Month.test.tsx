import 'dayjs/locale/ru';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itSupportsSystemProps } from '@mantine/tests';
import { Month, MonthProps } from './Month';

const defaultProps: MonthProps = {
  month: new Date(2021, 11, 1),
  value: new Date(2021, 11, 5),
};

describe('@mantine/dates/Month', () => {
  itSupportsSystemProps({
    component: Month,
    props: defaultProps,
    displayName: '@mantine/dates/Month',
    refType: HTMLTableElement,
  });

  it('renders correct amount of weekdays', () => {
    const { container } = render(<Month month={new Date()} />);
    expect(container.querySelectorAll('.mantine-Month-weekdayCell')).toHaveLength(7);
  });

  it('renders correct amount of days', () => {
    const { container } = render(<Month month={new Date(2021, 1, 2)} />);
    expect(container.querySelectorAll('tbody tr')).toHaveLength(4);
    expect(container.querySelectorAll('tbody td')).toHaveLength(28);

    const { container: firstDayOfWeekSunday } = render(
      <Month month={new Date(2021, 1, 2)} firstDayOfWeek="sunday" />
    );
    expect(firstDayOfWeekSunday.querySelectorAll('tbody tr')).toHaveLength(5);
    expect(firstDayOfWeekSunday.querySelectorAll('tbody td')).toHaveLength(35);
  });

  it('assigns values to given daysRefs', () => {
    const daysRefs: HTMLButtonElement[][] = [];
    render(<Month {...defaultProps} month={new Date(2021, 11, 1)} daysRefs={daysRefs} />);
    expect(daysRefs.length).toBe(5);
    expect(daysRefs.every((list) => list.length === 7)).toBe(true);
    expect(daysRefs.every((list) => list.every((date) => date instanceof HTMLButtonElement))).toBe(
      true
    );
  });

  it('adds styles when month days are within range', () => {
    const { container: withoutRange } = render(<Month month={new Date(2021, 11, 1)} />);
    const { container: withRange } = render(
      <Month
        month={new Date(2021, 11, 1)}
        range={[new Date(2021, 11, 5), new Date(2021, 11, 15)]}
      />
    );

    expect(withRange.querySelectorAll('.mantine-Month-firstInRange')).toHaveLength(1);
    expect(withRange.querySelectorAll('.mantine-Month-lastInRange')).toHaveLength(1);
    expect(withRange.querySelectorAll('.mantine-Month-inRange')).toHaveLength(11);

    expect(withoutRange.querySelectorAll('.mantine-Month-firstInRange')).toHaveLength(0);
    expect(withoutRange.querySelectorAll('.mantine-Month-lastInRange')).toHaveLength(0);
    expect(withoutRange.querySelectorAll('.mantine-Month-inRange')).toHaveLength(0);
  });

  it('does not add styles when month days outside of range', () => {
    const { container } = render(
      <Month
        month={new Date(2021, 11, 1)}
        range={[new Date(2021, 10, 5), new Date(2021, 10, 15)]}
      />
    );

    expect(container.querySelectorAll('.mantine-Month-firstInRange')).toHaveLength(0);
    expect(container.querySelectorAll('.mantine-Month-lastInRange')).toHaveLength(0);
    expect(container.querySelectorAll('.mantine-Month-inRange')).toHaveLength(0);
  });

  it('adds partial range styles', () => {
    const { container } = render(
      <Month
        month={new Date(2021, 11, 1)}
        range={[new Date(2021, 11, 25), new Date(2021, 12, 15)]}
      />
    );

    expect(container.querySelectorAll('.mantine-Month-firstInRange')).toHaveLength(1);
    expect(container.querySelectorAll('.mantine-Month-lastInRange')).toHaveLength(0);
    expect(container.querySelectorAll('.mantine-Month-inRange')).toHaveLength(9);
  });

  it('calls onChange with Date object when Day is clicked', () => {
    const spy = jest.fn();
    render(<Month month={new Date(2021, 11, 1)} onChange={spy} />);
    userEvent.click(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith(new Date(2021, 10, 29));
  });

  it('handles mouseenter events correctly on Day', () => {
    const spy = jest.fn();
    render(<Month month={new Date(2021, 11, 1)} onDayMouseEnter={spy} />);
    userEvent.hover(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith(new Date(2021, 10, 29), expect.anything());
  });

  it('sets Day style based on dayStyle function', () => {
    render(<Month {...defaultProps} dayStyle={() => ({ background: 'red' })} />);
    expect(screen.getAllByRole('button')[0]).toHaveStyle({ background: 'red' });
  });

  it('sets Day className based on dayClassName function', () => {
    render(<Month {...defaultProps} dayClassName={() => 'test-class'} />);
    expect(screen.getAllByRole('button')[0]).toHaveClass('test-class');
  });

  it('displays selected date', () => {
    render(<Month month={new Date(2021, 11, 1)} value={new Date(2021, 11, 5)} />);
    const days = screen.getAllByRole('button');
    expect(days[6]).toHaveClass('mantine-Month-selected');
    expect(days[7]).not.toHaveClass('mantine-Month-selected');
    expect(days[5]).not.toHaveClass('mantine-Month-selected');
  });

  it('changes first day of week based on prop', () => {
    const { container: sunday } = render(
      <Month {...defaultProps} firstDayOfWeek="sunday" locale="en" />
    );
    const { container: monday } = render(
      <Month {...defaultProps} firstDayOfWeek="monday" locale="en" />
    );

    expect(sunday.querySelectorAll('.mantine-Month-weekdayCell')[0].textContent).toBe('Su');
    expect(sunday.querySelectorAll('.mantine-Month-weekdayCell')[6].textContent).toBe('Sa');

    expect(monday.querySelectorAll('.mantine-Month-weekdayCell')[0].textContent).toBe('Mo');
    expect(monday.querySelectorAll('.mantine-Month-weekdayCell')[6].textContent).toBe('Su');
  });

  it('does not render weekdays if hideWeekdays is true', () => {
    const { container: withWeekdays } = render(<Month {...defaultProps} hideWeekdays={false} />);
    const { container: withoutWeekdays } = render(<Month {...defaultProps} hideWeekdays />);
    expect(withWeekdays.querySelectorAll('thead')).toHaveLength(1);
    expect(withoutWeekdays.querySelectorAll('thead')).toHaveLength(0);
  });

  it('renders weekday names with given locale', () => {
    const { container: en } = render(<Month {...defaultProps} locale="en" />);
    const { container: ru } = render(<Month {...defaultProps} locale="ru" />);

    expect(en.querySelector('th').textContent).toBe('Mo');
    expect(ru.querySelector('th').textContent).toBe('Пн');
  });
});
