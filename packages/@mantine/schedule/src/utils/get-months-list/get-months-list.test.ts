import 'dayjs/locale/ru';

import { getMonthsList } from './get-months-list';

describe('@mantine/schedule/get-months-list', () => {
  it('supports custom format', () => {
    expect(getMonthsList({ locale: 'en', format: 'MM' })).toStrictEqual([
      { month: 1, name: '01' },
      { month: 2, name: '02' },
      { month: 3, name: '03' },
      { month: 4, name: '04' },
      { month: 5, name: '05' },
      { month: 6, name: '06' },
      { month: 7, name: '07' },
      { month: 8, name: '08' },
      { month: 9, name: '09' },
      { month: 10, name: '10' },
      { month: 11, name: '11' },
      { month: 12, name: '12' },
    ]);
  });

  it('returns month names in specified format', () => {
    const months = getMonthsList({ locale: 'en', format: 'MMMM' });
    expect(months).toHaveLength(12);
    expect(months[0].name).toBe('January');
    expect(months[11].name).toBe('December');
  });

  it('supports localization', () => {
    expect(getMonthsList({ locale: 'ru', format: 'MMMM' })[0].name).toBe('январь');
  });
});
