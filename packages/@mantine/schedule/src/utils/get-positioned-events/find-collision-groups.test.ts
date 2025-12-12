import { ScheduleEventData } from '../../types';
import { findCollisionGroups } from './find-collision-groups';

describe('findCollisionGroups', () => {
  const createEvent = (id: string, start: string, end: string): ScheduleEventData => ({
    id,
    title: `Event ${id}`,
    start,
    end,
    color: 'blue',
    payload: {},
  });

  it('returns empty array for empty input', () => {
    expect(findCollisionGroups([])).toEqual([]);
  });

  it('groups single event into one group', () => {
    const events = [createEvent('1', '2024-01-01 10:00:00', '2024-01-01 11:00:00')];
    expect(findCollisionGroups(events)).toEqual([events]);
  });

  it('groups overlapping events together', () => {
    const e1 = createEvent('1', '2024-01-01 10:00:00', '2024-01-01 11:00:00');
    const e2 = createEvent('2', '2024-01-01 10:30:00', '2024-01-01 11:30:00');
    const result = findCollisionGroups([e1, e2]);

    expect(result).toHaveLength(1);
    expect(result[0]).toContain(e1);
    expect(result[0]).toContain(e2);
  });

  it('separates non-overlapping events into different groups', () => {
    const e1 = createEvent('1', '2024-01-01 10:00:00', '2024-01-01 11:00:00');
    const e2 = createEvent('2', '2024-01-01 12:00:00', '2024-01-01 13:00:00');
    const result = findCollisionGroups([e1, e2]);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual([e1]);
    expect(result[1]).toEqual([e2]);
  });

  it('groups multiple overlapping events transitively', () => {
    const e1 = createEvent('1', '2024-01-01 10:00:00', '2024-01-01 11:00:00');
    const e2 = createEvent('2', '2024-01-01 10:30:00', '2024-01-01 11:30:00');
    const e3 = createEvent('3', '2024-01-01 11:15:00', '2024-01-01 12:00:00');
    const result = findCollisionGroups([e1, e2, e3]);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual([e1, e2, e3]);
  });
});
