import { ScheduleEventData } from './types';

function createEvent(input: Partial<ScheduleEventData>): ScheduleEventData {
  return {
    id: 1,
    title: 'Test Event 2hr',
    start: `${testUtils.testDate} 10:00:00`,
    end: `${testUtils.testDate} 12:00:00`,
    color: 'blue',
    payload: {},
    ...input,
  };
}

export const testUtils = {
  testDate: '2025-01-15', // Wednesday, January 15, 2025
  createEvent,
};
