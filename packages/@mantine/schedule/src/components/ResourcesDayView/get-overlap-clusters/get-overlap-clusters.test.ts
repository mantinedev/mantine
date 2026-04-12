import { testUtils } from '../../../test-utils';
import { getDayPositionedEvents } from '../../DayView/get-day-view-events/get-day-positioned-events';
import { getOverlapClusters } from './get-overlap-clusters';

function positionEvents(events: ReturnType<typeof testUtils.createEvent>[]) {
  return getDayPositionedEvents({ date: testUtils.testDate, events });
}

describe('@mantine/schedule/get-overlap-clusters', () => {
  it('returns empty array when no events are provided', () => {
    expect(getOverlapClusters([])).toStrictEqual([]);
  });

  it('returns single cluster for a single event', () => {
    const events = positionEvents([
      testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' }),
    ]);

    const clusters = getOverlapClusters(events);

    expect(clusters).toHaveLength(1);
    expect(clusters[0]).toHaveLength(1);
    expect(clusters[0][0].id).toBe(1);
  });

  it('groups directly overlapping events into one cluster', () => {
    const events = positionEvents([
      testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-01-15 11:00:00', end: '2025-01-15 13:00:00' }),
      testUtils.createEvent({ id: 3, start: '2025-01-15 11:30:00', end: '2025-01-15 12:30:00' }),
    ]);

    const clusters = getOverlapClusters(events);

    expect(clusters).toHaveLength(1);
    expect(clusters[0]).toHaveLength(3);
  });

  it('separates non-overlapping events into different clusters', () => {
    const events = positionEvents([
      testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-01-15 14:00:00', end: '2025-01-15 15:00:00' }),
    ]);

    const clusters = getOverlapClusters(events);

    expect(clusters).toHaveLength(2);
    expect(clusters[0]).toHaveLength(1);
    expect(clusters[1]).toHaveLength(1);
    expect(clusters[0][0].id).toBe(1);
    expect(clusters[1][0].id).toBe(2);
  });

  it('groups transitively overlapping events into one cluster', () => {
    const events = positionEvents([
      testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-01-15 10:30:00', end: '2025-01-15 12:00:00' }),
      testUtils.createEvent({ id: 3, start: '2025-01-15 11:30:00', end: '2025-01-15 13:00:00' }),
    ]);

    const clusters = getOverlapClusters(events);

    expect(clusters).toHaveLength(1);
    expect(clusters[0]).toHaveLength(3);
  });

  it('handles multiple separate clusters', () => {
    const events = positionEvents([
      testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-01-15 09:30:00', end: '2025-01-15 10:30:00' }),
      testUtils.createEvent({ id: 3, start: '2025-01-15 14:00:00', end: '2025-01-15 15:00:00' }),
      testUtils.createEvent({ id: 4, start: '2025-01-15 14:30:00', end: '2025-01-15 15:30:00' }),
    ]);

    const clusters = getOverlapClusters(events);

    expect(clusters).toHaveLength(2);
    expect(clusters[0]).toHaveLength(2);
    expect(clusters[1]).toHaveLength(2);
  });

  it('handles events that touch at boundaries as non-overlapping', () => {
    const events = positionEvents([
      testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' }),
    ]);

    const clusters = getOverlapClusters(events);

    expect(clusters).toHaveLength(2);
  });
});
