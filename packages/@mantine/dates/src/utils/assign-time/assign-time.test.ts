import { assignTime } from './assign-time';

describe('@mantine/dates/assign-time', () => {
  it('should assign time from originalDate to resultDate', () => {
    const originalDate = '2025-01-28 14:30:45';
    const resultDate = '2025-01-29';
    const result = assignTime(originalDate, resultDate);

    expect(result).toBe('2025-01-29 14:30:45');
  });

  it('should return resultDate if originalDate is empty', () => {
    const originalDate = null;
    const resultDate = '2025-01-29';
    const result = assignTime(originalDate, resultDate);

    expect(result).toBe(null);
  });

  it('should return originalDate if resultDate is empty', () => {
    const originalDate = '2025-01-28 14:30:45';
    const resultDate = null;
    const result = assignTime(originalDate, resultDate);

    expect(result).toBe(originalDate);
  });

  it('should format result in YYYY-MM-DD HH:mm:ss', () => {
    const originalDate = '2025-01-28 08:15:20';
    const resultDate = '2025-01-30';
    const result = assignTime(originalDate, resultDate);

    expect(result).toBe('2025-01-30 08:15:20');
  });
});
