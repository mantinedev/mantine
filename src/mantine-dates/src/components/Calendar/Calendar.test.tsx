import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import dayjs from 'dayjs';
import { Calendar, CalendarProps } from './Calendar';
import {
  itSupportsMonthProps,
  itHandlesMonthKeyboardEvents,
  itHandlesControlsKeyboardEvents,
} from '../../tests';

const defaultProps: CalendarProps = {
  defaultDate: new Date(2022, 3, 11),
  ariaLabels: {
    monthLevelControl: 'month-level',
    yearLevelControl: 'year-level',
    nextMonth: 'next-month',
    previousMonth: 'previous-month',
    nextYear: 'next-year',
    previousYear: 'previous-year',
    nextDecade: 'next-decade',
    previousDecade: 'previous-decade',
  },
};

function expectLevelsCount([monthsCount, yearsCount]: [number, number]) {
  expect(screen.queryAllByLabelText('month-level')).toHaveLength(monthsCount);
  expect(screen.queryAllByLabelText('year-level')).toHaveLength(yearsCount);
}

function expectHeaderLevel(level: 'month' | 'year' | 'decade', label: string) {
  expect(screen.getByLabelText(`${level}-level`).textContent).toBe(label);
}

function expectHeaderLevels(level: 'month' | 'year' | 'decade', labels: string[]) {
  expect(screen.getAllByLabelText(`${level}-level`).map((node) => node.textContent)).toStrictEqual(
    labels
  );
}

async function clickNext(level: 'month' | 'year' | 'decade') {
  await userEvent.click(screen.getByLabelText(`next-${level}`));
}

async function clickPrevious(level: 'month' | 'year' | 'decade') {
  await userEvent.click(screen.getByLabelText(`previous-${level}`));
}

describe('@mantine/dates/Calendar', () => {
  itSupportsSystemProps({
    component: Calendar,
    props: defaultProps,
    refType: HTMLDivElement,
    providerName: 'Calendar',
    displayName: '@mantine/dates/Calendar',
  });

  itSupportsProviderVariant(Calendar, defaultProps, 'Calendar', 'calendar');
  itSupportsProviderSize(Calendar, defaultProps, 'Calendar', 'calendar');
  itSupportsMonthProps(Calendar, defaultProps);
  itHandlesMonthKeyboardEvents(Calendar, defaultProps);
  itHandlesControlsKeyboardEvents(Calendar, 'year', '.mantine-MonthsList-monthsList', {
    ...defaultProps,
    level: 'year',
  });
  itHandlesControlsKeyboardEvents(Calendar, 'decade', '.mantine-YearsList-yearsList', {
    ...defaultProps,
    level: 'decade',
  });

  it('sets correct aria-labels based on ariaLabels prop', () => {
    const testLabels = {
      monthLevelControl: 'test-month-level',
      yearLevelControl: 'test-year-level',
      nextMonth: 'test-next-month',
      previousMonth: 'test-previous-month',
      nextYear: 'test-next-year',
      previousYear: 'test-previous-year',
      nextDecade: 'test-next-decade',
      previousDecade: 'test-previous-decade',
    };

    const { rerender } = render(
      <Calendar {...defaultProps} ariaLabels={testLabels} level="month" />
    );

    expect(screen.getByLabelText('test-month-level')).toBeInTheDocument();
    expect(screen.getByLabelText('test-next-month')).toBeInTheDocument();
    expect(screen.getByLabelText('test-previous-month')).toBeInTheDocument();

    rerender(<Calendar {...defaultProps} ariaLabels={testLabels} level="year" />);
    expect(screen.getByLabelText('test-year-level')).toBeInTheDocument();
    expect(screen.getByLabelText('test-next-year')).toBeInTheDocument();
    expect(screen.getByLabelText('test-previous-year')).toBeInTheDocument();

    rerender(<Calendar {...defaultProps} ariaLabels={testLabels} level="decade" />);
    expect(screen.getByLabelText('test-next-decade')).toBeInTheDocument();
    expect(screen.getByLabelText('test-previous-decade')).toBeInTheDocument();
  });

  it('supports numberOfColumns', () => {
    const { rerender } = render(<Calendar {...defaultProps} numberOfColumns={1} level="month" />);
    expectLevelsCount([1, 0]);

    rerender(<Calendar {...defaultProps} numberOfColumns={2} level="month" />);
    expectLevelsCount([2, 0]);

    rerender(<Calendar {...defaultProps} numberOfColumns={1} level="year" />);
    expectLevelsCount([0, 1]);

    rerender(<Calendar {...defaultProps} numberOfColumns={2} level="year" />);
    expectLevelsCount([0, 2]);
  });

  it('changes level correctly', async () => {
    const { container } = render(<Calendar {...defaultProps} />);
    expectLevelsCount([1, 0]);

    await userEvent.click(screen.getByLabelText('month-level'));
    expectLevelsCount([0, 1]);

    await userEvent.click(container.querySelector('table button'));
    expectLevelsCount([1, 0]);
  });

  it('supports defaultLevel prop (uncontrolled)', async () => {
    render(<Calendar {...defaultProps} defaultLevel="year" />);
    expectLevelsCount([0, 1]);
  });

  it('supports level prop (controlled)', async () => {
    render(<Calendar {...defaultProps} level="year" />);
    expectLevelsCount([0, 1]);
    await userEvent.click(screen.getByLabelText('year-level'));
    expectLevelsCount([0, 1]);
  });

  it('calls onLevelChange when level changes', async () => {
    const spy = jest.fn();
    const { container } = render(<Calendar {...defaultProps} onLevelChange={spy} />);

    await userEvent.click(screen.getByLabelText('month-level'));
    expect(spy).toHaveBeenCalledWith('year');

    await userEvent.click(screen.getByLabelText('year-level'));
    expect(spy).toHaveBeenCalledWith('decade');

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith('year');

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith('month');
  });

  it('renders correct header labels with defaultDate (uncontrolled)', async () => {
    render(<Calendar {...defaultProps} defaultDate={new Date(2021, 3, 11)} />);
    expectHeaderLevel('month', 'April 2021');

    await userEvent.click(screen.getByLabelText('month-level'));
    expectHeaderLevel('year', '2021');

    await userEvent.click(screen.getByLabelText('year-level'));
    expect(screen.getByText('2020 – 2029')).toBeInTheDocument();
  });

  it('renders correct header labels with date (controlled)', async () => {
    render(<Calendar {...defaultProps} date={new Date(2021, 3, 11)} />);
    expectHeaderLevel('month', 'April 2021');

    await userEvent.click(screen.getByLabelText('month-level'));
    expectHeaderLevel('year', '2021');

    await userEvent.click(screen.getByLabelText('year-level'));
    expect(screen.getByText('2020 – 2029')).toBeInTheDocument();
  });

  it('changes displayed date when next/previous controls are clicked with defaultDate prop (uncontrolled)', async () => {
    const { rerender } = render(<Calendar {...defaultProps} level="month" />);
    expectHeaderLevel('month', 'April 2022');
    await clickNext('month');
    expectHeaderLevel('month', 'May 2022');
    await clickPrevious('month');
    expectHeaderLevel('month', 'April 2022');

    rerender(<Calendar {...defaultProps} level="year" />);
    expectHeaderLevel('year', '2022');
    await clickNext('year');
    expectHeaderLevel('year', '2023');
    await clickPrevious('year');
    expectHeaderLevel('year', '2022');

    rerender(<Calendar {...defaultProps} level="decade" />);
    expect(screen.getByText('2020 – 2029')).toBeInTheDocument();
    await clickNext('decade');
    expect(screen.getByText('2030 – 2039')).toBeInTheDocument();
    await clickPrevious('decade');
    expect(screen.getByText('2020 – 2029')).toBeInTheDocument();
  });

  it('does not change date when next/previous controls are clicked with date prop (controlled)', async () => {
    const { rerender } = render(
      <Calendar {...defaultProps} date={new Date(2022, 3, 11)} level="month" />
    );
    expectHeaderLevel('month', 'April 2022');
    await clickNext('month');
    expectHeaderLevel('month', 'April 2022');

    rerender(<Calendar {...defaultProps} date={new Date(2022, 3, 11)} level="year" />);
    expectHeaderLevel('year', '2022');
    await clickNext('year');
    expectHeaderLevel('year', '2022');

    rerender(<Calendar {...defaultProps} date={new Date(2022, 3, 11)} level="decade" />);
    expect(screen.getByText('2020 – 2029')).toBeInTheDocument();
    await clickNext('decade');
    expect(screen.getByText('2020 – 2029')).toBeInTheDocument();
  });

  it('calls onDateChange when date changes', async () => {
    const spy = jest.fn();
    const { rerender } = render(
      <Calendar {...defaultProps} level="month" date={new Date(2022, 3, 11)} onDateChange={spy} />
    );

    await clickNext('month');
    expect(spy).toHaveBeenLastCalledWith(new Date(2022, 4, 11));

    await clickPrevious('month');
    expect(spy).toHaveBeenLastCalledWith(new Date(2022, 2, 11));

    rerender(
      <Calendar {...defaultProps} level="year" date={new Date(2022, 3, 11)} onDateChange={spy} />
    );

    await clickNext('year');
    expect(spy).toHaveBeenLastCalledWith(new Date(2023, 3, 11));

    await clickPrevious('year');
    expect(spy).toHaveBeenLastCalledWith(new Date(2021, 3, 11));

    rerender(
      <Calendar {...defaultProps} level="decade" date={new Date(2022, 3, 11)} onDateChange={spy} />
    );

    await clickNext('decade');
    expect(spy).toHaveBeenLastCalledWith(new Date(2032, 3, 11));

    await clickPrevious('decade');
    expect(spy).toHaveBeenLastCalledWith(new Date(2012, 3, 11));
  });

  it('supports maxLevel', async () => {
    render(<Calendar {...defaultProps} defaultLevel="month" maxLevel="year" />);
    expectLevelsCount([1, 0]);
    await userEvent.click(screen.getByLabelText('month-level'));
    expectLevelsCount([0, 1]);
    await userEvent.click(screen.getByLabelText('year-level'));
    expectLevelsCount([0, 1]);
  });

  it('supports minLevel', async () => {
    const { container } = render(
      <Calendar {...defaultProps} defaultLevel="decade" minLevel="year" />
    );
    expectLevelsCount([0, 0]);

    await userEvent.click(container.querySelector('table button'));
    expectLevelsCount([0, 1]);

    await userEvent.click(container.querySelector('table button'));
    expectLevelsCount([0, 1]);
  });

  it('calls onYearSelect when year control is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(<Calendar {...defaultProps} level="decade" onYearSelect={spy} />);
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2020, 0, 1));
  });

  it('calls onMonthSelect when month control is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(<Calendar {...defaultProps} level="year" onMonthSelect={spy} />);
    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(new Date(2022, 0, 1));
  });

  it('supports columnsToScroll', async () => {
    const { rerender } = render(
      <Calendar {...defaultProps} numberOfColumns={2} columnsToScroll={1} />
    );
    expectHeaderLevels('month', ['April 2022', 'May 2022']);
    await clickNext('month');
    expectHeaderLevels('month', ['May 2022', 'June 2022']);

    rerender(<Calendar {...defaultProps} numberOfColumns={2} columnsToScroll={2} />);
    expectHeaderLevels('month', ['May 2022', 'June 2022']);
    await clickNext('month');
    expectHeaderLevels('month', ['July 2022', 'August 2022']);
  });

  it('supports changing month label format', () => {
    render(<Calendar {...defaultProps} monthLabelFormat="MM/YY" />);
    expectHeaderLevel('month', '04/22');
  });

  it('supports changing month label with callback', () => {
    render(
      <Calendar
        {...defaultProps}
        monthLabelFormat={(date) => `${date.getMonth()}/${date.getFullYear()}`}
      />
    );

    expectHeaderLevel('month', '3/2022');
  });

  it('supports changing year label format', () => {
    render(<Calendar {...defaultProps} level="year" yearLabelFormat="MM/YY" />);
    expectHeaderLevel('year', '04/22');
  });

  it('supports changing year label with callback', () => {
    render(
      <Calendar
        {...defaultProps}
        level="year"
        yearLabelFormat={(date) => `${date.getMonth()}/${date.getFullYear()}`}
      />
    );

    expectHeaderLevel('year', '3/2022');
  });

  it('supports changing decade label format', () => {
    render(<Calendar {...defaultProps} level="decade" decadeLabelFormat="MM/YY" />);
    expect(screen.getByText('01/20 – 01/29')).toBeInTheDocument();
  });

  it('supports changing decade label with callback', () => {
    render(
      <Calendar
        {...defaultProps}
        level="decade"
        decadeLabelFormat={(startOfDecade, endOfDecade) =>
          `${startOfDecade.getMonth()}/${startOfDecade.getFullYear()} – ${endOfDecade.getMonth()}/${endOfDecade.getFullYear()}`
        }
      />
    );

    expect(screen.getByText('0/2020 – 0/2029')).toBeInTheDocument();
  });

  it('only adds selected date in month to tab order', async () => {
    render(
      <Calendar
        {...defaultProps}
        getDayProps={(date) => ({ selected: dayjs(date).isSame(defaultProps.defaultDate, 'date') })}
      />
    );

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: defaultProps.ariaLabels.previousMonth })
    ).toHaveFocus();

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: defaultProps.ariaLabels.monthLevelControl })
    ).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: defaultProps.ariaLabels.nextMonth })).toHaveFocus();

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: dayjs(defaultProps.defaultDate).format('D MMMM YYYY') })
    ).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('only adds current date in month to tab order', async () => {
    render(<Calendar {...defaultProps} defaultDate={new Date()} />);

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: defaultProps.ariaLabels.previousMonth })
    ).toHaveFocus();

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: defaultProps.ariaLabels.monthLevelControl })
    ).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: defaultProps.ariaLabels.nextMonth })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: dayjs().format('D MMMM YYYY') })).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('only adds first non-disabled date in month to tab order', async () => {
    render(
      <Calendar
        {...defaultProps}
        minDate={new Date(2022, 3, 15)}
        getDayProps={(date) => ({ disabled: dayjs(new Date(2022, 3, 15)).isSame(date, 'date') })}
      />
    );

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: defaultProps.ariaLabels.monthLevelControl })
    ).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: defaultProps.ariaLabels.nextMonth })).toHaveFocus();

    await userEvent.tab();
    expect(
      screen.getByRole('button', { name: dayjs(new Date(2022, 3, 16)).format('D MMMM YYYY') })
    ).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });
});
