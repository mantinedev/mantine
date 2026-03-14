import dayjs from 'dayjs';
import { AnyDateValue, DayPositionedEventData, ScheduleEventData } from '../../../types';
import { getDayPosition, isAllDayEvent, isEventInTimeRange, validateEvent } from '../../../utils';
import { getDayPositionedEvents } from './get-day-positioned-events';

interface GetDayViewEventsInput {
  events: ScheduleEventData[] | undefined;
  date: AnyDateValue;
  startTime?: string;
  endTime?: string;
}

export function getDayViewEvents({ events, date, startTime, endTime }: GetDayViewEventsInput) {
  if (events === undefined) {
    return {
      allDayEvents: [],
      regularEvents: [],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    };
  }

  const ids = new Set<string | number>();
  const filteredEvents: ScheduleEventData[] = [];
  const backgroundFiltered: ScheduleEventData[] = [];
  const dayStart = dayjs(date).startOf('day');
  const dayEnd = dayjs(date).endOf('day');

  for (const event of events) {
    const eventStart = dayjs(event.start);
    const eventEnd = dayjs(event.end);
    const isOnDay = eventStart.isSame(dayStart, 'day');
    const spansIntoDay =
      !isOnDay &&
      event.display === 'background' &&
      eventStart.isBefore(dayEnd) &&
      eventEnd.isAfter(dayStart);

    if (isOnDay || spansIntoDay) {
      if (isOnDay && !isEventInTimeRange({ event, startTime, endTime })) {
        continue;
      }

      const validated = validateEvent(event);

      if (!ids.has(event.id)) {
        ids.add(event.id);
      } else {
        throw new Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${event.id}`);
      }

      if (event.display === 'background') {
        backgroundFiltered.push(validated);
      } else {
        filteredEvents.push(validated);
      }
    }
  }

  const positionedEvents = getDayPositionedEvents({
    events: filteredEvents,
    startTime,
    endTime,
    date,
  });

  const allDayEvents: DayPositionedEventData[] = [];
  const regularEvents: DayPositionedEventData[] = [];

  for (const event of positionedEvents) {
    if (event.position.allDay) {
      allDayEvents.push(event);
    } else {
      regularEvents.push(event);
    }
  }

  const backgroundTimedEvents: DayPositionedEventData[] = [];
  const backgroundAllDayEvents: DayPositionedEventData[] = [];
  for (const event of backgroundFiltered) {
    const eventStart = dayjs(event.start);
    const eventEnd = dayjs(event.end);
    const clippedStart = eventStart.isBefore(dayStart) ? dayStart : eventStart;
    const clippedEnd = eventEnd.isAfter(dayEnd) ? dayEnd : eventEnd;

    const clippedEvent = {
      ...event,
      start: clippedStart.format('YYYY-MM-DD HH:mm:ss'),
      end: clippedEnd.format('YYYY-MM-DD HH:mm:ss'),
    };

    const allDay = isAllDayEvent({ event: clippedEvent, date });

    if (allDay) {
      backgroundAllDayEvents.push({
        ...event,
        position: {
          top: 0,
          height: 100,
          allDay: true,
          width: 100,
          offset: 0,
          column: 0,
          overlaps: 1,
        },
      });
    } else {
      const { top, height } = getDayPosition({ event: clippedEvent, startTime, endTime });
      if (height <= 0) {
        continue;
      }
      backgroundTimedEvents.push({
        ...event,
        position: { top, height, allDay: false, width: 100, offset: 0, column: 0, overlaps: 1 },
      });
    }
  }

  return { allDayEvents, regularEvents, backgroundTimedEvents, backgroundAllDayEvents };
}
