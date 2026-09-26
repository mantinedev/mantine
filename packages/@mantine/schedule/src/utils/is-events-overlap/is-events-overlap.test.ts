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

  it('returns correct result when start and end are changed on the same event object', () => {
    const event = testUtils.createEvent({
      start: '2024-05-01 10:00:00',
      end: '2024-05-01 11:00:00',
    });

    const otherEvent = testUtils.createEvent({
      start: '2024-05-01 12:00:00',
      end: '2024-05-01 13:00:00',
    });

    expect(isEventsOverlap(event, otherEvent)).toBe(false);

    event.start = '2024-05-01 12:30:00';
    event.end = '2024-05-01 14:00:00';

    expect(isEventsOverlap(event, otherEvent)).toBe(true);

    otherEvent.start = '2024-05-01 15:00:00';
    otherEvent.end = '2024-05-01 16:00:00';

    expect(isEventsOverlap(event, otherEvent)).toBe(false);
  });
});
