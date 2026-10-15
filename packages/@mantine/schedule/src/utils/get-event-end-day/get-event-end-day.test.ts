import dayjs from 'dayjs';
import { testUtils } from '../../test-utils';
import { getEventEndDay, isEventOnDay, isStartOfDay } from './get-event-end-day';

const describeInBerlin =
  Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Berlin' ? describe : describe.skip;

describe('@mantine/schedule/get-event-end-day', () => {
  it('returns end date without modification for non-midnight times', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-17 16:00:00',
    });

    const result = getEventEndDay(event);

    expect(result.format('YYYY-MM-DD')).toBe('2025-01-17');
  });

  it('subtracts one day when end time is midnight', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-17 00:00:00',
    });

    const result = getEventEndDay(event);

    expect(result.format('YYYY-MM-DD')).toBe('2025-01-16');
  });

  it('handles single-day events ending at midnight', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 00:00:00',
      end: '2025-01-16 00:00:00',
    });

    const result = getEventEndDay(event);

    expect(result.format('YYYY-MM-DD')).toBe('2025-01-15');
  });

  it('handles events with same start and end date but non-midnight time', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });

    const result = getEventEndDay(event);

    expect(result.format('YYYY-MM-DD')).toBe('2025-01-15');
  });

  it('treats only an end at exactly 00:00:00 as exclusive', () => {
    expect(
      getEventEndDay(
        testUtils.createEvent({ start: '2025-01-15 10:00:00', end: '2025-01-17 00:00:01' })
      ).format('YYYY-MM-DD')
    ).toBe('2025-01-17');
    expect(
      getEventEndDay(
        testUtils.createEvent({ start: '2025-01-15 10:00:00', end: '2025-01-17 00:00:30' })
      ).format('YYYY-MM-DD')
    ).toBe('2025-01-17');
  });

  it('isStartOfDay checks hours, minutes and seconds', () => {
    expect(isStartOfDay(dayjs('2025-01-17 00:00:00'))).toBe(true);
    expect(isStartOfDay(dayjs('2025-01-17 00:00:01'))).toBe(false);
    expect(isStartOfDay(dayjs('2025-01-17 00:01:00'))).toBe(false);
    expect(isStartOfDay(dayjs('2025-01-17 01:00:00'))).toBe(false);
  });

  it('never returns a day before the start day', () => {
    expect(
      getEventEndDay(
        testUtils.createEvent({ start: '2025-01-15 00:00:00', end: '2025-01-15 00:00:00' })
      ).format('YYYY-MM-DD')
    ).toBe('2025-01-15');
  });

  it('isEventOnDay uses the exclusive midnight end', () => {
    const event = testUtils.createEvent({
      start: '2025-01-14 22:00:00',
      end: '2025-01-16 00:00:00',
    });
    expect(isEventOnDay(event, '2025-01-13')).toBe(false);
    expect(isEventOnDay(event, '2025-01-14')).toBe(true);
    expect(isEventOnDay(event, '2025-01-15 12:00:00')).toBe(true);
    expect(isEventOnDay(event, '2025-01-16')).toBe(false);

    const zeroLength = testUtils.createEvent({
      start: '2025-01-15 00:00:00',
      end: '2025-01-15 00:00:00',
    });
    expect(isEventOnDay(zeroLength, '2025-01-14')).toBe(false);
    expect(isEventOnDay(zeroLength, '2025-01-15')).toBe(true);
  });

  describeInBerlin('DST, run with TZ=Europe/Berlin', () => {
    it('returns the previous day for a midnight end after the spring-forward day', () => {
      expect(
        getEventEndDay(
          testUtils.createEvent({ start: '2026-03-28 10:00:00', end: '2026-03-30 00:00:00' })
        ).format('YYYY-MM-DD HH:mm:ss')
      ).toBe('2026-03-29 00:00:00');
    });

    it('returns the previous day for a midnight end after the fall-back day', () => {
      expect(
        getEventEndDay(
          testUtils.createEvent({ start: '2026-10-24 10:00:00', end: '2026-10-26 00:00:00' })
        ).format('YYYY-MM-DD HH:mm:ss')
      ).toBe('2026-10-25 00:00:00');
    });
  });
});
