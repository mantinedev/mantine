import dayjs from 'dayjs';
import { MonthPositionedEventData } from '../../../types';

interface AddEventToDayGroupsInput {
  positionedEvent: MonthPositionedEventData;
  eventStart: dayjs.Dayjs;
  eventEnd: dayjs.Dayjs;
  groupedByDay: { [date: string]: MonthPositionedEventData[] };
  eventsAddedToDay: Set<string>;
  weekIdx: number;
}

export function addEventToDayGroups({
  positionedEvent,
  eventStart,
  eventEnd,
  groupedByDay,
  eventsAddedToDay,
  weekIdx,
}: AddEventToDayGroupsInput): void {
  if (weekIdx === 0 || !eventsAddedToDay.has(positionedEvent.id.toString())) {
    let dayDate = eventStart;
    while (dayDate.isBefore(eventEnd) || dayDate.isSame(eventEnd, 'day')) {
      const dayDateStr = dayDate.format('YYYY-MM-DD 00:00:00');
      if (groupedByDay[dayDateStr]) {
        groupedByDay[dayDateStr].push(positionedEvent);
      }
      dayDate = dayDate.add(1, 'day');
    }
    eventsAddedToDay.add(positionedEvent.id.toString());
  }
}
