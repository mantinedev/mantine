import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { DatesProvider } from '@mantine/dates';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { getWeekNumber, toDateString } from '../../utils';
import { MonthView, MonthViewProps, MonthViewStylesNames } from './MonthView';

const defaultProps: MonthViewProps = {
  date: '2025-11-05',
};

describe('@mantine/schedule/MonthView', () => {
  tests.itSupportsSystemProps<MonthViewProps, MonthViewStylesNames>({
    component: MonthView,
    props: {
      ...defaultProps,
      withWeekNumbers: true,
      monthYearSelectProps: { popoverProps: { opened: true } },
    },
    varsResolver: true,
    displayName: '@mantine/schedule/MonthView',
    providerStylesApi: false,
    stylesApiSelectors: [
      // MonthView
      'monthView',
      'monthViewInner',
      'monthViewDay',
      'monthViewDayLabel',
      'monthViewWeek',
      'monthViewWeekNumber',
      'monthViewWeekday',
      'monthViewWeekdays',
      'monthViewWeekdaysCorner',

      // ScheduleHeader
      'header',
      'viewSelect',
      'headerControl',

      // MonthYearSelect
      'monthYearSelectTarget',
      'monthYearSelectDropdown',
      'monthYearSelectControl',
      'monthYearSelectList',
      'monthYearSelectLabel',
    ],
  });

  it('renders days of the month (date string)', () => {
    const { container } = render(<MonthView {...defaultProps} />);
    const days = container.querySelectorAll('.mantine-MonthView-monthViewDay');
    expect(days.length).toStrictEqual(42);
    expect(days[0].textContent).toStrictEqual('27'); // Oct 27
    expect(days[days.length - 1].textContent).toStrictEqual('7'); // Dec 7
  });

  it('renders days of the month (Date object)', () => {
    const { container } = render(<MonthView date={new Date(2025, 10, 5)} />);
    const days = container.querySelectorAll('.mantine-MonthView-monthViewDay');
    expect(days.length).toStrictEqual(42);
    expect(days[0].textContent).toStrictEqual('27'); // Oct 27
    expect(days[days.length - 1].textContent).toStrictEqual('7'); // Dec 7
  });

  it('supports consistentWeeks={false} prop', () => {
    const { container } = render(<MonthView {...defaultProps} consistentWeeks={false} />);
    const days = container.querySelectorAll('.mantine-MonthView-monthViewDay');
    expect(days.length).toStrictEqual(35);
    expect(days[0].textContent).toStrictEqual('27'); // Oct 27
    expect(days[days.length - 1].textContent).toStrictEqual('30'); // Nov 30
  });

  it('renders week numbers when withWeekNumbers is true', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekNumbers />);
    const weekNumbers = container.querySelectorAll('.mantine-MonthView-monthViewWeekNumber');
    expect(weekNumbers.length).toStrictEqual(6);
    expect(weekNumbers[0].textContent).toStrictEqual('44');
    expect(weekNumbers[weekNumbers.length - 1].textContent).toStrictEqual('49');
  });

  it('renders weekdays names when withWeekDays is true', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-monthViewWeekday');
    expect(weekdays.length).toStrictEqual(7);
    expect(weekdays[0].textContent).toStrictEqual('Mon');
    expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sun');
  });

  it('supports custom firstDayOfWeek (prop)', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays firstDayOfWeek={0} />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-monthViewWeekday');
    expect(weekdays.length).toStrictEqual(7);
    expect(weekdays[0].textContent).toStrictEqual('Sun');
    expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sat');

    const firstWeekDays = container
      .querySelectorAll('.mantine-MonthView-monthViewWeek')[0]
      .querySelectorAll('.mantine-MonthView-monthViewDay');
    expect(firstWeekDays[0].textContent).toStrictEqual('26'); // Oct 26
    expect(firstWeekDays[firstWeekDays.length - 1].textContent).toStrictEqual('1'); // Nov 1
  });

  it('supports custom firstDayOfWeek (DatesProvider)', () => {
    const { container } = render(
      <DatesProvider settings={{ firstDayOfWeek: 0 }}>
        <MonthView {...defaultProps} withWeekDays />
      </DatesProvider>
    );
    const weekdays = container.querySelectorAll('.mantine-MonthView-monthViewWeekday');
    expect(weekdays.length).toStrictEqual(7);
    expect(weekdays[0].textContent).toStrictEqual('Sun');
    expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sat');
  });

  it('supports locale (prop)', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays locale="ru" />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-monthViewWeekday');
    expect(weekdays[0].textContent).toStrictEqual('пнд');
  });

  it('supports locale (DatesProvider)', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <MonthView {...defaultProps} withWeekDays />
      </DatesProvider>
    );
    const weekdays = container.querySelectorAll('.mantine-MonthView-monthViewWeekday');
    expect(weekdays[0].textContent).toStrictEqual('пнд');
  });

  it('does not render weekdays names when withWeekDays is false', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays={false} />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-monthViewWeekday');
    expect(weekdays.length).toStrictEqual(0);
    expect(container.querySelector('.mantine-MonthView-monthViewWeekdays')).not.toBeInTheDocument();
  });

  it('allows changing weekdayFormat', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays weekdayFormat="dddd" />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-monthViewWeekday');
    expect(weekdays[0].textContent).toStrictEqual('Monday');
    expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sunday');
  });

  it('supports weekendDays prop', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays weekendDays={[1, 2]} />);
    const days = container.querySelectorAll('.mantine-MonthView-monthViewDay');
    expect(days[0]).toHaveAttribute('data-weekend'); // Oct 27, Monday
    expect(days[1]).toHaveAttribute('data-weekend'); // Oct 28, Tuesday
    expect(days[2]).not.toHaveAttribute('data-weekend'); // Oct 29, Wednesday
    expect(days[days.length - 1]).not.toHaveAttribute('data-weekend'); // Nov 30, Sunday
  });

  it('allows setting empty array to weekendDays prop', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays weekendDays={[]} />);
    const days = container.querySelectorAll('.mantine-MonthView-monthViewDay');
    days.forEach((day) => {
      expect(day).not.toHaveAttribute('data-weekend');
    });
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(
      <MonthView {...defaultProps} __staticSelector="Test" withWeekDays withWeekNumbers />
    );

    expect(container.querySelector('.mantine-Test-monthView')).toBeInTheDocument();
    expect(container.querySelector('.mantine-MonthView-monthView')).not.toBeInTheDocument();
  });

  it('supports onDayClick prop', async () => {
    const spy = jest.fn();
    render(<MonthView {...defaultProps} onDayClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'November 1, 2025' }));
    expect(spy).toHaveBeenCalledWith('2025-11-01', expect.any(Object));
  });

  it('supports onWeekNumberClick prop', async () => {
    const spy = jest.fn();
    render(<MonthView {...defaultProps} withWeekNumbers onWeekNumberClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Week 44' }));
    expect(spy).toHaveBeenCalledWith('2025-10-27', expect.any(Object));
  });

  it('supports getDayProps prop', () => {
    render(
      <MonthView
        {...defaultProps}
        getDayProps={(date) =>
          dayjs(date).date() === 1 ? { 'data-first-day-of-month': 'true' } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveAttribute(
      'data-first-day-of-month'
    );

    expect(screen.getByRole('button', { name: 'November 2, 2025' })).not.toHaveAttribute(
      'data-first-day-of-month'
    );
  });

  it('adds className and style props to days with getDayProps', () => {
    render(
      <MonthView
        {...defaultProps}
        getDayProps={(date) =>
          dayjs(date).date() === 1 ? { className: 'test-class', style: { color: '#E00999' } } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveStyle({
      color: '#E00999',
    });

    expect(screen.getByRole('button', { name: 'November 2, 2025' })).not.toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'November 2, 2025' })).not.toHaveStyle({
      color: '#E00999',
    });
  });

  it('supports getWeekNumberProps prop', () => {
    render(
      <MonthView
        {...defaultProps}
        withWeekNumbers
        getWeekNumberProps={(date) =>
          getWeekNumber([dayjs(date).format('YYYY-MM-DD')]) === 44
            ? { 'data-first-week': 'true' }
            : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'Week 44' })).toHaveAttribute('data-first-week');
    expect(screen.getByRole('button', { name: 'Week 45' })).not.toHaveAttribute('data-first-week');
  });

  it('adds className and style props to week numbers with getWeekNumberProps', () => {
    render(
      <MonthView
        {...defaultProps}
        withWeekNumbers
        getWeekNumberProps={(date) =>
          getWeekNumber([dayjs(date).format('YYYY-MM-DD')]) === 44
            ? { className: 'test-class', style: { color: '#E00999' } }
            : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'Week 44' })).toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'Week 44' })).toHaveStyle({ color: '#E00999' });

    expect(screen.getByRole('button', { name: 'Week 45' })).not.toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'Week 45' })).not.toHaveStyle({ color: '#E00999' });
  });

  it('sets data-today attribute on today date when highlightToday is true', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-15'));
    const { container, rerender } = render(<MonthView {...defaultProps} highlightToday />);
    const today = container.querySelector('.mantine-MonthView-monthViewDay[data-today]')!;
    expect(today).toBeInTheDocument();
    expect(today.textContent).toStrictEqual('15');

    rerender(<MonthView {...defaultProps} highlightToday={false} />);
    expect(
      container.querySelector('.mantine-MonthView-monthViewDay[data-today]')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('supports withOutsideDays={false} prop', () => {
    const { container } = render(<MonthView date="2025-11-01" withOutsideDays={false} />);
    const days = container.querySelectorAll('button.mantine-MonthView-monthViewDay');
    expect(days.length).toStrictEqual(30);
    expect(days[0].textContent).toStrictEqual('1');
  });

  it('renders header based on withHeader prop', () => {
    const { container, rerender } = render(<MonthView {...defaultProps} withHeader={false} />);
    expect(container.querySelector('.mantine-MonthView-header')).not.toBeInTheDocument();

    rerender(<MonthView {...defaultProps} withHeader />);
    expect(container.querySelector('.mantine-MonthView-header')).toBeInTheDocument();
  });

  it('supports todayControlProps, nextControlProps, previousControlProps and viewSelectProps props', () => {
    const { container } = render(
      <MonthView
        {...defaultProps}
        todayControlProps={{ 'data-today-prop': 'test' }}
        nextControlProps={{ 'data-next-prop': 'test' }}
        previousControlProps={{ 'data-previous-prop': 'test' }}
        viewSelectProps={{ 'data-view-select-prop': 'test' }}
      />
    );

    expect(
      container.querySelector('button.mantine-MonthView-headerControl[data-today-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-MonthView-headerControl[data-next-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-MonthView-headerControl[data-previous-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-MonthView-viewSelect[data-view-select-prop]')
    ).toBeInTheDocument();
  });

  it('calls onDateChange when navigating with header controls', async () => {
    const spy = jest.fn();
    render(
      <MonthView
        {...defaultProps}
        onDateChange={spy}
        monthYearSelectProps={{ popoverProps: { opened: true }, startYear: 2020, endYear: 2030 }}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-10-01')));

    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-12-01')));

    await userEvent.click(screen.getByRole('button', { name: 'Select month January' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-01-01')));

    await userEvent.click(screen.getByRole('button', { name: 'Select year 2026' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2026-11-01')));
  });

  it('calls onViewChange when view button is clicked', async () => {
    const spy = jest.fn();
    render(<MonthView {...defaultProps} onViewChange={spy} />);
    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(spy).toHaveBeenCalledWith('day');
  });

  it('supports custom labels prop for header elements', () => {
    render(
      <MonthView
        {...defaultProps}
        labels={{
          today: 'Hoy',
          previous: 'Anterior',
          next: 'Siguiente',
          switchToDayView: 'Ver día',
          switchToWeekView: 'Ver semana',
          switchToMonthView: 'Ver mes',
          switchToYearView: 'Ver año',
        }}
      />
    );

    expect(screen.getByRole('button', { name: 'Hoy' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Anterior' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Siguiente' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Ver día' })).toBeInTheDocument();
  });

  it('supports scrollAreaProps', () => {
    render(
      <MonthView
        {...defaultProps}
        scrollAreaProps={{
          'data-testid': 'test-scroll-area',
          className: 'test-class',
          style: { outline: '1px solid red' },
        }}
      />
    );

    const scrollArea = screen.getByTestId('test-scroll-area');
    expect(scrollArea).toBeInTheDocument();
    expect(scrollArea).toHaveClass('test-class');
    expect(scrollArea).toHaveStyle({ outline: '1px solid red' });
  });

  describe('keyboard navigation', () => {
    it('only first day should be in tab order', async () => {
      render(<MonthView {...defaultProps} />);

      const oct27 = screen.getByRole('button', { name: 'October 27, 2025' });
      expect(oct27).toHaveAttribute('tabIndex', '0');

      const oct28 = screen.getByRole('button', { name: 'October 28, 2025' });
      expect(oct28).toHaveAttribute('tabIndex', '-1');

      const nov1 = screen.getByRole('button', { name: 'November 1, 2025' });
      expect(nov1).toHaveAttribute('tabIndex', '-1');
    });

    it('first inside day should be in tab order when withOutsideDays is false', async () => {
      render(<MonthView {...defaultProps} withOutsideDays={false} />);

      const nov1 = screen.getByRole('button', { name: 'November 1, 2025' });
      expect(nov1).toHaveAttribute('tabIndex', '0');

      const nov2 = screen.getByRole('button', { name: 'November 2, 2025' });
      expect(nov2).toHaveAttribute('tabIndex', '-1');
    });

    it('supports ArrowRight key to move focus to next day', async () => {
      render(<MonthView {...defaultProps} />);
      const oct27 = screen.getByRole('button', { name: 'October 27, 2025' });

      oct27.focus();
      expect(document.activeElement).toBe(oct27);

      await userEvent.keyboard('{ArrowRight}');
      const oct28 = screen.getByRole('button', { name: 'October 28, 2025' });
      expect(document.activeElement).toBe(oct28);
    });

    it('supports ArrowLeft key to move focus to previous day', async () => {
      render(<MonthView {...defaultProps} />);
      const oct28 = screen.getByRole('button', { name: 'October 28, 2025' });

      oct28.focus();
      expect(document.activeElement).toBe(oct28);

      await userEvent.keyboard('{ArrowLeft}');
      const oct27 = screen.getByRole('button', { name: 'October 27, 2025' });
      expect(document.activeElement).toBe(oct27);
    });

    it('supports ArrowDown key to move focus to same day in next week', async () => {
      render(<MonthView {...defaultProps} />);
      const oct27 = screen.getByRole('button', { name: 'October 27, 2025' });

      oct27.focus();
      expect(document.activeElement).toBe(oct27);

      await userEvent.keyboard('{ArrowDown}');
      const nov3 = screen.getByRole('button', { name: 'November 3, 2025' });
      expect(document.activeElement).toBe(nov3);
    });

    it('supports ArrowUp key to move focus to same day in previous week', async () => {
      render(<MonthView {...defaultProps} />);
      const nov3 = screen.getByRole('button', { name: 'November 3, 2025' });

      nov3.focus();
      expect(document.activeElement).toBe(nov3);

      await userEvent.keyboard('{ArrowUp}');
      const oct27 = screen.getByRole('button', { name: 'October 27, 2025' });
      expect(document.activeElement).toBe(oct27);
    });

    it('ArrowRight at end of week moves to first day of next week', async () => {
      render(<MonthView {...defaultProps} />);
      const nov2 = screen.getByRole('button', { name: 'November 2, 2025' });

      nov2.focus();
      expect(document.activeElement).toBe(nov2);

      await userEvent.keyboard('{ArrowRight}');
      const nov3 = screen.getByRole('button', { name: 'November 3, 2025' });
      expect(document.activeElement).toBe(nov3);
    });

    it('ArrowLeft at beginning of week moves to last day of previous week', async () => {
      render(<MonthView {...defaultProps} />);
      const nov3 = screen.getByRole('button', { name: 'November 3, 2025' });

      nov3.focus();
      expect(document.activeElement).toBe(nov3);

      await userEvent.keyboard('{ArrowLeft}');
      const nov2 = screen.getByRole('button', { name: 'November 2, 2025' });
      expect(document.activeElement).toBe(nov2);
    });

    it('navigates to outside days with arrow keys', async () => {
      render(<MonthView {...defaultProps} />);
      const nov1 = screen.getByRole('button', { name: 'November 1, 2025' });

      nov1.focus();
      expect(document.activeElement).toBe(nov1);

      await userEvent.keyboard('{ArrowLeft}');
      const oct31 = screen.getByRole('button', { name: 'October 31, 2025' });
      expect(document.activeElement).toBe(oct31);
      expect(oct31).toHaveAttribute('data-outside');
    });

    it('does not navigate with arrow keys in static mode', async () => {
      render(<MonthView {...defaultProps} mode="static" />);
      const buttons = screen
        .getAllByRole('button')
        .filter((btn) => btn.classList.contains('mantine-MonthView-monthViewDay'));

      buttons.forEach((btn) => {
        expect(btn).toHaveAttribute('tabIndex', '-1');
      });
    });

    it('skips disabled days when navigating', async () => {
      render(
        <MonthView
          {...defaultProps}
          getDayProps={(date) =>
            dayjs(date).date() === 28 && dayjs(date).month() === 9 ? { disabled: true } : {}
          }
        />
      );
      const oct27 = screen.getByRole('button', { name: 'October 27, 2025' });

      oct27.focus();
      expect(document.activeElement).toBe(oct27);

      await userEvent.keyboard('{ArrowRight}');
      const oct29 = screen.getByRole('button', { name: 'October 29, 2025' });
      expect(document.activeElement).toBe(oct29);
    });

    it('navigates within the month with keyboard', async () => {
      render(<MonthView {...defaultProps} />);
      const nov15 = screen.getByRole('button', { name: 'November 15, 2025' });

      nov15.focus();
      expect(document.activeElement).toBe(nov15);

      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole('button', { name: 'November 16, 2025' })).toHaveFocus();

      await userEvent.keyboard('{ArrowLeft}');
      expect(screen.getByRole('button', { name: 'November 15, 2025' })).toHaveFocus();

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('button', { name: 'November 22, 2025' })).toHaveFocus();

      await userEvent.keyboard('{ArrowUp}');
      expect(screen.getByRole('button', { name: 'November 15, 2025' })).toHaveFocus();
    });
  });

  describe('event interaction callbacks', () => {
    const eventsData = [
      {
        id: 1,
        title: 'Test Event',
        start: '2025-11-05',
        end: '2025-11-06',
        color: 'blue',
        payload: {},
      },
    ];

    it('calls onDayClick when day is clicked', async () => {
      const spy = jest.fn();
      render(<MonthView {...defaultProps} onDayClick={spy} />);

      const day = screen.getByRole('button', { name: 'November 5, 2025' });
      await userEvent.click(day);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
    });

    it('calls onEventClick when event is clicked', async () => {
      const spy = jest.fn();
      render(<MonthView {...defaultProps} events={eventsData} onEventClick={spy} />);

      const event = screen.getByText('Test Event');
      await userEvent.click(event);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          id: expect.anything(),
          title: expect.any(String),
        }),
        expect.any(Object)
      );
    });

    it('does not call callbacks in static mode', async () => {
      const daySpy = jest.fn();
      const eventSpy = jest.fn();

      render(
        <MonthView
          {...defaultProps}
          mode="static"
          events={eventsData}
          onDayClick={daySpy}
          onEventClick={eventSpy}
        />
      );

      const day = screen.getByRole('button', { name: 'November 5, 2025' });

      await userEvent.click(day);

      expect(daySpy).not.toHaveBeenCalled();
      // Note: We don't test event clicks in static mode because ScheduleEvent
      // handles that internally by setting onClick to undefined when mode is static
    });
  });
});
