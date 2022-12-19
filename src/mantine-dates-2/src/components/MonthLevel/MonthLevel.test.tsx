import 'dayjs/locale/ru';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MonthLevel, MonthLevelProps } from './MonthLevel';
import {
  itSupportsMonthProps,
  itSupportsHeaderProps,
  itSupportsGetDayRef,
  itSupportsWithNextPrevious,
  itSupportsOnDayKeydown,
  itSupportsOnDayClick,
} from '../../tests';

function expectLabel(label: string) {
  expect(screen.getByLabelText('level-control')).toHaveTextContent(label);
}

const defaultProps: MonthLevelProps = {
  month: new Date(2022, 3, 11),
  levelControlAriaLabel: 'level-control',
  nextLabel: 'next',
  previousLabel: 'prev',
};

describe('@mantine/dates/MonthLevel', () => {
  itSupportsHeaderProps(MonthLevel, defaultProps);
  itSupportsMonthProps(MonthLevel, defaultProps);
  itSupportsGetDayRef(MonthLevel, defaultProps);
  itSupportsWithNextPrevious(MonthLevel, defaultProps);
  itSupportsOnDayKeydown(MonthLevel, defaultProps);
  itSupportsOnDayClick(MonthLevel, defaultProps);

  it('renders correct CalendarHeader label', () => {
    render(<MonthLevel {...defaultProps} />);
    expectLabel('April 2022');
  });

  it('supports changing month label format', () => {
    render(<MonthLevel {...defaultProps} monthLabelFormat="MM/YY" />);
    expectLabel('04/22');
  });

  it('supports changing month label with callback', () => {
    render(
      <MonthLevel
        {...defaultProps}
        monthLabelFormat={(date) => `${date.getMonth()}/${date.getFullYear()}`}
      />
    );

    expectLabel('3/2022');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<MonthLevel {...defaultProps} />);
    expect(container.firstChild).toHaveClass('mantine-MonthLevel-monthLevel');
    expect(container.querySelector('table td button')).toHaveClass('mantine-MonthLevel-day');
    expect(screen.getByLabelText('level-control')).toHaveClass(
      'mantine-MonthLevel-calendarHeaderLevel'
    );
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<MonthLevel {...defaultProps} __staticSelector="Calendar" />);
    expect(container.firstChild).toHaveClass('mantine-Calendar-monthLevel');
    expect(container.querySelector('table td button')).toHaveClass('mantine-Calendar-day');
    expect(screen.getByLabelText('level-control')).toHaveClass(
      'mantine-Calendar-calendarHeaderLevel'
    );
  });

  it('supports styles api (styles)', () => {
    const { container } = render(
      <MonthLevel
        {...defaultProps}
        styles={{
          monthLevel: { borderColor: '#343436' },
          day: { borderColor: '#232324' },
          calendarHeaderLevel: { borderColor: '#121214' },
        }}
      />
    );

    expect(container.firstChild).toHaveStyle({ borderColor: '#343436' });
    expect(container.querySelector('table td button')).toHaveStyle({ borderColor: '#232324' });
    expect(screen.getByLabelText('level-control')).toHaveStyle({ borderColor: '#121214' });
  });

  it('supports styles api (classNames)', () => {
    const { container } = render(
      <MonthLevel
        {...defaultProps}
        classNames={{
          monthLevel: 'test-month-level',
          day: 'test-day',
          calendarHeaderLevel: 'test-level',
        }}
      />
    );

    expect(container.firstChild).toHaveClass('test-month-level');
    expect(container.querySelector('table td button')).toHaveClass('test-day');
    expect(screen.getByLabelText('level-control')).toHaveClass('test-level');
  });

  it('disables next control if maxDate is before end of month', () => {
    render(<MonthLevel {...defaultProps} maxDate={new Date(2022, 3, 11)} />);
    expect(screen.getByLabelText('next')).toBeDisabled();
  });

  it('disables previous control if minDate is after start of month', () => {
    render(<MonthLevel {...defaultProps} minDate={new Date(2022, 3, 11)} />);
    expect(screen.getByLabelText('prev')).toBeDisabled();
  });
});
