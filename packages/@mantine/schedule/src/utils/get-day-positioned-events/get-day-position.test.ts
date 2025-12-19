import { testUtils } from '../../test-utils';
import { getDayPosition } from './get-day-position';

describe('@mantine/schedule/get-day-position', () => {
  it('calculates position with default startTime and endTime', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 06:00:00`,
      end: `${testUtils.testDate} 16:00:00`,
    });

    const result = getDayPosition({ event });

    expect(result.top).toBeCloseTo(25, 1); // 6 hours / 24 hours = 25%
    expect(result.height).toBeCloseTo(41.67, 2); // 10 hours / 24 hours = 41.67%
  });

  it('calculates position with custom startTime and endTime', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 10:00:00`,
      end: `${testUtils.testDate} 12:00:00`,
    });

    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Event starts 1 hour after 09:00, within 8-hour range
    expect(result.top).toBeCloseTo(12.5, 0); // 1 hour / 8 hours = 12.5%
    expect(result.height).toBeCloseTo(25, 0); // 2 hours / 8 hours = 25%
  });

  it('handles event starting before startTime boundary', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 08:00:00`,
      end: `${testUtils.testDate} 10:00:00`,
    });

    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result.top).toBe(0);
  });

  it('handles event ending after endTime boundary', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 16:00:00`,
      end: `${testUtils.testDate} 18:00:00`,
    });

    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result.top).toBeCloseTo(87.5, 1); // 7 hours / 8 hours = 87.5%
    expect(result.height).toBeCloseTo(12.5, 1); // Only 1 hour visible within 8-hour range
  });

  it('calculates position for full day event', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 00:00:00`,
      end: `${testUtils.testDate} 23:59:59`,
    });

    const result = getDayPosition({ event });

    expect(result.top).toBeCloseTo(0, 1);
    expect(result.height).toBeCloseTo(99.9, 1); // ~24 hours
  });

  it('handles event at exact startTime/endTime boundaries', () => {
    const event = testUtils.createEvent({
      start: `${testUtils.testDate} 09:00:00`,
      end: `${testUtils.testDate} 17:00:00`,
    });

    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result.top).toBe(0);
    expect(result.height).toBe(100);
  });
});
