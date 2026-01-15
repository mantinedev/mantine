import { testUtils } from '../../../test-utils';
import { getEventEndDate } from './get-event-end-date';

describe('@mantine/schedule/get-event-end-date', () => {
  it('returns end date without modification for non-midnight times', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-17 16:00:00',
    });

    const result = getEventEndDate(event);

    expect(result.format('YYYY-MM-DD')).toBe('2025-01-17');
  });

  it('subtracts one day when end time is midnight', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-17 00:00:00',
    });

    const result = getEventEndDate(event);

    expect(result.format('YYYY-MM-DD')).toBe('2025-01-16');
  });

  it('handles single-day events ending at midnight', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 00:00:00',
      end: '2025-01-16 00:00:00',
    });

    const result = getEventEndDate(event);

    expect(result.format('YYYY-MM-DD')).toBe('2025-01-15');
  });

  it('handles events with same start and end date but non-midnight time', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });

    const result = getEventEndDate(event);

    expect(result.format('YYYY-MM-DD')).toBe('2025-01-15');
  });
});
