import dayjs from 'dayjs';
import { toDateString } from './to-date-string';

describe('toDateString', () => {
  it('formats dates correctly', () => {
    expect(toDateString(new Date('2025-01-15 00:00:00'))).toBe('2025-01-15 00:00:00');
    expect(toDateString('2025-01-15')).toBe('2025-01-15 00:00:00');
    expect(toDateString(dayjs('2025-01-15'))).toBe('2025-01-15 00:00:00');
  });
});
