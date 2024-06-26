import { render, tests } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { Month, MonthProps, MonthStylesNames } from './Month';

const defaultProps: MonthProps = {
  month: new Date(2022, 3, 2),
};

describe('@mantine/dates/Month', () => {
  tests.itSupportsSystemProps<MonthProps, MonthStylesNames>({
    component: Month,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLTableElement,
    displayName: '@mantine/dates/Month',
    stylesApiSelectors: ['month'],
  });

  datesTests.itSupportsOnDayClick({ component: Month, props: defaultProps });
  datesTests.itSupportsOnDayKeydown({ component: Month, props: defaultProps });
  datesTests.itSupportsGetDayRef({ component: Month, props: defaultProps });
  datesTests.itSupportsMonthProps({ component: Month, props: defaultProps });

  it('has correct default __staticSelector', () => {
    const { container } = render(<Month {...defaultProps} />);
    expect(container.querySelector('table')).toHaveClass('mantine-Month-month');
    expect(container.querySelector('thead tr')).toHaveClass('mantine-Month-weekdaysRow');
    expect(container.querySelector('tbody tr td button')).toHaveClass('mantine-Month-day');
  });

  it('supports __staticSelector', () => {
    const { container } = render(<Month {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('table')).toHaveClass('mantine-Calendar-month');
    expect(container.querySelector('thead tr')).toHaveClass('mantine-Calendar-weekdaysRow');
    expect(container.querySelector('tbody tr td button')).toHaveClass('mantine-Calendar-day');
  });

  it('supports static prop', () => {
    const { container, rerender } = render(<Month {...defaultProps} />);
    expect((container.querySelector('td')!.firstChild as HTMLElement).tagName).toBe('BUTTON');

    rerender(<Month {...defaultProps} static />);
    expect((container.querySelector('td')!.firstChild as HTMLElement).tagName).toBe('DIV');
  });
});
