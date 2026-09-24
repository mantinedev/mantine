import 'dayjs/locale/ru';
import { formatDecadeLabel, formatLabel } from './format-label';

describe('@mantine/dates/format-label', () => {
  it('formats date with dayjs format string and locale', () => {
    expect(formatLabel('MMMM YYYY', '2022-04-11', 'en')).toBe('April 2022');
    expect(formatLabel('MMMM YYYY', '2022-04-11', 'ru')).toBe('апрель 2022');
  });

  it('calls function format with the date', () => {
    const format = jest.fn(() => 'custom');
    expect(formatLabel(format, '2022-04-11', 'en')).toBe('custom');
    expect(format).toHaveBeenCalledWith('2022-04-11');
  });

  it('formats decade label with en dash separator', () => {
    expect(formatDecadeLabel('YYYY', '2020-01-01', '2029-01-01', 'en')).toBe('2020 – 2029');
  });

  it('calls decade function format with start and end', () => {
    const format = jest.fn(() => 'decade');
    expect(formatDecadeLabel(format, '2020-01-01', '2029-01-01', 'en')).toBe('decade');
    expect(format).toHaveBeenCalledWith('2020-01-01', '2029-01-01');
  });
});
