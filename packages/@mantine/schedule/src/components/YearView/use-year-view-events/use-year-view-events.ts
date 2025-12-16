import dayjs from 'dayjs';
import { useMemo } from 'react';
import { DateStringValue, ScheduleEventData } from '../../../types';
import { isMultidayEvent, validateEvent } from '../../../utils';

export type GroupedEvents = Record<DateStringValue, ScheduleEventData[]>;

function groupEventByDate(event: ScheduleEventData, groupedEvents: GroupedEvents) {
  if (isMultidayEvent(event)) {
    const startDate = dayjs(event.start).startOf('day');
    const endDate = dayjs(event.end).startOf('day');

    for (
      let date = startDate;
      date.isBefore(endDate) || date.isSame(endDate);
      date = date.add(1, 'day')
    ) {
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

interface UseYearViewEventsInput {
  date: Date | DateStringValue;
  events: ScheduleEventData[] | undefined;
}

export function filterYearViewEvents({ date, events }: UseYearViewEventsInput) {
  const groupedEvents: GroupedEvents = {};

  if (events === undefined) {
    return groupedEvents;
  }

  const ids = new Set<string | number>();

  for (const event of events) {
    if (dayjs(event.start).isSame(dayjs(date), 'year')) {
      groupEventByDate(validateEvent(event), groupedEvents);

      if (!ids.has(event.id)) {
        ids.add(event.id);
      } else {
        throw new Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${event.id}`);
      }
    }
  }

  return groupedEvents;
}

export function useYearViewEvents({ date, events }: UseYearViewEventsInput) {
  return useMemo(() => filterYearViewEvents({ date, events }), [date, events]);
}
