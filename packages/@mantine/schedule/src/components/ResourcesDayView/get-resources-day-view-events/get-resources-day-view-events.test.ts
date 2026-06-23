import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { getResourcesDayViewEvents } from './get-resources-day-view-events';

const testDate = testUtils.testDate;

const resources = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

describe('@mantine/schedule/get-resources-day-view-events', () => {
  it('returns empty arrays per resource when events is undefined', () => {
    const result = getResourcesDayViewEvents({ events: undefined, resources, date: testDate });
    expect(result).toStrictEqual({
      regularEvents: { 'room-a': [], 'room-b': [] },
      allDayEvents: { 'room-a': [], 'room-b': [] },
      backgroundTimedEvents: { 'room-a': [], 'room-b': [] },
      backgroundAllDayEvents: { 'room-a': [], 'room-b': [] },
    });
  });

  it('groups events by resourceId', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 'room-a',
      }),
      testUtils.createEvent({
        id: 2,
        start: `${testDate} 14:00:00`,
        end: `${testDate} 15:00:00`,
        resourceId: 'room-b',
      }),
    ];

    const result = getResourcesDayViewEvents({ events, resources, date: testDate });
    expect(result.regularEvents['room-a']).toHaveLength(1);
    expect(result.regularEvents['room-a'][0].id).toBe(1);
    expect(result.regularEvents['room-b']).toHaveLength(1);
    expect(result.regularEvents['room-b'][0].id).toBe(2);
  });

  it('skips events without resourceId', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
      }),
    ];

    const result = getResourcesDayViewEvents({ events, resources, date: testDate });
    expect(result.regularEvents['room-a']).toHaveLength(0);
    expect(result.regularEvents['room-b']).toHaveLength(0);
  });

  it('skips events with unknown resourceId', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 'unknown-room',
      }),
    ];

    const result = getResourcesDayViewEvents({ events, resources, date: testDate });
    expect(result.regularEvents['room-a']).toHaveLength(0);
    expect(result.regularEvents['room-b']).toHaveLength(0);
  });

  it('throws on duplicate event IDs', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 'room-a',
      }),
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 14:00:00`,
        end: `${testDate} 15:00:00`,
        resourceId: 'room-a',
      }),
    ];

    expect(() => getResourcesDayViewEvents({ events, resources, date: testDate })).toThrow(
      '[@mantine/schedule] ResourcesDayView: Duplicated event ids found: 1'
    );
  });

  it('filters events by date', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 'room-a',
      }),
      testUtils.createEvent({
        id: 2,
        start: '2025-01-16 10:00:00',
        end: '2025-01-16 11:00:00',
        resourceId: 'room-a',
      }),
    ];
  
    const result = getResourcesDayViewEvents({ events, resources, date: testDate });
    expect(result.regularEvents['room-a']).toHaveLength(1);
    expect(result.regularEvents['room-a'][0].id).toBe(1);
  });
  
  it('includes multi-day events that overlap the current day', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: '2025-01-14 10:00:00',
        end: '2025-01-16 18:00:00',
        resourceId: 'room-a',
      }),
    ];
  
    const result = getResourcesDayViewEvents({
      events,
      resources,
      date: '2025-01-15',
    });
  
    expect(result.regularEvents['room-a']).toHaveLength(1);
    expect(result.regularEvents['room-a'][0].id).toBe(1);
  });

  it('filters by startTime and endTime', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 'room-a',
      }),
      testUtils.createEvent({
        id: 2,
        start: `${testDate} 18:00:00`,
        end: `${testDate} 22:00:00`,
        resourceId: 'room-a',
      }),
    ];

    const result = getResourcesDayViewEvents({
      events,
      resources,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result.regularEvents['room-a']).toStrictEqual([
      { ...events[0], position: expect.any(Object) },
    ]);
  });

  it('separates background events', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 'room-a',
        display: 'background',
      }),
      testUtils.createEvent({
        id: 2,
        start: `${testDate} 14:00:00`,
        end: `${testDate} 15:00:00`,
        resourceId: 'room-a',
      }),
    ];

    const result = getResourcesDayViewEvents({ events, resources, date: testDate });
    expect(result.backgroundTimedEvents['room-a']).toHaveLength(1);
    expect(result.backgroundTimedEvents['room-a'][0].id).toBe(1);
    expect(result.regularEvents['room-a']).toHaveLength(1);
    expect(result.regularEvents['room-a'][0].id).toBe(2);
  });

  it('separates all-day events from regular events', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 'room-a',
      }),
      testUtils.createEvent({
        id: 2,
        start: dayjs(testDate).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        end: dayjs(testDate).startOf('day').add(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
        resourceId: 'room-a',
      }),
    ];

    const result = getResourcesDayViewEvents({ events, resources, date: testDate });
    expect(result.allDayEvents['room-a']).toHaveLength(1);
    expect(result.allDayEvents['room-a'][0].id).toBe(2);
    expect(result.regularEvents['room-a']).toHaveLength(1);
    expect(result.regularEvents['room-a'][0].id).toBe(1);
  });

  it('works with numeric resource IDs', () => {
    const numericResources = [
      { id: 1, label: 'Room 1' },
      { id: 2, label: 'Room 2' },
    ];

    const events = [
      testUtils.createEvent({
        id: 'evt-1',
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        resourceId: 1,
      }),
      testUtils.createEvent({
        id: 'evt-2',
        start: `${testDate} 14:00:00`,
        end: `${testDate} 15:00:00`,
        resourceId: 2,
      }),
    ];

    const result = getResourcesDayViewEvents({
      events,
      resources: numericResources,
      date: testDate,
    });
    expect(result.regularEvents[1]).toHaveLength(1);
    expect(result.regularEvents[1][0].id).toBe('evt-1');
    expect(result.regularEvents[2]).toHaveLength(1);
    expect(result.regularEvents[2][0].id).toBe('evt-2');
  });
});
