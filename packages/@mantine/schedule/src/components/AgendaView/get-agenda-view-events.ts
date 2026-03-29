import dayjs from 'dayjs';
import { AnyDateValue, DateStringValue, ScheduleEventData } from '../../types';
import { isMultidayEvent, validateEvent } from '../../utils';

function getEffectiveEndDate(event: ScheduleEventData) {
  const endDate = dayjs(event.end).startOf('day');
  if (dayjs(event.end).hour() === 0 && dayjs(event.end).minute() === 0) {
    return endDate.subtract(1, 'day');
  }
  return endDate;
}

export type AgendaGroupedEvents = Record<DateStringValue, ScheduleEventData[]>;

function groupEventByDate(
  event: ScheduleEventData,
  groupedEvents: AgendaGroupedEvents,
  rangeStart: dayjs.Dayjs,
  rangeEnd: dayjs.Dayjs
) {
  if (isMultidayEvent(event)) {
    const startDate = dayjs(event.start).startOf('day');
    const endDate = getEffectiveEndDate(event);

    for (
      let date = startDate;
      date.isBefore(endDate) || date.isSame(endDate);
      date = date.add(1, 'day')
    ) {
      if (date.isBefore(rangeStart) || date.isAfter(rangeEnd)) {
        continue;
      }
      const dateKey = date.format('YYYY-MM-DD');
      if (!groupedEvents[dateKey]) {
        groupedEvents[dateKey] = [];
      }
      groupedEvents[dateKey].push(event);
    }

    return;
  }

  const eventDate = dayjs(event.start).format('YYYY-MM-DD');
  if (!groupedEvents[eventDate]) {
    groupedEvents[eventDate] = [];
  }
  groupedEvents[eventDate].push(event);
}

interface GetAgendaViewEventsInput {
  rangeStart: AnyDateValue;
  rangeEnd: AnyDateValue;
  events: ScheduleEventData[] | undefined;
}

export function getAgendaViewEvents({ rangeStart, rangeEnd, events }: GetAgendaViewEventsInput) {
  const groupedEvents: AgendaGroupedEvents = {};

  if (events === undefined) {
    return groupedEvents;
  }

  const start = dayjs(rangeStart).startOf('day');
  const end = dayjs(rangeEnd).startOf('day');
  const ids = new Set<string | number>();

  for (const event of events) {
    if (event.display === 'background') {
      continue;
    }

    const eventStart = dayjs(event.start).startOf('day');
    const eventEnd = dayjs(event.end).startOf('day');

    if (eventEnd.isBefore(start) || eventStart.isAfter(end)) {
      continue;
    }

    groupEventByDate(validateEvent(event), groupedEvents, start, end);

    if (!ids.has(event.id)) {
      ids.add(event.id);
    } else {
      throw new Error(`[@mantine/schedule] AgendaView: Duplicated event ids found: ${event.id}`);
    }
  }

  return groupedEvents;
}
