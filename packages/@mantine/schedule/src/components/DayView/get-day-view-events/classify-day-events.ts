import {
  AnyDateValue,
  DayPositionedEventData,
  ScheduleEventData,
  ScheduleEventOverlapMode,
} from '../../../types';
import { getDayPosition, isAllDayEvent, isEventInTimeRange } from '../../../utils';
import { clipEventToDay } from '../../../utils/clip-event-to-day/clip-event-to-day';
import { isEventOnDay } from '../../../utils/get-event-end-day/get-event-end-day';
import { DayLayoutEventData, getDayPositionedEvents } from './get-day-positioned-events';

interface DayRangeInput {
  date: AnyDateValue;
  startTime?: string;
  endTime?: string;
}

export function isEventVisibleOnDay(
  event: ScheduleEventData,
  { date, startTime, endTime }: DayRangeInput
) {
  if (!isEventOnDay(event, date)) {
    return false;
  }

  return (
    event.display === 'background' ||
    isEventInTimeRange({ event: clipEventToDay(event, date), startTime, endTime })
  );
}

interface ClassifyDayEventsInput extends DayRangeInput {
  events: ScheduleEventData[];
  intervalMinutes?: number;
  eventOverlapMode?: ScheduleEventOverlapMode;
}

export interface ClassifiedDayEvents {
  allDayEvents: DayLayoutEventData[];
  regularEvents: DayLayoutEventData[];
  backgroundTimedEvents: DayPositionedEventData[];
  backgroundAllDayEvents: DayPositionedEventData[];
}

export function classifyDayEvents({
  events,
  date,
  startTime,
  endTime,
  intervalMinutes,
  eventOverlapMode,
}: ClassifyDayEventsInput): ClassifiedDayEvents {
  const positionedEvents = getDayPositionedEvents({
    events: events.filter((event) => event.display !== 'background'),
    startTime,
    endTime,
    intervalMinutes,
    date,
    eventOverlapMode,
  });

  const allDayEvents: DayLayoutEventData[] = [];
  const regularEvents: DayLayoutEventData[] = [];

  for (const event of positionedEvents) {
    if (event.position.allDay) {
      allDayEvents.push(event);
    } else {
      regularEvents.push(event);
    }
  }

  const backgroundTimedEvents: DayPositionedEventData[] = [];
  const backgroundAllDayEvents: DayPositionedEventData[] = [];

  for (const event of events) {
    if (event.display !== 'background') {
      continue;
    }

    const clippedEvent = clipEventToDay(event, date);

    if (isAllDayEvent({ event: clippedEvent, date })) {
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
      const { top, height } = getDayPosition({
        event: clippedEvent,
        startTime,
        endTime,
        intervalMinutes,
      });
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
