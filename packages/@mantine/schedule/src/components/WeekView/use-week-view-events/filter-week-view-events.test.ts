import { testUtils } from '../../../test-utils';
import { filterWeekViewEvents } from './filter-week-view-events';

describe('@mantine/schedule/filter-week-view-events', () => {
  it('returns empty array when events are undefined', () => {
    expect(filterWeekViewEvents({ date: testUtils.testDate, events: undefined })).toStrictEqual([]);
  });

  it('filters out events that are outside the week range', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2024-01-08 10:00:00', end: '2024-01-08 11:00:00' }),
      testUtils.createEvent({ id: 2, start: '2024-01-10 10:00:00', end: '2024-01-10 11:00:00' }),
      testUtils.createEvent({ id: 3, start: '2024-01-15 10:00:00', end: '2024-01-15 11:00:00' }),
    ];

    expect(filterWeekViewEvents({ date: '2024-01-08', events })).toStrictEqual([
      events[0],
      events[1],
    ]);
  });

  it('filters out events that are outside the time range', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2024-01-10 08:00:00', end: '2024-01-10 09:00:00' }),
      testUtils.createEvent({ id: 2, start: '2024-01-10 10:00:00', end: '2024-01-10 11:00:00' }),
      testUtils.createEvent({ id: 3, start: '2024-01-10 18:00:00', end: '2024-01-10 19:00:00' }),
    ];

    expect(
      filterWeekViewEvents({
        date: '2024-01-08',
        events,
        startTime: '09:00',
        endTime: '17:00',
      })
    ).toStrictEqual([events[1]]);
  });

  it('throws error when duplicated event ids are found', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2024-01-10 10:00:00', end: '2024-01-10 11:00:00' }),
      testUtils.createEvent({ id: 1, start: '2024-01-11 10:00:00', end: '2024-01-11 11:00:00' }),
    ];

    expect(() => filterWeekViewEvents({ date: '2024-01-08', events })).toThrow(
      '[@mantine/schedule] WeekView: Duplicated event ids found: 1'
    );
  });
});
