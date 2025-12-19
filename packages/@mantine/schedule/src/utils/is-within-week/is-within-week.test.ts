import { testUtils } from '../../test-utils';
import { isWithinWeek } from './is-within-week';

describe('@mantine/schedule/is-within-week', () => {
  it('returns true for event within the week', () => {
    const event = testUtils.createEvent({
      id: 1,
      start: '2024-01-10 10:00:00',
      end: '2024-01-10 11:00:00',
    });
    expect(isWithinWeek({ event, targetWeek: '2024-01-10', firstDayOfWeek: 1 })).toBe(true);
  });

  it('returns false for event outside the week', () => {
    const event = testUtils.createEvent({
      id: 1,
      start: '2024-01-05 10:00:00',
      end: '2024-01-06 11:00:00',
    });
    expect(isWithinWeek({ event, targetWeek: '2024-01-10', firstDayOfWeek: 1 })).toBe(false);
  });
});
