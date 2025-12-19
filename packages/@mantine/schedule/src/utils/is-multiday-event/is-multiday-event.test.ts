import { testUtils } from '../../test-utils';
import { isMultidayEvent } from './is-multiday-event';

describe('@mantine/schedule/is-multiday-event', () => {
  it('returns false for single-day events', () => {
    expect(
      isMultidayEvent(
        testUtils.createEvent({ start: '2025-11-03 09:00:00', end: '2025-11-03 17:00:00' })
      )
    ).toBe(false);
    expect(isMultidayEvent(testUtils.createEvent({ start: '2025-11-03', end: '2025-11-03' }))).toBe(
      false
    );
    expect(
      isMultidayEvent(
        testUtils.createEvent({ start: '2025-11-03 23:59:00', end: '2025-11-03 23:59:59' })
      )
    ).toBe(false);
  });

  it('returns true for multi-day events', () => {
    expect(
      isMultidayEvent(
        testUtils.createEvent({ start: '2025-11-03 09:00:00', end: '2025-11-04 17:00:00' })
      )
    ).toBe(true);
    expect(isMultidayEvent(testUtils.createEvent({ start: '2025-11-03', end: '2025-11-10' }))).toBe(
      true
    );
    expect(
      isMultidayEvent(
        testUtils.createEvent({ start: '2025-12-31 15:00:00', end: '2026-01-01 10:00:00' })
      )
    ).toBe(true);
  });
});
