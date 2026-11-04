/**
 * @jest-environment ./jest.timezone-environment.ts
 * @timezone Europe/Helsinki
 */
import { getSlotLabelDate } from './get-slot-label-date';

describe('@mantine/schedule/get-slot-label-date', () => {
  it('returns given time on given date', () => {
    expect(getSlotLabelDate('2026-01-15', '09:30:00').format('YYYY-MM-DD HH:mm:ss')).toBe(
      '2026-01-15 09:30:00'
    );
  });

  it('returns given time on a 25-hour day', () => {
    expect(getSlotLabelDate('2026-10-25', '03:00:00').format('HH:mm:ss')).toBe('03:00:00');
  });

  it('returns given time when it is skipped on a 23-hour day', () => {
    expect(getSlotLabelDate('2026-03-29', '03:00:00').format('HH:mm:ss')).toBe('03:00:00');
    expect(getSlotLabelDate('2026-03-29', '03:30:00').format('HH:mm:ss')).toBe('03:30:00');
    expect(getSlotLabelDate('2026-03-29', '04:00:00').format('YYYY-MM-DD HH:mm:ss')).toBe(
      '2026-03-29 04:00:00'
    );
  });
});
