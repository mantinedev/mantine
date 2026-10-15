import { testUtils } from '../../../test-utils';
import { getMonthViewEvents } from './get-month-view-events';

describe('@mantine/schedule/get-month-view-events', () => {
  it('returns empty groups when events is undefined', () => {
    expect(getMonthViewEvents({ date: '2026-10-01', events: undefined })).toStrictEqual({
      groupedByDay: {},
      groupedByWeek: {},
      backgroundByWeek: {},
    });
  });

  it('does not validate events outside of the displayed range', () => {
    const invalid = testUtils.createEvent({
      id: 1,
      start: '2020-10-07 10:00:00',
      end: '2020-10-07 09:00:00',
    });

    expect(() => getMonthViewEvents({ date: '2026-10-01', events: [invalid] })).not.toThrow();
    expect(() =>
      getMonthViewEvents({
        date: '2026-10-01',
        events: [{ ...invalid, start: '2026-10-07 10:00:00', end: '2026-10-07 09:00:00' }],
      })
    ).toThrow('Event end date is before start date');
  });

  it('ignores duplicated ids outside of the displayed range', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-10-07 10:00:00', end: '2026-10-07 11:00:00' }),
      testUtils.createEvent({ id: 1, start: '2026-12-07 10:00:00', end: '2026-12-07 11:00:00' }),
    ];

    expect(() => getMonthViewEvents({ date: '2026-10-01', events })).not.toThrow();
  });

  it('includes events that overlap the range edges', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-09-29 10:00:00', end: '2026-10-01 10:00:00' }),
      testUtils.createEvent({ id: 2, start: '2026-09-29 10:00:00', end: '2026-10-01 00:00:00' }),
      testUtils.createEvent({ id: 3, start: '2026-10-31 10:00:00', end: '2026-11-02 10:00:00' }),
    ];

    const result = getMonthViewEvents({ date: '2026-10-01', events });
    expect(result.groupedByDay['2026-10-01 00:00:00'].map((event) => event.id)).toStrictEqual([1]);
    expect(result.groupedByDay['2026-10-31 00:00:00'].map((event) => event.id)).toStrictEqual([3]);
  });

  it('includes zero-length events at midnight', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-10-07 00:00:00', end: '2026-10-07 00:00:00' }),
    ];

    const result = getMonthViewEvents({ date: '2026-10-01', events });
    expect(result.groupedByDay['2026-10-07 00:00:00']).toHaveLength(1);
  });

  it('clips events to the month when outside days are hidden', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-10-30 10:00:00', end: '2026-11-02 10:00:00' }),
      testUtils.createEvent({ id: 2, start: '2026-09-27 10:00:00', end: '2026-10-02 10:00:00' }),
    ];

    const result = getMonthViewEvents({
      date: '2026-10-01',
      events,
      firstDayOfWeek: 1,
      withOutsideDays: false,
    });

    expect(result.groupedByDay['2026-11-01 00:00:00']).toStrictEqual([]);
    expect(result.groupedByDay['2026-09-30 00:00:00']).toStrictEqual([]);
    expect(result.groupedByDay['2026-10-31 00:00:00'].map((event) => event.id)).toStrictEqual([1]);

    const lastWeek = result.groupedByWeek['4'][0].position;
    expect(lastWeek.startOffset).toBeCloseTo((4 / 7) * 100);
    expect(lastWeek.width).toBeCloseTo((2 / 7) * 100);
    expect(lastWeek.hanging).toBe('end');

    const firstWeek = result.groupedByWeek['0'][0].position;
    expect(firstWeek.startOffset).toBeCloseTo((3 / 7) * 100);
    expect(firstWeek.width).toBeCloseTo((2 / 7) * 100);
    expect(firstWeek.hanging).toBe('start');
  });

  it('does not clip events to the month when outside days are shown', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-10-30 10:00:00', end: '2026-11-02 10:00:00' }),
    ];

    const result = getMonthViewEvents({
      date: '2026-10-01',
      events,
      firstDayOfWeek: 1,
      withOutsideDays: true,
      consistentWeeks: false,
    });

    expect(result.groupedByDay['2026-11-01 00:00:00'].map((event) => event.id)).toStrictEqual([1]);
    expect(result.groupedByWeek['4'][0].position.width).toBeCloseTo((3 / 7) * 100);
  });
});
