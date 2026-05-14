import { testUtils } from '../../test-utils';
import { isEventsOverlap } from './is-events-overlap';

describe('@mantine/schedule/is-events-overlap', () => {
  it('returns true for overlapping events', () => {
    expect(
      isEventsOverlap(
        testUtils.createEvent({ start: '2024-05-01 10:00:00', end: '2024-05-01 12:00:00' }),
        testUtils.createEvent({ start: '2024-05-01 11:00:00', end: '2024-05-01 13:00:00' })
      )
    ).toBe(true);
  });

  it('returns false for non-overlapping events', () => {
    expect(
      isEventsOverlap(
        testUtils.createEvent({ start: '2024-05-01 10:00:00', end: '2024-05-01 11:00:00' }),
        testUtils.createEvent({ start: '2024-05-01 11:00:00', end: '2024-05-01 12:00:00' })
      )
    ).toBe(false);
  });
});
