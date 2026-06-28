import { testUtils } from '../../../test-utils';
import { getResourcesWeekViewEvents } from './get-resources-week-view-events';

const testDate = testUtils.testDate;

const resources = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

const weekdays = ['2025-01-13', '2025-01-14', '2025-01-15', '2025-01-16', '2025-01-17'];

describe('@mantine/schedule/get-resources-week-view-events', () => {
  it('returns empty result per day when events is undefined', () => {
    const result = getResourcesWeekViewEvents({ events: undefined, resources, weekdays });
    for (const day of weekdays) {
      expect(result.byDay[day].regularEvents['room-a']).toStrictEqual([]);
      expect(result.byDay[day].regularEvents['room-b']).toStrictEqual([]);
      expect(result.byDay[day].allDayEvents['room-a']).toStrictEqual([]);
      expect(result.byDay[day].allDayEvents['room-b']).toStrictEqual([]);
      expect(result.byDay[day].backgroundTimedEvents['room-a']).toStrictEqual([]);
      expect(result.byDay[day].backgroundTimedEvents['room-b']).toStrictEqual([]);
      expect(result.byDay[day].backgroundAllDayEvents['room-a']).toStrictEqual([]);
      expect(result.byDay[day].backgroundAllDayEvents['room-b']).toStrictEqual([]);
    }
  });

  it('groups events by resourceId and day', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 'room-a',
      }),
      testUtils.createEvent({
        id: 2,
        start: '2025-01-14 14:00:00',
        end: '2025-01-14 15:00:00',
        resourceId: 'room-b',
      }),
    ];

    const result = getResourcesWeekViewEvents({ events, resources, weekdays });
    expect(result.byDay[testDate].regularEvents['room-a']).toHaveLength(1);
    expect(result.byDay[testDate].regularEvents['room-a'][0].id).toBe(1);
    expect(result.byDay['2025-01-14'].regularEvents['room-b']).toHaveLength(1);
    expect(result.byDay['2025-01-14'].regularEvents['room-b'][0].id).toBe(2);
  });

  it('renders a multi-day regular event as a single all-day bar spanning its days', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        title: 'Conference',
        start: '2025-01-13 22:00:00',
        end: '2025-01-15 02:00:00',
        resourceId: 'room-a',
      }),
    ];

    const result = getResourcesWeekViewEvents({ events, resources, weekdays });

    // one continuous bar spanning days 13 -> 15 (indices 0 -> 2), not per-day chunks
    const bars = result.allDayBars['room-a'];
    expect(bars).toHaveLength(1);
    expect(bars[0].event.id).toBe(1);
    expect(bars[0].startDayIndex).toBe(0);
    expect(bars[0].endDayIndex).toBe(2);
    expect(bars[0].row).toBe(0);

    // original event times are preserved for display / interaction
    expect(bars[0].event.start).toBe('2025-01-13 22:00:00');
    expect(bars[0].event.end).toBe('2025-01-15 02:00:00');

    // not duplicated into the per-day timed lane, and the other resource has no bars
    expect(result.byDay['2025-01-13'].regularEvents['room-a']).toHaveLength(0);
    expect(result.allDayBars['room-b']).toHaveLength(0);
  });

  it('stacks overlapping all-day bars on separate rows', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        title: 'Conference',
        start: '2025-01-13 22:00:00',
        end: '2025-01-15 02:00:00',
        resourceId: 'room-a',
      }),
      testUtils.createEvent({
        id: 2,
        title: 'Workshop',
        start: '2025-01-14 09:00:00',
        end: '2025-01-16 12:00:00',
        resourceId: 'room-a',
      }),
    ];

    const result = getResourcesWeekViewEvents({ events, resources, weekdays });
    const bars = result.allDayBars['room-a'];
    expect(bars).toHaveLength(2);

    // the two bars overlap on day 14, so they must land on different rows
    const conference = bars.find((bar) => bar.event.id === 1)!;
    const workshop = bars.find((bar) => bar.event.id === 2)!;
    expect(conference.row).toBe(0);
    expect(workshop.row).toBe(1);
  });

  it('skips events without resourceId', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
      }),
    ];

    const result = getResourcesWeekViewEvents({ events, resources, weekdays });
    expect(result.byDay[testDate].regularEvents['room-a']).toHaveLength(0);
    expect(result.byDay[testDate].regularEvents['room-b']).toHaveLength(0);
  });
});
