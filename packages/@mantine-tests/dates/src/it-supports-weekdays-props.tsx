import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { screen } from '@testing-library/react';
import { DatesProvider } from '@mantine/dates';
import { render } from '@mantine-tests/core';

export function expectWeekdaysNames(names: string[]) {
  expect(screen.getAllByRole('columnheader').map((th) => th.textContent)).toStrictEqual(names);
}

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsWeekdaysProps(options: Options, name = 'supports weekdays props') {
  describe(name, () => {
    it('renders weekdays names with en locale by default', () => {
      render(<options.component {...options.props} />);
      expectWeekdaysNames(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']);
    });

    it('supports weekdays names localization with locale prop', () => {
      render(<options.component {...options.props} locale="ru" />);
      expectWeekdaysNames(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
    });

    it('supports weekdays names localization with DatesProvider', () => {
      render(
        <DatesProvider settings={{ locale: 'ru' }}>
          <options.component {...options.props} />
        </DatesProvider>
      );

      expectWeekdaysNames(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
    });

    it('supports changing weekday format', () => {
      render(<options.component {...options.props} weekdayFormat="dddd" />);
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

    it('supports changing weekday format function', () => {
      render(
        <options.component
          {...options.props}
          weekdayFormat={(date: Date) => dayjs(date).format('dd')[0]}
        />
      );
      expectWeekdaysNames(['M', 'T', 'W', 'T', 'F', 'S', 'S']);
    });

    it('changes weekdays order based on firstDayOfWeek prop', () => {
      const { rerender } = render(<options.component {...options.props} firstDayOfWeek={0} />);
      expectWeekdaysNames(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);

      rerender(<options.component {...options.props} firstDayOfWeek={6} />);
      expectWeekdaysNames(['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr']);
    });

    it('changes weekdays order based on firstDayOfWeek defined on DatesProvider', () => {
      render(
        <DatesProvider settings={{ firstDayOfWeek: 4 }}>
          <options.component {...options.props} />
        </DatesProvider>
      );

      expectWeekdaysNames(['Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We']);
    });
  });
}
