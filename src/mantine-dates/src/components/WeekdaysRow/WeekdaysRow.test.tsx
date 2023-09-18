import React from 'react';
import { render, tests, patchConsoleError, screen } from '@mantine/tests';
import { datesTests } from '@mantine/dates-tests';
import { WeekdaysRow, WeekdaysRowProps, WeekdaysRowStylesNames } from './WeekdaysRow';

const defaultProps: WeekdaysRowProps = {};

function Wrapper(props: Partial<WeekdaysRowProps>) {
  return (
    <table>
      <thead>
        <WeekdaysRow {...defaultProps} {...props} />
      </thead>
    </table>
  );
}

describe('@mantine/dates/WeekdaysRow', () => {
  beforeAll(patchConsoleError);
  afterAll(patchConsoleError.release);

  tests.itSupportsSystemProps<WeekdaysRowProps, WeekdaysRowStylesNames>({
    component: WeekdaysRow,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLTableRowElement,
    displayName: '@mantine/dates/WeekdaysRow',
    stylesApiSelectors: ['weekdaysRow', 'weekday'],
  });

  datesTests.itSupportsWeekdaysProps({ component: WeekdaysRow, props: defaultProps });

  it('supports changing cell component', () => {
    render(<Wrapper cellComponent="td" />);
    expect(screen.queryAllByRole('cell')).toHaveLength(7);
    expect(screen.queryAllByRole('columnheader')).toHaveLength(0);
  });

  it('has correct default __staticSelector', () => {
    render(<Wrapper />);
    expect(screen.getByRole('row')).toHaveClass('mantine-WeekdaysRow-weekdaysRow ');
  });

  it('supports __staticSelector', () => {
    render(<Wrapper __staticSelector="Month" />);
    expect(screen.getByRole('row')).toHaveClass('mantine-Month-weekdaysRow ');
  });
});
