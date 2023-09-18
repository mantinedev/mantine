import React from 'react';
import { render, tests, screen } from '@mantine/tests';
import { datesTests } from '@mantine/dates-tests';
import { CalendarHeader, CalendarHeaderProps, CalendarHeaderStylesNames } from './CalendarHeader';

const defaultProps: CalendarHeaderProps = {
  nextLabel: 'next',
  previousLabel: 'prev',
  label: '',
};

describe('@mantine/dates/CalendarHeader', () => {
  tests.itSupportsSystemProps<CalendarHeaderProps, CalendarHeaderStylesNames>({
    component: CalendarHeader,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/CalendarHeader',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
    ],
  });

  datesTests.itSupportsHeaderProps({ component: CalendarHeader, props: defaultProps });
  datesTests.itSupportsWithNextPrevious({ component: CalendarHeader, props: defaultProps });

  it('renders given label', () => {
    render(<CalendarHeader {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('supports levelControlAriaLabel', () => {
    render(
      <CalendarHeader {...defaultProps} label="test-label" levelControlAriaLabel="Change month" />
    );

    expect(screen.getByText('test-label')).toHaveAttribute('aria-label', 'Change month');
  });

  it('has correct default __staticSelector', () => {
    render(<CalendarHeader {...defaultProps} />);
    expect(screen.getByLabelText('next')).toHaveClass(
      'mantine-CalendarHeader-calendarHeaderControl'
    );
  });

  it('supports custom __staticSelector', () => {
    render(<CalendarHeader {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByLabelText('next')).toHaveClass('mantine-Calendar-calendarHeaderControl');
  });
});
