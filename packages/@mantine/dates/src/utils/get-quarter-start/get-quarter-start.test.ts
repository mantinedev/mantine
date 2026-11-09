import dayjs from 'dayjs';
import { getQuarterStart } from './get-quarter-start';

describe('@mantine/dates/get-quarter-start', () => {
  it('returns first day of the quarter for string input', () => {
    expect(getQuarterStart('2026-01-01')).toBe('2026-01-01');
    expect(getQuarterStart('2026-02-14')).toBe('2026-01-01');
    expect(getQuarterStart('2026-03-31')).toBe('2026-01-01');
    expect(getQuarterStart('2026-04-01')).toBe('2026-04-01');
    expect(getQuarterStart('2026-05-15')).toBe('2026-04-01');
    expect(getQuarterStart('2026-08-20')).toBe('2026-07-01');
    expect(getQuarterStart('2026-12-31')).toBe('2026-10-01');
  });

  it('returns first day of the quarter for Date input', () => {
    expect(getQuarterStart(new Date(2026, 10, 5))).toBe('2026-10-01');
  });

  it('registers quarterOfYear and advancedFormat plugins (startOf quarter and Q token)', () => {
    expect(dayjs('2026-08-20').format('[Q]Q YYYY')).toBe('Q3 2026');
  });
});
