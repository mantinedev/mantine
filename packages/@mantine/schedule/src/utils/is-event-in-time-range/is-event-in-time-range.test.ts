import { testUtils } from '../../test-utils';
import { isEventInTimeRange } from './is-event-in-time-range';

describe('@mantine/schedule/is-event-in-time-range', () => {
  it('returns true when no time range is specified', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 06:00:00`,
      end: `${testUtils.testDate} 08:00:00`,
    });
    expect(isEventInTimeRange({ event })).toBe(true);
  });

  it('returns true for multiday events regardless of time range', () => {
    const event = testUtils.createEvent({
      start: `2024-01-15 14:00:00`,
      end: `2024-01-16 10:00:00`,
    });
    expect(isEventInTimeRange({ event, startTime: '09:00', endTime: '17:00' })).toBe(true);
  });

  it('returns false for event that ends before time window start', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 06:00:00`,
      end: `${testUtils.testDate} 09:00:00`,
    });
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(false);
  });

  it('returns false for event that starts at or after time window end', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 22:00:00`,
      end: `${testUtils.testDate} 23:00:00`,
    });
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(false);
  });

  it('returns true for event that starts before and ends after time window start', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 08:00:00`,
      end: `${testUtils.testDate} 12:00:00`,
    });
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(true);
  });
});
