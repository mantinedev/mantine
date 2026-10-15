import { testUtils } from '../../test-utils';
import { clipEventToDay, getClippedEdges } from './clip-event-to-day';

describe('@mantine/schedule/clip-event-to-day', () => {
  it('clips start and end to the given day', () => {
    const event = testUtils.createEvent({
      start: '2025-01-14 22:00:00',
      end: '2025-01-16 02:00:00',
    });
    expect(clipEventToDay(event, '2025-01-15')).toStrictEqual({
      ...event,
      start: '2025-01-15 00:00:00',
      end: '2025-01-15 23:59:59',
    });
  });

  it('keeps start and end that are within the day', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });
    expect(clipEventToDay(event, '2025-01-15')).toStrictEqual(event);
  });

  it('does not mutate the original event', () => {
    const event = testUtils.createEvent({
      start: '2025-01-14 22:00:00',
      end: '2025-01-15 02:00:00',
    });
    clipEventToDay(event, '2025-01-15');
    expect(event.start).toBe('2025-01-14 22:00:00');
  });

  it('detects edges clipped by the displayed day', () => {
    const carryOver = { start: '2025-01-14 22:00:00', end: '2025-01-15 02:00:00' } as any;
    const continues = { start: '2025-01-15 22:00:00', end: '2025-01-16 02:00:00' } as any;
    const endsAtMidnight = { start: '2025-01-15 22:00:00', end: '2025-01-16 00:00:00' } as any;
    const inside = { start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' } as any;

    expect(getClippedEdges(carryOver, '2025-01-15')).toStrictEqual({ start: true, end: false });
    expect(getClippedEdges(continues, '2025-01-15')).toStrictEqual({ start: false, end: true });
    expect(getClippedEdges(endsAtMidnight, '2025-01-15')).toStrictEqual({
      start: false,
      end: false,
    });
    expect(getClippedEdges(inside, '2025-01-15')).toStrictEqual({ start: false, end: false });
  });
});
