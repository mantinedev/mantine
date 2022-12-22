import dayjs from 'dayjs';
import React from 'react';
import { render } from '@testing-library/react';
import { DatesProvider } from '../components/DatesProvider';

export interface MonthsListProps {
  locale?: string;
  monthsListFormat?: string;
  year?: Date;
  minDate?: Date;
  maxDate?: Date;
  getMonthControlProps?(date: Date): Record<string, any>;
}

const defaultMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const ruMonthsNames = [
  'янв.',
  'февр.',
  'март',
  'апр.',
  'май',
  'июнь',
  'июль',
  'авг.',
  'сент.',
  'окт.',
  'нояб.',
  'дек.',
];

const customFormatMonthsNames = [
  'Jan 22',
  'Feb 22',
  'Mar 22',
  'Apr 22',
  'May 22',
  'Jun 22',
  'Jul 22',
  'Aug 22',
  'Sep 22',
  'Oct 22',
  'Nov 22',
  'Dec 22',
];

function expectMonthNames(container: HTMLElement, monthNames: string[]) {
  expect(
    Array.from(container.querySelectorAll('table button')).map((node) => node.textContent)
  ).toStrictEqual(monthNames);
}

export function itSupportsMonthsListProps(
  Component: React.FC<MonthsListProps>,
  requiredProps?: Record<string, any>
) {
  it('renders correct months list', () => {
    const { container } = render(<Component {...requiredProps} />);
    expectMonthNames(container, defaultMonthNames);
  });

  it('supports months list localization', () => {
    const { container } = render(<Component {...requiredProps} locale="ru" />);
    expectMonthNames(container, ruMonthsNames);
  });

  it('supports months list localization with DatesProvider', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <Component {...requiredProps} />
      </DatesProvider>
    );
    expectMonthNames(container, ruMonthsNames);
  });

  it('supports custom monthsListFormat format', () => {
    const { container } = render(<Component {...requiredProps} monthsListFormat="MMM YY" />);
    expectMonthNames(container, customFormatMonthsNames);
  });

  it('disables months if they are before minDate', () => {
    const { container } = render(
      <Component {...requiredProps} year={new Date(2022, 3, 11)} minDate={new Date(2022, 4, 11)} />
    );
    const months = container.querySelectorAll('table button');
    expect(months[0]).toBeDisabled();
    expect(months[1]).toBeDisabled();
    expect(months[3]).toBeDisabled();
    expect(months[4]).not.toBeDisabled();
    expect(months[11]).not.toBeDisabled();
  });

  it('disables months if they are after minDate', () => {
    const { container } = render(
      <Component {...requiredProps} year={new Date(2022, 3, 11)} maxDate={new Date(2022, 4, 11)} />
    );
    const months = container.querySelectorAll('table button');
    expect(months[0]).not.toBeDisabled();
    expect(months[4]).not.toBeDisabled();
    expect(months[5]).toBeDisabled();
    expect(months[11]).toBeDisabled();
  });

  it('supports getMonthControlProps', () => {
    const { container } = render(
      <Component
        {...requiredProps}
        getMonthControlProps={(date) => ({
          selected: dayjs(date).isSame(new Date(2022, 3, 11), 'month'),
        })}
      />
    );

    const months = container.querySelectorAll('table button');
    expect(months[2]).not.toHaveAttribute('data-selected');
    expect(months[3]).toHaveAttribute('data-selected');
    expect(months[4]).not.toHaveAttribute('data-selected');
  });
}
