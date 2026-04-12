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
