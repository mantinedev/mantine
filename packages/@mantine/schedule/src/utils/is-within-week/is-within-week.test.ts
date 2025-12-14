import { ScheduleEventData } from '../../types';
import { isWithinWeek } from './is-within-week';

describe('@mantine/schedule/is-within-week', () => {
  const createEvent = (id: number, start: string, end: string): ScheduleEventData => ({
    id,
    start,
    end,
    title: `Event ${id}`,
    color: 'blue',
    payload: {},
  });

  const testDate = '2024-01-10';

  it('returns true for event within the week', () => {
    const event = createEvent(1, '2024-01-10 10:00:00', '2024-01-10 11:00:00');
    expect(isWithinWeek({ event, targetWeek: testDate, firstDayOfWeek: 1 })).toBe(true);
  });

  it('returns false for event outside the week', () => {
    const event = createEvent(1, '2024-01-05 10:00:00', '2024-01-06 11:00:00');
    expect(isWithinWeek({ event, targetWeek: testDate, firstDayOfWeek: 1 })).toBe(false);
  });
});
