import { render, screen, tests } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { MonthsList, MonthsListProps, MonthsListStylesNames } from './MonthsList';

const defaultProps: MonthsListProps = {
  year: new Date(2022, 3, 11),
};

describe('@mantine/dates/MonthsList', () => {
  tests.itSupportsSystemProps<MonthsListProps, MonthsListStylesNames>({
    component: MonthsList,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLTableElement,
    displayName: '@mantine/dates/MonthsList',
    stylesApiSelectors: ['monthsList', 'monthsListCell', 'monthsListControl', 'monthsListRow'],
  });

  datesTests.itSupportsGetControlRef({
    component: MonthsList,
    props: defaultProps,
    numberOfControls: 12,
  });
  datesTests.itSupportsMonthsListProps({ component: MonthsList, props: defaultProps });
  datesTests.itSupportsOnControlKeydown({ component: MonthsList, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: MonthsList, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: MonthsList, props: defaultProps });

  it('has correct default __staticSelector', () => {
    render(<MonthsList {...defaultProps} />);
    expect(screen.getByRole('table')).toHaveClass('mantine-MonthsList-monthsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('mantine-MonthsList-monthsListControl');
  });

  it('supports custom __staticSelector', () => {
    render(<MonthsList {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByRole('table')).toHaveClass('mantine-Calendar-monthsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('mantine-Calendar-monthsListControl');
  });
});
