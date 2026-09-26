import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DatesProvider } from '@mantine/dates';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { DateStringValue, ScheduleEventData } from '../../types';
import { getWeekNumber, toDateString } from '../../utils';
import { YearView, YearViewProps, YearViewStylesNames } from './YearView';

const defaultProps: YearViewProps = {
  date: '2025-11-01 00:00:00',
};

describe('@mantine/schedule/YearView', () => {
  tests.itSupportsSystemProps<YearViewProps, YearViewStylesNames>({
    component: YearView,
    props: {
      ...defaultProps,
      withWeekNumbers: true,
      monthYearSelectProps: { popoverProps: { opened: true } },
    },
    varsResolver: true,
    displayName: '@mantine/schedule/YearView',
    providerStylesApi: false,
    stylesApiSelectors: [
      'yearView',
      'yearViewDay',
      'yearViewMonth',
      'yearViewMonthCaption',
      'yearViewWeek',
      'yearViewWeekNumber',
      'yearViewWeekday',
      'yearViewWeekdays',
      'yearViewWeekdaysCorner',

      // ScheduleHeader
      'header',
      'viewSelect',
      'headerControl',

      // MonthYearSelect
      'monthYearSelectTarget',
      'monthYearSelectDropdown',
      'monthYearSelectControl',
      'monthYearSelectList',
    ],
  });

  it('renders months of the given year', () => {
    const { container } = render(<YearView {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-YearView-yearViewMonth')).toHaveLength(12);

    const days = container.querySelectorAll('.mantine-YearView-yearViewDay');
    expect(days[0].textContent).toBe('30'); // Dec 30, 2024
    expect(days[days.length - 1].textContent).toBe('11'); // Jan 11, 2026 (extra week for consistentWeeks)
  });

  it('supports firstDayOfWeek prop', () => {
    const { container } = render(<YearView {...defaultProps} firstDayOfWeek={0} />);
    const january = container.querySelector('.mantine-YearView-yearViewMonth')!;
    const days = january.querySelectorAll('.mantine-YearView-yearViewDay');
    expect(days[0].textContent).toBe('29'); // Dec 29, 2024 (Sunday)
    expect(days[days.length - 1].textContent).toBe('8'); // Feb 8, 2025 (Saturday)
  });

  it('supports changing weekendDays', () => {
    const { container } = render(<YearView {...defaultProps} weekendDays={[1, 2]} />);
    const days = container.querySelectorAll('.mantine-YearView-yearViewDay');
    expect(days[0]).toHaveAttribute('data-weekend'); // Dec 30, 2024 (Monday)
    expect(days[1]).toHaveAttribute('data-weekend'); // Dec 31, 2024 (Tuesday)
    expect(days[2]).not.toHaveAttribute('data-weekend'); // Jan 1, 2025 (Wednesday)
    expect(days[days.length - 1]).not.toHaveAttribute('data-weekend'); // Feb 9, 2025 (Sunday)
  });

  describe('withWeekendDays', () => {
    const getFirstMonth = (container: HTMLElement) =>
      container.querySelector('.mantine-YearView-yearViewMonth') as HTMLElement;

    const getVisibleDayButton = (name: string) => {
      const buttons = screen.getAllByRole('button', { name });
      return buttons.find((button) => !button.hasAttribute('data-outside')) || buttons[0];
    };

    it('renders all 7 columns by default', () => {
      const { container } = render(<YearView {...defaultProps} />);
      const january = getFirstMonth(container);

      expect(january.querySelectorAll('.mantine-YearView-yearViewWeekday')).toHaveLength(7);
      expect(january.querySelectorAll('.mantine-YearView-yearViewDay')).toHaveLength(42);
    });

    it('hides weekend days when withWeekendDays is false', () => {
      const { container } = render(
        <YearView {...defaultProps} withWeekendDays={false} weekdayFormat="dddd" />
      );
      const january = getFirstMonth(container);
      const weekdays = january.querySelectorAll('.mantine-YearView-yearViewWeekday');
      const days = january.querySelectorAll('.mantine-YearView-yearViewDay');

      expect(weekdays).toHaveLength(5);
      expect(weekdays[0].textContent).toStrictEqual('Monday');
      expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Friday');
      expect(days).toHaveLength(30);
      days.forEach((day) => {
        expect(day).not.toHaveAttribute('data-weekend');
      });
    });

    it('sets --year-view-columns variable to the number of visible columns', () => {
      const { container } = render(<YearView {...defaultProps} withWeekendDays={false} />);
      const root = container.querySelector('.mantine-YearView-yearView') as HTMLElement;

      expect(root).toHaveAttribute('data-without-weekend-days');
      expect(root.style.getPropertyValue('--year-view-columns')).toBe('5');
    });

    it('respects custom weekendDays when hiding weekend days', () => {
      const { container } = render(
        <YearView
          {...defaultProps}
          withWeekendDays={false}
          weekendDays={[1, 2]}
          weekdayFormat="dddd"
        />
      );
      const january = getFirstMonth(container);
      const weekdays = january.querySelectorAll('.mantine-YearView-yearViewWeekday');

      expect(weekdays).toHaveLength(5);
      expect(weekdays[0].textContent).toStrictEqual('Wednesday');
      expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sunday');
      expect(january.querySelectorAll('.mantine-YearView-yearViewDay')).toHaveLength(30);
    });

    it('hides weekend days relative to firstDayOfWeek', () => {
      const { container } = render(
        <YearView
          {...defaultProps}
          withWeekendDays={false}
          firstDayOfWeek={0}
          weekdayFormat="dddd"
        />
      );
      const weekdays = getFirstMonth(container).querySelectorAll(
        '.mantine-YearView-yearViewWeekday'
      );

      expect(weekdays).toHaveLength(5);
      expect(weekdays[0].textContent).toStrictEqual('Monday');
      expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Friday');
    });

    it('does not render indicators for events that occur only on hidden weekend days', () => {
      const events = [
        {
          id: 'weekday',
          title: 'Standup',
          start: '2025-11-05 10:00:00',
          end: '2025-11-05 11:00:00',
          color: 'blue',
          payload: {},
        },
        {
          id: 'weekend-only',
          title: 'Weekend Brunch',
          start: '2025-11-08 10:00:00',
          end: '2025-11-08 11:00:00',
          color: 'red',
          payload: {},
        },
      ];

      render(<YearView {...defaultProps} withWeekendDays={false} events={events} />);

      // Nov 5 is Wednesday, Nov 8 is Saturday
      const nov5 = getVisibleDayButton('November 5, 2025');
      expect(nov5.querySelectorAll('.mantine-YearView-yearViewDayIndicator')).toHaveLength(1);
      expect(screen.queryByRole('button', { name: 'November 8, 2025' })).not.toBeInTheDocument();
    });

    it('keeps keyboard navigation working after toggling withWeekendDays at runtime', async () => {
      const { rerender } = render(<YearView {...defaultProps} />);
      rerender(<YearView {...defaultProps} withWeekendDays={false} />);

      // Nov 7 is Friday, the last visible column in a Monday-start week
      const friday = getVisibleDayButton('November 7, 2025');
      friday.focus();
      await userEvent.keyboard('{ArrowRight}');

      expect(getVisibleDayButton('November 10, 2025')).toHaveFocus();
    });

    it('keeps the first day of each month in tab order when weekend days are hidden', () => {
      // Nov 1 2025 is a Saturday, so the first focusable day is Nov 3 (Monday)
      render(<YearView {...defaultProps} withWeekendDays={false} />);

      expect(getVisibleDayButton('November 3, 2025')).toHaveAttribute('tabIndex', '0');
      expect(getVisibleDayButton('November 4, 2025')).toHaveAttribute('tabIndex', '-1');
    });
  });

  it('displays week numbers when withWeekNumbers is set', () => {
    const { container } = render(<YearView {...defaultProps} withWeekNumbers />);

    // With consistent weeks there are duplicates: the same week can be counted twice.
    // There are ~ 70 weeks with duplicates.
    expect(
      container.querySelectorAll('.mantine-YearView-yearViewWeekNumber').length
    ).toBeGreaterThan(52);
  });

  it('supports monthLabelFormat prop', () => {
    const { container } = render(<YearView {...defaultProps} monthLabelFormat="MMM YYYY" />);
    const januaryCaption = container.querySelector('.mantine-YearView-yearViewMonthCaption')!;
    expect(januaryCaption.textContent).toBe('Jan 2025');
  });

  it('supports changing weekdayFormat with dayjs format string', () => {
    const { container } = render(<YearView {...defaultProps} weekdayFormat="dd" />);
    const weekdays = container.querySelectorAll('.mantine-YearView-yearViewWeekday');
    expect(weekdays[0].textContent).toBe('Mo');
    expect(weekdays[6].textContent).toBe('Su');
  });

  it('supports changing weekdayFormat with function', () => {
    const { container } = render(
      <YearView
        {...defaultProps}
        weekdayFormat={(date) => dayjs(date).locale('ru').format('dd').slice(0, 1).toUpperCase()}
      />
    );
    const weekdays = container.querySelectorAll('.mantine-YearView-yearViewWeekday');
    expect(weekdays[0].textContent).toBe('П');
    expect(weekdays[6].textContent).toBe('В');
  });

  it('changes locale via prop', () => {
    const { container } = render(<YearView {...defaultProps} locale="ru" />);
    const januaryCaption = container.querySelector('.mantine-YearView-yearViewMonthCaption')!;
    expect(januaryCaption.textContent).toBe('январь');

    const weekdays = container.querySelectorAll('.mantine-YearView-yearViewWeekday');
    expect(weekdays[0].textContent).toBe('п');
    expect(weekdays[6].textContent).toBe('в');
  });

  it('changes locale via DatesProvider', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <YearView {...defaultProps} />
      </DatesProvider>
    );

    const januaryCaption = container.querySelector('.mantine-YearView-yearViewMonthCaption')!;
    expect(januaryCaption.textContent).toBe('январь');

    const weekdays = container.querySelectorAll('.mantine-YearView-yearViewWeekday');
    expect(weekdays[0].textContent).toBe('п');
    expect(weekdays[6].textContent).toBe('в');
  });

  it('supports hiding weekdays with withWeekDays={false}', () => {
    const { container } = render(<YearView {...defaultProps} withWeekDays={false} />);
    expect(container.querySelectorAll('.mantine-YearView-yearViewWeekday')).toHaveLength(0);
  });

  it('supports onDayClick prop', async () => {
    const spy = jest.fn();
    render(<YearView {...defaultProps} onDayClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'January 1, 2025' }));
    expect(spy).toHaveBeenCalledWith('2025-01-01', expect.any(Object));
  });

  it('supports onMonthClick prop', async () => {
    const spy = jest.fn();
    render(<YearView {...defaultProps} onMonthClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'January' }));
    expect(spy).toHaveBeenCalledWith('2025-01-01', expect.any(Object));
  });

  it('calls onViewChange and onDateChange when month is clicked with both handlers', async () => {
    const dateSpy = jest.fn();
    const viewSpy = jest.fn();
    render(
      <YearView
        {...defaultProps}
        onDateChange={dateSpy}
        onMonthClick={(date) => {
          dateSpy(date);
          viewSpy('month');
        }}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: 'March' }));
    expect(dateSpy).toHaveBeenCalledWith('2025-03-01');
    expect(viewSpy).toHaveBeenCalledWith('month');
  });

  it('supports onWeekNumberClick prop', async () => {
    const spy = jest.fn();
    render(<YearView {...defaultProps} withWeekNumbers onWeekNumberClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Week 3' }));
    expect(spy).toHaveBeenCalledWith('2025-01-13', expect.any(Object));
  });

  it('supports getDayProps prop', () => {
    render(
      <YearView
        {...defaultProps}
        getDayProps={(date) =>
          dayjs(date).date() === 1 ? { 'data-first-day-of-month': 'true' } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'January 1, 2025' })).toHaveAttribute(
      'data-first-day-of-month'
    );

    expect(screen.getByRole('button', { name: 'January 2, 2025' })).not.toHaveAttribute(
      'data-first-day-of-month'
    );
  });

  it('adds className and style props to days with getDayProps', () => {
    render(
      <YearView
        {...defaultProps}
        getDayProps={(date) =>
          dayjs(date).date() === 1 ? { className: 'test-class', style: { color: '#E00999' } } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'January 1, 2025' })).toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'January 1, 2025' })).toHaveStyle({
      color: '#E00999',
    });

    expect(screen.getByRole('button', { name: 'January 2, 2025' })).not.toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'January 2, 2025' })).not.toHaveStyle({
      color: '#E00999',
    });
  });

  it('supports getWeekNumberProps prop', () => {
    render(
      <YearView
        {...defaultProps}
        withWeekNumbers
        getWeekNumberProps={(date) =>
          getWeekNumber([dayjs(date).format('YYYY-MM-DD')]) === 3
            ? { 'data-first-week': 'true' }
            : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'Week 3' })).toHaveAttribute('data-first-week');
    expect(screen.getByRole('button', { name: 'Week 4' })).not.toHaveAttribute('data-first-week');
  });

  it('adds className and style props to week numbers with getWeekNumberProps', () => {
    render(
      <YearView
        {...defaultProps}
        withWeekNumbers
        getWeekNumberProps={(date) =>
          getWeekNumber([dayjs(date).format('YYYY-MM-DD')]) === 3
            ? { className: 'test-class', style: { color: '#E00999' } }
            : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'Week 3' })).toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'Week 3' })).toHaveStyle({ color: '#E00999' });

    expect(screen.getByRole('button', { name: 'Week 4' })).not.toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'Week 4' })).not.toHaveStyle({ color: '#E00999' });
  });

  it('sets data-today attribute on today date when highlightToday is true', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15'));
    const { container, rerender } = render(<YearView {...defaultProps} highlightToday />);
    const today = container.querySelector('.mantine-YearView-yearViewDay[data-today]')!;
    expect(today).toBeInTheDocument();
    expect(today.textContent).toStrictEqual('15');

    rerender(<YearView {...defaultProps} highlightToday={false} />);
    expect(
      container.querySelector('.mantine-YearView-yearViewDay[data-today]')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('renders header based on withHeader prop', () => {
    const { container, rerender } = render(<YearView {...defaultProps} withHeader={false} />);
    expect(container.querySelector('.mantine-YearView-header')).not.toBeInTheDocument();

    rerender(<YearView {...defaultProps} withHeader />);
    expect(container.querySelector('.mantine-YearView-header')).toBeInTheDocument();
  });

  it('supports todayControlProps, nextControlProps, previousControlProps and viewSelectProps props', () => {
    const { container } = render(
      <YearView
        {...defaultProps}
        todayControlProps={{ 'data-today-prop': 'test' }}
        nextControlProps={{ 'data-next-prop': 'test' }}
        previousControlProps={{ 'data-previous-prop': 'test' }}
        viewSelectProps={{ 'data-view-select-prop': 'test' }}
      />
    );

    expect(
      container.querySelector('button.mantine-YearView-headerControl[data-today-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-YearView-headerControl[data-next-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-YearView-headerControl[data-previous-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-YearView-viewSelect[data-view-select-prop]')
    ).toBeInTheDocument();
  });

  it('calls onDateChange when navigating with header controls', async () => {
    const spy = jest.fn();
    render(
      <YearView
        {...defaultProps}
        onDateChange={spy}
        monthYearSelectProps={{ popoverProps: { opened: true }, startYear: 2020, endYear: 2030 }}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2024-01-01')));

    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2026-01-01')));

    await userEvent.click(screen.getByRole('button', { name: 'Select year 2026' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2026-01-01')));
  }, 15000);

  it('calls onViewChange when view button is clicked', async () => {
    const spy = jest.fn();
    render(<YearView {...defaultProps} onViewChange={spy} />);
    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(spy).toHaveBeenCalledWith('day');
  });

  it('renders event indicators for events on specific days', () => {
    const events = [
      {
        id: '1',
        title: 'Event 1',
        start: '2025-11-05 10:00:00',
        end: '2025-11-05 11:00:00',
        color: 'red',
        payload: {},
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2025-11-05 14:00:00',
        end: '2025-11-05 15:00:00',
        color: 'blue',
        payload: {},
      },
      {
        id: '3',
        title: 'Event 3',
        start: '2025-11-10 09:00:00',
        end: '2025-11-10 10:00:00',
        color: 'green',
        payload: {},
      },
    ];
    const { container } = render(<YearView {...defaultProps} events={events} />);
    const indicators = container.querySelectorAll('.mantine-YearView-yearViewDayIndicator');
    expect(indicators.length).toBeGreaterThan(0);
  });

  it('renders indicator for each day a multiday event spans', () => {
    const events = [
      {
        id: '1',
        title: 'Conference',
        start: '2025-11-05',
        end: '2025-11-07',
        color: 'blue',
        payload: {},
      },
    ];
    render(<YearView {...defaultProps} events={events} />);
    // The event appears on 3 days (Nov 5, 6, 7), with 1 indicator per day in this case
    // But since each day button has its own indicators container, we need to count per day
    const nov5Button = screen.getAllByRole('button', { name: 'November 5, 2025' })[0];
    const nov5Indicators = nov5Button.querySelectorAll('.mantine-YearView-yearViewDayIndicator');
    expect(nov5Indicators).toHaveLength(1);

    const nov6Button = screen.getAllByRole('button', { name: 'November 6, 2025' })[0];
    const nov6Indicators = nov6Button.querySelectorAll('.mantine-YearView-yearViewDayIndicator');
    expect(nov6Indicators).toHaveLength(1);

    const nov7Button = screen.getAllByRole('button', { name: 'November 7, 2025' })[0];
    const nov7Indicators = nov7Button.querySelectorAll('.mantine-YearView-yearViewDayIndicator');
    expect(nov7Indicators).toHaveLength(1);
  });

  it('shows maximum 3 indicators per day when multiple events exist', () => {
    const events = [
      {
        id: '1',
        title: 'Event 1',
        start: '2025-11-05 08:00:00',
        end: '2025-11-05 09:00:00',
        color: 'red',
        payload: {},
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2025-11-05 10:00:00',
        end: '2025-11-05 11:00:00',
        color: 'blue',
        payload: {},
      },
      {
        id: '3',
        title: 'Event 3',
        start: '2025-11-05 12:00:00',
        end: '2025-11-05 13:00:00',
        color: 'green',
        payload: {},
      },
      {
        id: '4',
        title: 'Event 4',
        start: '2025-11-05 14:00:00',
        end: '2025-11-05 15:00:00',
        color: 'yellow',
        payload: {},
      },
      {
        id: '5',
        title: 'Event 5',
        start: '2025-11-05 16:00:00',
        end: '2025-11-05 17:00:00',
        color: 'pink',
        payload: {},
      },
    ];
    render(<YearView {...defaultProps} events={events} />);
    const nov5Buttons = screen.getAllByRole('button', { name: 'November 5, 2025' });
    const indicators = nov5Buttons[0].querySelectorAll('.mantine-YearView-yearViewDayIndicator');
    expect(indicators).toHaveLength(3);
  });

  describe('renderDay', () => {
    const nov5Events = Array.from({ length: 5 }, (_, index) => ({
      id: `${index + 1}`,
      title: `Event ${index + 1}`,
      start: `2025-11-05 0${index + 8}:00:00`,
      end: `2025-11-05 0${index + 8}:30:00`,
      color: 'blue',
      payload: {},
    }));

    const getVisibleDayButton = (name: string) => {
      const buttons = screen.getAllByRole('button', { name });
      return buttons.find((button) => !button.hasAttribute('data-outside')) || buttons[0];
    };

    it('replaces the entire day cell content', () => {
      render(<YearView {...defaultProps} renderDay={(date) => `[${dayjs(date).date()}]`} />);

      const nov5 = getVisibleDayButton('November 5, 2025');
      expect(nov5.textContent).toBe('[5]');
    });

    it('does not render default indicators when renderDay is set', () => {
      const { container } = render(
        <YearView {...defaultProps} events={nov5Events} renderDay={() => 'custom'} />
      );

      expect(container.querySelectorAll('.mantine-YearView-yearViewDayIndicator')).toHaveLength(0);
      expect(container.querySelectorAll('.mantine-YearView-yearViewDayIndicators')).toHaveLength(0);
    });

    it('receives the date as a YYYY-MM-DD string', () => {
      const spy = jest.fn((_date: DateStringValue, _events: ScheduleEventData[]) => null);
      render(<YearView {...defaultProps} renderDay={spy} />);

      expect(spy).toHaveBeenCalledWith('2025-11-05', expect.any(Array));
    });

    it('receives all events of the day, not capped at 3 like the default indicators', () => {
      const spy = jest.fn((_date: DateStringValue, _events: ScheduleEventData[]) => null);
      render(<YearView {...defaultProps} events={nov5Events} renderDay={spy} />);

      const nov5Call = spy.mock.calls.find((call) => call[0] === '2025-11-05')!;
      expect(nov5Call[1]).toHaveLength(5);

      const nov6Call = spy.mock.calls.find((call) => call[0] === '2025-11-06')!;
      expect(nov6Call[1]).toHaveLength(0);
    });

    it('is called for outside days but not for placeholders when withOutsideDays is false', () => {
      const withOutside = jest.fn((_date: DateStringValue, _events: ScheduleEventData[]) => null);
      const { unmount } = render(
        <YearView {...defaultProps} withOutsideDays renderDay={withOutside} />
      );
      // Dec 30 2024 is an outside day in the January 2025 grid
      expect(withOutside.mock.calls.some((call) => call[0] === '2024-12-30')).toBe(true);
      unmount();

      const withoutOutside = jest.fn(
        (_date: DateStringValue, _events: ScheduleEventData[]) => null
      );
      render(<YearView {...defaultProps} withOutsideDays={false} renderDay={withoutOutside} />);
      expect(withoutOutside.mock.calls.some((call) => call[0] === '2024-12-30')).toBe(false);
    });

    it('keeps day interactions and aria-label intact', async () => {
      const spy = jest.fn();
      render(<YearView {...defaultProps} onDayClick={spy} renderDay={() => 'custom'} />);

      const nov5 = getVisibleDayButton('November 5, 2025');
      await userEvent.click(nov5);
      expect(spy).toHaveBeenCalledWith('2025-11-05', expect.any(Object));
    });

    it('renders default content when renderDay is not set', () => {
      render(<YearView {...defaultProps} events={nov5Events} />);

      const nov5 = getVisibleDayButton('November 5, 2025');
      expect(nov5.textContent).toBe('5');
      expect(nov5.querySelectorAll('.mantine-YearView-yearViewDayIndicator')).toHaveLength(3);
    });
  });

  it('supports custom labels prop for header elements', () => {
    render(
      <YearView
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

  it('hides outside days when withOutsideDays is false', () => {
    const { container } = render(<YearView {...defaultProps} withOutsideDays={false} />);
    const january = container.querySelector('.mantine-YearView-yearViewMonth')!;
    const placeholders = january.querySelectorAll(
      '.mantine-YearView-yearViewDay[data-day-placeholder]'
    );

    expect(placeholders.length).toBeGreaterThan(0);
    expect(screen.queryByRole('button', { name: 'December 30, 2024' })).not.toBeInTheDocument();
  });

  describe('keyboard navigation', () => {
    const getInsideDayButton = (name: string) => {
      const buttons = screen.getAllByRole('button', { name });
      return buttons.find((btn) => !btn.hasAttribute('data-outside')) || buttons[0];
    };

    it('only first day of each month should be in tab order', async () => {
      render(<YearView {...defaultProps} />);

      const nov1 = getInsideDayButton('November 1, 2025');
      expect(nov1).toHaveAttribute('tabIndex', '0');

      const nov2 = getInsideDayButton('November 2, 2025');
      expect(nov2).toHaveAttribute('tabIndex', '-1');

      const dec1 = getInsideDayButton('December 1, 2025');
      expect(dec1).toHaveAttribute('tabIndex', '0');
    });

    it('outside days should not be in tab order', () => {
      render(<YearView {...defaultProps} />);

      const oct27Buttons = screen.getAllByRole('button', { name: 'October 27, 2025' });
      const outsideOct27 = oct27Buttons.find((btn) => btn.hasAttribute('data-outside'));
      expect(outsideOct27).toHaveAttribute('tabIndex', '-1');
    });

    it('supports ArrowRight key to move focus to next day', async () => {
      render(<YearView {...defaultProps} />);
      const nov1 = getInsideDayButton('November 1, 2025');

      nov1.focus();
      expect(document.activeElement).toBe(nov1);

      await userEvent.keyboard('{ArrowRight}');
      const nov2 = getInsideDayButton('November 2, 2025');
      expect(document.activeElement).toBe(nov2);
    });

    it('supports ArrowLeft key to move focus to previous day', async () => {
      render(<YearView {...defaultProps} />);
      const nov2 = getInsideDayButton('November 2, 2025');

      nov2.focus();
      expect(document.activeElement).toBe(nov2);

      await userEvent.keyboard('{ArrowLeft}');
      const nov1 = getInsideDayButton('November 1, 2025');
      expect(document.activeElement).toBe(nov1);
    });

    it('supports ArrowDown key to move focus to same day in next week', async () => {
      render(<YearView {...defaultProps} />);
      const nov3 = getInsideDayButton('November 3, 2025');

      nov3.focus();
      expect(document.activeElement).toBe(nov3);

      await userEvent.keyboard('{ArrowDown}');
      const nov10 = getInsideDayButton('November 10, 2025');
      expect(document.activeElement).toBe(nov10);
    });

    it('supports ArrowUp key to move focus to same day in previous week', async () => {
      render(<YearView {...defaultProps} />);
      const nov10 = getInsideDayButton('November 10, 2025');

      nov10.focus();
      expect(document.activeElement).toBe(nov10);

      await userEvent.keyboard('{ArrowUp}');
      const nov3 = getInsideDayButton('November 3, 2025');
      expect(document.activeElement).toBe(nov3);
    });

    it('ArrowRight at end of week moves to first day of next week', async () => {
      render(<YearView {...defaultProps} />);
      const nov9 = getInsideDayButton('November 9, 2025');

      nov9.focus();
      expect(document.activeElement).toBe(nov9);

      await userEvent.keyboard('{ArrowRight}');
      const nov10 = getInsideDayButton('November 10, 2025');
      expect(document.activeElement).toBe(nov10);
    });

    it('ArrowDown at last week of month moves to next month', async () => {
      render(<YearView {...defaultProps} />);
      const nov30 = getInsideDayButton('November 30, 2025');

      nov30.focus();
      expect(document.activeElement).toBe(nov30);

      await userEvent.keyboard('{ArrowDown}');
      const dec7 = getInsideDayButton('December 7, 2025');
      expect(document.activeElement).toBe(dec7);
    });

    it('skips outside days when navigating with ArrowUp', async () => {
      render(<YearView {...defaultProps} />);
      const nov3 = getInsideDayButton('November 3, 2025');

      nov3.focus();
      expect(document.activeElement).toBe(nov3);

      await userEvent.keyboard('{ArrowUp}');
      expect(document.activeElement?.getAttribute('data-outside')).toBeFalsy();
    });

    it('does not navigate with arrow keys in static mode', async () => {
      render(<YearView {...defaultProps} mode="static" />);
      const nov1 = getInsideDayButton('November 1, 2025');

      expect(nov1).toHaveAttribute('tabIndex', '-1');
    });

    it('skips disabled days when navigating', async () => {
      render(
        <YearView
          {...defaultProps}
          getDayProps={(date) =>
            dayjs(date).date() === 2 && dayjs(date).month() === 10 ? { disabled: true } : {}
          }
        />
      );
      const nov1 = getInsideDayButton('November 1, 2025');

      nov1.focus();
      expect(document.activeElement).toBe(nov1);

      await userEvent.keyboard('{ArrowRight}');
      const nov3 = getInsideDayButton('November 3, 2025');
      expect(document.activeElement).toBe(nov3);
    });

    it('navigates within the same month with keyboard', async () => {
      render(<YearView {...defaultProps} />);
      const nov15 = getInsideDayButton('November 15, 2025');

      nov15.focus();
      expect(document.activeElement).toBe(nov15);

      await userEvent.keyboard('{ArrowRight}');
      expect(getInsideDayButton('November 16, 2025')).toHaveFocus();

      await userEvent.keyboard('{ArrowLeft}');
      expect(getInsideDayButton('November 15, 2025')).toHaveFocus();

      await userEvent.keyboard('{ArrowDown}');
      expect(getInsideDayButton('November 22, 2025')).toHaveFocus();

      await userEvent.keyboard('{ArrowUp}');
      expect(getInsideDayButton('November 15, 2025')).toHaveFocus();
    });
  });
});
