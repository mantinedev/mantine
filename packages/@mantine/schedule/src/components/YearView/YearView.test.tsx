import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { DatesProvider } from '@mantine/dates';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
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
      'yearViewQuarter',
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
  });

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
