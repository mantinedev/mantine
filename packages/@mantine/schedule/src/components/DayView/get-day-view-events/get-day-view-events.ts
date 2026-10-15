import { AnyDateValue, ScheduleEventData, ScheduleEventOverlapMode } from '../../../types';
import { validateEvent } from '../../../utils';
import { classifyDayEvents, isEventVisibleOnDay } from './classify-day-events';

interface GetDayViewEventsInput {
  events: ScheduleEventData[] | undefined;
  date: AnyDateValue;
  startTime?: string;
  endTime?: string;
  intervalMinutes?: number;
  eventOverlapMode?: ScheduleEventOverlapMode;
}

export function getDayViewEvents({
  events,
  date,
  startTime,
  endTime,
  intervalMinutes,
  eventOverlapMode,
}: GetDayViewEventsInput) {
  if (events === undefined) {
    return {
      allDayEvents: [],
      regularEvents: [],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    };
  }

  const ids = new Set<string | number>();
  const dayEvents: ScheduleEventData[] = [];

  for (const event of events) {
    if (!isEventVisibleOnDay(event, { date, startTime, endTime })) {
      continue;
    }

    const validated = validateEvent(event);

    if (!ids.has(event.id)) {
      ids.add(event.id);
    } else {
      throw new Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${event.id}`);
    }

    dayEvents.push(validated);
  }

  return classifyDayEvents({
    events: dayEvents,
    date,
    startTime,
    endTime,
    intervalMinutes,
    eventOverlapMode,
  });
}
