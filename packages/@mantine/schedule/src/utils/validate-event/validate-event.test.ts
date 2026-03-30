import { ScheduleEventData } from '../../types';
import { validateEvent } from './validate-event';

describe('@mantine/schedule/validate-event', () => {
  const validEvent: ScheduleEventData = {
    id: 'test-event',
    title: 'Test Event',
    start: '2024-12-12 10:00:00',
    end: '2024-12-12 11:00:00',
    color: 'blue',
    payload: {},
  };

  it('returns event data when all validations pass', () => {
    const result = validateEvent(validEvent);
    expect(result).toStrictEqual(validEvent);
  });

  it('throws error for invalid start date', () => {
    const invalidEvent = {
      ...validEvent,
      start: 'invalid-date',
    };
    expect(() => validateEvent(invalidEvent)).toThrow(
      `[@mantine/schedule] Invalid start date for event id: ${invalidEvent.id}`
    );
  });

  it('throws error for invalid end date', () => {
    const invalidEvent = {
      ...validEvent,
      end: 'invalid-date',
    };
    expect(() => validateEvent(invalidEvent)).toThrow(
      `[@mantine/schedule] Invalid end date for event id: ${invalidEvent.id}`
    );
  });

  it('throws error when end date is before start date', () => {
    const invalidEvent = {
      ...validEvent,
      start: '2024-12-12 11:00:00',
      end: '2024-12-12 10:00:00',
    };
    expect(() => validateEvent(invalidEvent)).toThrow(
      `[@mantine/schedule] Event end date is before start date for event id: ${invalidEvent.id}`
    );
  });

  it('accepts Date objects as start and end dates', () => {
    const dateEvent: ScheduleEventData = {
      ...validEvent,
      start: new Date('2024-12-12T10:00:00'),
      end: new Date('2024-12-12T11:00:00'),
    };
    const result = validateEvent(dateEvent);
    expect(result).toStrictEqual(dateEvent);
  });
});
