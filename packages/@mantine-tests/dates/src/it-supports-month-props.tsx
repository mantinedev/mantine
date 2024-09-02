import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatesProvider } from '@mantine/dates';
import { render } from '@mantine-tests/core';
import { itSupportsWeekdaysProps } from './it-supports-weekdays-props';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

function getDays(container: HTMLElement) {
  return container.querySelectorAll('table button');
}

export function itSupportsMonthProps(options: Options, name = 'supports month props') {
  describe(name, () => {
    itSupportsWeekdaysProps(options);

    it('renders correct days', () => {
      const { container } = render(<options.component {...options.props} />);

      const days = getDays(container);
      expect(days).toHaveLength(35);

      // First week of April 2022 (with outside dates)
      expect(days[0].textContent).toBe('28');
      expect(days[1].textContent).toBe('29');
      expect(days[2].textContent).toBe('30');
      expect(days[3].textContent).toBe('31');
      expect(days[4].textContent).toBe('1');
      expect(days[5].textContent).toBe('2');
      expect(days[6].textContent).toBe('3');

      // Last days of April 2022 (with outside dates)
      expect(days[33].textContent).toBe('30');
      expect(days[34].textContent).toBe('1');
    });

    it('renders correct days when firstDayOfWeek is set', () => {
      const { container } = render(<options.component {...options.props} firstDayOfWeek={6} />);

      const days = getDays(container);
      expect(days).toHaveLength(42);

      expect(days[0].textContent).toBe('26');
      expect(days[1].textContent).toBe('27');
      expect(days[2].textContent).toBe('28');
      expect(days[3].textContent).toBe('29');
      expect(days[4].textContent).toBe('30');
      expect(days[5].textContent).toBe('31');
      expect(days[6].textContent).toBe('1');

      expect(days[40].textContent).toBe('5');
      expect(days[41].textContent).toBe('6');
    });

    it('renders correct days when firstDayOfWeek is set on DatesProvider', () => {
      const { container } = render(
        <DatesProvider settings={{ firstDayOfWeek: 6 }}>
          <options.component {...options.props} />
        </DatesProvider>
      );

      const days = getDays(container);
      expect(days).toHaveLength(42);

      expect(days[0].textContent).toBe('26');
      expect(days[1].textContent).toBe('27');
      expect(days[2].textContent).toBe('28');
      expect(days[3].textContent).toBe('29');
      expect(days[4].textContent).toBe('30');
      expect(days[5].textContent).toBe('31');
      expect(days[6].textContent).toBe('1');

      expect(days[40].textContent).toBe('5');
      expect(days[41].textContent).toBe('6');
    });

    it('detects outside days correctly', () => {
      const { container } = render(<options.component {...options.props} />);
      const days = getDays(container);

      // First week of April 2022 (with outside dates)
      expect(days[0]).toHaveAttribute('data-outside');
      expect(days[1]).toHaveAttribute('data-outside');
      expect(days[2]).toHaveAttribute('data-outside');
      expect(days[3]).toHaveAttribute('data-outside');
      expect(days[4]).not.toHaveAttribute('data-outside');
      expect(days[5]).not.toHaveAttribute('data-outside');
      expect(days[6]).not.toHaveAttribute('data-outside');

      // Last days of April 2022 (with outside dates)
      expect(days[33]).not.toHaveAttribute('data-outside');
      expect(days[34]).toHaveAttribute('data-outside');
    });

    it('detects weekends correctly with default weekendDays value', () => {
      const { container } = render(<options.component {...options.props} />);
      const days = getDays(container);

      expect(days[0]).not.toHaveAttribute('data-weekend');
      expect(days[4]).not.toHaveAttribute('data-weekend');
      expect(days[5]).toHaveAttribute('data-weekend');
      expect(days[6]).toHaveAttribute('data-weekend');
      expect(days[33]).toHaveAttribute('data-weekend');
      expect(days[34]).not.toHaveAttribute('data-weekend');
    });

    it('detects weekends correctly with custom weekendDays value', () => {
      const { container } = render(<options.component {...options.props} weekendDays={[3, 4]} />);
      const days = getDays(container);

      expect(days[7]).not.toHaveAttribute('data-weekend');
      expect(days[8]).not.toHaveAttribute('data-weekend');
      expect(days[9]).toHaveAttribute('data-weekend');
      expect(days[10]).toHaveAttribute('data-weekend');
    });

    it('detects weekends correctly with custom weekendDays value on DatesProvider', () => {
      const { container } = render(
        <DatesProvider settings={{ weekendDays: [3, 4] }}>
          <options.component {...options.props} />
        </DatesProvider>
      );
      const days = getDays(container);

      expect(days[7]).not.toHaveAttribute('data-weekend');
      expect(days[8]).not.toHaveAttribute('data-weekend');
      expect(days[9]).toHaveAttribute('data-weekend');
      expect(days[10]).toHaveAttribute('data-weekend');
    });

    it('supports getDayProps', async () => {
      const spy = jest.fn();
      const { container } = render(
        <options.component
          {...options.props}
          getDayProps={(date: Date) => ({
            selected: dayjs(date).isSame(new Date(2022, 3, 15)),
            onClick: spy,
          })}
        />
      );

      const days = getDays(container);

      expect(days[18]).toHaveAttribute('data-selected');
      expect(days[0]).not.toHaveAttribute('data-selected');
      expect(days[1]).not.toHaveAttribute('data-selected');

      await userEvent.click(days[0]);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('adds disabled prop to Day components based on excludeDate callback', () => {
      const { container } = render(
        <options.component {...options.props} excludeDate={(date: Date) => date.getDay() === 0} />
      );
      const days = getDays(container);

      expect(days[5]).not.toHaveAttribute('data-disabled');
      expect(days[6]).toHaveAttribute('data-disabled');
      expect(days[13]).toHaveAttribute('data-disabled');
    });

    it('supports minDate', () => {
      const { container } = render(
        <options.component {...options.props} minDate={new Date(2022, 3, 10)} />
      );
      const days = getDays(container);

      expect(days[0]).toHaveAttribute('data-disabled');
      expect(days[1]).toHaveAttribute('data-disabled');
      expect(days[12]).toHaveAttribute('data-disabled');
      expect(days[13]).not.toHaveAttribute('data-disabled');
      expect(days[14]).not.toHaveAttribute('data-disabled');
      expect(days[34]).not.toHaveAttribute('data-disabled');
    });

    it('supports maxDate', () => {
      const { container } = render(
        <options.component {...options.props} maxDate={new Date(2022, 3, 22)} />
      );
      const days = getDays(container);

      expect(days[34]).toHaveAttribute('data-disabled');
      expect(days[33]).toHaveAttribute('data-disabled');
      expect(days[32]).toHaveAttribute('data-disabled');
      expect(days[26]).toHaveAttribute('data-disabled');
      expect(days[25]).not.toHaveAttribute('data-disabled');
      expect(days[24]).not.toHaveAttribute('data-disabled');
      expect(days[23]).not.toHaveAttribute('data-disabled');
    });

    it('supports renderDay', () => {
      const { container } = render(
        <options.component {...options.props} renderDay={(date: Date) => date.getFullYear()} />
      );
      const days = getDays(container);

      days.forEach((day) => {
        expect(day.textContent).toBe('2022');
      });
    });

    it('supports hideOutsideDates', () => {
      const { container } = render(<options.component {...options.props} hideOutsideDates />);
      const days = getDays(container);

      expect(days).toHaveLength(35);
      expect(days[0]).toHaveAttribute('data-hidden');
      expect(days[6]).not.toHaveAttribute('data-hidden');
      expect(days[33]).not.toHaveAttribute('data-hidden');
      expect(days[34]).toHaveAttribute('data-hidden');
    });

    it('supports hideWeekdays', () => {
      render(<options.component {...options.props} hideWeekdays />);
      expect(screen.queryAllByRole('columnheader')).toHaveLength(0);
    });

    it('sets correct default aria-label on days without getDayAriaLabel', () => {
      const { container } = render(<options.component {...options.props} />);
      const days = getDays(container);
      expect(days[0]).toHaveAttribute('aria-label', '28 March 2022');
      expect(days[4]).toHaveAttribute('aria-label', '1 April 2022');
    });

    it('supports default days aria-label localization with locale prop', () => {
      const { container } = render(<options.component {...options.props} locale="ru" />);
      const days = getDays(container);
      expect(days[0]).toHaveAttribute('aria-label', '28 марта 2022');
      expect(days[4]).toHaveAttribute('aria-label', '1 апреля 2022');
    });

    it('allows changing days aria-label with getDayAriaLabel prop', () => {
      const { container } = render(
        <options.component
          {...options.props}
          getDayAriaLabel={(date: Date) => dayjs(date).format('DD/MM/YYYY')}
        />
      );

      const days = getDays(container);
      expect(days[0]).toHaveAttribute('aria-label', '28/03/2022');
      expect(days[4]).toHaveAttribute('aria-label', '01/04/2022');
    });

    it('supports default days aria-label localization with DatesProvider', () => {
      const { container } = render(
        <DatesProvider settings={{ locale: 'ru' }}>
          <options.component {...options.props} />
        </DatesProvider>
      );
      const days = getDays(container);
      expect(days[0]).toHaveAttribute('aria-label', '28 марта 2022');
      expect(days[4]).toHaveAttribute('aria-label', '1 апреля 2022');
    });
  });
}
