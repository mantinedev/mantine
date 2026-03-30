import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

export function validateEvent(eventData: ScheduleEventData) {
  if (!dayjs(eventData.start).isValid()) {
    throw new Error(`[@mantine/schedule] Invalid start date for event id: ${eventData.id}`);
  }

  if (!dayjs(eventData.end).isValid()) {
    throw new Error(`[@mantine/schedule] Invalid end date for event id: ${eventData.id}`);
  }

  if (dayjs(eventData.end).isBefore(dayjs(eventData.start))) {
    throw new Error(
      `[@mantine/schedule] Event end date is before start date for event id: ${eventData.id}`
    );
  }

  return eventData;
}
