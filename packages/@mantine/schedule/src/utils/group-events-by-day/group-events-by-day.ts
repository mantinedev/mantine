import dayjs from 'dayjs';
import { AnyDateValue, DateStringValue, ScheduleEventData } from '../../types';
import { getEventEndDay } from '../get-event-end-day/get-event-end-day';
import { validateEvent } from '../validate-event/validate-event';

/** Events grouped by day, keys are in `YYYY-MM-DD` format */
export type EventsByDay = Record<DateStringValue, ScheduleEventData[]>;

interface GroupEventsByDayInput {
  /** Events to group, background events are skipped */
  events: ScheduleEventData[] | undefined;

  /** First day of the range (inclusive) */
  rangeStart: AnyDateValue;

  /** Last day of the range (inclusive) */
  rangeEnd: AnyDateValue;

  /** Component name used in error messages */
  componentName: string;
}

/** Groups events by every day they occupy within the range */
export function groupEventsByDay({
  events,
  rangeStart,
  rangeEnd,
  componentName,
}: GroupEventsByDayInput): EventsByDay {
  const grouped: EventsByDay = {};

  if (events === undefined) {
    return grouped;
  }

  const start = dayjs(rangeStart).startOf('day');
  const end = dayjs(rangeEnd).startOf('day');
  const ids = new Set<string | number>();

  for (const event of events) {
    if (event.display === 'background') {
      continue;
    }

    const eventStartDay = dayjs(event.start).startOf('day');
    const eventEndDay = getEventEndDay(event);

    if (eventEndDay.isBefore(start) || eventStartDay.isAfter(end)) {
      continue;
    }

    validateEvent(event);

    if (ids.has(event.id)) {
      throw new Error(
        `[@mantine/schedule] ${componentName}: Duplicated event ids found: ${event.id}`
      );
    }

    ids.add(event.id);

    const firstDay = eventStartDay.isBefore(start) ? start : eventStartDay;
    const lastDay = eventEndDay.isAfter(end) ? end : eventEndDay;

    for (let day = firstDay; !day.isAfter(lastDay); day = day.add(1, 'day')) {
      const key = day.format('YYYY-MM-DD');
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(event);
    }
  }

  return grouped;
}
