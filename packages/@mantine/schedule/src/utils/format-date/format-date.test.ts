import 'dayjs/locale/ru';

import { formatDate } from './format-date';

describe('@mantine/schedule/format-date', () => {
  it('formats date with string format', () => {
    const result = formatDate({
      locale: 'en',
      date: '2025-01-15',
      format: 'YYYY-MM-DD',
    });
    expect(result).toBe('2025-01-15');
  });

  it('formats date with function format', () => {
    const result = formatDate({
      locale: 'en',
      date: '2025-01-15',
      format: (date) => `Formatted: ${date}`,
    });
    expect(result).toBe('Formatted: 2025-01-15 00:00:00');
  });

  it('respects locale when formatting', () => {
    const result = formatDate({ locale: 'ru', date: '2025-01-15', format: 'MMMM' });
    expect(result).toBe('январь');
  });
});
