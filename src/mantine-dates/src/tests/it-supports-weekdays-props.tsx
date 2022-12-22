import 'dayjs/locale/ru';
import React from 'react';
import { screen, render } from '@testing-library/react';
import { DatesProvider } from '../components/DatesProvider';

export function expectWeekdaysNames(names: string[]) {
  expect(screen.getAllByRole('columnheader').map((th) => th.textContent)).toStrictEqual(names);
}

export interface WeekdaysTestProps {
  locale?: string;
  weekdayFormat?: string;
  firstDayOfWeek?: number;
}

export function itSupportsWeekdaysProps(
  Component: React.FC<WeekdaysTestProps>,
  requiredProps?: Record<string, any>
) {
  it('renders weekdays names with en locale by default', () => {
    render(<Component {...requiredProps} />);
    expectWeekdaysNames(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']);
  });

  it('supports weekdays names localization with locale prop', () => {
    render(<Component {...requiredProps} locale="ru" />);
    expectWeekdaysNames(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
  });

  it('supports weekdays names localization with DatesProvider', () => {
    render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <Component {...requiredProps} />
      </DatesProvider>
    );

    expectWeekdaysNames(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
  });

  it('supports changing weekday format', () => {
    render(<Component {...requiredProps} weekdayFormat="dddd" />);
    expectWeekdaysNames([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]);
  });

  it('changes weekdays order based on firstDayOfWeek prop', () => {
    const { rerender } = render(<Component {...requiredProps} firstDayOfWeek={0} />);
    expectWeekdaysNames(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);

    rerender(<Component {...requiredProps} firstDayOfWeek={6} />);
    expectWeekdaysNames(['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr']);
  });

  it('changes weekdays order based on firstDayOfWeek defined on DatesProvider', () => {
    render(
      <DatesProvider settings={{ firstDayOfWeek: 4 }}>
        <Component {...requiredProps} />
      </DatesProvider>
    );

    expectWeekdaysNames(['Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We']);
  });
}
