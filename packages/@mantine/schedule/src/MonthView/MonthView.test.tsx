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

  it('renders days of the month', () => {
    const { container } = render(<MonthView {...defaultProps} />);
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
});
