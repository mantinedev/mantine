import { formatMonthLabel } from './format-month-label';
import 'dayjs/locale/ru';

describe('@mantine/dates/MonthsList/format-month-label', () => {
  it('formats label with given format and locale', () => {
    expect(
      formatMonthLabel({ month: new Date(2021, 11, 1), locale: 'en', format: 'MMMM YYYY' })
    ).toBe('December 2021');
    expect(
      formatMonthLabel({ month: new Date(2021, 11, 1), locale: 'en', format: 'MMM YYYY' })
    ).toBe('Dec 2021');
    expect(
      formatMonthLabel({ month: new Date(2021, 11, 1), locale: 'ru', format: 'MMMM YYYY' })
    ).toBe('Декабрь 2021');
    expect(
      formatMonthLabel({ month: new Date(2021, 11, 1), locale: 'ru', format: 'MMM YYYY' })
    ).toBe('Дек. 2021');
  });
});
