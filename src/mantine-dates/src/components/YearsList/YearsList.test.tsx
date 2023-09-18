import React from 'react';
import { render, tests, screen } from '@mantine/tests';
import { datesTests } from '@mantine/dates-tests';
import { YearsList, YearsListProps, YearsListStylesNames } from './YearsList';

const defaultProps: YearsListProps = {
  decade: new Date(2022, 3, 11),
};

describe('@mantine/dates/YearsList', () => {
  tests.itSupportsSystemProps<YearsListProps, YearsListStylesNames>({
    component: YearsList,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLTableElement,
    displayName: '@mantine/dates/YearsList',
    stylesApiSelectors: ['yearsList', 'yearsListCell', 'yearsListControl', 'yearsListRow'],
  });

  datesTests.itSupportsGetControlRef({
    component: YearsList,
    props: defaultProps,
    numberOfControls: 10,
  });
  datesTests.itSupportsYearsListProps({ component: YearsList, props: defaultProps });
  datesTests.itSupportsOnControlKeydown({ component: YearsList, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: YearsList, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: YearsList, props: defaultProps });

  it('has correct default __staticSelector', () => {
    render(<YearsList {...defaultProps} />);
    expect(screen.getByRole('table')).toHaveClass('mantine-YearsList-yearsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('mantine-YearsList-yearsListControl');
  });

  it('supports custom __staticSelector', () => {
    render(<YearsList {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByRole('table')).toHaveClass('mantine-Calendar-yearsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('mantine-Calendar-yearsListControl');
  });
});
