import { parseDuration } from './parse-duration';

describe('@mantine/core/Timer/parseDuration', () => {
  it('passes numbers through unchanged', () => {
    expect(parseDuration(5000)).toBe(5000);
  });

  it('sums a duration object', () => {
    expect(parseDuration({ minutes: 25 })).toBe(1_500_000);
    expect(parseDuration({ hours: 1, minutes: 30, seconds: 15, milliseconds: 500 })).toBe(
      5_415_500
    );
    expect(parseDuration({ days: 1 })).toBe(86_400_000);
  });

  describe('with fake timers', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2026-01-01T00:00:00.000Z'));
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it('computes remaining milliseconds from a Date', () => {
      expect(parseDuration(new Date('2026-01-01T00:01:00.000Z'))).toBe(60_000);
    });

    it('computes remaining milliseconds from an ISO string', () => {
      expect(parseDuration('2026-01-01T00:00:10.000Z')).toBe(10_000);
    });
  });

  it('returns 0 for an invalid date string', () => {
    expect(parseDuration('not-a-date')).toBe(0);
  });
});
