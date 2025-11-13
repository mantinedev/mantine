import 'dayjs/locale/ru';

import { DatesProvider } from '@mantine/dates-utils';
import { render, tests } from '@mantine-tests/core';
import { MonthView, MonthViewProps, MonthViewStylesNames } from './MonthView';

const defaultProps: MonthViewProps = {
  month: '2025-11-05',
};

describe('@mantine/core/MonthView', () => {
  tests.itSupportsSystemProps<MonthViewProps, MonthViewStylesNames>({
    component: MonthView,
    props: { ...defaultProps, withWeekNumbers: true },
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/MonthView',
    stylesApiSelectors: ['monthView', 'week', 'day', 'weekNumber'],
  });

  it('renders days of the month (date string)', () => {
    const { container } = render(<MonthView {...defaultProps} />);
    const days = container.querySelectorAll('.mantine-MonthView-day');
    expect(days.length).toStrictEqual(35);
    expect(days[0].textContent).toStrictEqual('27'); // Oct 27
    expect(days[days.length - 1].textContent).toStrictEqual('30'); // Nov 30
  });

  it('renders days of the month (Date object)', () => {
    const { container } = render(<MonthView month={new Date(2025, 10, 5)} />);
    const days = container.querySelectorAll('.mantine-MonthView-day');
    expect(days.length).toStrictEqual(35);
    expect(days[0].textContent).toStrictEqual('27'); // Oct 27
    expect(days[days.length - 1].textContent).toStrictEqual('30'); // Nov 30
  });

  it('renders week numbers when withWeekNumbers is true', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekNumbers />);
    const weekNumbers = container.querySelectorAll('.mantine-MonthView-weekNumber');
    expect(weekNumbers.length).toStrictEqual(5);
    expect(weekNumbers[0].textContent).toStrictEqual('44');
    expect(weekNumbers[weekNumbers.length - 1].textContent).toStrictEqual('48');
  });

  it('renders weekdays names when withWeekDays is true', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-weekday');
    expect(weekdays.length).toStrictEqual(7);
    expect(weekdays[0].textContent).toStrictEqual('Mon');
    expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sun');
  });

  it('supports custom firstDayOfWeek (prop)', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays firstDayOfWeek={0} />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-weekday');
    expect(weekdays.length).toStrictEqual(7);
    expect(weekdays[0].textContent).toStrictEqual('Sun');
    expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sat');

    const firstWeekDays = container
      .querySelectorAll('.mantine-MonthView-week')[0]
      .querySelectorAll('.mantine-MonthView-day');
    expect(firstWeekDays[0].textContent).toStrictEqual('26'); // Oct 26
    expect(firstWeekDays[firstWeekDays.length - 1].textContent).toStrictEqual('1'); // Nov 1
  });

  it('supports custom firstDayOfWeek (DatesProvider)', () => {
    const { container } = render(
      <DatesProvider settings={{ firstDayOfWeek: 0 }}>
        <MonthView {...defaultProps} withWeekDays />
      </DatesProvider>
    );
    const weekdays = container.querySelectorAll('.mantine-MonthView-weekday');
    expect(weekdays.length).toStrictEqual(7);
    expect(weekdays[0].textContent).toStrictEqual('Sun');
    expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sat');
  });

  it('supports locale (prop)', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays locale="ru" />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-weekday');
    expect(weekdays[0].textContent).toStrictEqual('пнд');
  });

  it('supports locale (DatesProvider)', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <MonthView {...defaultProps} withWeekDays />
      </DatesProvider>
    );
    const weekdays = container.querySelectorAll('.mantine-MonthView-weekday');
    expect(weekdays[0].textContent).toStrictEqual('пнд');
  });

  it('does not render weekdays names when withWeekDays is false', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays={false} />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-weekday');
    expect(weekdays.length).toStrictEqual(0);
    expect(container.querySelector('.mantine-MonthView-weekdays')).not.toBeInTheDocument();
  });

  it('allows changing weekdayFormat', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays weekdayFormat="dddd" />);
    const weekdays = container.querySelectorAll('.mantine-MonthView-weekday');
    expect(weekdays[0].textContent).toStrictEqual('Monday');
    expect(weekdays[weekdays.length - 1].textContent).toStrictEqual('Sunday');
  });

  it('supports weekendDays prop', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays weekendDays={[1, 2]} />);
    const days = container.querySelectorAll('.mantine-MonthView-day');
    expect(days[0]).toHaveAttribute('data-weekend'); // Oct 27, Monday
    expect(days[1]).toHaveAttribute('data-weekend'); // Oct 28, Tuesday
    expect(days[2]).not.toHaveAttribute('data-weekend'); // Oct 29, Wednesday
    expect(days[days.length - 1]).not.toHaveAttribute('data-weekend'); // Nov 30, Sunday
  });

  it('allows setting empty array to weekendDays prop', () => {
    const { container } = render(<MonthView {...defaultProps} withWeekDays weekendDays={[]} />);
    const days = container.querySelectorAll('.mantine-MonthView-day');
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
});
